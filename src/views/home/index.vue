<template>
    <el-container>
        <el-main>
            <div class="page">
                <div class="imgs">
                    <div class="icon-item">
                        <img class="icon" src="../../assets/img/icon/github.svg" />
                        <img class="icon" src="../../assets/img/icon/github.svg" />
                        <img class="icon" src="../../assets/img/icon/github.svg" />
                    </div>
                    <div class="name-font">RSS1102</div>
                    <div class="flex">
                        <img class="to-photo" src="../../assets/img/icon/logo.png" />
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
@icon: 40px;
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

@font-face {
    font-family: "mang-img";
    src: url("../../assets/font/ZCOOL.ttf");
    /* img-weight: normal;
    img-style: normal; */
}
.name-font {
    text-align: center;
    margin: 50px;
    font-family: "mang-img";
    font-size: 035px;
}
.page {
    display: flex;
    justify-content: center;
}
.imgs {
    margin-top: 100px;
    width: 500px;
}
.icon-item {
    display: flex;
    justify-content: space-around;
}
.icon {
    width: @icon;
    height: @icon;
    border-radius: 50%;
    vertical-align: -0.15em; /* 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果 */
    fill: currentColor; /* 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承 */
}
.icon:hover {
    box-shadow: -5px 5px 15px rgba(167, 155, 145, 0.5),
        5px -5px 15px rgba(167, 155, 145, 0.5),
        -5px -5px 15px rgba(167, 155, 145, 0.5),
        5px 5px 15px rgba(167, 155, 145, 0.5);
}
.flex {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
.to-photo {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    box-shadow: 10px 15px 15px rgba(56, 56, 56, 0.6),
        -15px -20px 25px rgba(197, 197, 197, 0.6);
}
.to-photo:hover {
    animation: to-photo-hover 1s;
    animation-fill-mode: forwards;
}
@keyframes to-photo-hover {
    0% {
    }
    100% {
        border-radius: 10%;
        box-shadow: 10px 15px 15px rgba(56, 56, 56, 0.6),
            -15px -20px 25px rgba(197, 197, 197, 0.6);
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
    // background-image: url("../../assets/home/by.jpg");
}
.el-main {
    height: 100%;
}
</style>