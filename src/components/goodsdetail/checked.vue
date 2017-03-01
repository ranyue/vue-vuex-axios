<template>
        <div class="goods-checked-detail">
            <div>
                {{model}}
            </div>
            <div>
                {{price}}
            </div>
            <div>
                <!--购买数量-->
                <el-input-number v-model="num"></el-input-number>
            </div>
            <button @:click="handleClick">删除</button>
        </div>
</template>

<script>
  export default {
    props :['model','price'],
    data() {
      return {
        num: 1,

      }
    },
    methods : {
      handleClick :  function (){
        this.$state.commit('deleteChecked',{
          model,
          price
        })
      }
    }
  };
</script>