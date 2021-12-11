<template>
    <HomeLoadingVue class="loading"></HomeLoadingVue>
    <bottombarVue></bottombarVue>
</template>
<script lang="ts" setup>
import HomeLoadingVue from '../components/home/HomeLoading.vue';
import bottombarVue from '../components/allponents/navbars/bottombar.vue';
import router from '../router';
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