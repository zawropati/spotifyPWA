<template>
  <button class="login-btn" @click.prevent="getSpotifyUser">
    Login
  </button>
</template>

<script>
export default {
  name: 'Login',
  props: ['color'],
  methods: {
    getSpotifyUser() {
      var local = 'http://localhost:8080/#/main//'
      var scopes = 'user-library-read user-library-modify user-top-read user-follow-modify'
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
.login-btn{
   color: white; 
   padding: 5px 15px;
   font-size: 15px;
   border: solid 3px #ffffff;
   border-radius: 1.875rem;
   height: 3.75rem;
   padding: 0 3.4375rem;
   font-size: 0.875rem;
   background-color: transparent;
   font-weight: 500;
   text-transform: uppercase;
   letter-spacing: 0.0625rem;
   cursor: pointer;
}
</style>
