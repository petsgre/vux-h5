import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Login from '@/pages/Login'
import Receipt from '@/pages/Receipt'
import Info from '@/pages/person/Info.vue'
import Count from '@/pages/person/Count.vue'
import Order from '@/pages/person/Order.vue'
import _404 from '@/pages/404'
const Index = () => import('@/pages/Index')
const Person = () => import('@/pages/Person')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Person',
      name: 'Person',
      component: Person
    },
    {
      path: '/Person/Info',
      name: 'Info',
      component: Info
    },
    {
      path: '/Person/Count',
      name: 'Count',
      component: Count
    },
    {
      path: '/Person/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Receipt',
      name: 'Receipt',
      component: Receipt
    },
    {
      path: '*',
      name: '404',
      component: _404,
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  const user = JSON.parse(window.sessionStorage.getItem('user'))
  if (!user) {
    if (to.name === 'Login') {
      next()
      return
    }
    next({
      path: '/'
    })
  } else {
    store.dispatch('setUser', user)
    next()
  }
})
export default router
