<template>
  <el-carousel :interval="4000" type="card" height="250px">
    <el-carousel-item v-for="item in 5" :key="item">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Picshow'
//   data () {
//     return {
//     }
//   }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(3) {
    background-color: #F56C6C;
  }
  .el-carousel__item:nth-child(4) {
    background-color: #909399;
  }
  .el-carousel__item:nth-child(5) {
    background-color: #E6A23C;
  }
  .el-carousel__item:nth-child(6) {
    background-color: #67C23A;
  }
 .el-carousel__item:nth-child(7) {
    background-color: #409EFF;
  }
  .el-carousel {
      margin-top: 60px;
      margin-bottom: 60px;
  }

</style>
