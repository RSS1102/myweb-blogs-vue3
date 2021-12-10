<template>
    <login-box :way="goIndex"></login-box>
</template>

<script lang="ts" setup>
import LoginBox from '../components/home/LoginBox.vue';
import router from '../router';

const goIndex: Function = () => {
    router.push('Index')
}
</script>

<style lang="less" scoped>
</style>