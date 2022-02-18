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
    tags: ["123", "456", "456", "456",],
    topis: "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介",
    message: "1commitcommitcommitcommitcommitcommitcommitcommitcommitcommitcommitcommitcmmitcommitcommitcommitcommitcommit1",
    updaterAvatar: "http://192.168.1.2:3000/src/assets/img/icon/github.svg",
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