import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCard from '@/components/ShoppingCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shoppingcard',
      name: 'ShoppingCard',
      component: ShoppingCard
    }
  ]
})
