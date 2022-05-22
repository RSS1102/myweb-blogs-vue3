<template>
  <el-container>
    <el-header :style="{ display: router.currentRoute.value.fullPath == '/home/index' ? 'none' : 'block' }">
      <top-menu textColor="#000" backfroundColor="#fff" />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import topMenu from '../components/allponents/topMenu.vue';
// 返回当前路由地址
import router from '../router';
// console.log(router.currentRoute.value.fullPath)
</script>
<style lang="less" scoped>
html {
  overflow: hidden;
}

:v-deep(.el-container),
:v-deep(.el-header),
:v-deep(.el-main) {
  margin: 0;
  padding: 0;
}


.el-container,
.el-header,
.el-main {
  margin: 0;
  padding: 0;
}

// .el-header {
//   display: block;
// }
</style>