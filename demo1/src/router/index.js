import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import User from '@/components/User'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/:username',
      name: 'User',
      component: User
    },
    {
      path: '/count',
      name: 'Count',
      component: Count
    }
  ]
})