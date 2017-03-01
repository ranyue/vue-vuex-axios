<!--商品规格型号选择
  当角色没有采购权限时，规格不可选，仅显示

-->
<template>
    <div class="model">
        <h3>规格型号</h3>
        <el-checkbox-group v-model="checkedModels" @change="handlecheckedModelsChange">
            <el-checkbox v-for="item in models" :label="item">{{item}}</el-checkbox>
        </el-checkbox-group>
    <div>
</template>
<script>
// 数据为请求过来的型号
  const modelOptions = ['白色', '黄色', '蓝色', '紫色'];
  export default {
    data() {
      return {
        checkedModels: [],
        models: modelOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handlecheckedModelsChange(value) {
        this.$store.commit('checkedModel',{
          type : '',
        });
      }
    }
  };
</script>