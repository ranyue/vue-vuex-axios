import * as types from '../mutation-types';
import api from '../../api/api.js';
import axios from 'axios';

const state = {
    goods_detail : {},
    goods_productsku : '',
    goods_productspu: '',
    selected_model : [],
    shopingcar : [],
    goods_subtotal : '',
    goods_model : [],
    get_goods_data_failed : fales,
};

const actions = {
   //获取商品详情
    // goods_detail({commit},payload){
    //     // axios.post('/user', {
    //     //     firstName: 'Fred',
    //     //     lastName: 'Flintstone'
    //     // })
    //     // .then(function (response) {
    //     //     console.log(response);
    //     // })
    //     // .catch(function (error) {
    //     //     console.log(error);
    //     // });
    //     axios.post(api.productDetail,{...payload})
    //     .then(function(response){
    //             if(response){
    //                 console.log(response);
    //             }
                
    //         }
            
            
    //         // (response)=>{
    //         // console.log(response,11);
    //         // if(response.code == 'A0000'){
    //         //     commit(types.GET_GOODS_DATA_SUCCESS,{ response})
    //         // }else{
    //         //     commit(types.GET_GOODS_DATA_FAILED,{response})
    //         // }
    //     )
    //    .catch(function (error) {
    //     //    console.log(error);
    //     });
    // },
    //  //添加到购物车
    // //  "buyerId":"1:2:3",
    // // "goodsId":66,
    // // "goodsSkuId":65,
    // // "goodsNum":2
    // addtoshopingcar ({commit},payload){
    //     axios(api.addCart,{...payload})
    //     .then(
    //         response =>{
    //             if(response.code == 'A0000'){
    //                 commit(types.ADD_TO_SHOPING_CAR_SUCCESS)
    //             }else{
    //                 commit(types.ADD_TO_SHOPING_CAR_FAILED)
    //             }
    //         }
    //     )
    //     .catch(e=>{
    //         console.log(e)
    //     })
    // },

};

const mutations = {
      //添加到购物车成功
    [types.ADD_TO_SHOPING_CAR_SUCCESS](state){
        
        console.log('成功添加到购物车');
    },
    // 添加到购物车失败
    [types.ADD_TO_SHOPING_CAR_SUCCESS](state){

        console.log('成功添加到购物车');
    },
    
    // 添加商品规格
    [types.ADD_GOODS_MODEL](state,{data}){
        state.shopingcar.push(data)
    },
    // 选择或取消对应的商品规格
    // [types.CLICK_MODEL_BUTTON](state,{data}){
    //     for(let i =0;i<state.selected_model.length;i++){
    //         if(data == state.selected_model[i]){
    //             state.selected_model.splice(i,1);
    //         }else{
    //             state.selected_model.push(data);
    //         }
    //     }
    // },
    //获取商品信息成功
    [types.GET_GOODS_DATA_SUCCESS](state,{response}){
        state.goods_detail.productsku = data.productsku;
        state.goods_detail.productspu = data.productsku;
    },
    // 获取商品信息失败
    [types.GET_GOODS_DATA_FAILED](state,{data}){
        state.get_goods_data_failed = true;
    },
    //添加model 到store
    [types.INITIAL_MODEL](state,model){
        state.goods_model = model;
    },
    // 添加商品规格 到 selected_model
    [types.ADD_SELECTED_MODEL](state,data){
        //选中即判定默认买一个
        data.num = 1;
        state.selected_model.push(data);
    },
    // 删除 商品规格 从 selected_model
    [types.DELETE_SELECTED_MODEL](state,data){
        state.selected_model.splice(data,1)
    },
    // 添加购买个数
    [types.HANDLE_BUY_NUM](state,{num,id}){
      for(let i in state.selected_model){
          if(state.selected_model[i].productId == id){
            state.selected_model[i].num = num ;
          }
      }
    },


}

export default {
    state,
    actions,
    mutations
}


