<template>
    <div class="home">
        <div class="canvas-box">
            <top-menu textColor="#fff" backfroundColor="#ffffff00" class="top-menu" />
            <div class="main-page">
                <div class="my-logo">
                    <p>🚧canvas建设中...</p>
                    <p>🚧canvas under construction...</p>
                </div>
                <div class="my-contact">
                    <div class="welcome-box">
                        <div class="welcome">Hello,welcome to my blogs.</div>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100077767606519" target="_blank">
                            <img class="icon" src="../../../assets/img/icon/icon-facebook.png" />
                        </a>
                        <a href="https://github.com/RSS1102" target="_blank">
                            <img class="icon" src="../../../assets/img/icon/icon-github.png" />
                        </a>
                        <a href="mailto:jimmyrss1102@gmail.com" target="_blank">
                            <img class="icon" src="../../../assets/img/icon/icon-gmail.png" />
                        </a>
                        <a href="https://twitter.com/Jimmy48375955" target="_blank">
                            <img class="icon" src="../../../assets/img/icon/icon-twitter.png" />
                        </a>
                    </div>
                    <div class="sign">
                        <p class="sign-one">在单调的黑白世界，</p>
                        <p class="sign-two ">探索无穷的可能，享受无穷的乐趣。</p>
                    </div>

                </div>

            </div>
            <bottom-bar class="bottom-bar"></bottom-bar>
        </div>
        <canvas id="canvas" class="canvas" width="0" height="0"></canvas>
    </div>
</template>
<script lang='ts' setup>
import { nextTick, ref } from 'vue';
import topMenu from '@/components/allponents/topMenu.vue';
import bottomBar from '@/components/allponents/bottombar.vue';
// ！！！要在页面渲染之后才可以
nextTick(() => {
    // 构造星星
    function Star(this: any, id: number, x: number, y: number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.r = Math.floor(Math.random() * 2) + 1;
        // 透明度
        let alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
        this.color = "rgba(255,255,255," + alpha + ")";
    }

    Star.prototype.draw = function () {
        // 图形颜色
        ctx.fillStyle = this.color;
        // 定阴影的模糊程度 默认值是0，表示不模糊
        ctx.shadowBlur = this.r * 2;
        // 开始
        ctx.beginPath();
        // 画圆
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        // 结束
        ctx.closePath();
        // 填充当前的图像（路径）
        ctx.fill();
    }

    Star.prototype.move = function () {
        // y每次减少0.15
        this.y -= 0.15;
        this.y < 0 ? this.y = HEIGHT : ""
        // if (this.y <= -10) this.y = HEIGHT + 10;
        this.draw();
    }


    // 开始绘画
    // <canvas>的绘制上下文。 <HTMLCanvasElement>
    // 获取页面canvas

    const canvas: any = document.getElementById('canvas');;
    // 获得渲染上下文和它的绘画功能。getContext()只有一个参数，上下文的格式。
    const ctx = canvas.getContext("2d");

    // 星星数组
    let stars: any = [];
    // 初始星星的数量
    let initStarsPopulation = 100;
    /**
     *  可见区域宽度
     *  可见区域高度
     * 
    */
    let WIDTH: number = document.documentElement.clientWidth;
    let HEIGHT: number = document.documentElement.clientHeight;
    // setAttribute 创建或改变某个新属性。
    canvas.setAttribute("width", WIDTH.toString());
    canvas.setAttribute("height", HEIGHT.toString());
    init();


    function init() {
        //  strokeStyle 用来设置描边的样式
        //  shadowColor 阴影的颜色
        ctx.strokeStyle = "white";
        ctx.shadowColor = "white";

        for (var i = 0; i < initStarsPopulation; i++) {
            /**
             * Math.floor 返回小于或等于指定数字的最大整数值。
             *  Math.random() 取得0到1之间的随机小数
             * 创建星星（id，x，y，r，color)
             * 分别画星星
             * */
            stars[i] = new (Star as any)(i, Math.floor(Math.random() * WIDTH), Math.floor(Math.random() * HEIGHT));
            stars[i].draw();
        }
        // 定阴影的模糊程度 默认值是0，表示不模糊
        ctx.shadowBlur = 0;
        animate();
    }

    function animate() {
        // clearRect 不断清除画布内容再绘制，形成动画效果
        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        for (var i in stars) {
            stars[i].move();
        }
        // 按帧对网页进行重绘
        requestAnimationFrame(animate);
    }
})
</script>

<style lang='less' scoped>
.canvas-box {
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #000000 0%, #5788fe 100%);


}

html,
body,
.home {
    overflow: hidden;
}

.home {
    height: 100vh;
}

.main-page {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
}

.bottom-bar {
    padding: 0;
    position: absolute;
    bottom: 0;
}

// logo
.my-logo {
    width: 400px;
    height: 300px;
    background: #fff;
    margin-bottom: 200px;
}

// 图标
.my-contact {
    margin-bottom: 200px;

    .icon {
        height: 40px;
        width: 40px;
        background-color: #fff;
        border-radius: 50%;
        margin: 0 15px;
    }
}

// 宣言
.welcome-box {
    width: 350px;
    margin-bottom: 50px;
}

.welcome {
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    // 自动打字
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    border-right: 1px solid transparent;
    animation: sizetype 5s steps(20) 0s backwards,
        showf 500ms steps(1) 0s 10 forwards;
    -webkit-animation: sizetype 5s steps(20) 0s backwards,
        showf 500ms steps(1) 0s 10 forwards;
}

@keyframes sizetype {
    from {
        width: 0;
    }
}

@keyframes showf {
    5% {
        border-right-color: currentColor;
    }
}

// sign
.sign {
    margin-top: 50px;
    font-size: 20px;
    width: 350px;
}

.sign-one {
    color: #fff;
    text-align: right;
    width: 300px;
}

.sign-two {
    font-family: "fontone";
    background: linear-gradient(90deg, #ffcfcf 5%, #f200ff 80%, #d64e24 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

// pointer-events 属性定义元素是否对指针事件做出反应。
.canvas {
    position: fixed;
    top: 0;
    pointer-events: none
}
</style>