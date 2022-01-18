<template>
    <HomeLoadingVue class="loading"></HomeLoadingVue>
</template>
<script lang="ts" setup>
import HomeLoadingVue from './HomeLoading.vue';
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