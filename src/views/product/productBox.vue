<template>
    <div class="box">
        <div class="title">标题</div>
        <div class="description">
            <!-- v-for -->
            <el-tag>Tag 1</el-tag>
            <el-tag>Tag 1</el-tag>
            <el-tag>Tag 1</el-tag>
            <el-tag>Tag 1</el-tag>
        </div>
        <div
            class="topis-msg"
        >说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明明说明说明说明说明说明说明明说明说明说明说明说明说明说明说明明说明说明</div>
        <div class="update">
            <div class="topis-msg">上次更新的message上次更新的message上次更新的message上次更新的message</div>
            <div class="update-user">
                <div class="update-user-avatar">头像</div>
                <div class="update-time">上次11324444更新的时间</div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>

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
    height: 250px;
}
.description,
.topis-msg {
    margin: 10px 0;
}
.el-tag {
    margin-left: 10px;
}
.title {
    font-size: 35px;
    margin: 10px 0 0 50px;
}
.topis-msg {
    // 文字空格
    text-indent: 20px;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
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