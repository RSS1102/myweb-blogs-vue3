<template>
    <login-box :way="goIndex"></login-box>
    <bottombarVue></bottombarVue>
</template>

<script lang="ts" setup>
import LoginBox from '../components/home/LoginBox.vue';
import bottombarVue from '../components/allponents/navbars/bottombar.vue';

import router from '../router';
const goIndex: Function = () => {
    router.push('Index')
}
</script>
 
<style lang="less" scoped>
</style>