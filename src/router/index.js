import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Content from '@/components/Content'
import Login from '@/components/Login'
import CreatedPlaylist from '@/components/CreatedPlaylist'
import About from '@/components/About'
import WebApp from '@/components/WebApp'
import Contact from '@/components/Contact'

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
    },
    {
      path: '/playlist',
      name: 'CreatedPlaylist',
      component: CreatedPlaylist
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/webapp',
      name: 'WebApp',
      component: WebApp
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
