<template>
  <div id="app" :class='$route.name'>
    <header>
      <router-link to="/">
        <img class='logo' src='./imgs/Spotifytogetherlogo.png' alt='logo'>
      </router-link>
    <Slide v-if='$route.name != "CreatedPlaylist" ' right :width='dynWidth'>
      <a id="about" href="#">
        <span>About</span>
      </a>
      <a id="contact" href="#">
        <span>Contact</span>
      </a>
      <a id="whyWebApp" href="#">
        <span>Why Web App</span>
      </a>
    </Slide>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  name: 'app',
  components:{
    Slide,
  },
  computed: {
    dynWidth () {
      return window.innerWidth
    }
  },
  methods: {}
}
</script>

<style>
@font-face {
    font-family: CircularBlack;
    src: url("./fonts/CircularStd-Black.otf") format("opentype");
}
@font-face {
    font-family: CircularBook;
    src: url("./fonts/CircularStd-Book.otf") format("opentype");
}
/* Burger menu styling start*/
.bm-burger-button{
  height: 20px;
}
.bm-burger-bars {
  background-color: white;
}
.line-style {
  height: 10%;
}
.bm-menu{
  background-color: #212055;
}
.bm-cross{
  background: white;
  height: 40px !important;
}
.bm-cross-button {
  height: 50px;
  width: 50px;
}
.bm-item-list{
 margin-top: 50px;
}
.cross-style{
  right: 10px;
  top: 28px;
}
/* Burger menu styling end*/
.loginButton{
  color: white;
  padding: 5px 15px;
  font-size: 15px;
  border: solid 3px #ffffff;
  border-radius: 1.875rem;
  height: 3.75rem;
  padding: 0 3.4375rem;
  font-size: 0.875rem;
  background-color: transparent;
  font-weight: 500;
  letter-spacing: 0.0625rem;
  cursor: pointer;
}
header{
  position: absolute;
  width: 100%;
}
body, html{
  padding: 0px;
  margin: 0px;
  height: 100%;
  background-image: url("assets/Gradient_mesh_big.png");
  background-size: cover;
}
#app {
  height: 100%;
  font-family: 'CircularBlack';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:white;
}
.logo {
  padding-left: 15px;
  padding-top: 15px;
  height: 8vh;
}
@keyframes Gradient{
  0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}
.box{
  background-color: #3868B1;
  border-radius: 1em;
  height: 300px;
  margin: 2em;
}
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
	display: table;
	transition: opacity .3s ease;
}
.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}
.modal-header h3 {
	margin-top: 0;
	color: #42b983;
}
.modal-body {
	margin: 20px 0;
}
.modal-default-button {
	float: right;
}
.modal-enter {
	opacity: 0;
}
.modal-leave-active {
	opacity: 0;
}
.open-modal {
	transition: all .2s ease-in-out;
}
.open-modal:hover {
	cursor: pointer;
	background: #0a6332;
	border-radius: 2vw;
	color: #fff !important;
	padding: 8px 20px;
}
.close-icon {
	float: right;
	color: #fff;
  padding: 1em;
}
.modal-fade-enter-active {
  transition: all .3s ease;
}
.modal-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.modal-fade-enter, .modal-fade-leave-to
/* .modal-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
#loader-box{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #3569b2, #305399, #2a3e80, #232a68, #1b1650);
  }

.hideMe {
    transition: 2s;
    opacity: 1;
    z-index: 1;
    -moz-animation: cssAnimation 0s ease-in 2s forwards;
    /* Firefox */
    -webkit-animation: cssAnimation 0s ease-in 2s forwards;
    /* Safari and Chrome */
    -o-animation: cssAnimation 0s ease-in 2s forwards;
    /* Opera */
    animation: cssAnimation 0s ease-in 2s forwards;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}
@keyframes cssAnimation {
    to {
        opacity:0;
        z-index: -3;
    }
}
@-webkit-keyframes cssAnimation {
    to {
        opacity: 0;
         z-index: -3;
    }
}
.st0{
  fill:#FFFFFF;}
svg {
  height: auto;
  fill:#FFFFFF;
  margin-top: 60%;
  margin-left: 4.3em;
}
  #get{
   animation-name: pulse_animation;
    animation-duration: 1750ms;
    transform-origin:40% 40%;
    animation-iteration-count: infinite;
    animation-timing-function: linear;}

#other {
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
@media only screen  and (min-width : 700px) {
.bm-menu{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0;
}
.bm-item-list{
  margin-left: 0;
  font-size: 30px;
}
h3{
  font-size: 5vw,
}
h4{
  font-size:  3vw;
}
ol{
  font-size: 2.5vw;
}
}
</style>
