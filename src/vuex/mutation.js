import * as types from './mutation-types';

export default{ 
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