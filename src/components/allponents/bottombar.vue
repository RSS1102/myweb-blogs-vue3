<template>
    <div class="father" :style="{ width: WIDTH + 'px' }">
        <a href="https://beian.miit.gov.cn" target="_blank">{{ ICP }}</a>
    </div>
</template>

<script setup  lang="ts" >import { ref } from 'vue';

const ICP: String = '皖ICP备2021006489号'

let WIDTH = ref();
WIDTH.value = document.documentElement.clientWidth;
</script>
<style lang="less"  scoped >
.father {
    border-style: solid none none none;
    border-color: rgb(208, 208, 208);
    border-width: 2px;
    font-size: 22px;
    padding: 0;
    margin: 0;
    color: rgb(255, 255, 255);
    text-align: center;
    cursor: pointer;
}
</style>