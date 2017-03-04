import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutation'
import goodsDetail  from './modules/goodsdetail.js';

import shopcart from './modules/shopcart'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
 
  actions,
  getters,
  mutations,
  modules: {
    cart,
    products,
    goodsDetail,
    shopcart
  },
  strict: debug
})
