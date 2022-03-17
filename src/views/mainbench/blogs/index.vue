<template>
    <div class="nav-bar" v-loading="loading">
        <div class="side-nav-bar">
            <div class="side-nav-bar-title" @click="goIndex()">
                <img />
                <div class="name">RSS1102</div>
            </div>
            <div class="menu">
                <el-menu default-active="1" v-for="(item, index) in theBlogs">
                    <el-sub-menu index>
                        <template #title>
                            <!-- <span>{{ item.index }}</span> -->
                            <span>{{ item.title }}</span>
                        </template>
                        <el-menu-item
                            @click="onclickNav(navIndex)"
                            v-for="navIndex in item.nav"
                            index
                        >{{ navIndex.content }}</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </div>
        </div>
        <div>{{ navText }}</div>
        <div v-if="!navText">空值</div>
    </div>
</template>

<script lang='ts'  setup>
import { nextTick, ref, toRaw } from 'vue';
import { getBlogs } from '../../../http/apis/menu'

let theBlogs = ref()
let navText = ref()
let loading = ref(true)

getBlogs().then(res => {
    theBlogs.value = res
    console.log(res)
    nextTick(() => {
        loading.value = false
    })
})
// 路由跳转，改变navtext值
const onclickNav = (navIndex: any): void => {
    navText.value = toRaw(navIndex.text)
}
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
            background: linear-gradient(
                90deg,
                #2112a8 5%,
                #f0400b 80%,
                #d64e24 100%
            );
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