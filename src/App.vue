<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img class='logo' src='./imgs/gettogetherpng.png' alt='logo'>
      </router-link>

      <Login color='orange' v-if="!$root.token"/>
      <Login color='blue'/>
      <router-link to="/login" v-if="!$root.token">Login</router-link>
      <router-link to="/main" v-else>Logout</router-link>
    </header>
    {{ $root.token }}
    <router-view></router-view>
  </div>
</template>

<script>
import Login from '@/components/Login'
export default {
  name: 'app',
  components:{Login},
  methods: {}
}
</script>

<style>
body{
	background-color: pink;
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.logo {
  /* position: absolute; */
  left: 15px;
  top: 15px;
}
</style>
