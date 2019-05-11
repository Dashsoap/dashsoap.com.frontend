<template>
  <div>
    {{address}}
    <el-form :model="address" label-width="24%" label-position="left" size="large">
      <el-form-item label="用户名">
        <el-input v-model="address.addressname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label=" 手机号">
        <el-input v-model="address.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label=" 省份">
        <el-input v-model=" address.province" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label=" 城市">
        <el-input v-model=" address. city" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="  区">
        <el-input v-model=" address.area" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label=" 街区">
        <el-input v-model=" address.street" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label=" 详情">
        <el-input v-model=" address.detail" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>

    <el-button type="primary" @click="onSubmit">保存</el-button>
  </div>
</template>

<script>
import { addressService } from "../Address.service.js";

export default {
  async created() {
    const res = await addressService.getAddress(this.$route.params.id);
    this.address = res.body;
  },
  data() {
    return {
      address: {}
    };
  },
  methods: {
    async onSubmit() {
      const data = {
        id: this.address.id,
        addressname: this.address.addressname,
        phone: this.address.phone,
        province: this.address.province,
        city: this.address.city,
        area: this.address.area,
        street: this.address.street,
        detail: this.address.detail,
        isDefault: this.address.isDefault
      };
      const id = this.address.id;
      const body = {
        id: id,
        data: data
      };
      const res = await addressService.updataAddress(body);
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>