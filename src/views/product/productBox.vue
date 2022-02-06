<template>
    <div class="box">
        <div class="title">{{ props.title }}</div>
        <el-divider></el-divider>
        <el-tag v-for="(item, index) in tags">{{ item }}</el-tag>
        <div class="topis-msg">{{ topis }}</div>

        <div class="topis-msg">{{ message }}</div>
        <div class="update-user">
            <div class="update-user-avatar">头像</div>
            <div class="update-time">上次11324444更新的时间</div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import type { PropType } from 'vue'
const props = defineProps({
    title: { type: String as PropType<string>, },
    tags: { type: Array },
    topis: { type: String as PropType<string>, },
    message: { type: String as PropType<string>, },
    updaterAvatar: { type: String as PropType<string>, },
    updateTime: { type: String as PropType<string>, },
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
    height: 280px;
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
    background: red;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.update-time {
    line-height: 40px;
}
</style>