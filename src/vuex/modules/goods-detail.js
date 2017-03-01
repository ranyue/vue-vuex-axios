import * as types from '../mutation-types';
import api from '.../configs/api.js';

const state = {
    checkedmodel : [],
    shopingcar : [],
};

const actions = {

};

const mutations = {
      //添加到购物车
    [types.ADD_TO_SHOPING_CART](state,{message}){
        state.shopingcar.push(message);
    },
    // 
    [types.ADD_GOODS_MODEL](state,{data}){
        state.shopingcar.push(data)
    },
    // 选择或取消对应的商品规格
    [types.CLICK_MODEL_BUTTON](state,{data}){
        
    }
}

export default ={
    state,
    actions,
    mutations
}