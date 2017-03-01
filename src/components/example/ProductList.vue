<template>
  <ul>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <li v-for="p in products">
      {{ p.title }} - {{ p.price | currency }}
      <br>
      <button :disabled="!p.inventory" @click="addToCart(p)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import './product-list.scss'

  export default {
    computed: mapGetters({
      products: 'allProducts'
    }),
    methods: mapActions([
      'addToCart'
    ]),
    created() {
      this.$store.dispatch('getAllProducts')
    }
  }
</script>