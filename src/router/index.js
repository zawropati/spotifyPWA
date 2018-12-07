import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
