<template>
  <div class="nav-bar" v-loading="loading">
    <div class="side-nav-bar">
      <div class="side-nav-bar-title" @click="goIndex()">
        <img />
        <div class="name">RSS1102</div>
      </div>
      <div class="menu">
        <el-menu default-active="1" v-for="(titleItem, nav) in BlogMenu">
          <el-sub-menu index>
            <template #title>
              <span>{{ nav }}</span>
            </template>
            <el-menu-item @click="onclickNav(nav, title)" v-for="title in titleItem" index>{{ title }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
    <div v-if="!navText">空值</div>
    <div>{{ navText }}</div>

  </div>
</template>

<script lang='ts'  setup>
import { nextTick, ref, toRaw, PropType } from 'vue';
import { getBlogMenu, getBlogContent } from '../../../http/apis/blogsmenu'
import qs from 'qs'

let BlogMenu = ref()
let navText = ref()
let loading = ref(true)

getBlogMenu().then((res) => {
  BlogMenu.value = res
  loading.value = false
})

// 路由跳转，改变navtext值
const onclickNav = (nav: any, title: string): void => {
  console.log(nav, title)
  let data = { blogNav: nav, blogTitle: title }
  getBlogContent(data).then((res: any) => {
    console.log(res)
    navText.value = res
  })

}
// 显示简介
const goIndex = () => {
  navText.value = null
}
</script>

<style lang='less' scoped>
.nav-bar {
  display: flex;
  height: 100%;
}

.side-nav-bar {
  border-style: none solid none none;
  border-width: 1px;
  border-color: #e6e6e6;

  .side-nav-bar-title {
    cursor: pointer;
    text-align: center;

    .name {
      font-family: "fontone";
      font-size: 35px;
      height: 20%;
      font-weight: bolder;
      background: linear-gradient(90deg,
          #2112a8 5%,
          #f0400b 80%,
          #d64e24 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .menu {
    height: 80%;
  }

  .el-menu {
    border: 0;
    width: 200px;
  }
}

.el-sub-menu,
.el-menu-item {
  border-style: solid none none none;
  border-width: 1px;
  border-color: #e6e6e6;
}
</style>
