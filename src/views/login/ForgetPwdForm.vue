<template>
    <div class="title">登录</div>
    <el-form :model="loginFrom" :rules="loginRules" ref="loginRulesForm">
        <el-form-item prop="account">
            <el-input
                v-model.trim="loginFrom.account"
                onkeyup="this.value=this.value.replace(/[, ]/g,'')"
            ></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                v-model.trim="loginFrom.password"
                type="password"
                show-password
                onkeyup="this.value=this.value.replace(/[, ]/g,'')"
            ></el-input>
        </el-form-item>
        <el-button with type="primary" @click="submitForm(loginRulesForm)">登录</el-button>
    </el-form>
</template>


<script setup lang='ts'>
/**
 * 当键盘松开的时候输入框有空格的时候自动消除空格
 * onkeyup="this.value=this.value.replace(/[, ]/g,'')"
 */
import { reactive, ref } from 'vue'
import login from '../../http/api'
interface LoginType {
    account: String,
    password: String,
}
const loginFrom: LoginType = reactive({
    account: '',
    password: '',
});
const loginRules = reactive({
    account: [{
        required: true,
        message: 'Please input Activity name',
        trigger: 'blur',
    },
    {
        min: 6,
        message: "Your account should more long",
        trigger: 'blur',
    },
    {
        max: 15,
        message: "Your account too long",
        trigger: 'change',
    }],
    password: [
        {
            required: true,
            message: 'Please input your account',
            trigger: 'blur',
        },
        {
            min: 6,
            message: "Your password should more long",
            trigger: 'blur',
        },
        {
            max: 15,
            message: "Your password too long",
            trigger: 'change',
        }
    ],
});
// 验证
const loginRulesForm = ref<any>();
const submitForm = (formEl: any) => {
    if (!formEl) return
    formEl.validate((valid: any) => {
        if (valid) {
            // 执行验证
            login
        } else {
            // 返回错误
            return false
        }
    })
}
</script>

<style lang='less' scoped>
.title {
    font-size: 28px;
}
</style>
