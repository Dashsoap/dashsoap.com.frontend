<template>
  <div class="the-content">
    <the-toolbar class="toolbar"></the-toolbar>
    {{bakery}}
    <z-uploader v-model="fileUrl" accept="image/png, image/jpeg">点击上传</z-uploader>
    <img :src="fileUrl">
  </div>
</template>

<script>
import { HomeService } from "../Home.service.js";
export default {
  data() {
    return {
      fileUrl: "",
      bakery: []
    };
  },
  async created() {
    const res = await HomeService.getBakery();
    if (!res.code) {
      this.bakery = res.body;
    }
  }
};
</script>

<style lang="scss" scoped>
.the-content {
  height: 200vh;
}
.toolbar {
  position: sticky;
  top: 0;
}
</style>