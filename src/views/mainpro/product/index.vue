<template>
    <div class="page">
        <productbox
            :title="Props.title"
            :tags="Props.tags"
            :topis="Props.topis"
            :message="Props.message"
            :updaterAvatar="Props.updaterAvatar"
            :updateTime="Props.updateTime"
        ></productbox>
    </div>
</template>

<script lang='ts' setup>
import { reactive } from 'vue';
import productbox from './productBox.vue';
const Props = reactive({
    title: "vue-vben-admin",
    tags: ["123", "456", "456", "456", "456", "456", "456", "456", "456", "456", "456", "456", "456", "456",],
    topis: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介",
    message: "1commitcommitcommitcommitcommitcommitcommitcommitcommitcommitcommitcommitcmmitcommitcommitcommitcommitcommit1",
    updaterAvatar: "https://img0.baidu.com/it/u=4074021225,807294632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    updateTime: "更新者的时间",

})
</script>

<style lang='less' scoped>
.page {
    width: 100%;
    height: 100%;
    background: rgba(226, 226, 226, 0.507);
}
</style>