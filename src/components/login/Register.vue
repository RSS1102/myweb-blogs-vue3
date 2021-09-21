<template>
  <div class="page_class" >
    <div class="box_class">
      <div class="title_class">
        <h2>账号注册 </h2>
      </div>
      <div class="Form_class">
        <el-form ref="reAccount" :model="reAccount" label-width="90px" id="Register" :rules="rules">
          <el-form-item label="用户名：" prop="username">
            <el-input v-model="reAccount.username"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：" prop="userEmail">
            <el-input v-model="reAccount.userEmail"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="userPwd">
            <el-input v-model="reAccount.userPwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码:" prop="userPwds">
            <el-input v-model="reAccount.userPwds"></el-input>
          </el-form-item>
          <!--验证码-->
          <el-form-item label="验证码" class="my-item" prop="code">
            <!--trim函数移除字符串两侧的空白字符或其他预定义字符。功能除去字符串开头和末尾的空格或其他字符;placeholder输入框占位文本-->
            <el-input
                v-model.trim="reAccount.code"
                placeholder="请输入验证码"
                size="small"
                style="width: 120px "
            ></el-input>

            <!-- 生成验证码-->
            <span class="login-code" style="position: absolute; right: 0; top: 4px; left: 155px" @click="btn_code">
            <Sidentify :identifyCode="identifyCode"></Sidentify>
            </span>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('reAccount')">注册</el-button>
            <el-button @click="submitFormCancel" style="margin-left: 66px">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidentify from "../repeat/Sidentify";

export default {
  name: "Register",
  components: {Sidentify},

  data() {
    const repassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.reAccount.userPwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    const reEmail = (rule, value, callback) => {
      if (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{3,6})$/.test(value) || !value) {
        callback()
      } else {
        callback(new Error('请输入正确邮箱'))
      }
    };
    return {
      mos:false,
      reAccount: {
        username: '',
        userEmail: '',
        userPwd: '',
      },
      //输入数据库的值
      Account: {
        username: '1',
        userEmail: '1',
        userPwd: '1',
      },
      userPwds: '',
      code: '',
      //随机码
      identifyCodes: "1234567890abcdefjhijklinopqrsduvwxyz",
      //随机码
      identifyCode: "",
      picList: [],
      props: {label: "name", value: "id", children: "children"},
      rules: {
        // trigger验证触发方式:blur / change;required是否必填
        username: [
          {required: true, message: "请输入姓名", trigger: 'blur'},
          {min: 4, max: 12, message: "请输入4-8个字符", trigger: "change"},
          {pattern: /^[\u4e00-\u9fa5_a-zA-Z 0-9.·-]+$/, message: '姓名不支持特殊字符', trigger: 'blur'}
        ],
        userEmail: [
          {required: true, message: "请输入邮箱", trigger: 'blur'},
          {validator: reEmail, trigger: 'blur'}
        ],
        userPwd: [
          {required: true, message: "请输入密码", trigger: 'blur'},
          {required: true, min: 6, max: 12, message: "密码长度应该在6-12", trigger: "change"}

        ],
        userPwds: [
          {validator: repassword, trigger: 'blur'},

        ],
        code: [{required: true, message: "请输入验证码", trigger: "change"}],
      },
      formList: [],
    };
  },
  created() {
  },
  mounted() {
    // 初始化验证码
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
    localStorage.setItem("code", this.code);
  },
  methods: {
    //点击刷新验证码
    btn_code() {
      console.log("2")
      this.refreshCode()
    },
    // openHtml() {
    //   this.visible = true;
    // },
    //刷新验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    //生成验证上的随机数，验证码中的数从identifyCodes中取，
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ]
      }
    },
    //生成随机数,这里是生成
    //Math.random()方法返回大于等于0小于1的一个随机数
    //随机数 = Math.floor(Math.random() * 可能的总数 + 第一个可能的值)
    randomNum(min, max) {
      let a = Math.floor(Math.random() * (max - min) + min);
      return a
    },
    //上传 储存用户注册
   saveReaccount() {
     //Loading遮罩
     const loading = this.$loading({
       lock: true,
       text: '注册中...',
       spinner: 'el-icon-loading',
       background: 'rgba(0, 0, 0, 0.7)',
     })


      console.log(this.Account)
     this.$http.post('accounts', this.Account).then(res => {
       console.log('注册', res.data)
       setTimeout(() => {
       if(res.data=true){
         // 消息提示
         this.$message({
           duration: 1000,
           message:"注册成功。",
           type:"success",
         })
         //取消加载
           loading.close()
           //跳转登陆
           this.$router.push('/login')
       }else {
         // 消息提示
         this.$message({
           duration: 2000,
           message:"注册失败，请重试...",
           type:"error",
         })
         //取消加载
           loading.close()

       }
     }, 2000)
     })
   },

    // 提交表单
    //validate验证，任一表单项被校验后触发
    submitForm(Article) {
      console.log('点击按钮')
      this.$refs[Article].validate((valid) => {
        if (valid) {
          //规则正确
          this.submit();
        } else {
          console.log('error submit!!')
          this.refreshCode();
          return false
        }
      })
    },

    submit: async function () {
      console.log("判断方法")
      //toLowerCase转换小写
      if (this.reAccount.code.toLowerCase() !== this.identifyCode.toLowerCase()) {
        console.log("验证码错误")
        //重新刷新验证码
        this.refreshCode();
        // this.loading = false;
        return;
      } else {
        //验证码校验成功就可以调接口提交表单了
        console.log('验证成功')
        this.Account.username = this.reAccount.username;
        this.Account.userEmail = this.reAccount.userEmail;
        this.Account.userPwd = this.reAccount.userPwd;
        console.log("form的值：", this.Account)
        if( this.Account.username!=''){
          this.saveReaccount()
        }
      }
    },
    //取消注册返回上一页
    submitFormCancel() {
      this.$router.push('/login')

    }
  }
}
</script>


<style scoped>
/*整个内容style*/
.page_class {
  margin-top: 150px;
}

.box_class {
  position: relative;
  margin: 0 auto;
  width: 500px;
  height: 500px;
  background: #c8e5c2;


}

/*表头的style*/
.title_class {
  /*水平居中*/
  display: table;
  margin: 0 auto;

}

/*组件的style*/
#Register {
  margin-left: 25px;
  margin-top: 25px;
}

.el-form {

}

.el-input {
  width: 220px;
}

</style>