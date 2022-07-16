<template>
  <div class="nav-bar" v-loading="loading">
    <div class="side-nav-bar">
      <div class="side-nav-bar-title" @click="goIndex()">
        <p class="blog-logo"><span class="the-logo ">RSS1102</span></p>
      </div>
      <div class="menu">
        <el-menu :default-active="defaultActive" v-for="(titleItem, nav) in BlogMenu">
          <el-sub-menu :index="nav">
            <template #title>
              <el-tooltip placement="right">
                <template #content>{{ nav }}</template>
                <span class="menu-nav">{{ nav }}</span>
              </el-tooltip>
            </template>
            <el-menu-item @click="onclickNav(SecondNav.id)" v-for="(SecondNav, inx) in titleItem"
              :index="SecondNav.id.toString()">
              {{ SecondNav.blogTitle }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
    <div class="blogs-class">
      <div v-if="!blogsPage.blogTitle" class="blogs-main">
        <Bulletin></Bulletin>
      </div>
      <div class="blogs-main" v-else>
        <div class="blog-nav">
          <span class="nav-title">来自集合：</span>
          <span>{{ blogsPage.blogNav }}</span>
        </div>
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
        <div class="blog-content" v-html="blogsPage.blogContent"></div>
      </div>
      <el-divider />
      <div class="blog-footer">
        <!-- <span class="blog-author">RSS1102</span> -->
        <span v-if="blogsPage.updatedAt !== blogsPage.createdAt" class="blog-updated">
          <span>{{ blogsPage.updatedAt }}</span>
          <span> 进行过更改。</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang='ts'  setup>
import { nextTick, ref, toRaw, PropType, reactive } from "vue";
import { getBlogMenu, getBlogContent } from "@/http/apis/blogsmenu";
import { Timer } from "@element-plus/icons-vue";
import { timeFormatter } from "@/util/tools";
import { useRoute, useRouter } from "vue-router";
import Bulletin from "./bulletin.vue";
interface BlogsPageType {
  id: number;
  articleShow: boolean;
  blogContent: string;
  blogNav: string;
  blogTitle: string;
  createdAt: string;
  updatedAt: string;
  visitedNum: number;
}
let BlogMenu = ref();
let defaultActive = ref("0");
let blogsPage: BlogsPageType = reactive({
  id: 0,
  articleShow: true,
  blogContent: '',
  blogNav: '',
  blogTitle: '',
  createdAt: '',
  updatedAt: '',
  visitedNum: 0
});
let loading = ref(true);

getBlogMenu().then((res) => {
  BlogMenu.value = res;
  loading.value = false;
});

// 路由跳转，改变blogsPage 值
// 获取:id
const route = useRoute();
// 设置:id
const router = useRouter();
interface monitorlogs {
  blogsKey: number;
}
interface BlogContentType<T> {
  id: number;
  articleShow: boolean;
  blogContent: string;
  blogNav: string;
  blogTitle: string;
  createdAt: string;
  updatedAt: string;
  monitorlogs: Array<T>;
}

const onclickNav = (id: number): void => {
  if (id === 0) {
    blogsPage.blogTitle = "";
    return;
  }
  router.push(`/blogs/index/${id}`);
  let data = { id: id };
  getBlogContent(data).then((res: BlogContentType<monitorlogs>) => {
    blogsPage.articleShow = res.articleShow;
    blogsPage.blogContent = res.blogContent;
    blogsPage.blogNav = res.blogNav;
    blogsPage.blogTitle = res.blogTitle;
    blogsPage.createdAt = timeFormatter(res.createdAt);
    blogsPage.id = res.id;
    blogsPage.updatedAt = timeFormatter(res.updatedAt);
    blogsPage.visitedNum = res.monitorlogs.length;
    console.log(timeFormatter(res.createdAt), timeFormatter(res.updatedAt));
  });
  defaultActive.value = id.toString();
};
onclickNav(parseInt(route.params.id as string));
// 首页
const goIndex = () => {
  blogsPage.blogTitle = ''
  router.push(`/blogs/index/0`);
};
</script>
<style lang='less' scoped>
@import url('@/assets/css/blog.less');

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

  .blog-nav {
    font-weight: bolder;
    font-style: italic;
    color: #ff7575;

    .nav-title {
      background: #040100;
      border-radius: 5px;
      padding: 1px;
      color: aliceblue;
    }
  }

  .blog-title {
    margin-top: 10px;
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

  .blogs-main {
    min-height: 80vh;
  }

  .blog-footer {
    margin-right: 100px;
    display: flex;
    flex-direction: row-reverse;

    .blog-updated {
      line-height: 70px;
      font-style: italic;
      color: rgb(131, 131, 131);
    }

    .blog-author {
      font-weight: bolder;
      margin: 0 20px;
      font-size: 24px;
    }
  }
}
</style>
