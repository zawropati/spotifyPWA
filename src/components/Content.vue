<template>
  <div class="myMusic">
    <button class="btn" v-if='$root.playlistId != "" ' v-on:click="createPlaylist">Create</button>
    {{ $root.db }}
    <iframe
      :src="frameSrc"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <h2>Here we will have songs</h2>
    <div class="myTracks" v-for="artist in myArtists">Genres:
      <span class="myArtists" v-for="genre in artist.genres">{{ genre + ' '}}</span>
      <br>
      Name: {{artist.name}}
      <br>
      ID: {{artist.id}}
    </div>
    <!--<div class="myTracks" v-for="track in myMusic">
      <span class="myArtists" v-for="artist in track.artists">{{artist.name}}</span>
      {{ track.name }}
      <img :src='track.album.images[2].url'>
    </div>-->
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
      frameSrc: null,
      finalarray: [],
    };
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
          alert("Playlist created!");
          that.updateFrame()
        });
    },
    updateFrame() {
      this.frameSrc =
        "https://open.spotify.com/embed/user/1175743727/playlist/" +
        this.createdPlaylist.id;
        this.$router.push('/playlist');
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
</style>
