<template>
<div>
    <div class="hideMe" id="loader-box">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.90 90.90"><defs></defs><title>finaltogetheranimation</title><g id="get"><path class="cls-1" d="M25.12,63.6a2.4,2.4,0,0,0,2.49,2c1.81,0,2.83-.91,2.83-3v-.78a3.4,3.4,0,0,1-3,1.36,4.92,4.92,0,0,1-4.95-5.16,5,5,0,0,1,4.95-5.18,3.22,3.22,0,0,1,3,1.44V53.08h2.76v9.48c0,2.92-1.57,5.57-5.57,5.57-2.91,0-4.86-1.81-5.16-3.84Zm5.36-5.53a2.53,2.53,0,1,0-5.05,0,2.53,2.53,0,1,0,5.05,0Z" transform="translate(-3.7 -14.26)"/><path class="cls-1" d="M45,60.66A4.79,4.79,0,0,1,40.15,64a5.64,5.64,0,0,1-.26-11.27c3.28,0,5.25,2.09,5.25,5.5,0,.41,0,.85,0,.89H37.5a2.58,2.58,0,0,0,2.67,2.42A2.34,2.34,0,0,0,42.59,60Zm-2.68-3.48a2.13,2.13,0,0,0-2.37-2.09,2.3,2.3,0,0,0-2.38,2.09Z" transform="translate(-3.7 -14.26)"/><path class="cls-1" d="M50.24,53.08h2.13v2.55H50.24v4.45c0,.93.43,1.23,1.25,1.23a3.7,3.7,0,0,0,.88-.09V63.6a4.19,4.19,0,0,1-1.62.26,3.07,3.07,0,0,1-3.36-3.29V55.63H45.46V53.08H46a1.52,1.52,0,0,0,1.64-1.68V49.91h2.6Z" transform="translate(-3.7 -14.26)"/></g><g id="other"><path class="cls-1" d="M7.72,53.32H10v1.84H7.72v5.39c0,1,.39,1.43,1.45,1.43a3.58,3.58,0,0,0,.79-.09v1.73a4.62,4.62,0,0,1-1.38.19,2.69,2.69,0,0,1-2.89-3v-5.7h-2V53.32h.56a1.45,1.45,0,0,0,1.6-1.6V50H7.72Z" transform="translate(-3.7 -14.26)"/><path class="cls-1" d="M21.6,58.5A5.31,5.31,0,1,1,11,58.5,5.23,5.23,0,0,1,16.29,53,5.23,5.23,0,0,1,21.6,58.5Zm-2.07,0c0-2.39-1.51-3.69-3.24-3.69s-3.24,1.3-3.24,3.69,1.51,3.72,3.24,3.72S19.53,60.92,19.53,58.5Z" transform="translate(-3.7 -14.26)"/><path class="cls-1" d="M56.26,63.71h-2V48.07h2v6.46A3.68,3.68,0,0,1,59.41,53c2.49,0,3.72,1.79,3.72,4.1v6.59h-2V57.47c0-1.45-.61-2.62-2.42-2.62-1.56,0-2.38,1.21-2.42,2.75Z" transform="translate(-3.7 -14.26)"/><path class="cls-1" d="M74.7,60.75A4.7,4.7,0,0,1,70,64a5.18,5.18,0,0,1-5.23-5.55,5.18,5.18,0,0,1,5-5.48c3.19,0,5,2.2,5,5.44a4.64,4.64,0,0,1,0,.65H66.91A3.08,3.08,0,0,0,70,62.24,2.83,2.83,0,0,0,73,60.14Zm-2-3.31a2.61,2.61,0,0,0-2.85-2.65A2.8,2.8,0,0,0,67,57.44Z" transform="translate(-3.7 -14.26)"/><path class="cls-1" d="M82.41,55.37a6.88,6.88,0,0,0-.89-.06c-1.7,0-2.85.9-2.85,3.19v5.21h-2V53.32h2v1.81a3.26,3.26,0,0,1,3.11-2,4.16,4.16,0,0,1,.67.06Z" transform="translate(-3.7 -14.26)"/></g><g id="icon"><path class="cls-1" d="M37.56,14.26A15.15,15.15,0,1,0,52.71,29.4,15.15,15.15,0,0,0,37.56,14.26ZM44.51,36.1a1,1,0,0,1-1.3.32c-3.56-2.18-8-2.67-13.31-1.46a1,1,0,0,1-1.13-.71.94.94,0,0,1,.71-1.13c5.77-1.32,10.72-.76,14.71,1.68A1,1,0,0,1,44.51,36.1ZM46.36,32a1.18,1.18,0,0,1-1.62.39,19.91,19.91,0,0,0-15.1-1.77A1.18,1.18,0,1,1,29,28.34a22.09,22.09,0,0,1,17,2A1.19,1.19,0,0,1,46.36,32Zm.16-4.3c-4.88-2.9-12.94-3.16-17.6-1.75a1.42,1.42,0,0,1-.82-2.71c5.35-1.62,14.25-1.31,19.87,2a1.41,1.41,0,0,1-1.45,2.43Z" transform="translate(-3.7 -14.26)"/></g></svg>
    </div>
  <div class='playlistWrapper'>
    <div class="playlist">
      <h1>Demo playlist</h1>
      <h4> {{ formatAMPM() }} </h4>
      <hr>
      <h2>Users in this playlist:</h2>
      <div class='usersOfPlaylist'>
        <div class='oneUser'>
          <img v-if="$root.userInfo.images.length != 0 " class='avatar' :src = '$root.userInfo.images[0].url'>
          <h3> {{ $root.userInfo.display_name }} </h3>
        </div>
        <div class='oneUser'>
          <img v-if="otherUserInfo.images.length != 0 " class='avatar' :src = 'otherUserInfo.images[0].url'>
          <h3> {{ otherUserInfo.display_name }} </h3>
        </div> 
      </div>
      <button v-if="$route.query.id" class="openButton">
        <a class="inside-button" target="_blank" :href="`https://open.spotify.com/user/1175743727/playlist/${ $route.query.id }`"> 
        Open in Spotify
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
</div> 
</template>

