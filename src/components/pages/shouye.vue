<template>
  <div>
    <div class="remai-title"><p>近期热卖 <span>你想要的，都在这里</span></p></div>
    <ul class="remai">
      <li class="remaipic" v-for="(remai,key) in remais" :key="key"><img :src="remai.imgSrc" alt=""></li>
    </ul>
    <div class="tuijian-title"><p>猜你喜欢 <span>最懂你的，不只你自己</span></p></div>
    <ul class="tuijian">
      <li class="tuijianpic" v-for="(tuijian,key) in tuijians" :key="key"><img :src="tuijian.imgSrc" alt=""></li>
    </ul>
    <div class="renqi-title"><p>人气推荐</p></div>
    <ul class="renqi">
      <li class="renqipic" v-for="(renqi,key) in renqis" :key="key"><img :src="renqi.imgSrc" alt=""><p>{{renqi.goodsName}}</p></li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      remais: [],
      tuijians: [],
      renqis: []
    }
  },
  beforeCreate () {
    axios.all([
      axios.get('/shouye/remai'),
      axios.get('/shouye/tuijian'),
      axios.get('/shouye/renqi')
    ])
      .then(axios.spread((remai, tuijian, renqi) => {
        this.remais = remai.data.remai
        this.tuijians = tuijian.data.tuijian
        this.renqis = renqi.data.renqi
      }))
  }
}

</script>
<style>
/* .remai-title {

} */
.remai {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 70%;
  margin-left: 14%;
}
.remaipic {
  display: inline-block;
  width: 30%;
  height: 250px;
  margin-right: 5px;
  cursor: pointer;
}
.remaipic img {
  width: 100%;
  height: 100%;
}
.remai-title {
  margin-left: 14%;
  font-size: 28px;
  color: #409EFF
}
.remai-title span {
  font-size: 14px;
  color: #666;
}

.tuijian {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 70%;
  margin-left: 14%;
}
.tuijianpic {
  display: inline-block;
  width: 30%;
  height: 250px;
  margin-right: 5px;
  cursor: pointer;
}
.tuijianpic img {
  width: 100%;
  height: 100%;
}
.tuijian-title {
  margin-left: 14%;
  font-size: 28px;
  color: #409EFF
}
.tuijian-title span {
  font-size: 14px;
  color: #666;
}

.renqi {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 70%;
  margin-left: 14%;
}
.renqipic {
  display: inline-block;
  width: 25%;
  height: 250px;
  margin-right: 7%;
  cursor: pointer;
}
.renqipic p {
  text-align: center;
}
.renqipic img {
  width: 100%;
  height: 100%;
}
.renqi-title {
  margin-left: 14%;
  font-size: 28px;
  color: #409EFF
}
.renqi-title span {
  font-size: 14px;
  color: #666;
}
</style>
