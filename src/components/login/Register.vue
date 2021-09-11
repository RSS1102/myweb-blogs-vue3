<template>

  <el-form ref="form" :model="Article" label-width="90px" @submit.native.prevent="saveArticle" id="Register">
    <el-form-item label="账号：">
      <el-input v-model="Article.title"></el-input>
    </el-form-item>
    <el-form-item label="密码：">
      <el-input v-model="Article.body"></el-input>
    </el-form-item>
    <el-form-item label="确认密码:">
      <el-input v-model="Article.body"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button @click="articleCancel">取消</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      Article: {
        // title: '',
        //  body:'',
      }
    }
  },
}
</script>

<style scoped>
#Register{
  position: relative;
  margin:0  auto;
  width: 520px;
  height: 350px;
  background: #fcf8ef;
}

</style>