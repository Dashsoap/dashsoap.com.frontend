<template>
  <div class="container">
    <div class="logo mt-3">
      <h1>登录</h1>
    </div>
    <el-card shadow="never">
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="username">
          <span>用户名</span>
          <el-input
            autofocus
            tabindex="1"
            v-model="form.username"
            placeholder="请输入用户名"
            @keyup.native.enter="onSubmit"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-row type="flex" justify="space-between">
            <span>密码</span>
            <router-link to="/forget/password">忘记密码</router-link>
          </el-row>
          <el-input
            tabindex="2"
            type="password"
            v-model="form.password"
            placeholder="请输入密码"
            @keyup.native.enter="onSubmit"
          ></el-input>
        </el-form-item>
        <el-button :loading="loading>0" type="primary" round @click="onSubmit">立即登录</el-button>
      </el-form>
    </el-card>
    <el-card shadow="never" class="mt-2">
      <el-row type="flex" justify="center">
        新用户?&nbsp;
        <router-link to="/register">立即注册</router-link>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import { AxiosDefault } from "../../plugins/axios";

export default {
  data() {
    return {
      loading: 0,
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async result => {
        /** 表单验证成功 */
        if (result) {
          this.loading++;
          const { data } = await AxiosDefault.post("/api/auth", this.form);
          /** 将token存入cookie内 */
          if (!data.code) {
            Cookie.set("token", data.body);
            await this.$store.dispatch("login");
            const { roles } = this.$store.state.me;
            let next = roles && roles.includes("ADMIN") ? "/admin" : "/";
            this.$router.push(this.$route.query.next || next);
          }
          this.loading--;
        }
      });
    }
  },
  beforeCreate() {
    document.title = "登录 | 新烘焙";
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: rgb(249, 249, 249);
}

.logo {
  text-align: center;

  img {
    display: inline-block;
    height: 60px;
    width: auto;
  }

  h1 {
    font-size: 1.6rem;
    font-weight: 400;
  }
}

.el-form {
  button {
    width: 100%;
  }
}

.el-form-item >>> .el-form-item__label {
  text-align: left;
  width: 100%;
  z-index: 1;
}

.el-card {
  min-width: 300px;
}
</style>