<template>
  <div id="app">
    <the-toolbar v-if="isVisible"></the-toolbar>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>
<script>
export default {
  computed: {
    isVisible() {
      const nameList = ["home"];
      return !nameList.includes(this.$route.name);
    }
  }
};
</script>

<style lang="scss">
</style>
