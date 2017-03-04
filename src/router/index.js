import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/example/Shop'
import Cart from '@/page/cart/cart'
import GoodsDetail from '../components/goodsdetail/index.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shop',
      component: Shop
    },{
      path: '/goodsdetail',
      name : 'GoodsDetail',
      component : GoodsDetail
    },
     {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
