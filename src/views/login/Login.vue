<template>
    <div class="Form">
        <LoginFormVue></LoginFormVue>
    </div>
</template>

<script lang='ts' setup>
import LoginFormVue from './LoginForm.vue';
</script>

<style lang='less' scoped>
.Form {
    position: absolute;
    right: 35px;
    margin-top: 10%;
    width: 35%;
}
</style>