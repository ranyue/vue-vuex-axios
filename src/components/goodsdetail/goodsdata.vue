 <!--商品头部标签及数据显示
 所有数据根据查询的数据渲染，对应插入
 
 -->
<template>
    <div class="goodsdata">
        <h3>商品主标题</h3>
        <i>商品副标题</i>
        <div class="info_container">
            <div class="goods_info">
                <span>市场价</span><span>50￥</span>
            </div>
            <div class="goods_info">
                <span>促销价</span><span>50￥</span>
            </div>
            <div class="goods_info">
                <span>协议价</span><span>50￥</span>
            </div>
            <div class="goods_info">
                <span>品牌</span><span>50￥</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'goodsdata',
        data(){
            return{


            }
        }
    }
</script>
