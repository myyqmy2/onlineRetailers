<template>
<div>
  <ul class="shuma">
    <li class="good" v-for="good in goods" :key="good.goodsId">
    <img :src="good.imgSrc" alt="">
    <p>{{good.goodsName}}<br />{{'￥' + good.goodsPrice}}</P>
    <button @click="addToCart(good)" title="加入购物车"><i class="iconfont icon-31gouwuche"></i></button>
    </li>
  </ul>
</div>
</template>
<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      goods: []
    }
  },
  beforeCreate () {
    axios.get('/shuma').then(response => {
      this.goods = response.data.shuma
      console.log(this.goods)
    })
  },
  computed: mapGetters([
    'getCartgoods'
  ]),
  methods: {
    ...mapActions([
      'addToCart'
    ])
  }
}
</script>
<style>
  .shuma {
    list-style: none;
    width: 70%;
    margin-left: 20%;
    margin-top: 60px;
    padding:0;
  }
  .shuma li {
    position: relative;
    margin-bottom: 50px;
    width: 30%;
    float: left;
    height: 300px;
  }
  .shuma li img {
    width: 200px;
    height: 200px;
  }
  .shuma li p {
    margin: 10px 0 0 0;
    color: #333;
    font-size: 13px;
  }
  .shuma li button {
    position: absolute;
    top: 215px;
    left: 160px;
  }
  .shuma li button:hover {
    cursor: pointer;
  }
</style>
