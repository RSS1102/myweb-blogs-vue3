<template>
    <div class="box">
        <div class="title">{{ props.title }}</div>
        <el-divider></el-divider>
        <el-tag v-for="(item in props.tags">{{ item }}</el-tag>
        <div class="topi s-msg">{{ props.topis }}</div>

        <div class="topis-msg">{{ props.message }}</div>
        <div class="update-user">
            <img class="update-user-avatar" :src="props.updaterAvatar" />
            <div class="update-time">props.updateTime</div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { PropType } from 'vue'
const props = defineProps({
    title: String,
    tags: Array as PropType<string[]>,
    topis: String,
    message: String,
    updaterAvatar: String,
    updateTime: String,
})


</script>

<style lang='less' scoped>
html,
body {
    height: 100%;
}
.box {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 7px;
    box-shadow: 5px 5px 5px rgba(226, 219, 219, 0.5),
        5px 5px 5px rgba(226, 219, 219, 0.5);
    padding: 10px;
    width: 350px;
    height: 290px;
}

.topis-msg {
    margin: 10px 0;
}

.el-tag {
    margin-left: 10px;
}
.title {
    font-size: 35px;
    text-align: center;
    // 单行文本省略
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-indent: 20px;
}
.topis-msg {
    // 文字空格
    text-indent: 20px;
    // 多行文本省略
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.update-user {
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
.update-user-avatar {
    margin-right: 10px;

    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.update-time {
    line-height: 40px;
}
</style>