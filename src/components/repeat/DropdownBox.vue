<template>
  <el-dropdown>
      <span class="el-dropdown-link">
     <label class="user-label"> 用户:</label> {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item >个人中心</el-dropdown-item>
      <div @click="goMenu">
      <el-dropdown-item >管理中心</el-dropdown-item>
      </div>
      <div @click="backLogin">
      <el-dropdown-item >退出登陆</el-dropdown-item>
      </div>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: "dropdown",
  data(){
    return{
      username:localStorage.getItem('username')
    }
  },

  methods:{
    goMenu() {
      this.$router.push('/manage-menu')
    },
    backLogin() {
     localStorage.removeItem('username');
     this.$router.push("/login")
    }
  }
};
</script>
<style >
.el-dropdown-link {
  cursor: pointer;
  color: #f1efef;

}.user-label{
 font-weight: bold;
  color: black;
 }
.el-icon-arrow-down {
  font-size: 12px;
}
.Finger {
  cursor: pointer;
}
</style>