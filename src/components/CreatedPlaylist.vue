<template>
  <div class='playlistWrapper'>
    <div class="playlist">
      <h1>Demo playlist</h1>
      <hr>
      <h2>Users in this playlist:</h2>
      <div class='usersOfPlaylist'>
        <h3> {{ $root.userInfo.display_name }} </h3>
        <img class='avatar' :src = '$root.userInfo.images[0].url'>
      </div>
      <iframe
      class='spotifyPlugin'
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
h1{
  text-transform: uppercase;
}
h3{
  font-size: 4vw;
}
hr{
  display: block;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
.spotifyPlugin{
  padding-top: 20px;
}
.usersOfPlaylist{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.avatar{
  border-radius: 50%;
  width: 25%;
}
</style>
