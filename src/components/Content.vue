<template>
  <div class="songs">
    <h2>Here we will have songs</h2>
    <div class="track" v-for="track in myMusic">
      <span class="artist" v-for="artist in track.artists">{{artist.name}}</span>
      {{ track.name }}
      <img :src='track.album.images[2].url'>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      myMusicURL: "https://api.spotify.com/v1/me/top/tracks",
      myMusic: []
    };
  },
  mounted() {
    this.getUserArtists();
  },
  methods: {
    getUserArtists() {
      var that = this;
      this.$http.get(this.myMusicURL, {
        headers: { Authorization: "Bearer " + this.$root.token }
      }).then(function(response) {
        that.myMusic = response.data.items;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-btn {
  padding: 5px 15px;
  font-size: 15px;
}
.track {
  border: red solid 1px;
}
</style>
