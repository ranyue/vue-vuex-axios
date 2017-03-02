<!--商品一个主图及四个附图 及下面的数据显示-->
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
                <i>编号<i><i>{{show_data.lcCode}}</i>
            </div>
            <div>
                <i>LC编号<i><i>{{show_data.code}}</i>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name : 'goodsshow',
        props : {
            show_data :{
                type:Object,
                default : {},
                required : true,
            }
        },
    }
</script>