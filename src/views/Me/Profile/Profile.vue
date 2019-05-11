<template>
  <div>
    <el-form :model="me" label-width="24%" label-position="left" size="large">
      <el-form-item label="用户名">
        <el-input v-model="me.username" autocomplete="off" disabled></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="me.nikename" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="me.phoneNumber" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      me: {}
    };
  },
  created() {
    this.me = this.$store.state.me;
    console.log(this.me);
  }
};
</script>

<style lang="scss" scoped>
.el-form {
  max-width: 1340px;
  margin: 0 auto;

  & /deep/ .el-form-item__label {
    font-weight: 600;
  }

  & /deep/ .el-form-item {
    margin-left: -1.5em;
    margin-right: -1.5em;
    border-bottom: 1px dotted #d0d0d0;
    padding: 0 1.5em 1em;
  }
}
</style>