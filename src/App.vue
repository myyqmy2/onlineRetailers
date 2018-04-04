<template>
  <div id="app">
    <Header></Header>
    <Picshow></Picshow>
    <Nav></Nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/commons/Header'
import Picshow from '@/components/commons/Picshow'
import Nav from '@/components/commons/Nav'
import Footer from '@/components/commons/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Picshow,
    Nav,
    Footer
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  min-width:950px;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  width: 100%;
}
a {
  text-decoration: none;
  color: #000;
}

</style>
