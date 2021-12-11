<template>123</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted } from 'vue';
onMounted(() => {
    axios.get('/')
        .then(res => {
            console.log("res", res)
        })


})
</script>