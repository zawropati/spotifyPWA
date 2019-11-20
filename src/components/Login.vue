<template>
  <button class="loginButton" @click.prevent="getSpotifyUser">
    Log in with Spotify
  </button>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    getSpotifyUser() {
      var local = 'http://localhost:8080/#/main/'
      // change for http://localhost:8080/#/main/' for local
      var scopes = ['playlist-modify-private','user-read-private','user-library-read','user-library-modify','user-top-read','user-follow-modify','playlist-modify-public','playlist-modify-private']
      window.location.href = 'https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' + "1532ae78c09f4ff58bbbd624f7a47f3b" +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(local);
      console.log(local);
    }
  }
}
</script>

<style scoped>
</style>
