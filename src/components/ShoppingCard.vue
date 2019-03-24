<template>
  <div id="app">
    <h1>Shopping Cart 组件</h1>
    <hr>
    <h2>产品</h2>
    <ProductList/>
    <hr>
    <Card/>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import Card from './Card.vue'
export default {
  components: { ProductList, Card }
}
</script>