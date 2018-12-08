<template>
    <button
        class="login-btn"
        @click.prevent="getSpotifyUser"
    >
        Login
    </button>
</template>

<script>
export default {
  name: 'Login',
  //on click redirect to external page
  props: ['color'],
  
  methods: {
    getSpotifyUser() {
      var local = 'http://localhost:8080/#/main//'
      window.location.href = 'https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' + "1532ae78c09f4ff58bbbd624f7a47f3b" +
      '&redirect_uri=' + encodeURIComponent(local);          
      console.log(local);
    }

    /*getSpotifyUser() {  
    function login(callback) {
        var CLIENT_ID = '1532ae78c09f4ff58bbbd624f7a47f3b';
        var REDIRECT_URI = 'http://localhost:8080/#/main//';
        function getLoginURL(scopes) {
            return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
              '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
              '&scope=' + encodeURIComponent(scopes.join(' ')) +
              '&response_type=token';
        }
        window.addEventListener("message", function(event) {
            var hash = JSON.parse(event.data);
            if (hash.type == 'access_token') {
                callback(hash.access_token);
            }
        }, false);
        
        //var w = window.open(url,'Spotify','menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
    }

    /*getUserData() {
      axios({
          method: 'get',
          url: 'https://api.spotify.com/v1/me',
          headers: {
            'Authorization': 'Bearer ' + this.accessToken
          }
      }).then(function(response) {
          console.log(response);
      })
  }
  }*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
