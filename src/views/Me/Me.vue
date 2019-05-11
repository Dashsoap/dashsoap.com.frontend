<template>
  <div class="me">
    <h1>我的页面</h1>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="6" class="item">
        <router-link to="/me/history">订单历史</router-link>
      </el-col>
      <el-col :span="6" class="item">
        <router-link to="/me/profile">用户个人资料页</router-link>
      </el-col>
      <el-col :span="6" class="item">
        <router-link to="/me/address">送货地址编辑</router-link>
      </el-col>
      <el-col :span="6" class="item">
        <a href="javascript:;">退出登录</a>
      </el-col>
    </el-row>
    <el-row class="welcome pb-2 mb-2">欢迎/{{$store.state.me.nickname}}</el-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  padding-bottom: 30px;
  font-weight: 400;
  border-bottom: 1px dashed #d0d0d0;
}
.me {
  width: 1600px;
  margin: 0 auto;
}
.item {
  margin: 30px 0;
  font-weight: bold;
  color: #525263;
  display: block;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: 0.3s;
  border-color: #d0d0d0;
  border-style: solid;
  border-width: 1px 1px;
  a {
    text-decoration: none;
    display: block;
    color: #525263;
    padding: 16px;
  }
  a.router-link-active {
    color: #de5d50;
  }
}

.item:hover {
  background-color: #e7e7e7;
  text-decoration: underline;
}
.welcome {
  border-bottom: 1px dashed #d0d0d0;
  text-align: center;
}
</style>