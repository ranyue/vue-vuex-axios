<template>
    <div>
        <div>
            <detailtitle v-bind:category=" detail_title_data"></detailtitle>
        </div>
        <div class="top">
            <div class="left">
                <goodsshow v-bind:show_data="goods_show_data"></goodsshow>
            </div>
            <div class="right">
                <goodsdata v-bind:data="goods_data"></goodsdata>
                <goodsmodel v-bind:model="goods_model"></goodsmodel>
                
                <goodsselected v-bind:selectedList="goods_selected"></goodsselected>
                <goodssubtotal v-bind:subtotal="goods_subtotal"></goodssubtotal>
            </div>
        </div>
       <div class="bottom">
           <goodssecondinfo v-bind:second_info="goods_second_info"></goodssecondinfo>
           <goodspic v-bind:pic="goods_pic"></goodspic>
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

    import axios from  'axios';
    import api from '../../api/api.js';
    import {mapState} from 'vuex';
    const url = api.productDetail;
    export default {
        // data(){
        //     return{
        //            // 标题 一 二 三 级类目 和商品名称
        //         detail_title_data : [],
        //         // 商品图片展示及图片下方数据
        //         goods_show_data : {},
        //          // 右侧 商品数据
        //         goods_data: {},
                
        //         goods_model :[],
        //          //已选清单及相关数量 以及价格
        //         goods_selected : [],
        //         // 商品价格统计
        //         goods_subtotal : '',
        //         // 下半部分商品数据展示
        //         goods_second_info : {},
        //         // 页面底部商品大图片展示及空余部分使用公司宣传图片
        //         goods_pic : [],
        //     }
        // },
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
        computed : mapState({
           detail_title_data (state){
               let title =[];
               for(let i=0;i<4;i++){
                    if(state.productspu[`category${i}stName`]){
                        title.push(state.productspu[`category${i}stName`]);
                    }
               }
               return title;//列表名
            //    if(state.productspu.category1stName){
            //         title.push(state.productspu.category1stName);
            //    }
             
           },
           goods_show_data(state){
                let showData = {};
                showData.goodsImage = state.productspu.goodsImage;//大图
                showData.imgList = state.productspu.imgList;//小图
                showData.code = state.productspu.code;//商品编号
                showData.lcCode = state.productspu.lcCode;// LC编号
                return showData;
           },
           goods_data(state){
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
           goods_model(state){
               let model = [];
               const length = state.productsku.length;
               for(let i =0;i<length;i++){
                    mmodel[i]={
                       specification : state.productsku[i].specification,// 型号
                       price : state.productsku[i].salesPrice&&state.productsku[i].agreePrice, // 价格
                       is_agreePrice : state.productsku[i].agreePrice === '', // 是否为协议价
                       productId : state.productsku[i].productId,// 商品id
                       sku : state.productsku[i].sku // 规格sku 编码 



                    }
               }
               return model;//商品类型
           },
           goods_selected(state){
               return  state.selectedmodel;// 已选择的商品类型
           },
           goods_subtotal(state){
                return state.goods_subtotal;//总价
           },
           goods_second_info(state){
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
           goods_pic(state){
                return state.productspu.imgList;//小图
           }
        }),
        //“productid”:”12345”, “start”:”0”, “num”:”10”，“tenantId”：“abcd”
        methods : {
            getgoodsdata(){
                // this.$store.dispatch('goods_detail',{
                //     productid: "224",
                //     start: "0",
                //     num: "10",
                //     tenantId: "1"
                // });
                 axios.post(api.productDetail,{
                      productid: "224",
                    start: "0",
                    num: "10",
                    tenantId: "1"
                 })
                .then(function(response){
                        if(response){
                            console.log(response);
                        }
                        
                    }
                    // (response)=>{
                    // console.log(response,11);
                    // if(response.code == 'A0000'){
                    //     commit(types.GET_GOODS_DATA_SUCCESS,{ response})
                    // }else{
                    //     commit(types.GET_GOODS_DATA_FAILED,{response})
                    // }
                )
            .catch(function (error) {
                //    console.log(error);
                });





            }
        },
        mouted : function(){
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
//     "productspu":{
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