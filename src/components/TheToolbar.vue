<template>
  <div class="the-toolbar">
    <el-row type="flex" align="middle" justify="space-between">
      <div>
        <h1>New Bakery</h1>
      </div>

      <div class="icon-group">
        <i class="iconfont icon-chat"></i>

        <el-dropdown placement="top" @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="iconfont icon-user"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <div v-if="isLogin">
              <el-dropdown-item command="profile">我的资料</el-dropdown-item>
              <el-dropdown-item command="me">我的页面</el-dropdown-item>
              <el-dropdown-item command="logout">登出</el-dropdown-item>
            </div>
            <div v-else>
              <el-dropdown-item command="aboutus">关于我们</el-dropdown-item>
              <el-dropdown-item command="login">会员登录</el-dropdown-item>
              <el-dropdown-item command="register">新会员注册</el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
        <i class="iconfont icon-cart" @click="gotoCart"></i>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.state.me;
    }
  },
  methods: {
    gotoCart() {
      this.$router.push("/cart");
    },
    handleCommand(command) {
      switch (command) {
        case "profile":
          this.$message("click on item " + command);
          break;
        case "me":
          this.$message("click on item " + command);
          break;
        case "logout":
          this.$message("click on item " + command);
          this.$store.dispatch("logout");

          break;
        case "aboutus":
          this.$router.push("/");
          break;
        case "login":
          this.$router.push("/login");

          break;
        case "register":
          this.$router.push("/register");
          break;

        default:
          break;
      }
    }
  }
};
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
  z-index: 1;
}
h1 {
  font-family: "Indie Flower", cursive;
}
</style>