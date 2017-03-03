
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
  export default {
   props :{
     selectedList : {
       type : Array,
       required : true,
       default : []
     }
   },
    components : [
        selected
    ],
  };
</script>