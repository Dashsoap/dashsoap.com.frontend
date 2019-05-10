<template>
  <div class="cart">
    <h1>购物车</h1>
    <div class="steps">
      <el-steps :active="0" finish-status="success" simple>
        <el-step :title="steps1"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
    </div>
    <cart-table :bakerys="bakery"></cart-table>
    <el-row type="flex" justify="end" align="middle">
      <el-col :span="2">
        <h4>合计:</h4>
      </el-col>
      <el-col :span="4">
        <span class="money">{{num}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { CartService } from "./Cart.service.js";
import CartTable from "./components/CartTable";
export default {
  components: {
    CartTable
  },
  async created() {
    const cartId = this.$store.state.me.cart.id;
    const res = await CartService.getCart(cartId);
    const code = res.code;
    if (!code) {
      this.bakery = res.body;
      this.steps1 = `${this.bakery.length}个项目`;
    }
    this.num = await CartService.getCount(res);
  },
  data() {
    return {
      bakery: [],
      steps1: "",
      steps2: "等待付款",
      steps3: "完成",
      num: 0
    };
  },
  methods: {
    handleDeleteClick(e) {}
  }
};
</script>

<style lang="scss" scoped>
h1 {
  border-bottom: 1px solid black;
  padding-bottom: 10px;
}
img {
  width: 100%;
}
.cart {
  width: 1600px;
  margin: 20px auto;
}
.steps {
  width: 550px;
  margin: 0 auto;
}
.bakery-table {
  max-width: 1200px;
  margin: 20px auto;
}
.table-title {
  background: #f4f3f0;
  text-align: center;
  padding: 16px 8px;
}
.table-item {
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #f4f3f0;
  display: flex;
  align-items: center;
}
.money {
  font-size: 2.8rem;
  color: #b69931;
}
</style>