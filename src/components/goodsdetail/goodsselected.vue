
<template>
    <div class="goods-checked">
        <h3>已选清单</h3>
        <div v-for="item in selectedList">
              <selected v-bind:list="item"></selected>
        </div>     
    </div>
</template>

<script>
import selected from './selected.vue';
import {mapState} from 'vuex';
  export default {
  data(){
    return {
       selectedList : [],
    }
  },
   computed :{
     ...mapState({
         selectedList(state){
            return  state.selectedmodel;// 已选择的商品类型
        },
     })
   },
    components : {
        selected
    },
  };
</script>