<template>
  <div class="nav-bar" v-loading="loading">
    <div class="side-nav-bar">
      <div class="side-nav-bar-title" @click="goIndex()">
        <img />
        <div class="blog-logo">RSS1102</div>
      </div>
      <div class="menu">
        <el-menu default-active="1" v-for="(titleItem, nav) in BlogMenu">
          <el-sub-menu :index="nav">
            <template #title>
              <!-- {{ nav }} -->
              <el-tooltip placement="right">
                <template #content>{{ nav }}</template>
                <span class="menu-nav">{{ nav }}</span>
              </el-tooltip>
            </template>
            <el-menu-item @click="onclickNav(nav, title)" v-for="title in titleItem" :index="title">{{ title }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
    <div v-if="!blogsPage.blogTitle">kong</div>
    <div class="blogs-class" v-else>
      <div>{{ blogsPage }}</div>
      <div class="blog-title">{{ blogsPage.blogTitle }}</div>
      <!-- 时间，访问量 -->
      <div class="secondary-info">
        <span class="blog-created">
          <el-icon>
            <Timer />
          </el-icon>
          <span class="created-time">{{ blogsPage.createdAt }}</span>
        </span>
        <span class="blog-visited">
          <span class="iconfont icon-fire"> </span>
          <span>{{ blogsPage.visitedNum }} </span>
        </span>
      </div>
      <el-divider />
    </div>
  </div>
</template>

<script lang='ts'  setup>
import { nextTick, ref, toRaw, PropType, reactive } from 'vue';
import { getBlogMenu, getBlogContent } from '../../../http/apis/blogsmenu'
import { Timer } from '@element-plus/icons-vue'

let BlogMenu = ref()
let blogsPage = reactive({
  articleShow: 0,
  blogContent: "",
  blogNav: "",
  blogTitle: "",
  createdAt: "",
  id: 0,
  updatedAt: "",
  visitedNum: 0,
})
let loading = ref(true)

getBlogMenu().then((res) => {
  BlogMenu.value = res
  loading.value = false
})

// 路由跳转，改变blogsPage 值
const onclickNav = (nav: any, title: string): void => {
  console.log(nav, title)
  let data = { blogNav: nav, blogTitle: title }
  getBlogContent(data).then((res: any) => {
    blogsPage.articleShow = res.articleShow;
    blogsPage.blogContent = res.blogContent;
    blogsPage.blogNav = res.blogNav;
    blogsPage.blogTitle = res.blogTitle;
    blogsPage.createdAt = res.createdAt;
    blogsPage.id = res.id;
    blogsPage.updatedAt = res.updatedAt;
    blogsPage.visitedNum = res.visitedNum;
  })

}
// 显示简介
const goIndex = () => {
  blogsPage.blogTitle = "";

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

    .blog-logo {
      margin: 20px 30px;
      font-family: "fontone";
      font-size: 38px;
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

    .menu-nav {
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 15px;
    }
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

// 内容
.blogs-class {
  width: 100%;

  .blog-title {
    margin-top: 30px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  .secondary-info {
    text-align: center;
    margin: 15px 0;

    .blog-created {
      margin: 0 15px;

      .el-icon {
        margin: 0 5px;
      }

      .created-time {
        font-style: italic;
      }
    }

    .blog-visited {
      margin: 0 15px;

      .icon-fire {
        margin: 0 5px;
      }
    }
  }
}
</style>
