<template>
    <div class="box">
        <div class="box-card">
            <div class="box-card-item">
                <div class="title">我们都是"打工人"!</div>
                <div>欢迎你来到这里，这里我的一个小破站。</div>
                <div>用来记录我的学习。</div>
                <div>也希望能结交到更多的朋友，一起学习和进步。</div>
            </div>
        </div>
        <div class="table">
            <div>摸鱼时间表</div>
            <div>
                <span>今天是:</span>
                <span></span>
            </div>
            <div>
                <span>现在是:</span>
                <span></span>
            </div>
            <!-- 午饭，晚上，夜宵 -->
            <div>
                <span>距离:</span>
                <span></span>
                <span>还有:</span>
                <span></span>
                <span>那么晚了还在加班吗？注意身体哦</span>
            </div>
            <!-- 告诫语 -->
            <div>
                <span>工作的老板的，身体是自己的。</span>
                <span>记得多喝水，多去厕所，多运动。</span>
                <span>保持好身体的健康，还能更好地为老板挣钱。</span>
            </div>
            <!-- 周末/下周末 -->
            <div>
                <span>距离:</span>
                <span></span>
                <span>还有:</span>
                <span></span>
            </div>
            <!--假期还有:下一个假期or所有重要的假期-->
            <div>
                <span>距离:</span>
                <span></span>
                <span>还有:</span>
                <span></span>
            </div>
            <div>
                <span>"新时代农民工!"</span>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>

</script>

<style lang='less' scoped>
html {
    overflow: hidden;
    height: 100%;
}
// card
.box {
    background: rgba(229, 229, 233, 0.21);
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    font-size: 1vw;
    height: 100%;
}
.box-card {
    width: 50vw;
    display: flex;
    justify-content: center;
    margin-top: 15vh;
}
.box-card-item {
    //文字间距
    letter-spacing: 1%;
    text-align: center;
    background: rgba(31, 63, 167, 0.35);
    border-radius: 15px;
    // 小card
    width: 550px;
    height: 450px;
    transform: translate(50px, 50px) scale(0.3) rotate(45deg);
    box-shadow: 10px 15px 15px rgba(230, 118, 26, 0.2),
        -10px -15px 25px rgba(255, 60, 0, 0.4);

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
    animation: move 4s;
    animation-fill-mode: forwards;
    // css文字不可被选中
    user-select: none;
}
@keyframes move {
    0% {
        transform: translate(50px, 50px) scale(0.3) rotate(45deg);
    }
    100% {
        transform: translate(0px, 0px) scale(1) rotate(0deg);
        box-shadow: 15px 15px 15px rgba(31, 63, 167, 0.2);
    }
}

// table
</style>