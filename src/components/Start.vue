<template>
  <div class='startcontainer'>
    <div @close="showModal = false">
      <transition name="modal">
        <div class="modal-mask" v-if="showModal">
          <div class="modal-wrapper">
            <div class="box col-sm-3 modal-container">
              <h3>Save as Web App</h3>
              <!-- <h4>Progressive Web App offers a website’s lightweight version while looking like any traditional native app</h4> -->
              <div class='modalmiddle'>
                <p class='modalparagraph'>
                  <ol class='homescreenSteps'>
                    <li>Tap the Share button in Safari or tap the Chrome 3 dots menu</li>
                    <li>Click on Add To Homescreen</li>
                    <li>Tap Add to complete the process</li>
                    <li>Now launch the PWA from your Home screen by tapping its icon</li>
                      <router-link class="learn-more" to="/webapp">Learn More</router-link>
                  </ol>
                </p>
                <div><img class='mobileimg' src='../imgs/asset7.png'></div>
              </div>
              <!-- <span class='buttonwrapper'><button class='yesbutton'>Save Now</button></span> -->
              <a class='cancelbutton' @click.prevent="showModal = false">Cancel</a>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <h1>
      Enjoy music with your friends
    </h1>
    <h2>
      Having troubles figuring out what to play at your get-together? <br/> <br/> Create a playlist now with other Spotify users based on your mutual taste in music.
    </h2>
    <Login v-if="!$root.token"/>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Content from '@/components/Content'

export default {
  name: 'Start',
  components:{
    Login,
    Content
  },
  data(){
    return{
			showModal: false
    }
  },
  created () {
    setTimeout(() => {this.showModal = true}, 3000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.startcontainer{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}
h1{
  font-size: 2.5rem;
  line-height: 1;
  margin-top: 15px;
  margin-bottom: 25px;
  padding-top: 30px;
}
h2{
  font-family: CircularBook;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.55;
  margin-top: 0;
  margin-bottom: 60px;
  padding-left: 50px;
  padding-right: 50px;
}
h3{
  color: #4DC3CA;
  font-size: 8vw;
  text-align: left;
  margin: 0;
}
h4{
  font-size: 4vw;
  color: white;
  text-align: left;
  margin: 0;
  margin-top: 10px;
}
.modalparagraph{
  text-align: left;
  color: white;
  font-size: 3.5vw;
  margin-top: 0;
}
.modal-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 40px;
  height: 70vh;
  background-image: url('../imgs/modalbg.png');
  background-position: center;
  background-size: cover;
}
.modalmiddle{
  display: flex;
  flex-direction: row;
}
.close-modal{
  position: absolute;
  right: 0;
  top: 0;
}
.yesbutton{
  color: white;
  padding: 5px 15px;
  font-size: 1.2em;
  border-radius: 1.875em;
  height: 2.5em;
  background-color: #E02F93;
  cursor: pointer;
  width: 10em;
  border: none;
}
.buttonwrapper{
  padding-top: 20px;
}
.cancelbutton{
  padding-top: 20px;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  font-weight: bold;
  font-family: CircularBook;
}
.learn-more{
  color: white;
  line-height: 4em;
}
.homescreenSteps{
  padding-top: 10px;
  padding-left: 10px;
  font-family: CircularBook;
  line-height: 1.2em;
  font-size: 1.1em;
}
li{
  margin-bottom: 0.5em;
}
.homescreenSteps > li:before{
  font-weight: bold;
}
.mobileimg{
  width: 110%;
  margin-top: 60px;
  margin-left: 10px;
}
.loginButton{
  font-family: CircularBlack;
}
Login{
  padding-top: 60px;
}
@media only screen  and (min-width : 700px) {
.homescreenSteps{
  padding-top: 10px;
  padding-left: 10px;
  font-family: CircularBook;
  line-height: 1.2em;
  font-size: 20px;
}
.modal-container{
    margin-left: 30%;
    margin-right: 30%;
    height: 60vh;
}
.mobileimg{
  margin-top: 100px;
}
h3{
  font-size: 3vw;
}
h4{
  font-size:  2.5vw;
}
ol{
  font-size: 2vw;
}
.modal-container{
  padding: 7vw;
}
}
</style>
