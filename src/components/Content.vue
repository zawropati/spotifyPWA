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
      myArtistsURL: "https://api.spotify.com/v1/me/top/artists?limit=50",
      newPlaylistURL: "https://api.spotify.com/v1/users/me/playlists",
      myMusic: [],
      myArtists: []
    };
  },
  mounted() {
    this.getUsersTracks();
    this.getUserArtists();
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
      });
    },
    createPlaylist() {
      var that = this;
      this.$http.post(this.myPlaylistURL, {
        headers: { Authorization: "Bearer " + this.$root.token, ContentType: "application/json" }
      }).then(function(response) {
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
