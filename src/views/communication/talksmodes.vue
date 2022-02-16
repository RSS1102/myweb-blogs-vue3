<template>
    <div class="page">
        <div class="msg">
            <div class="user">
                <img class="user-avatar" :src="props.talkAvatar" />
                <div class="user-name">{{ props.talkUser }}</div>
                <div class="release-time">{{ props.talkTime }}</div>
            </div>
            <div class="release-msg">{{ props.talkMessage }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    talkUser: String,
    talkAvatar: String,
    talkMessage: String,
    talkTime: String,
})

</script>
<style>
.page {
    display: flex;
    justify-content: center;
}
.msg {
    padding: 30px 10px 0 10px;
    width: 60vw;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    margin: 5px;
}
.user {
    display: flex;
}
.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #e6e6e6;
    margin: 5px 15px 5px 50px;
}
.user-name {
    line-height: 50px;
    font-size: 20px;
}
.release-time {
    color: #888888;
    margin: 5px 0 0 15px;
    line-height: 45px;
    font-size: 12px;
}
.release-msg {
    padding: 5px;
    border-width: 1px;
    border-style: solid none none none;
    border-color: #e6e6e6;
    text-indent: 20px;
}
</style>