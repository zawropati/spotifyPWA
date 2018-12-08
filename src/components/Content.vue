<template>
    <div class="songs">
        <h2>Here we will have songs</h2>
        <div class="col">
        {{ myArtists.items[1].track.name }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'Content',
    data() {
  return {
        myMusic: 'https://api.spotify.com/v1/me/tracks',
        myArtists: []
    }
  },
  mounted(){
      this.getUserArtists();
  },
  methods: {
    getUserArtists() {
      console.log(this.$root.token)
      var that = this
       this.$http.get(this.myMusic, {headers:{'Authorization': 'Bearer ' + this.$root.token}}).then(function(response) {
        that.myArtists = response.data;
      },
      ) 
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
