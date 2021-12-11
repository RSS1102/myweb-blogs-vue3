<template>
    <div class="father">
        <div class="son" @click="goICP">{{ ICP }}</div>
    </div>
</template>

<script setup  lang="ts" >
const ICP: String = '皖ICP备2021006489号'
const goICP = (): void => {
    location.href = "https://beian.miit.gov.cn"
}
</script>
<style lang="less" >
.father {
    display: flex;
    justify-content: center;
}

.son {
    cursor: pointer;
    border-style: solid none none none;
    border-color: black;
    border-width: 2px;
    font-size: 22px;
    padding: 50px 0;
    .absolutes();
    text-align: center;
    width: 90vw;
    color: rgb(98, 98, 165);
}
.absolutes {
    position: absolute;
    bottom: 0;
}
</style>