<template>
  <div class="myMusic"> 
    <button class="btn" v-on:click="createPlaylist(); addtracks();">Create</button>
    <h2>Here we will have songs</h2>
    <div class="myTracks" v-for="artist in myArtists">
      Genres: <span class="myArtists" v-for="genre in artist.genres">{{ genre + ' '}}</span>      
        <br> Name:  {{artist.name}}
        <br> ID: {{artist.id}}
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
      myArtistsURL: "https://api.spotify.com/v1/me/top/artists?limit=1",
      newPlaylistURL: "https://api.spotify.com/v1/me/playlists",
      myMusic: [],
      myArtists: [],
      topArtistsIDs: [],
      songsArray: [],
      songsArray2: [],
      uriArray: [],
      playlistTopSongs: []
      }
  },
  mounted() {
    this.getUsersTracks();
    this.getUserArtists();
    this.getArtistsTopSongs();
  },
  methods: {
    getUsersTracks() {
      var that = this;
      this.$http.get(this.myMusicURL, {
        headers: { Authorization: "Bearer " + this.$root.token }
      }).then(function(response) {
        that.myMusic = response.data.items;
      });
    },
    getUserArtists() {
      var that = this;
      this.$http.get(this.myArtistsURL, {
        headers: { Authorization: "Bearer " + this.$root.token } 
      }).then(function(response) {
        that.myArtists = response.data.items;
            that.myArtists.forEach(function(artist) {
               that.topArtistsIDs.push(artist.id)
         });
         //console.log(that.topArtistsIDs);   
      });
    },
    getArtistsTopSongs(){
      var that = this;
      setTimeout(function(){
      //console.log(that.topArtistsIDs.length);
      for(var i = 0; i < that.topArtistsIDs.length; i++){
        that.$http.get("https://api.spotify.com/v1/artists/" + that.topArtistsIDs[i] + "/top-tracks", {
        headers: { Authorization: "Bearer " + that.$root.token }, 
        params: {market: "DK"}
        }).then(function(response) {
        that.topSongs = response.data; 
             that.topSongs.tracks.forEach(function(songs){
               that.songsArray.push(songs)
               //songs.append(this.songsArray2)
            })
        //for(var a = 0; a < that.topSongs.length; a++){
        //console.log(that.topSongs.tracks[a].uri);}
      });
    }                     //  console.log(that.songsArray)
 //console.log(topSongs)
     //that.topSongs.tracks.forEach(function(songs){
       ///        that.songsArray.push(songs)
          //  })
            //      console.log(that.songsArray)

    }, 1000)},
    createPlaylist() {
      var that = this;             
      that.$http.post('https://api.spotify.com/v1/me/playlists', {name: "Patka",
        public: false},{
        //cant pass the token, wtf ?
        headers: { Authorization: "Bearer " + that.$root.token, "Content-Type": 'application/json'},
      }).then(function(response) {
        that.createdPlaylist = response.data;
        console.log(that.createdPlaylist.id)
      });
    },
    addtracks(){
      var that = this;
      //console.log(that.songsArray)
          that.songsArray.forEach(function(topsong){
                that.uriArray.push(topsong.uri)
    })
    playlistTopSongs = [];
    var playlistTopSongs = that.uriArray;

    console.log(playlistTopSongs);
      that.$http.post('https://api.spotify.com/v1/playlists/' + that.createdPlaylist.id  + '/tracks', {uris: playlistTopSongs},{
        headers: { Authorization: "Bearer " + that.$root.token, "Content-Type": 'application/json'},
      }).then(function(response) {
        that.pushedTracks = response.data;
        //console.log(that.createdPlaylist.id)
      });
    }
  }
};
</script>

<style scoped>
.myTracksś{
  color:white;
}
.myTracks {
  border: white solid 1px;
}
.myMusic{
  padding-top: 15vh;
}
</style>
