<template>
  <div class='startcontainer'>
    <a class="open-modal" id="show-modal" @click="showModal = true">Open modal</a>
    <div v-if="showModal" @close="showModal = false">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="box col-sm-3 modal-container">
              <a class="close-modal" id="show-modal" @click.prevent="showModal = false"><i class="close-icon fa fa-times "></i></a>
              <h3 class="subtitle">Save as WebApp</h3>
              <h4 class="subtitle">Download as a WebApp now</h4>
              <div class='modalmiddle'>
                <p class='modalparagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <img class='mobile' src='../imgs/mobilephone.png'>
              </div>
              <span class='buttonwrapper'><button class='yesbutton'>Save Now</button></span>
              <a class='cancelbutton'>Cancel</a>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <h1>
      Enjoy music with your friends
    </h1>
    <h2>
      Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.Or not.
    </h2>
    <Login color='orange' v-if="!$root.token"/>
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
  methods:{
    showLateModal(){
        setTimeout(this.showModal = true, 5000)
    }
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
  font-size: 3rem;
  line-height: 1;
  margin-top: 15px;
  margin-bottom: 25px;
}
h2{
  font-size: 0.75rem;
  line-height: 1.55;
  margin-top: 0;
  margin-bottom: 12px;
}
h3{
  color: #4DC3CA;
  font-size: 2em;
  text-align: left;
  margin: 0;
}
h4{
  font-size: 1.5em;
  color: white;
  text-align: left;
  margin: 0;
  margin-bottom: 25px;
}
.modalparagraph{
  text-align: left;
  color: white;
  font-size: 4vw;
  padding-right: 20px;
}
.modal-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  height: 70vh;
  background-image: url('../imgs/modalbg.png');
}
.modalmiddle{
  display: flex;
  flex-direction: row;
}
.close-modal{
  margin-right: -30px;
  margin-top: -30px;
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
  padding-top: 10px;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
}
</style>
