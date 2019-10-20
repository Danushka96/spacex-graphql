import Vue from 'vue'
import Router from 'vue-router'
import Company from './components/CompanyDetails.vue'
import Capsules from './components/Capsules'
import Capsule from './components/Capsule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'company',
    },
    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/capsules',
      name: 'capsules',
      component: Capsules
    },
    {
      path: '/capsules/:id',
      name: 'capsule',
      component: Capsule
    }
  ]
})
