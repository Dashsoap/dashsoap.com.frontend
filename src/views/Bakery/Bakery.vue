<template>
  <div class="bakery">
    <el-row :gutter="100">
      <el-col :span="12" class="content-left">
        <img :src="pic" class="big-img">
        <el-row :gutter="50" class="small-img">
          <el-col :span="8">
            <img :src="pic1" @click="changePic(pic1)">
          </el-col>
          <el-col :span="8">
            <img :src="pic2" @click="changePic(pic2)">
          </el-col>
          <el-col :span="8">
            <img :src="pic3" @click="changePic(pic3)">
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" class="content-right">
        <h3>{{bakery.name}}</h3>
        <h4>¥ {{bakery.price}}-含税</h4>
        <div>
          <div class="detail">
            <el-row class="the-row">
              <el-col :span="3">
                <span>保质期:</span>
              </el-col>
              <el-col :span="19">
                <span>{{bakery.freshkeeping}}</span>
              </el-col>
            </el-row>
            <el-row class="the-row">
              <el-col :span="3">
                <span>重量:</span>
              </el-col>
              <el-col :span="19">
                <span>{{bakery.weight}}</span>
              </el-col>
            </el-row>
          </div>
          <div class="detail">
            <el-row class="the-row">
              <el-col :span="3">
                <span>已售:</span>
              </el-col>
              <el-col :span="19">
                <span>{{bakery.sales}}</span>
              </el-col>
            </el-row>
            <el-row class="the-row">
              <el-col :span="3">
                <span>剩余:</span>
              </el-col>
              <el-col :span="19">
                <span>{{bakery.remainder}}</span>
              </el-col>
            </el-row>
            <el-row class="the-row">
              <el-col :span="3">
                <span>价格:</span>
              </el-col>
              <el-col :span="19">
                <span>
                  {{bakery. price}}/个
                  <span class="vip-price">&nbsp;{{bakery.priceVip}}/个 (VIP)</span>
                </span>
              </el-col>
            </el-row>
          </div>
          <el-row class="input">
            <el-col :span="3">数量:</el-col>
            <el-col :span="19">
              <el-input-number
                v-model="num"
                controls-position="right"
                :min="1"
                :max="bakery.remainder"
              ></el-input-number>
            </el-col>
          </el-row>
          <div class="mt-1">
            <el-button type="primary">加入购物车</el-button>
          </div>
          <p>{{bakery.discreption}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { BakeryService } from "./Bakeru.service.js";
import { log } from "util";
export default {
  data() {
    return {
      bakery: {},
      pic1: "",
      pic2: "",
      pic3: "",
      pic: "",
      num: 1
    };
  },
  async created() {
    const res = await BakeryService.getBakery(this.$route.params.id);
    if (!res.code) {
      this.bakery = res.body;
      console.log(this.bakery);
      this.pic1 = this.bakery.picture;
      this.pic2 = this.bakery.detailpic1;
      this.pic3 = this.bakery.detailpic2;
      this.pic = this.pic1;
    }
  },
  mounted() {
    console.log(this.$route.params.id);
  },
  methods: {
    changePic(e) {
      this.pic = e;
    }
  }
};
</script>

<style lang="scss" scoped>
.bakery {
  max-width: 1600px;
  margin: 20px auto;
}
.big-img {
  width: 100%;
}
.small-img {
  img {
    width: 100%;
  }
}
h3 {
  font-size: 40px;
  margin: 0;
  padding-bottom: 20px;
}
h4 {
  font-size: 32px;
  color: #b69931;
  margin: 0;
  border-bottom: 1px dotted #ccc;
}
.the-row {
  padding: 5px 0;
}
.detail {
  border-bottom: 1px dotted #ccc;
}
.vip-price {
  color: red;
}
.input {
  padding: 8px 0;
  border-bottom: 1px dotted #ccc;
}
</style>