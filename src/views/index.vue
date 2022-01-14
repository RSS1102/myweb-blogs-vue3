<template>
  <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
    <el-image :src="imgUlr" @click="goHome"></el-image>
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">我的博客</el-menu-item>
    <el-menu-item index="3">交流</el-menu-item>
    <el-menu-item index="4">作品展示</el-menu-item>
    <el-menu-item index="5">联系我</el-menu-item>
  </el-menu>
  <div class="h-6">123</div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
// 添加logo
import imgurl from '../assets/home/logo.png'
const imgUlr = ref(imgurl);
const goHome=()=>{
}
/**
 * 路由
 * activeIndex默认路由
 */
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style lang="less">
// .el-menu {
// }
.el-image {
  width: 60px;
  height: 50px;
  padding: 0 10px 0 10px;
  margin-left: 250px;
}
.el-menu-item {
  font-weight: bold;
}
</style>