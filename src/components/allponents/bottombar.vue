<template>
    <div class="father">
        <span @click="goICP">{{ ICP }}</span>
    </div>
</template>

<script setup  lang="ts" >
const ICP: String = '皖ICP备2021006489号'
const goICP = (): void => {
    // location.href = "https://beian.miit.gov.cn" //本页面打开页面
    window.open("https://beian.miit.gov.cn", "_blank")
}
</script>
<style lang="less"  scoped >
.father {
    border-style: solid none none none;
    border-color: black;
    border-width: 2px;
    font-size: 2vh;
    padding: 1vh 0;
    color: rgb(98, 98, 165);
    text-align: center;
    width: 100vw;
}

span {
    cursor: pointer;
}
</style>