// 商品规格型号选择
//   当角色没有采购权限时，规格不可选，仅显示

<template>
    <div class="model">
        <h3>规格型号</h3>
        <!--<el-checkbox-group v-model="checkedModels" @change="handlecheckedModelsChange">
            <el-checkbox v-for="item in models" :label="item">{{item}}</el-checkbox>
        </el-checkbox-group>-->
       <ul>
         <model-button 
         v-for="(item,index) in model" 
         v-on:SelectedModelsChange="handleSelectedModelsChange" 
         v-bind:data="item"
         v-bind:key ="index"
         ></model-button>
       </ul>
    </div>
</template>
<script>
// 数据为请求过来的型号
import {mapState} from 'vuex';
import modelButton from './modelbutton.vue';
  export default {
    data (){
      return {
        model : []
      }
    },
    methods: {
      //  此处应该判断是否在已选类型中已有了
      handlecheckedModelsChange(data) {
        for(let i in this.$state.selected_model){
          if(data.productId == this.$state.selected_model[i].productId){
            //已在 选中列表，删除！！
             this.$store.commit('DELETE_SELECTED_MODEL',i);
          }else{
            //不在，添加到列表 
              this.$store.commit('ADD_SELECTED_MODEL',
                model[data.key]
              );
          }
        }
      }
    },
    computed : {
      ...mapState({
        model(state){
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
      })
    },
    components : {
      modelButton
    },
    mounted : function(){
      this.$store.commit('INITIAL_MODEL',{
        model :this.model
      })
    }
  };
</script>