<template>
    <button class="login-btn" @click.prevent="getSpotifyUser">Login</button>
</template>

<script>
export default {
  name: 'Login',
  //on click redirect to external page
  
  methods: {
    getSpotifyUser() {
      var local = 'http://localhost:8080/#/main/'
      window.location.href = 'https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' + "1532ae78c09f4ff58bbbd624f7a47f3b" +
      '&redirect_uri=' + encodeURIComponent(local);          
      console.log(local);
    },
    /* getUserData() {
      axios({
          method: 'get',
          url: 'https://api.spotify.com/v1/me',
          headers: {
            'Authorization': 'Bearer ' + this.accessToken
          }
      }).then(function(response) {
          console.log(response);
      })
  }*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-btn{
   padding: 5px 15px;
   font-size: 15px;
}
</style>
