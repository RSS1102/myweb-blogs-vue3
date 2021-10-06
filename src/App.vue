<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./components/pages/Login.vue";
export default {
  name: "app",
  components: {
    Login,
  },
};
</script>

<style>
</style>
