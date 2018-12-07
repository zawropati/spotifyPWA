<template>
    <div class="songs">
        <h2>Here we will have songs</h2>
        {{ myArtists }}
    </div>
</template>

<script>
export default {
  name: 'Main',
    data() {
  return {
        myMusic: 'https://api.spotify.com/v1/me/top/',
        myArtists: []
    }
  },
  mounted(){
      this.getUserArtists();
  },
  methods: {
    getUserArtists() {
      var that = this
       this.$http.get(this.myMusic + "artists").then(function(response) {
        that.myArtists = response.data;
      }) 
    },
  }
  //on click redirect to external page
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-btn{
   padding: 5px 15px;
   font-size: 15px;
}
</style>
