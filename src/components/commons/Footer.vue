<template>
  <footer>
    <div class="over-footer">
      <div class="tuihuo">
        <span ><i class="iconfont icon-qitianwuliyoutuihuanhuo"></i></span>
        <p>七天无忧退换</p>
      </div>
      <div class="包邮">
        <span ><i class="iconfont icon-man88yuanbaoyou"></i></span>
        <p>全场满88包邮</p>
      </div>
      <div class="tuihuo">
        <span ><i class="iconfont icon-zhengpinbaozhang"></i></span>
        <p>自营品质保证</p>
      </div>
    </div>
    <div class="under-footer">
      <ul>
        <li><a href="#">关于我们</a></li>
        <li><a href="#">售后帮助</a></li>
        <li><a href="#">联系热线</a></li>
        <li><a href="#">友情链接</a></li>
        <li><a href="#">企业采购</a></li>
        <li><a href="#">商务合作</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
footer {
  margin-top: 60px;
  background-color: #666;
  color: #fff;
  padding: 20px 0;
  clear: both;
}
.over-footer {
  width: 60%;
  margin: 0 20%;
  height: 60px;
  padding: 0 5%;
}
.over-footer i {
  display: inline-block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 50px;
  float: left;
}
.over-footer p {
  margin: 0;
  font-weight: bold;
  font-size: 16px;
  height: 60px;
  line-height: 60px;
}
.over-footer div {
  width: 30%;
  float: left;
}
.under-footer {
  margin-top: 20px;
  border-top: 1px solid #fff;
}
.under-footer ul {
  list-style: none;
  padding: 5px;
  margin: 20px 0 0 0;
  margin-left: 30%;
  width: 60%;
}
.under-footer ul li {
  display: inline-block;
  margin: 0 10px;
  font-size: 12px;
}
.under-footer ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
}
</style>
