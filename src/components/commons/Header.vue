<template>
  <header>
    <span>生活，需要一点精致</span>
    <ul class="header-links">
      <li><a href="#">个人中心</a></li>
      <li><a href="#">我的订单</a></li>
      <li><a href="#">消息</a></li>
      <li><a href="#">收藏</a></li>
    </ul>
    <div class="search"> <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input">
  </el-input></div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      input: ''
    }
  }
}
</script>
<style>
header {
  margin: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  /* background: #666; */
  border-bottom: 1px solid #cccccc;
  color: #666666;
}
header a {
  text-decoration: none;
  color: #666666;
}
header a:hover {
  color: #E6A23C;
}
header span {
  display: block;
  float: left;
  margin-left: 15%;
}
.header-links {
  list-style: none;
  width: 40%;
  float: right;
  margin: 0;
  padding: 0;
}
.header-links li {
  display: inline-block;
  margin-right: 50px;
}
.search {
  width: 150px;
  float: right;
  margin-right: 50px;
}
.el-input input{
  height: 20px;
  border-radius: 10px;
}
.el-input span {
  margin: 0;
}
</style>
