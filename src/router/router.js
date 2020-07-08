import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../Pages/cart.vue'
import Address from '../Pages/address.vue'

Vue.use(Router)

export default new Router({
   routes: [
       {
           path: '/',
           name: 'cart',
           component: Cart
       },
       {
           path: '/address',
           name: 'address',
           component: Address
       }
   ]
})