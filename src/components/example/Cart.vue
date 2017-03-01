<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
console.log('Cart.vue begin')
  import { mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
    ...mapGetters({
        products: 'cartProducts',
        checkoutStatus: 'checkoutStatus'
      }),
      total() {
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      }
    },
    methods: {
      ...mapActions([
      'checkout' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ])
      // checkout(products) {
      //   this.$store.dispatch('checkout', products)
      // }
    }
  }
  console.log('Cart.vue end')
</script>