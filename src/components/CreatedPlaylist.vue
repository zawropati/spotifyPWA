<template>
  <div class='playlistWrapper'>
      <div class="playlist">
          <h1>Demo playlist</h1>
          <h2>Users in this playlist:</h2>
          {{ $root.userInfo.display_name }}
          <img :src = '$root.userInfo.images[0].url'>
      </div>
      <iframe
        v-if="$route.query.id"
        :src="`https://open.spotify.com/embed/user/1175743727/playlist/${ $route.query.id }`"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      >
      </iframe>
  </div>
</template>

<script>
export default {
  name: 'CreatedPlaylist',
    data() {
    return {
      myInfo: {},
    }
  },
  created () {
  },
  mounted(){
    this.getUserInfo();
  },
  methods:{
    getUserInfo(){
      var that = this;
      this.$http.get('https://api.spotify.com/v1/me', {
        headers: { Authorization: "Bearer " + this.$root.token }
      }).then(function(response) {
        that.myInfo = response.data.items;
      });
    }
  }
}
</script>
<style>
.playlist{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  padding-top: 120px;
}
.myPic{
    position: absolute;
    z-index: 10;
    color: white;
    font-size: 25px;
}
/* .modal-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  height: 70vh;
  background-color: #76C5CA;
}
.close-modal{
  margin-right: -30px;
  margin-top: -30px;
}
.createPlaylistButton{
  color: #1F1A4E;
  padding: 5px 15px;
  font-size: 1.2em;
  border-radius: 1.875em;
  height: 2.5em;
  background-color: #FFFFFF;
  cursor: pointer;
  width: 10em;
  border: none;
}
.buttonwrapper{
  padding-top: 20px;
  text-align: center;
}
.cancelbutton{
  padding-top: 10px;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  text-align: center;
} */
h1{
  text-transform: uppercase;

}
h3{
  color: #1F1A4E;
  font-size: 2em;
  text-align: left;
  margin: 0;
}
h4{
  font-size: 1.5em;
  color: white;
  text-align: left;
  margin: 0;
  margin-bottom: 25px;
}
.key{
  text-align: center;
}
</style>
