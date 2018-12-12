<template>
  <div class="myMusic"> 
    <button class="btn" @click.prevent="createPlaylist">Create</button>
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
      myArtistsURL: "https://api.spotify.com/v1/me/top/artists?limit=20",
      newPlaylistURL: "https://api.spotify.com/v1/me/playlists",
      myMusic: [],
      myArtists: [],
      topArtistsIDs: []
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
    console.log(that.topArtistsIDs.length);
      for(var i = 0; i < that.topArtistsIDs.length; i++){
        that.$http.get("https://api.spotify.com/v1/artists/" + that.topArtistsIDs[i] + "/top-tracks", {
        headers: { Authorization: "Bearer " + that.$root.token }, 
        params: {market: "DK"}
        }).then(function(response) {
        that.topSongs = response.data.items;  
        console.log(that.topSongs[0]);
      });
    }}, 1000)},
    createPlaylist() {
      var that = this;
          console.log(this.$root.token)
      that.$http.post('https://api.spotify.com/me/playlists', {
        //cant pass the token, wtf ?
        headers: { Authorization: that.$root.token },
        contentType: "application/json",
        data: JSON.stringify({name: "test", public: false}),
        json: true
      }).then(function(response) {
        debugger;
        that.myArtists = response.data.items;
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
