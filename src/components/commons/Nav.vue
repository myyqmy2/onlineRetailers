<template>
  <div class="nav-container">
    <el-row :gutter="0">
      <el-col :span="3" ><div :class="{active:isActive[1]}" @click="isSelect(1)"><router-link to="/">首页</router-link></div></el-col>
      <el-col :span="3" ><div :class="{active:isActive[2]}" @click="isSelect(2)"><router-link to="/fushi">服饰</router-link></div></el-col>
      <el-col :span="3" ><div :class="{active:isActive[3]}" @click="isSelect(3)"><router-link to="/shipin">食品</router-link></div></el-col>
      <el-col :span="3" ><div :class="{active:isActive[4]}" @click="isSelect(4)"><router-link to="/dianqi">电器</router-link></div></el-col>
      <el-col :span="3" ><div :class="{active:isActive[5]}" @click="isSelect(5)"><router-link to="/shuma">数码</router-link></div></el-col>
      <el-col :span="3" ><div :class="{active:isActive[6]}" @click="isSelect(6)"><router-link to="/jiaju">家居</router-link></div></el-col>
      <el-col :span="3" ><div :class="{active:isActive[7]}" @click="isSelect(7)"><router-link to="/muying">母婴</router-link></div></el-col>
      <el-col :span="3" ><div :class="{active:isActive[8]}" class="shopping-cart" @click="isSelect(8)"><router-link to="/cart">购物车<span class="tagMes" v-show="getCartgoods.length">{{getCartgoods.length}}</span></router-link></div></el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Nav',
  data () {
    return {
      isActive: ['', true]
    }
  },
  computed: mapGetters([
    'getCartgoods'
  ]),
  methods: {
    isSelect (index) {
      this.isActive = []
      this.isActive[index] = true
      console.log(index)
    }
  }
}
</script>
<style>
/* .showPic img {
  width: 100px;
  height: 100px;
} */
div.nav-container {
  position: relative;
  width: 70%;
  margin-left: 12%;
  border-bottom: 1px solid #aaa;
}
.el-col div {
  transition: color .1s ease-in;
  text-align: center;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.active {
  position: relative;
  color: #E6A23C;
}
.nav-container a {
  display: block;
  width: 100%;
  height: 100%;
}
.active a:visited {
  color: #E6A23C;
}
.active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  /* left: 50%; */
  /* margin-left: -26px; */
  margin: 0 auto;
  display: block;
  width: 52px;
  height: 0;
  border: 2px solid #E6A23C;
}
.shopping-cart {
  position: relative;
}
.tagMes {
  position: absolute;
  right: 22px;
  top: 5px;
  display: block;
  width: 15px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  background: red;
  border-radius: 50%;
}
</style>
