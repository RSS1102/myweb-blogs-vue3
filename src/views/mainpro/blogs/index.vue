<template>
    <div class="nav-bar">
        <div class="side-nav-bar">
            <div class="side-nav-bar-title">
                <img />
                <div class="name">RSS1102</div>
            </div>
            <div class="menu">
                <el-menu default-active="1" v-for="item in nav">
                    <el-sub-menu index>
                        <template #title>
                            <span>{{ item.title }}</span>
                        </template>
                        <el-menu-item
                            @click="onclickNav(navIndex)"
                            v-for="navIndex in item.SecondNavBar"
                            index
                        >{{ navIndex.content }}</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </div>
        </div>
        <div>{{ navText }}</div>
    </div>
</template>

<script lang='ts'  setup>
import { nextTick, ref, toRaw } from 'vue';
import { getnav } from '../../../http/apis/user'
import { ElLoading } from 'element-plus'
// 页面loading
ElLoading.service()
let nav = ref()
let navText = ref()
const loadingInstance = ElLoading.service({
    body: true, text: "加载中...", spinner: 'loading', target: 'document.body',
})
const onclick = async () => {
    await getnav().then(res => {
        nav.value = res

        console.log(res)
        nextTick(() => {
            // Loading should be closed asynchronously
            loadingInstance.close()
        })
    })
}
onclick()
const onclickNav = (navIndex: any): void => {
    console.log(toRaw(navIndex.text))
    navText.value = toRaw(navIndex.text)
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