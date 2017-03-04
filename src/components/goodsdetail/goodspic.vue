<!--页面下方图片展示区域-->
<template>
    <div>
        <img src="" alt="">
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
       
        data(){
           return {
               imgList : []
           }
        },
          computed : {
            ...mapState({
                imgList(state){
                        return state.productspu.imgList;//小图
                },

            })
        },
    }
</script>