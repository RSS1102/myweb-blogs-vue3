<template>
    <prompt-words></prompt-words>
    <talks-modes v-for=" item in Propslist" :talkUser="item.talkUser" :talkAvatar="item.talkAvatar"
        :talkMessage="item.talkMessage" :talkTime="item.talkTime"></talks-modes>
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue';
import promptWords from './promptwords.vue';
import talksModes from './talksmodes.vue'
import { msglist } from '@/http/apis/communication'

const Propslist = ref()
// const onclick = async () => {
//     await msglist().then((res) => {
//         Propslist.value = res
//     })
// }
// onclick()
</script>

<style lang='less' scoped>
</style>