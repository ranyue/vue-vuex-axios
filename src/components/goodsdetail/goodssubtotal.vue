
<template>
    <div>
        <div>
            <span>已选{{number}}个</span>
            <span>￥{{totalPrice}}</span>
        </div>
       <button type="submit" v-bind:click="addtoshopingcart">加入购物车</button>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
      
        computed :{ 
            ...mapState({
                number(state){
                    let num =0;
                    for(let i in state.selected_model){
                        num += state.selected_model[i].num
                    }
                    return num;
                },
                totalPrice(state){
                    let num =0;
                    for(let i in state.selected_model){
                        let singlePrice = state.selected_model[i].num*state.selected_model[i].price;
                        num +=singlePrice;
                    }
                
                },
            }
        )},
        
        methods : {
            // 加入购物车

//             请求参数  
// {"buyerId":"1:2:3","goodsId":66,"goodsSkuId":65,"goodsNum":2}
// 返回结果
// 失败 ： {"code":"A0001","msg":"request parameters is invalid !"}
// 成功 ： {"code":"A0000","msg":null}

            addtoshopingcart : function(){
                this.$store.dispatch('addtoshopingcart',{
                    "buyerId":"1:2:3",
                    "goodsId":66,
                    "goodsSkuId":65,
                    "goodsNum":2
                    }
                )
            }
        }
    }
</script>