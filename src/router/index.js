import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/components/MyApp/Index'
import Study from '@/components/Study/Index'
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
    }
  ]
})
