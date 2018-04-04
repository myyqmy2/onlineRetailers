import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  added: [],
  checkoutOk: false
}

const getters = {
  getCartgoods (state, getters) {
    return state.added
  },
  totalPrice (state, getters) {
    return state.added.reduce((total, goods) => {
      return total + goods.goodsPrice * goods.quantity
    }, 0)
  },
  getCheckoutStatus (state, getters) {
    return state.checkoutOk
  }
}

const actions = {
  checkout ({commit, state}) {
    commit('setStatus', true)
    commit('setCartItems', {item: []})
  },
  addToCart ({commit, state}, goods) {
    commit('setStatus', false)
    const cartItem = state.added.find(item => item.goodsId === goods.goodsId)
    if (!cartItem) {
      commit('pushGoodsToCart', goods)
    } else {
      commit('incrementItemQuantity', cartItem)
    }
  },
  removeCartItem ({commit, state}, goods) {
    commit('removeCartGoods', goods)
  },
  incrementQuantity ({commit, state}, goods) {
    commit('incrementItemQuantity', goods)
  }
}

const mutations = {
  pushGoodsToCart (state, item) {
    state.added.push(Object.assign(item, {quantity: 1}))
  },
  incrementItemQuantity (state, {goodsId}) {
    const cartItem = state.added.find(item => item.goodsId === goodsId)
    cartItem.quantity++
  },
  removeCartGoods (state, {goodsId}) {
    const index = state.added.findIndex(item => item.goodsId === goodsId)
    state.added.splice(index, 1)
  },
  reduceItemQuantity (state, {goodsId}) {
    const cartItem = state.added.find(item => item.goodsId === goodsId)
    cartItem.quantity--
  },
  setCartItems (state, {item}) {
    state.added = item
  },
  setStatus (state, value) {
    state.checkoutOk = value
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
