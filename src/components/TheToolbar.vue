<template>
  <div class="the-toolbar">
    <el-row type="flex" align="middle" justify="space-between">
      <div>
        <h1>New Bakery</h1>
      </div>

      <div class="icon-group">
        <i class="iconfont icon-chat"></i>
        <i class="iconfont icon-user"></i>
        <i class="iconfont icon-cart"></i>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.icon-group {
  i {
    font-size: 2em;
    padding-left: 1em;
  }
}
.the-toolbar {
  padding: 0 5%;
  background: rgba($color: #fff, $alpha: 0.9);
}
h1 {
  font-family: "Indie Flower", cursive;
}
</style>