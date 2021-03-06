import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/components/MyApp/Index'
import Study from '@/components/Study/Index'
import About from '@/components/About/Index'
import SNS from '@/components/SNS/Index'
import Hobby from '@/components/Hobby/Index'
import School from '@/components/School/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/myapp',
      component: Index
    },
    {
      path: '/study',
      component: Study
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/sns',
      component: SNS
    },
    {
      path: '/hobby',
      component: Hobby
    },
    {
      path: '/school',
      component: School
    }
  ]
})
