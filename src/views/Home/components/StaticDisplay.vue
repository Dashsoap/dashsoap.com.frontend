<template>
  <div>
    <el-row :gutter="100">
      <el-col :span="13">
        <img src="http://pr2xg32u8.bkt.clouddn.com/bread-4183076_1920.jpg" class="the-img">
      </el-col>
      <el-col :span="11">
        <h1>
          仅用阳光和山水栽培，
          <br>不使用肥料或杀虫剂
        </h1>
        <p>为真爱会员提供严选面包, 没能逮到心仪的美味? 线上购买送到家</p>
        <p>只属于会员的真爱口令 1728 真爱码 新烘焙网上商城消费, 在结算页面输入真爱口令, 会有专属于会员的小确幸哦</p>
        <p>凡关注新烘焙网上商城并注册的新会员 将在购买第一单商品的时候买一赠一</p>
        <p>你将获得一张超级骑士券全场包邮有效期一周, 一张超级骑士券全场包邮有效期两周,一张真爱券指定商品减免 5 元</p>
      </el-col>
    </el-row>
    <el-row class="img-grid">
      <el-col :span="8">
        <img src="http://pr2xg32u8.bkt.clouddn.com/pic_top04.jpg-fix" class="the-img">
      </el-col>
      <el-col :span="8">
        <img src="http://pr2xg32u8.bkt.clouddn.com/pic_top02.jpg-fix" class="the-img">
      </el-col>
      <el-col :span="8">
        <img src="http://pr2xg32u8.bkt.clouddn.com/wheat-3241114_1920.jpg-fix" class="the-img">
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.the-img {
  max-width: 100%;
}
.img-grid {
  margin: 90px 0;
}
h1 {
  margin: 0 0 50px;
  font-weight: 300;
}
p {
  line-height: 2.5;
  margin-bottom: 35px;
  color: #333;
  font-weight: 300;
}
</style>