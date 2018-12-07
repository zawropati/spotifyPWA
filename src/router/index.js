import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Content from '@/components/Content'
import Login from '@/components/Login'

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
      name: 'Content',
      component: Content
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      props: {color: 'red'}
    }
  ]
})
