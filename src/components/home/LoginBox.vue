<template>
    <div class="logn">
        <!-- 选择栏 -->
        <div class="tags">
            <div :class="{ 'tags-btn': true, 'tags-checked': logChecked }" @click="logCheck()">账号登陆</div>|
            <div :class="{ 'tags-btn': true, 'tags-checked': wxChecked }" @click="wxCheck()">微信登陆</div>
        </div>
        <!-- 登陆 -->
        <div class="log">
            <!-- 账号登陆 -->
            <div :class="['log-bank']" v-show="logChecked">
                <el-form :model="login.onLogin" ref="forms" label-width="60px">
                    <el-form-item
                        label="账号"
                        prop="account"
                        :rules="[{ required: true, message: '请输入账号' }]"
                    >
                        <el-input v-model="login.onLogin.account" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="密码"
                        prop="pwd"
                        :rules="[{ required: true, message: '请输入密码' }]"
                    >
                        <el-input type="password" v-model="login.onLogin.pwd" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="goLogin()">登陆</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <!-- 微信登陆 -->
            <div :class="['log-wx']" v-show="wxChecked" id="wxLogin">还未开通</div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { reactive, watch, ref, Ref } from 'vue';
import router from '../../router';
// ts
interface Login {
    onLogin: {
        account: String,
        pwd: String
    }
}

// vue

let logChecked: Ref<boolean> = ref(true)
let wxChecked: Ref<boolean> = ref(false)
const login: Login = reactive({
    onLogin: {
        account: '',
        pwd: ""
    }
});
const logCheck: Function = () => {
    logChecked.value = true
    wxChecked.value = false
    return {
        logChecked,
        wxChecked
    }
}
const wxCheck: Function = () => {
    logChecked.value = false
    wxChecked.value = true
    return {
        logChecked,
        wxChecked
    }
}
let goLogin: Function = () => {

    router.push('index')
}
watch(() => logChecked.value, (oldVlue, newVlue) => {
})

</script>

<style lang="less" scoped>
:root {
    --disWx: none;
    --disBlock: block;
}
@wbox: 300px;
@hbox: 300px;
@htags: 50px;

html {
    background: rgba(151, 151, 158, 0.1);
}
// 登录框
.logn {
    width: @wbox;
    height: @hbox;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgb(148, 139, 139);
}
// tags
.tags {
    display: flex;
    text-align: center;
    line-height: @htags;
    height: @htags;
    width: @wbox;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: black;
    .tags-btn {
        cursor: pointer;
        width: calc(@wbox / 2);
        height: @htags;
    }
    .tags-checked {
        font-size: 23px;
        color: rgb(108, 167, 255);
        font-weight: bold;
    }
}

.log {
    // bank
    .log-bank {
        margin: 25px 50px 0 0;
        .el-button {
            width: 160px;
        }
    }
    #wxLogin {
        width: @wbox;
        height: @hbox - @htags;
        background: rgb(206, 219, 219);
    }
}
.disBlock {
    display: block;
}
.disNone {
    display: none;
}
</style>