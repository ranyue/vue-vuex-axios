// 商品头部标签及数据显示
//  所有数据根据查询的数据渲染，对应插入
 

<template>
    <div class="goodsdata">
        <h3>{{data.name}}</h3>
        <i>{{data.subtitle}}</i>
        <div class="info_container">
            <div class="goods_info" >
                <span>市场价</span><span>{{data.price}}￥</span>
            </div>
            <div class="goods_info" v-if="data.salesPrice">
                <span>促销价</span><span>{{data.salesPrice}}￥</span>
            </div>
            <div class="goods_info" v-if="data.brandName">
                <span>品牌</span><span>{{data.brandName}}</span>
            </div>
            <div class="goods_info" v-if="data.register">
                <span>注册证号</span><span>{{data.register}}</span>
            </div>
            <div class="goods_info" v-if="data.saledNumber">
                <span>销售量</span><span>{{data.saledNumber}}</span>
            </div>
            <div class="goods_info" v-if="data.storeName">
                <span>供应商</span><span>{{data.storeName}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'goodsdata',
        props: {
            data :{
                type:Object,
                default : {},
                required : true,
            }
        }
    }
</script>
