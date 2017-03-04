//  商品一个主图及四个附图 及下面的数据显示
<template>
    <div>
        <div>
        
            <img v-bind:src="show_data.goodsImage" alt="主图">
        </div>
        <div v-for="imgsrc in show_data.imgList">
            <img v-bind:src="imgsrc" alt="附图">
        </div>
        <div class="goodsshow-data">
            <div>
                <i>编号</i><i>{{show_data.lcCode}}</i>
            </div>
            <div>
                <i>LC编号</i><i>{{show_data.code}}</i>
            </div>

        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data(){
            return {
                 show_data : {}
            }
        },
        computed : {
            ...mapState({
                show_data(state){
                        let showData = {};
                        showData.goodsImage = state.productspu.goodsImage;//大图
                        showData.imgList = state.productspu.imgList;//小图
                        showData.code = state.productspu.code;//商品编号
                        showData.lcCode = state.productspu.lcCode;// LC编号
                        return showData;
                },     
            })
        }
    }
</script>