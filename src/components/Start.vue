<template>
  <div class='startcontainer'>
    <!-- <svg id="animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 212">
    <svg>
      <path id="t1" class="st0 secondpulse" d="M95.66 56.99h22.29v18.22H95.66v53.59c0 9.43 3.86 14.15 14.36 14.15 2.57 0 6.22-.43 7.93-.86v17.15c-1.71.64-6.86 1.93-13.72 1.93-17.58 0-28.73-10.72-28.73-29.37V75.21H55.79V56.99h5.57c11.15 0 15.86-6.86 15.86-15.86V24.4h18.44v32.59z"> </path>
      <path id="o" class="st0 secondpulse" d="M233.51 108.44c0 31.51-21.87 54.88-52.74 54.88s-52.74-23.37-52.74-54.88c0-31.3 21.87-54.67 52.74-54.67s52.74 23.37 52.74 54.67zm-20.58 0c0-23.8-15.01-36.66-32.16-36.66s-32.16 12.86-32.16 36.66c0 24.01 15.01 36.87 32.16 36.87s32.16-12.86 32.16-36.87z"/>
      <path id="g" class="st0 pulse" d="M268.46 159.03c1.93 11.58 11.15 19.94 24.65 19.94 18.01 0 28.08-9 28.08-29.37v-7.72c-4.29 6.86-14.15 13.51-29.37 13.51-28.08 0-49.09-21.65-49.09-51.24 0-27.87 20.15-51.45 49.09-51.45 16.72 0 26.37 7.29 30.01 14.36V54.63h27.44v94.11c0 28.94-15.65 55.31-55.31 55.31-28.94 0-48.23-18.01-51.24-38.16l25.74-6.86zm53.16-54.88c0-16.29-11.15-26.58-24.87-26.58-14.15 0-25.3 10.29-25.3 26.58 0 16.51 10.5 26.8 25.3 26.8 14.58 0 24.87-10.51 24.87-26.8z"></path>
      <path id="e" class="st0 pulse" d="M465.68 129.88c-5.36 18.22-22.08 33.44-48.02 33.44-28.94 0-54.45-20.79-54.45-56.38 0-33.66 24.87-55.52 51.88-55.52 32.59 0 52.09 20.79 52.09 54.67 0 4.07-.43 8.36-.43 8.79h-75.46c.64 13.93 12.43 24.01 26.58 24.01 13.29 0 20.58-6.65 24.01-16.08l23.8 7.07zM439.1 95.36c-.43-10.5-7.29-20.79-23.58-20.79-14.79 0-22.94 11.15-23.58 20.79h47.16z"/>
      <path id="t2" class="st0 pulse" d="M517.78 54.63H539v25.3h-21.22v44.16c0 9.22 4.29 12.22 12.43 12.22 3.43 0 7.29-.43 8.79-.86v23.58c-2.57 1.07-7.72 2.57-16.08 2.57-20.58 0-33.44-12.22-33.44-32.58V79.93H470.4v-25.3h5.36c11.15 0 16.29-7.29 16.29-16.72V23.12h25.72v31.51z"/>
      <path id="h" class="st0 secondpulse" d="M577.59 160.1h-20.15V4.9h20.15V69c7.5-10.93 19.51-15.01 31.3-15.01 24.65 0 36.87 17.79 36.87 40.73v65.38h-20.15V98.15c0-14.36-6-25.94-24.01-25.94-15.43 0-23.58 12-24.01 27.23v60.66z"/>
      <path id="e2" class="st0 secondpulse" d="M760.67 130.73c-5.79 18.22-22.29 32.58-46.3 32.58-27.65 0-51.88-20.15-51.88-55.09 0-32.37 23.37-54.45 49.31-54.45 31.73 0 49.52 21.87 49.52 54.02 0 2.57-.21 5.15-.43 6.43h-77.6c.43 18.44 13.72 31.3 31.08 31.3 16.72 0 25.08-9.22 28.94-20.79l17.36 6zm-20.37-32.8c-.43-14.79-10.08-26.37-28.3-26.37-16.94 0-27.23 13.08-28.08 26.37h56.38z"/>
      <path id="r" class="st0 secondpulse" d="M837.2 77.35c-3-.43-6-.64-8.79-.64-16.94 0-28.3 9-28.3 31.73v51.66h-20.15V56.99h19.72V75c7.5-15.86 20.37-19.72 30.87-19.72 2.79 0 5.57.43 6.65.64v21.43z"/>
    </svg> -->
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
  created () {
    setTimeout(() => {this.showModal = true}, 5000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.st0{
  fill:#fff;}
svg {
  width:25%;
  height: auto;
}
  .pulse{
    animation-name: pulse_animation;
    animation-duration: 1750ms;
    transform-origin:40% 40%;
    animation-iteration-count: infinite;
    animation-timing-function: linear;}

.secondpulse {
    animation-name: secondpulse_animation;
    animation-duration: 1750ms;
    transform-origin:40% 40%;
    animation-iteration-count: infinite;
    animation-timing-function: linear;}

@keyframes pulse_animation {
    0% { transform: scale(1); }
    30% { transform: scale(1); }
    40% { transform: scale(1.05);}
    50% { transform: scale(1);}
    60% { transform: scale(1);}
    70% { transform: scale(1);}
    80% { transform: scale(1.05);}
    100% { transform: scale(1);}
}
@keyframes secondpulse_animation {
    0% { transform: scale(1); opacity: 1;}
    30% { transform: scale(1); opacity: 1;}
    40% { transform: scale(1); opacity: -1;}
    50% { transform: scale(1); opacity: -1;}
    60% { transform: scale(1); opacity:-1;}
    70% { transform: scale(1); opacity:-1;}
    80% { transform: scale(1.03); opacity:1;}
    100% { transform: scale(1); opacity: 1;}
}
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
  padding-top: 30px;
}
h2{
  font-size: 0.75rem;
  line-height: 1.55;
  margin-top: 0;
  margin-bottom: 60px;
  padding-left: 25px;
  padding-right: 25px;
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
