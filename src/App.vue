<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img class='logo' src='./imgs/Spotifytogetherlogo.png' alt='logo'>
      </router-link>
      <User/>
      <Slide right>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import User from '@/components/User'
import { Slide } from 'vue-burger-menu'
export default {
  name: 'app',
  components:{
    User,
    Slide,
  },
  methods: {}
}
</script>

<style>
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
  /* width: 100vw !important; */
}
.bm-cross{
  background: white;
}
/* Burger menu styling end*/
.btn{
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
  text-transform: uppercase;
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

}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

</style>