<script>
export default {
  name: 'CreatedPlaylist',
    data() {
    return {
      myInfo: {},
      otherUserInfo: {},
      user: null
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
       var users = Object.keys(this.$root.db)
       var myId = this.$root.userInfo.id
       //console.log(users)
      for (var i = 0; i < users.length; i++) {
       if(users[i] != myId){
       var that = this;
      this.$http.get('https://api.spotify.com/v1/users/' + users[i], {
        headers: { Authorization: "Bearer " + this.$root.token }
      }).then(function(response) {
        that.otherUserInfo = response.data;
        //console.log(that.otherUserInfo)
      });
    }}},
    formatAMPM() {
      var d = new Date(),
      minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
      hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
      months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
      return hours+':'+minutes+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear();
    }
  }
}
</script>
<style scoped>
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
  margin-bottom: 10px;
}
h2{
  font-family: CircularBook;
  font-weight: normal;
  font-size: 4.5vw;
}
h3{
  font-size: 4vw;
  padding-left: 20px;
}
h4{
  font-family: CircularBook;
  font-weight: normal;
  font-size: 3vw;
  margin: 0;
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
  padding-top: 30px;
  width: 100vw;
}
.usersOfPlaylist{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 20px;
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
    color: white;
    text-decoration: none;
}
.openButton{
  background-image: linear-gradient(to bottom, #3569b2, #305399, #2a3e80, #232a68, #1b1650);
  box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.5);
  padding: 5px 15px;
  font-size: 15px;
  border-radius: 1.875rem;
  height: 2.75rem;
  padding: 0 2.4375rem;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.0625rem;
  cursor: pointer;
  border: none;
}
@media only screen  and (min-width : 700px) {
  h1{
    font-size: 2.5rem;
  }
  h4{
    font-size: 1.5vw;
  }
  h2{
    font-size: 2vw;
  }
  h3{
    font-size: 1.5vw;
  }
  .avatar{
    margin-left:0;
  }
  .oneUser{
    justify-content: center;
}
.openButton{
    height: 3.75rem;
    padding: 0px 3.4375rem;
}
.spotifyPlugin{
  width: 40vw;
}
}
</style>
