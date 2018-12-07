<template>
    <button
        class="login-btn"
        @click.prevent="getSpotifyUser"
        :style="{'background-color': color}">
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
   padding: 5px 15px;
   font-size: 15px;
}
</style>
