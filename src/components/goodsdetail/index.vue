<template>
    <div>
        <div>
            <detailtitle ></detailtitle>
        </div>
        <div class="top">
            <div class="left">
                <goodsshow ></goodsshow>
            </div>
            <div class="right">
                <goodsdata ></goodsdata>
                <goodsmodel></goodsmodel>
                <goodsselected ></goodsselected>
                <goodssubtotal ></goodssubtotal>
            </div>
        </div>
       <div class="bottom">
           <goodssecondinfo></goodssecondinfo>
           <goodspic ></goodspic>
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
    // 页面底部商品大图片展示及空余部分使用公司宣传图片
    import goodspic from './goodspic.vue';
    import api from '../../api/api.js';
    import {mapState} from 'vuex';
    const url = api.productDetail;
    export default {
        components : {
            detailtitle,
            goodsshow,
            goodsdata,
            goodsmodel,
            goodsselected,
            goodssubtotal,
            goodssecondinfo,
            goodspic
        },
        //“productid”:”12345”, “start”:”0”, “num”:”10”，“tenantId”：“abcd”
        methods : {
            getgoodsdata(){
                this.$store.dispatch('goods_detail',{
                    productid: "224",
                    start: "0",
                    num: "10",
                    tenantId: "1"
                });
            }
        },
       created : function(){
            // 获取数据
             this.getgoodsdata();
        }
    }
</script>






// {"msg":null,
// "code":"A0000",
// "productsku":[{
//     "agreePrice":"",
//     "batchNumber":1,
//     "goodLabel":0,
//     "goodStatus":0,
//     "goodsImage":"",
//     "height":0,
//     "id":1294,
//     "length":0,
//     "name":"KOOLTOUCH/顶瑞 加厚有粉乳胶手套 KT007 6g 10盒/箱×100只/盒",
//     "origin":"马来西亚",
//     "productId":465,
//     "saledNumber":0,
//     "salesPrice":"278.30",
//     "sku":"FDST006-1",
//     "specification":"XS",
//     "stock":10000,
//     "stockWarning":10,
//     "weight":0,
//     "width":0
//     },
//     {"agreePrice":"",
//     "batchNumber":1,
//     "goodLabel":0,
//     "goodStatus":0,
//     "goodsImage":"",
//     "height":0,
//     "id":1295,
//     "length":0,
//     "name":"KOOLTOUCH/顶瑞 加厚有粉乳胶手套 KT007 6g 10盒/箱×100只/盒",
//     "origin":"马来西亚",
//     "productId":465,
//     "saledNumber":0,
//     "salesPrice":"278.30",
//     "sku":"FDST006-2",
//     "specification":"S",
//     "stock":10000,
//     "stockWarning":10,
//     "weight":0,
//     "width":0
//     },
//     {"agreePrice":"",
//     "batchNumber":1,
//     "goodLabel":0,
//     "goodStatus":0,
//     "goodsImage":"",
//     "height":0,
//     "id":1296,
//     "length":0,
//     "name":"KOOLTOUCH/顶瑞 加厚有粉乳胶手套 KT007 6g 10盒/箱×100只/盒",
//     "origin":"马来西亚",
//     "productId":465,
//     "saledNumber":0,
//     "salesPrice":"278.30",
//     "sku":"FDST006-3",
//     "specification":"M",
//     "stock":10000,
//     "stockWarning":10,
//     "weight":0
//     ,"width":0
//     },
//     {"agreePrice":"",
//     "batchNumber":1,
//     "goodLabel":0,
//     "goodStatus":0,
//     "goodsImage":"",
//     "height":0,
//     "id":1297,
//     "length":0,
//     "name":"KOOLTOUCH/顶瑞 加厚有粉乳胶手套 KT007 6g 10盒/箱×100只/盒",
//     "origin":"马来西亚",
//     "productId":465,
//     "saledNumber":0,
//     "salesPrice":"303.60",
//     "sku":"FDST006-4",
//     "specification":"L",
//     "stock":10000,
//     "stockWarning":10,
//     "weight":0,
//     "width":0
//     }],

//   "productspu":{
//         "attribute":"乳胶",
//         "boxBin":"",
//         "brandId":32,
//         "brandName":"KOOLTOUCH/顶端",
//         "category1stId":69,
//         "category1stName":"感染预防",
//         "category2stId":171,
//         "category2stName":"手套",
//         "category3stId":172,
//         "category3stName":"乳胶手套",
//         "code":"",
//         "couponId":0,
//         "createDate":{
//             "date":21,
//             "day":2,
//             "hours":13,
//             "minutes":54,
//             "month":1,
//             "seconds":47,
//             "time":1487656487000,
//             "timezoneOffset":-480,
//             "year":117},
//             "discountId":0,
//             "goodsImage":"https://lcsaas.oss-cn-hangzhou.aliyuncs.com/etrade/test/465/FDST006-1.jpg",
//             "goodsInstruction":"1. 有粉光面，穿戴容易\n2. 加厚耐用型，面对病原体和污染提供更有力的保护屏障",
//             "hasAgreePrice":0,
//             "id":465,
//             "imgList":["https://lcsaas.oss-cn-hangzhou.aliyuncs.com/etrade/test/465/FDST006-1.jpg"],
//             "lcCode":"1100000455000",
//             "linkedProduct":"",
//             "lowestPrice":"278.30",
//             "medicalRegistNum":"",
//             "modifyDate":{
//                 "date":21,
//                 "day":2,
//                 "hours":13,
//                 "minutes":54,
//                 "month":1,
//                 "seconds":47,
//                 "time":1487656487000,
//                 "timezoneOffset":-480,
//                 "year":117
//                 },
//             "name":"KOOLTOUCH/顶瑞 加厚有粉乳胶手套 KT007 6g 10盒/箱×100只/盒",
//             "origin":"",
//             "saledNumber":0,
//             "salesStatus":0,
//             "serviceAreaCity":"",
//             "serviceAreaProvince":"",
//             "storeId":7,
//             "storeName":"上海富电国际贸易有限公司",
//             "subtitle":"1.有粉光面，穿戴容易\n2.加厚耐用型，面对病原体和污染提供更有力的保护屏障",
//             "unit":"箱"
//             }
//         }