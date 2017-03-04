

<template>
    <div>
        <ul>
            <li v-if="second_info.unit">
                <span>单位</span>
                <span>{{second_info.unit}}</span>
            </li>
            <li v-if="second_info.attribute">
                <span>材质</span>
                <span>{{second_info.attribute}}</span>
            </li>
            <li v-if="second_info.boxBin">
                <span>箱规</span>
                <span>{{second_info.boxBin}}</span>
            </li>
            <li v-if="second_info.origin ">
                <span>产地</span>
                <span>{{second_info.origin}}</span>
            </li>
            <li v-if="second_info.length || second_info.width || second_info.height">
                <span>尺寸</span>
                <span>{{second_info.length}} cm X {{second_info.width}} cm X {{second_info.height}} cm</span>
            </li>
            <li v-if="second_info.weight">
                <span>毛重</span>
                <span>{{second_info.weight}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex';
    export default {
        data (){
            return {
                second_info :{},
            }
        },
         computed : {
            ...mapState({
                second_info(state){
                        let goodsSecondInfo = {};
                        goodsSecondInfo.unit = state.productspu.unit;//单位
                        goodsSecondInfo.attribute = state.productspu.attribute;//材质
                        goodsSecondInfo.boxBin = state.productspu.boxBin;//箱规
                        goodsSecondInfo.origin = state.productsku[0].origin;//产地
                        goodsSecondInfo.length = state.productsku[0].length;//长
                        goodsSecondInfo.width = state.productsku[0].width;//宽
                        goodsSecondInfo.height = state.productsku[0].height;//高
                        goodsSecondInfo.weight = state.productsku[0].weight;//重量
                },
            })
        },
    }
</script>