// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { currency } from './utils/currency'
import store from './store/index'

Vue.filter('currency', currency)

Vue.config.productionTip = false
Vue.use(Vuex)

const MINUS_PRICE='minusPrice'
// const store = new Vuex.Store({
//   state:{ // state：默认存储当前store所有数据：组件通过 this.$store.state即可获取
//     products:[
//       {name:'鼠标',price:20},
//       {name: '键盘', price: 40},
//       {name: '耳机', price: 60},
//       {name: '显示屏', price: 80}
//     ]
//   },
//   getters:{ // 相当于根组件的computed: 组件通过 this.$store.getters.方法名 获取
//     saleProducts:(state)=>{  // 价格减半
//       console.log('getter',state)
//       let saleProducts=state.products.map(product=>{
//         return{
//           name:product.name,
//           price:product.price/2
//         }
//       })
//       return saleProducts
//     }
//   },
//   mutations:{// 同步：更改store数据的事件：type(方法名) payload 通过 this.$store.commot({'minusPrice',2}) 调用
//   [MINUS_PRICE](state,payload){  // 减少价格
//       let newPrice=state.products.forEach(product=>{
//         // product.price -=payload;
//         product.price -=payload.minusNum;
//       })
//     }
//   },
//   actions:{ // 异步处理state：通过 this.$store.dispatch({type:MINUS_PRICE},payload)
//     //含有参数：context对象：test ({context:{ commit, state }}, {store:{products}}) {}
//     minusPriceAsync(context,payload){
//       console.log('actions minusPriceAsync',context,payload)
//       setTimeout(()=>{
//         context.commit(MINUS_PRICE,payload)
//       },2000)
//     }
//   },

// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // storeShopping,
  router,
  components: { App },
  template: '<App/>'
})
