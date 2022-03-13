<template>
    <el-container>
        <el-main>
            <div class="page">
                <img class="to-photo" src="../../../assets/img/icon/logo.png" />
                <div class="name-font">RSS1102</div>
                <div class="icon-item">
                    <a class="github-a" href="https://github.com/RSS1102" target="_blank">
                        <img class="icon" src="../../../assets/img/icon/github.svg" />
                        <div class="github">github/RSS1102</div>
                    </a>

                    <a class="twitter-a" href="https://twitter.com/Jimmy48375955" target="_blank">
                        <img class="icon" src="../../../assets/img/icon/twitter.png" />
                        <div class="twitter">twitter/Jimmy48375955</div>
                    </a>

                    <a class="email-a" href="mailto:jimmyrss1102@gmail.com" target="_blank">
                        <img class="icon" src="../../../assets/img/icon/logo_gmail.png" />
                        <div class="email">jimmyrss1102@gmail.com</div>
                    </a>
                </div>
            </div>
        </el-main>
        <el-footer>
            <bottombar-vue></bottombar-vue>
        </el-footer>
    </el-container>
</template>
<script lang='ts' setup>
import bottombarVue from '../../../components/allponents/bottombar.vue';
</script>

<style lang='less' scoped>
@icon: 40px;

@icon: 40px;
html {
    overflow: hidden;
}
.el-container {
    background: url("../../../assets/img/home/girl1.jpg");
    z-index: -1;
}

.page {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.name-font {
    text-align: center;
    margin: 50px;
    font-family: "fontone";
    font-size: 35px;
    font-weight: bold;
    // 彩色字体
    background: linear-gradient(90deg, #2112a8 5%, #f0400b 80%, #d64e24 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.icon-item {
    text-align: center;
    display: flex;
    justify-content: space-around;
    width: 500px;
}
.icon {
    background: rgb(255, 255, 255);
    border: 1px solid rgba(255, 255, 255, 0.2);
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
        border-radius: 22%;
        box-shadow: 15px 20px 25px rgba(235, 160, 160, 0.6),
            -15px -20px 25px rgba(218, 138, 138, 0.6),
            15px -20px 25px rgba(235, 160, 160, 0.6),
            -15px 20px 25px rgba(218, 138, 138, 0.6);
    }
}
.github,
.twitter,
.email {
    visibility: hidden;
    color: white;
    background: rgba(102, 102, 102, 0.6);
    border-radius: 5px;
    padding: 2px;
}
.github-a:hover .github {
    visibility: visible;
}
.twitter-a:hover .twitter {
    visibility: visible;
}
.email-a:hover .email {
    visibility: visible;
}
a {
    color: #000000;
    font-weight: bold;
}
// 定义骨架

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
.el-footer,
.el-main {
    background: rgba(255, 255, 255, 0.22);
    box-shadow: inset 100px 100px 1000px rgba(255, 255, 255, 0.5);
}
</style>