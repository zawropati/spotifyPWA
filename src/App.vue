<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img class='logo' src='./imgs/Spotifytogetherlogo.png' alt='logo'>
      </router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {}
}
</script>

<style>
header{
  position: absolute;
  width: 100%;
}
body, html{
  padding: 0px;
  margin: 0px;
  height: 100%;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
	background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.logo {
  padding-left: 15px;
  padding-top: 15px;
  height: 10vh;
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
</style>
