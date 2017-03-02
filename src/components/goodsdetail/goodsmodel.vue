// 商品规格型号选择
//   当角色没有采购权限时，规格不可选，仅显示

<template>
    <div class="model">
        <h3>规格型号</h3>
        <!--<el-checkbox-group v-model="checkedModels" @change="handlecheckedModelsChange">
            <el-checkbox v-for="item in models" :label="item">{{item}}</el-checkbox>
        </el-checkbox-group>-->
       <ul>
         <li v-for="item in model" @clik="handlecheckedModelsChange(item)" class="checked: is-checked">{{item}}
           
         </li>
       </ul>
    <div>
</template>
<script>
// 数据为请求过来的型号
  export default {
    props:{
      model :{
        type : Array,
        required : true,
        default : [],
      }
    }
    data() {
      return {
        checkedModels: [],
        models: modelOptions,
        isIndeterminate: true
      };
    },
    methods: {
      //  此处应该判断是否在已选类型中已有了
      handlecheckedModelsChange(value) {
        for(let i in this.$state.checked_model){
          if(value == this.$state.checked_model[i]){
             this.$store.commit('delete_checked_model',{
                value
              });
              this.event.target.
          }
        }
        this.$store.commit('clickModel',{
          value
        });
      }
    }
  };
</script>