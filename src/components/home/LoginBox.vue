<template>
  <div class="logn">
    <!-- 登陆 -->
    <div class="login-account">
      <!-- 账号登陆 -->
      <el-form :model="login.onLogin" ref="forms" label-width="auto">
        <el-form-item
          label="账号"
          prop="account"
          :rules="[{ required: true, message: '请输入账号' }]"
        >
          <el-input
            v-model="login.onLogin.account"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pwd"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <el-input
            type="password"
            v-model="login.onLogin.pwd"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="goLogin()">登陆</el-button>
        </el-form-item>
      </el-form>

      <div class="login-bottom">
        <!-- 注册账号 -->
        <div class="login-bottom-register">注册？</div>
        <!-- 微信登陆 -->
        <img
          src="../../assets/home/weixin-cion.jpg"
          class="login-bottom-wx"
          @click="wxLogin()"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts"  setup>
import { reactive } from "vue";
import axios from "axios";
import router from "../../router";

// 账号登陆
interface Login {
  onLogin: {
    account: String;
    pwd: String;
  };
}
const login: Login = reactive({
  onLogin: {
    account: "",
    pwd: "",
  },
});
let goLogin = (): void => {
  router.push("index");
};
// 账号注册
const goRegister = () => {};
// 微信登陆
const wxLogin = () => {
  console.log("微信登陆");
  // 重定向微信扫码
  axios.get("/api/wxlogin").then((res) => {
    let redirect_uri = res.data;
    console.log(redirect_uri);
    window.location.href = redirect_uri;
  });
};
</script>

<style lang="less" scoped>
@wbox: 300px;
@hbox: 300px;
// 登录框
.logn {
  background: rgba(105, 210, 231, 0.4);
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
  .el-form {
    font-size: 35px;
  }
}
// 底部
.login-bottom {
  display: flex;
  // 第一个和最后一个子元素剩余空间是其他一半，其他平分剩余空间。
  justify-content: space-around;
}
.login-bottom-item {
  cursor: pointer;
  @square: 45px;
  width: @square;
  height: @square;
  border-radius: 10px;
}
//注册账号
.login-bottom-register {
  font-size: 15px;
  font-weight: bolder;
  line-height: @square;
  .login-bottom-item();
}
// 微信登陆
.login-bottom-wx {
  .login-bottom-item();
}
</style>