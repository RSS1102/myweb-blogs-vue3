<!--登陆-->
<template>

  <div id="login">
    <div class="btn_back">
        <el-button plain class="btn_class">账号登陆</el-button>
        <el-button plain class="btn_class" >微信登陆</el-button>
    </div>

    <!--注册账号-->
    <div id="login_Box">
    <div id="enlogin">
      <el-form ref="form" :model="enlogin" label-width="60px" @submit.native.prevent="enlogin">
        <el-form-item label="账户" class="item_class">
          <el-input v-model="enlogin.userAccount"></el-input>
        </el-form-item>
        <el-form-item label="密码" class="item_class">
          <el-input v-model="enlogin.userPwd"></el-input>
        </el-form-item>
      </el-form>
      <div >
        <a href="/register" class="link_class">注册</a>    <a href="/register" class="link_class">忘记密码</a>
      </div>
    </div >
<!--    &lt;!&ndash;  微信登陆&ndash;&gt;-->
<!--    <div id="wxlogin">-->
<!--    </div>-->
<!--    </div>-->
<!--    <el-form-item>-->
<!--      <el-button type="primary" native-type="submit">立即创建</el-button>-->
<!--      <el-button @click="enloginCancel">取消</el-button>-->
<!--    </el-form-item>-->
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
        userAccount: '',
        userPwd: '',

      }
    }
  },
  mounted() {

    // //微信登陆
    // this.wechatHandleClick();
    // document.getElementsByTagName("iframe")[0].height = "320";
    // document.getElementsByTagName("iframe")[0].style.marginLeft = "30px";
    // enloginCancel:{
     //   console.log('取消')
    // }
  },
  //计算属性
  methods: {
    //微信登陆
    // wechatHandleClick(){
      // let ba64Css =
      //     "css代码base64编码";// 微信需要https的样式路径，这里将样式内容加密base64，可以避免使用https，如果你的网站是https的可以直接使用安官方文档使用css文件路径
      // const appid = 'wx0a7924b7c9a2e3b6';
      // const redirect_uri = encodeURIComponent("www.cokbbs.games/");
      // let obj = new WxLogin({
      //   id: "wxlogin", //div的id
      //   appid: appid,
      //   scope: "snsapi_login",//固定内容
      //   redirect_uri: redirect_uri, //回调地址
      //   // href: "http://*/static/UserCss/WeChart.css" //自定义样式链接，第三方可根据实际需求覆盖默认样式。
      //   href: "data:text/css;base64," + ba64Css
      //   // state: "", //参数，可带可不带
      //   // style: "", //样式 提供"black"、"white"可选，默认为黑色文字描述
      // });
  //   }
  }


};
</script>

<style scoped>
/*整个登陆页面*/
#login {
  width: 280px;
  height: 260px;
  background: #9faec5;

}
/*登陆方式选项按钮*/
.btn_back{
  height: 70px;
  background: #f86969;
}
.btn_class{
  margin: 15px;
}

/*登陆操作盒子*/
#login_Box{
  margin-top: 15px;

}
/*自定义登陆*/
#enlogin {
  width: 230px;
  height: 260px;
  font-weight: bold;
  /*background: #305598;*/
}
.item_class {
  background: #84a3e3;
}
.link_class{
  margin:0 0  0 45px ;
}
#wxlogin {
  /*width: 230px;*/
  /*height:230px;*/
  /*background: brown;*/
}

</style>