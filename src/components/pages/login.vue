<template>
  <mainsolt>
    <template v-slot:topName>
    遇到问题？
    </template>

    <template v-slot:topSlot>
    <router-link to="/contact">-关注公众号-</router-link>
    <router-link to="/contact">-添加微信-</router-link>
    </template>

    <template v-slot:mainSlot>
    <button @click="go_work_index">跳转页面</button>
    <div class="Home_Box">
      <logintable class="Home_Box_table"></logintable>
      <loginlogin class="Home_Box_login"></loginlogin>
    </div>
    </template>
  </mainsolt>
</template>
<script>

import mainsolt from "@/components/repeat/Mainslot";
import logintable from '../login/Login_table';
import loginlogin from '../login/Login_login';


export default {

  name: "login",
  components: {
    mainsolt,
    logintable,
    loginlogin,
  },

  methods: {
    go_work_index() {
      console.log("go/index")
      this.$router.push('/register')
    }

  }
}

</script>

<style scoped>

.Home_Box {
  display: flex;
  margin:10% auto;
  width:1080px;
}
.Home_Box_table{
  margin:0  250px 0   0 ;
}
.Home_Box_login{
  margin: 40px  0   0  180px;
}

</style>