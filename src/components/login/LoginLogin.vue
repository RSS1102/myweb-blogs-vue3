<!--登陆-->
<template>
  <div id="login">
    <div class="login_Method">
      <div v-bind:class="loginMethod_div1" @click="loginMethod_1">账号登陆</div>
      <div v-bind:class="loginMethod_div2" @click="loginMethod_2">微信登陆</div>
    </div>

    <!--注册账号-->
    <div id="login_Box">
      <div id="enlogin" v-bind:class="enlogin_display">
        <el-form
          ref="form"
          :model="enlogin"
          label-width="60px"
          @submit.native.prevent="enLogin"
          :rules="rules"
        >
          <el-form-item label="账户" class="item_class" prop="username">
            <el-input v-model="enlogin.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" class="item_class" prop="userPwd">
            <el-input v-model="enlogin.userPwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="enLogin_fn('form')"
              class="login_Btn"
              >登陆</el-button
            >
          </el-form-item>
        </el-form>

        <div>
          <a href="/register" class="link_class">注册</a>
          <a href="/register" class="link_class">忘记密码</a>
        </div>
      </div>
      <div id="wxlogin" v-bind:class="wxlogin_display">
        <P>还未开通...</P>
      </div>
    </div>
  </div>
</template>

<script>
//mapMutations 函数，调用mutations
import { mapMutations } from "vuex";
import delay from "../../../public/public_js/debounce";

export default {
  name: "Login",
  data() {
    return {
      //自定义登陆
      enlogin: {
        username: "",
        userPwd: "",
      },
      loginMethod_div1: "",
      loginMethod_div2: "",
      enlogin_display: "",
      wxlogin_display: "",
      disabled: false,
      rules: {
        username: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        userPwd: [
          { required: true, message: "请输入正确密码", trigger: "blur" },
        ],
      },
    };
  },
  //计算属性
  computed: {},
  //钩子函数
  mounted() {
    //默认选择自定义登陆
    this.loginMethod_div1 = "loginMethod_div1";
    this.loginMethod_div2 = "loginMethod_div2";
    this.wxlogin_display = "login_display";

    //微信登陆
  },
  methods: {
    //自定义登陆
    loginMethod_1() {
      this.loginMethod_div1 = "loginMethod_div1";
      this.loginMethod_div2 = "loginMethod_div2";
      this.wxlogin_display = "login_display";
      this.enlogin_display = "";
    },
    //微信登陆
    loginMethod_2() {
      this.loginMethod_div1 = "loginMethod_div2";
      this.loginMethod_div2 = "loginMethod_div1";
      this.enlogin_display = "login_display";
      this.wxlogin_display = "";
    },

    //传入用户信息
    ...mapMutations(["setUser"]),
    //自定义 登陆

    enLogin_fn(enlogin) {
      //表单规则验证
      this.$refs[enlogin].validate((valid) => {
        if (valid) {
          //防抖
          delay(() => {
            //执行部分
            this.enLogin();
          }, 500);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    enLogin() {
      console.log("enLogin登陆");
      this.$http.post("enlogin", this.enlogin).then((res) => {
        console.log("登陆返回信息", res.data);
        if (res.data) {
          //不能直接访问 vuex state   this.$store.state.user.username=res.data
          // 绑定用户信息
          this.setUser(res.data);
          this.$router.push("/index");
          // 成功消息提示
          this.$message({
            duration: 1000,
            message: "恭喜你，登陆成功...",
            type: "success",
          });
        } else {
          // 失败消息提示
          console.log("登陆失败");
          this.$message({
            duration: 2000,
            message: "抱歉，登陆失败，请重试...",
            type: "error",
          });
        }
      });
    },
  },
};
</script>

<style scoped>
/*整个登陆页面*/
#login {
  width: 300px;
  height: 290px;
  background: #9faec5;
}

/*选择登陆方式是否显示*/
.login_display {
  display: none;
}

/*登陆方式选项按钮*/
.login_Method {
  height: 55px;
  background: rgba(248, 105, 105, 0.04);
  display: flex;
  text-align: center;
}

.login_Method div {
  height: 35px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 7%;
}

/*选中*/
.loginMethod_div1 {
  width: 70%;
  color: black;
  font-weight: bold;
  background-color: #f1efef;
  box-shadow: inset 7px 7px 15px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/* 鼠标悬浮 */
.loginMethod_div2:hover {
  width: 40%;
}
/*未选中*/
.loginMethod_div2 {
  width: 30%;
  color: white;
  background-color: #4caf50; /* Green */
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/*登陆操作盒子*/

/*自定义登陆*/
#enlogin {
  width: 230px;
  height: 300px;
  font-weight: bold;
  /*background: #305598;*/
}

/*自定义登陆   登陆  按钮*/

.login_Btn {
  width: 145px;
}

.item_class {
  background: #84a3e3;
}

.link_class {
  position: relative;
  bottom: 10px;
  margin-left: 48px;
}

#wxlogin {
  width: 100%;
  height: 230px;
}
</style>