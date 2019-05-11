<template>
  <div>
    <el-table ref="singleTable" :data="addresses" highlight-current-row style="width: 100%">
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
      <el-table-column label="用户信息" width="300">
        <template slot-scope="scope">
          <el-row>姓名:{{scope.row.addressname}}</el-row>
          <el-row>电话:{{scope.row.phone}}</el-row>
        </template>
      </el-table-column>
      <el-table-column property="bakery.name" label="产品">
        <template slot-scope="scope">
          <el-row>省份:{{ scope.row.province }}</el-row>
          <el-row>城市:{{ scope.row. city }}</el-row>
          <el-row>区:{{ scope.row.area }}</el-row>
        </template>
      </el-table-column>
      <el-table-column label="街道">
        <template slot-scope="scope">{{scope.row.street}}</template>
      </el-table-column>
      <el-table-column label="详细地址">
        <template slot-scope="scope">详细地址{{scope.row.detail}}</template>
      </el-table-column>
      <el-table-column label="详细地址">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleEditClick(scope.row.id)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { addressService } from "./Address.service.js";
export default {
  async created() {
    const res = await addressService.getAddresses();
    if (!res.code) {
      this.addresses = res.body;
      console.log(this.addresses);
    }
  },
  data() {
    return {
      addresses: []
    };
  },
  methods: {
    async handleDeleteClick(e) {
      const res = await addressService.deleAddress(e);
      if (res.body.code === 2) {
        this.$message({ message: " 已经删除请刷新重试", type: "warning" });
      } else {
        this.$message({ message: "删除成功", type: "success" });
        console.log(res);
      }
    },
    handleEditClick(e) {
      this.$router.push(`address/${e}`);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>