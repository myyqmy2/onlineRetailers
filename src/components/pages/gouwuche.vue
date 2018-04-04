<template>
  <div class="cart-container">
    <div v-show="!getCartgoods.length&&!getCheckoutStatus" class="nogoods">
      <p>购物车里面还没有东西哦，快去挑选一下吧~</p>
    </div>
    <div v-show="!getCartgoods.length&&getCheckoutStatus" class="checkoutok">
      <p>恭喜你，下单成功~</p>
    </div>
    <div class="cartgoods" v-if="getCartgoods.length">
      <div class="cart-header">
        <ul>
          <li>商品信息</li>
          <li>商品数量</li>
          <li>商品单价</li>
          <li>小计</li>
          <li>操作</li>
        </ul>
      </div>
      <ul>
        <li id="goodsMes" v-for="goods in getCartgoods" :key="goods.id">
          <ul class="goodsMes">
            <li><img :src="goods.imgSrc" alt="">{{goods.goodsName}}</li>
            <li>{{goods.quantity}}</li>
            <li>{{goods.goodsPrice}}</li>
            <li>{{goods.goodsPrice * goods.quantity}}</li>
            <li><span class="removebtn" @click="removeCartItem(goods)">删除该商品</span></li>
          </ul>
        </li>
      </ul>
      <div class="cart-footer">
        <p>合计：<span>{{totalPrice}}</span></p>
        <button @click="checkout">下单</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'getCartgoods',
    'totalPrice',
    'getCheckoutStatus'
  ]),
  methods: {
    ...mapActions([
      'checkout',
      'removeCartItem',
      'addToCart'
      // 'incrementQuantity'
    ])
  }
}
</script>

<style>
.cart-container {
  background: #fff0f0;
  width: 66%;
  margin-left: 14%;
}
.cart-container ul {
  list-style: none;
  margin-top: 20px;
  padding: 0;
}
.cart-container li {
  display: inline-block;
  width: 13%;
  text-align: center;
}
.cart-container li:nth-child(1) {
  width: 42%;
  margin-right: 4%;
}
.cart-container li img {
  position: relative;
  top: 50px;;
  width: 100px;
  height: 100px;
  margin-left: 20px;
  margin-right: 20px;
}
#goodsMes {
  width: 100%;
}
#goodsMes ul {
  height: 100px;
}
#goodsMes ul li {
  margin-top: -50px;
}
.goodsMes li:nth-child(1) {
  text-align: left;
}
.cart-footer {
  position: relative;
  margin-top: 20px;
  height: 100px;
}
.cart-footer p {
  width: 250px;
  height: 100px;
  line-height: 100px;
  margin: 0;
  display: inline-block;
  float: right;
}
.cart-footer button {
  position: absolute;
  bottom: 25px;
  right: 25px;
  width: 100px;
  height: 50px;
}
.nogoods {
  position: relative;
  height: 400px;
}
.nogoods p {
  position: absolute;
  left: 0;
  right: 0;
  top:160px;
  margin:0 auto;
  width: 40%;
  font-size: 18px;
  color: #666;
}
.checkoutok {
  position: relative;
  height: 400px;
}
.checkoutok p {
  position: absolute;
  left: 0;
  right: 0;
  top:160px;
  margin:0 auto;
  width: 25%;
  font-size: 22px;
  color: #67C23A;
}
.removebtn:hover {
  color: red;
  cursor: pointer;
}
</style>
