<template>
    <div class="page">
        <div class="msg-input">
            <div class="text-msg">
                <div class="text-welcome">
                    <div>TR:欢迎您来到这里。</div>
                    <div>如果你有什么想法或者想说的话，欢迎在下方留言交流。</div>
                </div>
                <div class="text-warn">(请友善发言，共创和谐环境，谢谢。)</div>
            </div>
            <el-input
                v-model="msg"
                placeholder="请留下您想说的话..."
                type="text"
                maxlength="100"
                minlength="10"
                show-word-limit
            >
                <template #append>
                    <el-button>发布</el-button>
                </template>
            </el-input>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
const msg = ref('')

</script>

<style lang='less' scoped>
.page {
    display: flex;
    justify-content: center;
}
.msg-input {
    border: 1px solid #e6e6e6e6;
    margin: 30px 0;
    padding: 30px 10px;
}
.text-msg {
    margin-bottom: 30px;
}
.text-welcome {
    font-family: "fontwo";
    font-size: 40px;
}
.text-warn {
    font-family: "fonthree";
    font-size: 20px;
    color: #fa0b0b9f;
}
.el-input {
    width: 50vw;
}
</style>