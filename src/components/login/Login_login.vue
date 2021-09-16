<!--登陆-->
<template>

  <div id="login">
    <div class="btn_back">
      <el-button plain class="btn_class">账号登陆</el-button>
      <el-button plain class="btn_class">微信登陆</el-button>
    </div>

    <!--注册账号-->
    <div id="login_Box">
      <div id="enlogin">
        <el-form ref="form" :model="enlogin" label-width="60px"@submit.native.prevent="enLogin">
          <el-form-item label="账户" class="item_class">
            <el-input v-model="enlogin.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" class="item_class">
            <el-input v-model="enlogin.userPwd"></el-input>
          </el-form-item>
          <el-form-item >
              <el-button type="primary" native-type="submit" class="login_Btn">登陆</el-button>
          </el-form-item>
        </el-form>

        <div>
          <a href="/register" class="link_class">注册</a> <a href="/register" class="link_class">忘记密码</a>
        </div>
      </div>
      <!--    <div id="wxlogin">-->

    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      //自定义登陆
      enlogin: {
        username: '',
        userPwd: '',

      }
    }
  },

  mounted() {
    //微信登陆

  },
  methods: {
    enLogin(){
      console.log('enLogin登陆')
      this.$http.post('enlogin',this.enlogin).then(res=>{
        console.log(res.data)
        if(res.data.length){
          this.$store.state.user.username=res.data
          this.$router.push('/index')
          // 成功消息提示
          this.$message({
            duration: 1000,
            message:"恭喜你，登陆成功...",
            type:"success",
          })
        }else {
          // 失败消息提示
          console.log('登陆失败')
          this.$message({
            duration: 1000,
            message:"抱歉，登陆失败，请重试...",
            type:'error',
          })
        }
      })
    }


  }


};
</script>

<style scoped>
/*整个登陆页面*/
#login {
  width: 280px;
  height: 290px;
  background: #9faec5;

}

/*登陆方式选项按钮*/
.btn_back {
  height: 70px;
  background: #f86969;
}

.btn_class {
  margin: 15px;
}

/*登陆操作盒子*/
#login_Box {
  margin-top: 15px;

}

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
  /*width: 230px;*/
  /*height:230px;*/
  /*background: brown;*/
}

</style>