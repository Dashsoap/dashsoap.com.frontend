<template>
  <el-table ref="singleTable" :data="bakerys" highlight-current-row style="width: 100%">
    <el-table-column label="删除" width="120">
      <template slot-scope="scope">
        <el-button
          type="danger"
          icon="el-icon-delete"
          circle
          @click="handleDeleteClick(scope.row.id)"
        ></el-button>
      </template>
    </el-table-column>
    <el-table-column property="bakery.name" label="图片" width="300">
      <template slot-scope="scope">
        <img :src="scope.row.bakery.picture">
      </template>
    </el-table-column>
    <el-table-column property="bakery.name" label="产品">
      <template slot-scope="scope">
        <el-row>名称:{{ scope.row.bakery.name }}</el-row>
        <el-row>重量:{{ scope.row.bakery. weight }}</el-row>
        <el-row>保质期:{{ scope.row.bakery.freshkeeping }}</el-row>
      </template>
    </el-table-column>
    <el-table-column label="数量">
      <template slot-scope="scope">
        <el-input-number v-model="scope.row.count" :min="1" :max="10" label="描述文字"></el-input-number>
      </template>
    </el-table-column>
    <el-table-column label="价格">
      <template slot-scope="scope">
        <span v-if="role==='PUBLIC'">{{scope.row.count*scope.row.bakery.price}}</span>
        <span v-else>{{scope.row.count*scope.row.bakery.priceVip}}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { CartService } from "../Cart.service.js";

export default {
  props: {
    bakerys: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {
    this.role = this.$store.state.me.role;
    console.log(this.role);
  },
  data() {
    return {
      bakery: [],
      currentRow: null,
      role: ""
    };
  },

  methods: {
    async handleDeleteClick(e) {
      const res = await CartService.deleBakery(e);
      if (res.body.code === 2) {
        this.$message({ message: " 已经删除请刷新重试", type: "warning" });
      } else {
        this.$message({ message: "删除成功", type: "success" });
        console.log(res);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
