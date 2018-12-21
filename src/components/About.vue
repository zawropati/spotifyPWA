<template>
      <div class="menu-option">
        <h1>
          Your wish is our command.
        </h1>  
        <h2>
          You asked for it, so here it is. We have created a tool for you to be able to generate an algorithm curated playlists with other people. 
          <br><br>
          The created playlist will have songs picked based on your mutual taste in music.
        </h2>
           <div @click.prevent="goBack"> 
             <img src="./../imgs/arrow.png"><a id="back"> Go back</a>
           </div>
      </div>
</template>

<script>
export default {
  name: 'About',
  methods:{
      goBack(){
          this.$router.go(-1)
  }
  }
}
</script>

<style scoped>
h1{
  font-size: 2.5rem;
  line-height: 1;
    padding-right: 2em;
    margin-bottom: 1em;
}
h2{
  font-family: CircularBook;
  font-weight: normal;
  font-size: 16pt;
  line-height: 1.55;
    padding-right: 6em;
}
.menu-option{
        background-color: #212055;
        width: 100vw;
        height: 100vh;
        text-align: left;
        padding: 8em 3em;
}
.loginButton{
  color: #1F1A4E;
  background-color: white;
  text-transform: uppercase;
}
</style>
