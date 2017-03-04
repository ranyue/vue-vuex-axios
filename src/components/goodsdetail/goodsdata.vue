// 商品头部标签及数据显示
//  所有数据根据查询的数据渲染，对应插入
 

<template>
    <div class="goodsdata">
        <h3>{{goodsData.name}}</h3>
        <i>{{goodsData.subtitle}}</i>
        <div class="info_container">
            <div class="goods_info" >
                <span>市场价</span><span>{{goodsData.price}}￥</span>
            </div>
            <div class="goods_info" v-if="goodsData.salesPrice">
                <span>促销价</span><span>{{goodsData.salesPrice}}￥</span>
            </div>
            <div class="goods_info" v-if="goodsData.brandName">
                <span>品牌</span><span>{{goodsData.brandName}}</span>
            </div>
            <div class="goods_info" v-if="goodsData.register">
                <span>注册证号</span><span>{{goodsData.register}}</span>
            </div>
            <div class="goods_info" v-if="goodsData.saledNumber">
                <span>销售量</span><span>{{goodsData.saledNumber}}</span>
            </div>
            <div class="goods_info" v-if="goodsData.storeName">
                <span>供应商</span><span>{{goodsData.storeName}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data(){
            return {
                goodsData  : {}
            }
        },
        computed : {
            ...mapState({
                goodsData(state){
                    let goodsData = {};
                    goodsData.name = state.productspu.name;//商品名称
                    goodsData.subtitle = state.productspu.subtitle;// 次标题
                    goodsData.price = state.productspu.salesPrice*1.1;// 市场价
                    //协议价或者折扣价
                    goodsData.salesPrice = state.productspu.agreePrice? state.productspu.agreePrice: state.productspu.salesPrice ;
                    goodsData.brandName =   state.productspu.brandName; //品牌
                        goodsData.register = state.productspu.medicalRegistNum;     //注册证号
                        goodsData.saledNumber = state.productspu.saledNumber;//销售量
                        goodsData.storeName =state.productspu.storeName;//供应商
                        return goodsData;
                },
            })
        }
    }
</script>
