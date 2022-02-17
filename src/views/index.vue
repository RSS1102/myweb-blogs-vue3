<template>
  <el-container>
    <el-header>
      <el-menu
        mode="horizontal"
        @select="handleSelect"
        :default-active="defRouters"
        background-color="  #248ac533"
        router
      >
        <el-image :src="imgUlr" @click="goHome"></el-image>
        <el-menu-item index="/home/index">首页</el-menu-item>
        <el-menu-item index="/blogs/index">我的博客</el-menu-item>
        <el-menu-item index="/product/index">作品展示</el-menu-item>
        <el-menu-item index="/communication/index">交流</el-menu-item>
        <el-menu-item index="6">共同学习</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>

import { ref, computed } from "vue";
import { useRoute } from "vue-router";
// 添加logo
import imgurl from '../assets/favicon.ico'
const imgUlr = ref(imgurl);
const goHome = () => {
}
/**
 * 默认路由状态
 * 
 */
const route = useRoute();
let defRouters = computed(() => {
  return route.path
})
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
}


</script>
<style lang="less" scoped>
html {
  overflow-x: hidden;
}
// 去掉Container的padding
:v-deep(.el-container),
:v-deep(.el-header),
:v-deep(.el-main),
:v-deep(.el-footer) {
  margin: 0;
  padding: 0;
}
.el-container,
.el-header,
.el-main,
.el-footer {
  padding: 0;
}
.el-container {
  height: 100vh;
}

.el-main {
  height: 100%;
}
.el-menu {
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.el-image {
  width: 3em;
  height: 3em;
  margin: 5px 25px 0 0;
}
.el-menu-item {
  font-weight: bold;
}
</style>