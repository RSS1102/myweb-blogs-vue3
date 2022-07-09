<template>
    <div>
        <p class="blog-logo"><span class="the-logo ">RSS1102</span></p>
        <el-divider />
        <p class="blog-msg">写下这些博客的初衷是为了记录自己的学习记录，另一方面也是想和大家一起交流学习经验，共同进步，如果您发现到了博客内有什么错误欢迎及时留言指正。谢谢。</p>
        <div class="blog-effect">
            <div class="my-referrals">
                <div style="margin: 10px 5px"><span class="box-title">我的推荐:</span></div>
                <div class="referrals-box">
                    <div class="referrals-box-item" v-for="item in 4">我的推荐1</div>
                </div>
            </div>
            <div class="blogs-rank">
                <div style="margin: 10px 5px"><span class="box-title">今日热度排行</span></div>
                <div class="rank-box">
                    <div class="rank-box-item" v-for="item in rankList">{{ item }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive } from 'vue'
import { ElDivider } from 'element-plus'
let rankList = reactive({})
rankList = [11111111, 222222222, 33333333333, 44444444444, 55555555555,]
</script>

<style lang='less' scoped>
@import url('@/assets/css/blog.less');

.box-title {
    background-color: rgb(14, 46, 122);
    color: #fff;
    padding: 3px;
    border-radius: 5px;

}

.blog-msg {
    text-indent: 20px;
    padding: 5px;
    color: rgb(255, 119, 0);
}

.blog-logo {
    font-size: 42px;
    display: flex;
    justify-content: center;
    margin: 0;
}

.blog-effect {
    display: flex;
    justify-content: space-between;

    .my-referrals {
        min-width: 600px;

        .referrals-box {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .referrals-box-item {
            background-color: red;
            width: 40%;
            height: 100px;
            margin: 5%;
            border-radius: 5px;
        }
    }

    .blogs-rank {
        margin: 0 10px;
    }

}

.rank-box {
    @rank-box-width: 350px;
    @rank-box-height: 300px;
    width: @rank-box-width;
    height: @rank-box-height;
    background-color: rgb(243, 243, 243);

    .rank-box-item {
        text-indent: 15px;
        line-height: (@rank-box-height/5);
        width: @rank-box-width;
    }
}
</style>