import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/card'
import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  // strict: debug,
})