
<template>
    <div>
        qweqweadsdas
       {{category}}
    </div>
</template>
<script>

    import {mapState} from 'vuex';
    export default {
        name:'detailtitle',
        data(){
            return {
                info:this.$store.state.goodsDetail.goods_detail,
                category: null,
            }
        },
        computed: {
            // category: function(){
               
            //         return this.info
            category(){
                if(this.$store.state.goodsDetail.get_goods_data_success){
                 this.category = this.$store.state.goodsDetail.goods_detail.productspu;
                }
            }
         

            // }
        }, 
        mounted : function(){
            // const that = this;
            // if(this.$store.state.goodsDetail.get_goods_data_success){
            //      this.category = this.$store.state.goodsDetail.goods_detail.productspu;
            // }
            // setTimeout(()=>{
            //       this.category = this.$store.state.goodsDetail.goods_detail.productspu;
            // },100)
            // this.category = this.$store.state.goodsDetail.goods_detail.productspu;
            // console.log(111);
            // let title =[];
            // for(let i=1;i< 4;i++){
            //         if( this.$store.state.goodsDetail.goods_detail.productspu[`category${i}stName`]){
            //             title.push( this.$store.state.goodsDetail.goods_detail.productspu[`category${i}stName`]);
            //         }
            // }
            // this.category = title;     
        }
    }
</script>
