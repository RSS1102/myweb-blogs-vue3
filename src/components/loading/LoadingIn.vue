<template>
    <FrontLoadingVue class="loading"></FrontLoadingVue>
</template>
<script lang="ts" setup>
import FrontLoadingVue from './FrontLoading.vue';
import router from '../../router';
setTimeout(() => {
    router.push({ path: 'home' })

}, 5000)

</script>
<style lang="less">
.loading {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>