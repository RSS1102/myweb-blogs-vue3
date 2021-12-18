<template>
    <div class="logn">
        <!-- 登陆 -->
        <div class="login-account">
            <!-- 账号登陆 -->

            <el-form :model="login.onLogin" ref="forms" label-width="60px">
                <el-form-item
                    label="账号"
                    prop="account"
                    :rules="[{ required: true, message: '请输入账号' }]"
                >
                    <el-input v-model="login.onLogin.account" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd" :rules="[{ required: true, message: '请输入密码' }]">
                    <el-input type="password" v-model="login.onLogin.pwd" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="goLogin()">登陆</el-button>
                </el-form-item>
            </el-form>

            <div>
                <!-- 微信登陆 -->
                <img src="../../assets/home/weixin-cion.jpg" class="login-wx" @click="wxCheck()" />
            </div>
        </div>
    </div>
</template>

<script lang="ts"  setup>
import { reactive } from 'vue';
import axios from 'axios';
import router from '../../router';


// 账号登陆
interface Login {
    onLogin: {
        account: String,
        pwd: String
    }
}
const login: Login = reactive({
    onLogin: {
        account: '',
        pwd: ""
    }
});
let goLogin = (): void => {
    router.push('index')
}
// 微信登陆
const wxCheck = () => {
    // 重定向微信扫码
    axios.get('/api/wxlogin')
        .then(res => {
            let redirect_uri = res.data
            console.log(redirect_uri)
            window.location.href = redirect_uri
        })
}
</script>

<style lang="less" scoped>
@wbox: 300px;
@hbox: 300px;
// 登录框
.logn {
    background: rgba(105, 210, 231, 0.2);
    width: @wbox;
    height: @hbox;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgb(148, 139, 139);
}
// 账号登陆
.login-account {
    margin: 25px 50px 0 0;
    .el-button {
        width: 160px;
    }
    // 微信登陆
    .login-wx {
        @square: 45px;
        margin-left: calc(@wbox / 1.5);
        width: @square;
        height: @square;
        border-radius: 10px;
    }
}
</style>