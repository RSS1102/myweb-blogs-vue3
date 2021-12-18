<template>
    <button @click="wxloing()">222222222222</button>
</template>

<script lang="ts" setup >
import axios from 'axios'
// 获取url中code参数
const wxloing = () => {
    let urlSearchParams = new URLSearchParams(window.location.search).get('code') as string;
    console.log(urlSearchParams)
    axios.post('/api/wxcode', { "urlSearchParams": urlSearchParams })
        .then(res => {
            console.log(res)
        })
}
wxloing()

</script>