// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import firebase from 'firebase/app'
import 'firebase/database'

Vue.use(VueResource);
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCUEYuRsMk3bO1ZAEXAWc2PqvrXOfnWISM",
  authDomain: "spotify-pwa.firebaseapp.com",
  databaseURL: "https://spotify-pwa.firebaseio.com",
  projectId: "spotify-pwa",
  storageBucket: "spotify-pwa.appspot.com",
  messagingSenderId: "459421991287"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    token: '',
    userInfo: {},
    playlistId: 'demo',
    db: {}
  },
  created () {

    if (window.location.hash.includes('access_token=')) {
      this.token = window.location.hash.split('access_token=')[1].split('&token_type')[0]
      if (this.token) {
        this.$router.push('/main')
      }
    }
    // redirect to login if no token
    else if(!this.token) {
      this.$router.push('/')
    }
    // this is where we synchronize with Firebase
    firebase.database().ref(this.playlistId).on('value', this.updateDb)
  },
  methods: {
    setArtists (artists) {
      //this is where we set the data - artists by user ID
      firebase.database().ref(this.playlistId + '/' + this.userInfo.id ).set(artists);
    },
    updateDb (snapshot){
      this.db = snapshot.val()
    },
  }
})
