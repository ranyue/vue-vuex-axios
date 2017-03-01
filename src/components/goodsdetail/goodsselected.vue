<!--商品选中清单计算清单
    当角色没有购买权限时，不显示
-->

<template>
    <div class="goods-checked">
        <h3>已选清单</h3>
        <div v-for="item in checkedlist">
              <checked data="list"></checked>
        </div>     
    </div>
</template>

<script>
import checked from './checked.vue';
  export default {
    props : [],
    data() {
      return {
        checkedlist: [],
      }
    },
    components : [
        checked
    ]
  };
</script>