<template>
    <el-menu mode="horizontal" :default-active="defRouters" :text-color="textColor"
        :background-color="prop.backfroundColor" router>
        <el-image :src="imgUlr" @click="goHome"></el-image>
        <el-menu-item index="/home/index">首页</el-menu-item>
        <el-menu-item index="/blogs/index">我的博客</el-menu-item>
        <el-menu-item index="/product/index">作品展示</el-menu-item>
        <el-menu-item index="/communication/index">交流</el-menu-item>
        <el-menu-item index="/demo/index">Demo</el-menu-item>
    </el-menu>
</template>
<script lang="ts" setup>

import { ref, computed } from "vue";
import { useRoute } from "vue-router";
// 添加logo
import imgurl from '@/assets/img/favicon.ico'
const imgUlr = ref(imgurl);
const goHome = () => {
}
//  默认路由状态
const route = useRoute();
let defRouters = computed(() => {
    return route.path
})
const prop = defineProps({
    textColor: {
        type: String
    },
    backfroundColor: {
        type: String
    }
})

</script>
<style lang="less" scoped>
.el-menu {
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