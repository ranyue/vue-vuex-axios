<template>
    <div>
        <div>
            <detailtitle></detailtitle>
        </div>
        <div class="top">
            <div class="left">
                <goodsshow></goodsshow>
            </div>
            <div class="right">
                <goodsdata></goodsdata>
                <goodsmodel></goodsmodel>
                
                <goodsselected></goodsselected>
                <goodssubtotal></goodssubtotal>
            </div>
        </div>
       <div class="bottom">
           <goodssecondinfo></goodssecondinfo>
           <goodspic></goodspic>
       </div>
    </div>
</template>
<script>
    // 标题 一 二 三 级类目 和商品名称
    import detailtitle from './detailtitle.vue';
    // 商品图片展示及图片下方数据
    import goodsshow from './goodsshow.vue';
    // 右侧 商品数据
    import goodsdata from './goodsdata.vue';
    // 商品各种规格型号数据
    import goodsmodel from './goodsmodel.vue';
    //已选清单及相关数量 以及价格
    import goodsselected from './goodsselected.vue';
    // 商品价格统计
    import goodssubtotal from './goodssubtotal.vue';
    // 下班部分商品数据展示
    import goodssecondinfo from './goodssecondinfo.vue';
    // 商品大图片展示及空余部分使用公司宣传图片
    import goodspic from './goodspic.vue';

    import axios from  'axios';
    import api from '../configs/api';
    const url = api.productDetail;
    export default {
        data(){
            return{
                 goodsdata : '',
            }
           
        },
        components : [
            detailtitle,
            goodsshow,
            goodsdata,
            goodsmodel,
            goodsselected,
            goodssubtotal,
            goodssecondinfo,
            goodspic
        ],
        //“productid”:”12345”, “start”:”0”, “num”:”10”，“tenantId”：“abcd”
        methods : {
            getgooosdata(){
                const that =this ;
                axios(url,{
                    tenantId : 100,
                    productid : 100,
                    start : 0,
                    num : 10
                })
                .then(response=>{
            
                        that.goodsdata = response.data;
                        console.log(response);
                    
                })
                .catch(e=>{
                    console.log(e);
                })
            }
        },
        mouted : function(){
             this.getgoodsdata();
        }
           
      

    }
</script>

