<template>
  <div id="app">
     <router-link to="/shoppingcard">购物车组件</router-link>
     <router-view/>
    <!-- <product-list-one :products="products"></product-list-one> -->
    <!-- <product-list-two :products="products"></product-list-two> -->
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'
export default {
  name: 'App',
  components:{
    'product-list-one':ProductListOne,
    'product-list-two':ProductListTwo,
  },
  data(){
    return{
      products:this.$store.state.products
    }
  }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
