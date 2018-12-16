<template>
    <div class="myPic">
        {{ $root.userInfo.display_name }}
    </div>
</template>

<script>
export default {
  name: 'User',
    data() {
    return {
      myInfo: {},
    }
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
.myPic{
    position: absolute;
    z-index: 10;
    color: white;
    font-size: 25px;
}
</style>
