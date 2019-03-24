<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="(product,key) in products" :key="key">
        <span class="name">{{ product.name }}</span>
          <span class="price">${{ product.price }}</span>
      </li>
    </ul>
    <div class="button">
      <Button @click="minusPrice">减少价格：mutations(commit)</Button>
      <Button @click="minusPriceAsync">异步减少价格：actions(dispatch)</Button>
    </div>
  <div>留作测试vuex相关属性：{{computedData}}</div>
  </div>
</template>
<script>
const MINUS_PRICE='minusPrice'
export default {
  // props:['products'],
  data(){
    return {
      products:this.$store.state.products  //获取store中的state的数据
    }
  },
  computed:{
  computedData(){
    console.log('this.state',this.$store.state)
    this.$store.getters.saleProducts
    return 1
  }
},
methods: {
  minusPrice(){// 同步减少价格：commit
    // this.$store.commit('minusPrice',2)
    this.$store.commit({
      type:MINUS_PRICE,
      minusNum:5
    })
  },
  minusPriceAsync(){// 异步减少价格：dispatch
    this.$store.dispatch({
      type:'minusPriceAsync',
      minusNum:5
    })
  }
},
}
</script>
<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
.button{
  margin: 20px auto;
}
</style>