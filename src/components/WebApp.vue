<template>
      <div class="menu-option">
        <h1>
            What are Web Apps you ask?        
        </h1>  
        <h2>
          Progressive Web Apps offer a website’s 
          lightweight version, while still looking like any 
          traditional native app. <br><br>
          Here's a small list of what they can do for you:
          <br>
          <ul>
              <li>Zero install</li> 
              <li>Quick and easy updates</li>
              <li>Can reach anyone anywhere</li> 
              <li>Always up-to-date</li>
          </ul>   
        </h2>
           <div @click.prevent="goBack"> 
             <img src="./../imgs/arrow.png"><a id="back"> Go back</a>
           </div>
      </div>
</template>

<script>
export default {
  name: 'WebApp',
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
#back{
    margin-bottom: 10px;
}
</style>
