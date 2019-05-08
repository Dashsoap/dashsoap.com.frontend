<template>
  <div class="the-footer">
    <el-row class="img-row">
      <el-col :span="12">
        <div class="left-img"></div>
      </el-col>
      <el-col :span="12">
        <div class="right-img"></div>
      </el-col>
    </el-row>

    <el-row>
      <div class="single-line">
        <div class="row">
          <span>关于我们</span>
          <span>关于我们</span>
          <span>关于我们</span>
          <span>关于我们</span>
        </div>
      </div>
    </el-row>
    <el-row class="logo-row">
      <img src="http://pr2xg32u8.bkt.clouddn.com/WeChat7f6544dce0e5182f01056c96d66ce9aa.png">
      <div>2019 &copy; New Bakery</div>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
.the-footer {
  background-color: white;
}
.left-img {
  background-image: url("http://pr2xg32u8.bkt.clouddn.com/bread-1284438_1920.jpg");
  background-size: cover;
  width: 100%;
  height: 400px;
}
.right-img {
  background-image: url("http://pr2xg32u8.bkt.clouddn.com/croissants-569075_1920.jpg");
  width: 100%;
  height: 400px;
  background-size: cover;
}
.img-row {
  max-width: 1600px;
  margin: 0 auto;
  padding: 50px 0;
}
.single-line {
  width: 1600px;
  border-top: 1px solid #c3c3c3;
  border-bottom: 1px solid #c3c3c3;
  margin: 10px auto;
}
.logo-row {
  max-width: 300px;
  margin: 0 auto;
  padding: 60px 0 20px;
  div {
    text-align: center;
  }
}
.row {
  padding: 60px 0;
  width: 500px;
  margin: 0 auto;
  text-align: center;
  span {
    text-align: center;
    margin: 10px;
    cursor: pointer;
  }
  span:hover {
    text-decoration: underline;
  }
}
</style>