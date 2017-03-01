 <!--商品价格统计
 
 -->

<template>
    <div>
        <div>
            <span>已选{{number}}个</span>
            <span>￥{{amount}}</span>
        </div>
       <button type="submit" v-bind:click="addtoshopingcart">加入购物车</button>
    </div>
</template>
<script>
    export default {
        name : 'goodssubtotal',
       
        data(){
            return{
                number : 0,

                amount : 0,
            }
        },
        
        methods : {
            // 加入购物车
            addtoshopingcart : this.$store.dispatch('addtoshopingcart',{
               data : {
                   id : '',
                   num :  '',
                   price : ''
               }
            })
        }
    }
</script>