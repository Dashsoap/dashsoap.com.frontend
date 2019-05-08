<template>
  <div class="the-content">
    <the-toolbar class="toolbar"></the-toolbar>
    <static-display></static-display>
    <el-row :gutter="30" class="bakery-row">
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        v-for="(o, index) in bakery"
        :key="index"
        class="bakery-col"
      >
        <div class="bakery-card" @click="onCardClick(o)">
          <img :src="o.picture">
        </div>
        <div class="bakery-name">{{o.name}}</div>
        <b>¥{{o.price}}/个</b>
      </el-col>
    </el-row>
    <!-- <z-uploader v-model="fileUrl" accept="image/png, image/jpeg">点击上传</z-uploader>
    <img :src="fileUrl">-->
  </div>
</template>

<script>
import { HomeService } from "../Home.service.js";
import StaticDisplay from "./StaticDisplay.vue";
export default {
  components: {
    StaticDisplay
  },
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
  },
  methods: {
    onCardClick(e) {
      this.$router.push(`/bakery/${e.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.the-content {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
}
.toolbar {
  position: sticky;
  top: 0;
}
.bakery-card {
  margin-bottom: 25px;

  position: relative;
  img {
    height: 100%;
    width: 100%;
    filter: grayscale(0.5);
    transition: 0.3s;
    cursor: pointer;
  }
  img:hover {
    filter: grayscale(0);
  }
}
.bakery-name {
  margin-bottom: 7px;
  cursor: pointer;
}
.bakery-name:hover {
  text-decoration: underline;
}
.bakery-col {
  margin-bottom: 50px;
}
</style>