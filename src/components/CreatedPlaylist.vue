<template>
  <div class='playlistWrapper'>
    <div class="playlist">
      <h1>Demo playlist</h1>
      <hr>
      <h2>Users in this playlist:</h2>
      <div class='usersOfPlaylist'>
        <div class='oneUser'>
          <img class='avatar' :src = '$root.userInfo.images[0].url'>
          <h3> {{ $root.userInfo.display_name }} </h3>
        </div>
        <div class='oneUser'>
          <img class='avatar' :src = 'otherUserInfo.images[0].url'>
          <h3> {{ otherUserInfo.display_name }} </h3>
        </div>
      </div>
      <button v-if="$route.query.id" class="openButton">
        <a class="inside-button" target="_blank" :href="`https://open.spotify.com/user/1175743727/playlist/${ $route.query.id }`"> 
        Play on Spotify
        </a>
      </button>
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
      otherUserInfo: {}
    }
  },
  created () {
  },
  mounted(){
    this.getMyInfo();
    this.getOtherUser();
  },
  methods:{
    getMyInfo(){
      var that = this;
      this.$http.get('https://api.spotify.com/v1/me', {
        headers: { Authorization: "Bearer " + this.$root.token }
      }).then(function(response) {
        that.myInfo = response.data.items;
      });
    },
    getOtherUser(){
       var user = Object.keys(this.$root.db)[1]
       console.log(user)
       var that = this;
      this.$http.get('https://api.spotify.com/v1/users/' + user, {
        headers: { Authorization: "Bearer " + this.$root.token }
      }).then(function(response) {
        that.otherUserInfo = response.data;
        console.log(that.otherUserInfo)
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
  padding-left: 50px;
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
  flex-direction: column;
  justify-content: space-around;
}
.oneUser{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 15px;
}
.avatar{
  border-radius: 50%;
  width: 15%;
  margin-left: 50px;
}
.inside-button{
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
}
.openButton{
  background: #1F1A4E;
  box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.5);
  padding: 5px 15px;
  font-size: 15px;
  border-radius: 1.875rem;
  height: 3.75rem;
  padding: 0 3.4375rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  cursor: pointer;
  border: none;
}
</style>
