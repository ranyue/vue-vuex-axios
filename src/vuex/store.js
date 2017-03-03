import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutation'
import state from './state';
import goodsDetail  from './modules/goods-detail.js';
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    cart,
    products,
    goodsDetail
  },
  strict: debug
})
