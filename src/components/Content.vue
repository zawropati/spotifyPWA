<template>
  <div class="myMusic">
    <h2>Here we will have songs</h2>
    <div class="myTracks" v-for="track in myMusic">
      <span class="myArtists" v-for="artist in track.artists">{{artist.name}}</span>
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
      myMusicURL: "https://api.spotify.com/v1/me/top/tracks?limit=50",
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

<style scoped>
.myTracks {
  border: red solid 1px;
}
.myMusic{
  padding-top: 10vh;
}
</style>
