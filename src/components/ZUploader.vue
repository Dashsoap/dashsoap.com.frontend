
<template>
  <div>
    <el-button :loading="loading>0" type="primary" icon="el-icon-upload2" @click="onBtnClick">
      <span v-if="loading >0">{{percent}}%</span>
      <slot v-else></slot>
    </el-button>
    <input :accept="accept" type="file" v-show="false" ref="uploadBtn" @input="onSelectFile">
  </div>
</template>

<script>
import Axios from "axios";
import shortid from "shortid";
import * as qiniu from "qiniu-js";

function getToken() {
  return Axios.get("/api/upload").then(res => {
    if (!res.data.code) {
      return res.data.body;
    } else {
      return {};
    }
  });
}

export default {
  data() {
    return {
      loading: 0,
      percent: 0
    };
  },
  props: {
    value: {
      type: String,
      required: true
    },
    accept: {
      type: String
    }
  },
  computed: {
    url: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    }
  },
  methods: {
    onBtnClick() {
      this.$refs.uploadBtn.click();
    },
    async onSelectFile(e) {
      const { token, host } = await getToken();
      const file = e.target.files[0];
      const key = file.name.replace(/^.+\./, `${shortid.generate()}.`);
      const observable = qiniu.upload(file, key, token);
      this.loading++;
      this.percent = 0;
      observable.subscribe({
        next: res => {
          this.percent = Math.floor(res.total.percent);
        },
        error: err => {
          this.$message.error(err.toString());
          this.loading--;
        },
        complete: res => {
          this.url = host + "/" + key;
          this.loading--;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>