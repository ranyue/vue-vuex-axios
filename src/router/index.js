import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/example/Shop'

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
    }
  ]
})
