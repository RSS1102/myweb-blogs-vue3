<template>
    <el-container>
        <el-main>
            <div class="box">
                <div class="box-card">
                    <div class="box-card-item">
                        <div class="title">我们都是"打工人"!</div>
                        <div>欢迎你来到这里。</div>
                        <div>这里是我的一个小破站，用来记录我的学习。</div>
                        <div>也希望能结交到更多的朋友，一起学习和进步。</div>
                    </div>
                </div>
            </div>
        </el-main>
        <el-footer>
            <bottombar-vue></bottombar-vue>
        </el-footer>
    </el-container>
</template>
<script lang='ts' setup>
import bottombarVue from '../../components/allponents/navbars/bottombar.vue';

</script>

<style lang='less' scoped>
html {
    overflow: hidden;
    height: 100%;
}
// card
.box {
    display: flex;
    font-size: 1vw;
    height: 100%;
    align-items: center;
    justify-content: center;
}
.box-card {
    width: 50vw;
    height: 100%;
    display: flex;
    align-items: center;
}
.box-card-item {
    //文字间距
    letter-spacing: 1%;
    text-align: center;
    background: rgba(71, 72, 167, 0.2);
    color: aliceblue;
    border-radius: 15px;
    // 小card
    width: 30vw;
    height: 50vh;
    animation: shadow 1s infinite alternate;
    margin: 0 8vh 0 8vw;
    .title {
        font-size: 45px;
        font-family: "Comic Sans MS", cursive, sans-serif;
    }
    div {
        margin: 30px 0;
    }
}
.box-card-item:hover {
    /* animation：动画名称 花费时间 运动曲线 何时开始 播放次数 是否反方向 */
    animation: hoverstyle 3s;
    animation-fill-mode: forwards;
    // css文字不可被选中
    user-select: none;
}
@keyframes shadow {
    0% {
        box-shadow: 10px 15px 15px rgba(56, 56, 56, 0.6),
            -15px -20px 25px rgba(197, 197, 197, 0.6);
    }
    100% {
        box-shadow: 10px 15px 45px rgba(111, 179, 243, 0.6),
            -15px -15px 25px rgba(111, 179, 243, 0.6);
    }
}
@keyframes hoverstyle {
    0% {
        background: rgba(71, 72, 167, 0.2);
    }
    100% {
        box-shadow: 15px 15px 15px rgba(31, 63, 167, 0.5);
        color: rgb(0, 0, 0);
        background: rgba(255, 255, 255, 0.7);
    }
}

// 定义骨架
html {
    overflow-x: hidden;
}
// 去掉Container的padding
:v-deep(.el-container),
:v-deep(.el-main),
:v-deep(.el-footer) {
    margin: 0;
    padding: 0;
}
.el-container,
.el-main,
.el-footer {
    padding: 0;
}
.el-container {
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url("../../assets/home/by.jpg");
}
.el-main {
    height: 100%;
}
</style>