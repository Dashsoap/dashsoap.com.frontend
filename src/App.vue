<template>
  <div id="app">
    <the-toolbar v-if="isVisible" class="toolbar"></the-toolbar>
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
  },
  async created() {
    this.$store.dispatch("login");
  }
};
</script>

<style lang="scss">
.toolbar {
  position: sticky;
  top: 0;
}
</style>
