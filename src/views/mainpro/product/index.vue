<template>
    <div class="page">
        <productbox
            v-for="item in theProducts"
            :name="item.name"
            :topics="item.ware_topics"
            :description="item.description"
            :stars="item.stargazers_count"
            :fork="item.fork"
            :forks_url="item.forks_url"
            :commits="item.ware_commits"
        ></productbox>
    </div>
</template>

<script  lang='ts' setup>
/**
 * 格式化一下tags,objct=>arr
 * 格式化一下时间，封装一个格式化时间js
 * 部分值没有传完，进行传完
 * 封装一个组件进行显示语言的
 * 点击链接要完成
 */
import { nextTick, reactive, ref } from 'vue';
import productbox from './productBox.vue';
import { getProduct } from '../../../http/apis/menu'
import { ElLoading } from 'element-plus'
// 页面loading
// ElLoading.service()
// const loadingInstance = ElLoading.service({
//     body: true, text: "加载中...", spinner: 'loading', target: 'document.body',
// })

let theProducts = ref()
getProduct().then((res: any) => {
    theProducts.value = res
    console.log(res)
    // nextTick(() => {
    //     // Loading should be closed asynchronously
    //     loadingInstance.close()
    // })
})



// const theProducts = reactive({
//     title: "vue-vben-admin",
//     tags: ["123", "456", "456", "456", "456", "456", "456", "456", "456", "456", "456", "456", "456", "456",],
//     topis: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介",
//     message: "1commitcommitcommitcommitcommitcommitcommitcommitcommitcommitcommitcommitcmmitcommitcommitcommitcommitcommit1",
//     updaterAvatar: "https://img0.baidu.com/it/u=4074021225,807294632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
//     updateTime: "更新者的时间",

// })
</script>

<style lang='less' scoped>
.page {
    width: 100%;
    height: 100%;
    background: rgba(226, 226, 226, 0.507);
}
</style>