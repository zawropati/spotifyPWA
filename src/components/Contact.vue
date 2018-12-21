<template>
      <div class="menu-option">
        <h1>
            Contact Us
        </h1>  
        <h2>
            Send us an email.
             <br><br>
            office@spotify.com
          <br> 
            Come visit us.<br>
            Spotify AB <br>
            Regeringsgatan 19 <br>
            SE-111 53 Stockholm <br>
            Sweden  
        </h2>
           <div class='backContainer' @click.prevent="goBack"> 
             <img class='backArrow' src="./../imgs/arrow.png"><a id="back"> Go back</a>
           </div>
      </div>
</template>

<script>
export default {
  name: 'Contact',
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
.backContainer{
  display: flex;
  align-items: center;
  padding-top: 30px;
}
.backArrow{
  cursor: pointer;
}
#back{
  cursor: pointer;
  padding-left: 20px;
}
</style>
