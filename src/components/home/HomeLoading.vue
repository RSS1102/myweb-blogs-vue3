<template>
    <div class="loading">
        <div class="loading-title">欢迎来到我的世界 Loading...</div>
        <div class="loading-box"></div>
    </div>
</template>
<style lang="less">
@loadwidth: 500px;
.loading {
    width: @loadwidth;
    margin: 50px auto;
}
.loading-title {
    color: rgb(105, 210, 231);
    font-size: 22px;
    text-align: center;
    margin: 0;
}
.loading-box {
    position: relative;
    width: 100%;
    height: 15px;
    border: 5px solid #69d2e7;
    border-radius: 10px;
}
.loading-box:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: #4fcae2;
    box-shadow: 15px 0 15px 0 rgba(108, 216, 238, 0.3);
    animation: load 5s linear infinite;
}
@keyframes load {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
</style>