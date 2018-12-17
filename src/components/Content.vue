<template>
  <div class="myMusic">
    <button class="btn" @click.prevent="showModal = true" >Create</button>
    <!-- {{ $root.db }} -->
    <div @close="showModal = false">
        <transition name="modal">
          <div class="modal-mask"  v-if="showModal">
            <div class="modal-wrapper">
              <div class="box col-sm-3 modal-container">
                <a class="close-modal" id="show-modal" @click.prevent="showModal = false"><i class="close-icon fa fa-times "></i></a>
                <h3 class="subtitle">Share this key</h3>
                <ol>
                  <li>Copy the key and share it with your friends</li>
                  <li>Wait for them to accept</li>
                  <li>Come back to this app and see your Playlist</li>
                </ol>
                <h3 class='key'>demo</h3>
                <span class='buttonwrapper'><button class='createPlaylistButton' v-if='$root.playlistId != "" ' v-on:click="createPlaylist">Create Playlist</button></span>
                <a class='cancelbutton' @click.prevent="showModal = false">Cancel</a>
              </div>
            </div>
          </div>
        </transition>
      </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      myMusicURL: "https://api.spotify.com/v1/me/top/tracks?limit=50",
      myArtistsURL: "https://api.spotify.com/v1/me/top/artists?limit=10",
      myInfoURL: "https://api.spotify.com/v1/me",
      newPlaylistURL: "https://api.spotify.com/v1/me/playlists",
      myMusic: [],
      myArtists: [],
      topArtistsIDs: [],
      songsArray: [],
      songsArray2: [],
      uriArray: [],
      playlistTopSongs: [],
      finalarray: [],
      showModal: false,
    }
  },
  mounted() {
    this.getUserInfo();
    // this.getUsersTracks();
    this.getUserArtists();
    // this.getArtistsTopSongs();
    this.$root.$on('db-updated', this.compare);
  },
  methods: {
    getUsersTracks() {
      var that = this;
      this.$http
        .get(this.myMusicURL, {
          headers: { Authorization: "Bearer " + this.$root.token }
        })
        .then(function(response) {
          that.myMusic = response.data.items;
        });
    },
    getUserInfo() {
      var that = this;
      this.$http
        .get(this.myInfoURL, {
          headers: { Authorization: "Bearer " + this.$root.token }
        })
        .then(function(response) {
          this.$root.userInfo = response.data
        });
    },
    getUserArtists() {
      var that = this;
      this.$http
        .get(this.myArtistsURL, {
          headers: { Authorization: "Bearer " + this.$root.token }
        })
        .then(function(response) {
          that.myArtists = response.data.items;
          that.myArtists.forEach(function(artist) {
            that.topArtistsIDs.push(artist.id);
          });
          this.$root.setArtists(that.topArtistsIDs);
        });
    },
    compare(){
      const finalarray =[];
      const ids = Object.keys(this.$root.db)
      let arr1 = this.$root.db[ids[0]]
      let arr2 = this.$root.db[ids[1]]
      arr1.forEach((e1)=>arr2.forEach((e2)=>
        {if(e1===e2){
          finalarray.push(e1)
        }}
      ));
      console.log(finalarray);
      // return finalarray;
      this.getArtistsTopSongs(finalarray)
    },
    getArtistsTopSongs(artists) {
      var that = this;
      //console.log(that.topArtistsIDs.length);
      for (var i = 0; i < artists.length; i++) {
        that.$http
          .get(
            "https://api.spotify.com/v1/artists/" +
              artists[i] +
              "/top-tracks",
            {
              headers: { Authorization: "Bearer " + that.$root.token },
              params: { market: "DK" }
            }
          )
          .then(function(response) {
            // that.topSongs = response.data;
            response.data.tracks.forEach(function(songs) {
              that.songsArray.push(songs);
              console.log({songs:songs})
            });
          });
      }
    },
    createPlaylist() {
      var that = this;
      that.$http
        .post(
          "https://api.spotify.com/v1/me/playlists",
          { name: "NotPatka", public: false },
          {
            //cant pass the token, wtf ?
            headers: {
              Authorization: "Bearer " + that.$root.token,
              "Content-Type": "application/json"
            }
          }
        )
        .then(function(response) {
          that.createdPlaylist = response.data;
          console.log(that.createdPlaylist.id)
          that.addtracks()
        });
    },
    addtracks() {
      var that = this;
      //console.log(that.songsArray)
      that.uriArray = [];
      that.songsArray.forEach(function(topsong) {
        that.uriArray.push(topsong.uri);
      });
      var playlistTopSongs = that.uriArray;
      //console.log(playlistTopSongs);
      that.$http
        .post(
          "https://api.spotify.com/v1/playlists/" +
            that.createdPlaylist.id +
            "/tracks",
          { uris: playlistTopSongs },
          {
            headers: {
              Authorization: "Bearer " + that.$root.token,
              "Content-Type": "application/json"
            }
          }
        )
        .then(function(response) {
          that.pushedTracks = response.data;
          alert("Playlist created!" + that.createdPlaylist.id);
          that.$router.push({ path: '/playlist', query: { id: that.createdPlaylist.id } });
        });
    },
  }
};
</script>

<style scoped>
.myTracksś {
  color: white;
}
.myTracks {
  border: white solid 1px;
}
.myMusic {
  padding-top: 15vh;
}
.modal-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  height: 70vh;
  background-color: #76C5CA;
}
.close-modal{
  margin-right: -30px;
  margin-top: -30px;
}
.createPlaylistButton{
  color: #1F1A4E;
  padding: 5px 15px;
  font-size: 1.2em;
  border-radius: 1.875em;
  height: 2.5em;
  background-color: #FFFFFF;
  cursor: pointer;
  width: 10em;
  border: none;
}
.buttonwrapper{
  padding-top: 20px;
  text-align: center;
}
.cancelbutton{
  padding-top: 10px;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  text-align: center;
}
h1{
  text-transform: uppercase;

}
h3{
  color: #1F1A4E;
  font-size: 2em;
  text-align: left;
  margin: 0;
}
h4{
  font-size: 1.5em;
  color: white;
  text-align: left;
  margin: 0;
  margin-bottom: 25px;
}
.key{
  text-align: center;
}
.modal-fade-enter-active {
  transition: all .3s ease;
}
.modal-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.modal-fade-enter, .modal-fade-leave-to
/* .modal-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
