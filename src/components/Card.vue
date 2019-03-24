
<template>
  <div class="cart">
    <h2>shoppingcard 购物车组件</h2>
    <p v-show="!products.length"><i>暂无产品，请添加购物车.</i></p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id">
        {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
      </li>
    </ul>
    <p>总计: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">清除</button></p>
    <p v-show="checkoutStatus">清除 {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    }
  }
}
</script>
