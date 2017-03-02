import * as types from '../mutation-types';
import api from '.../configs/api.js';
import axios from './axios';

const state = {
    goods_detail : {},
    goods_productsku : '',
    goods_productspu: '',
    checkedmodel : [],
    shopingcar : [],
    goods_subtotal : '',
    get_goods_data_failed : fales,
};

const actions = {
   //获取商品详情
    goodsdata({commit},payload){
        axios(api.productDetail,payload)
        .then(response=>{
            if(response.code = 'A0000'){
                commit(types.get_goods_data_success,{ response})
            }else{
                commit(types.get_goods_data_failed,{response})
            }
        })
        .catch(e=>{
            console.log(e);
        })
    },
     //添加到购物车
    addtoshopingcar ({commit},payload){
        axios(api.addCart,payload)
        .then(
            response =>{
                if(response.code == 'A0000'){
                    commit(types.ADD_TO_SHOPING_CAR_SUCCESS)
                }else{
                    commit(types.ADD_TO_SHOPING_CAR_FAILED)
                }
            }
        )
        .catch(e=>{
            console.log(e)
        })
    },

};

const mutations = {
      //添加到购物车
    [types.ADD_TO_SHOPING_CAR_SUCCESS](state){
        // 发送请求 
        console.log('成功添加到购物车');
    },
    // 添加商品规格
    [types.ADD_GOODS_MODEL](state,{data}){
        state.shopingcar.push(data)
    },
    // 选择或取消对应的商品规格
    [types.CLICK_MODEL_BUTTON](state,{data}){
        
    },
    //获取商品信息成功
    [types.GET_GOODS_DATA_SUCCESS](state,{data}){
        state.goods_detail.productsku = data.productsku;
        state.goods_detail.productspu = data.productsku;
    },
    // 获取商品信息失败
    [types.GET_GOODS_DATA_FAILED](state,{data}){
        state.get_goods_data_failed = true;
    }

}

export default {
    state,
    actions,
    mutations
}


