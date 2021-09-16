<template>
  <mainslot>
    <template v-slot:topName>
      {{ user.username}}
    </template>
    <template v-slot:topSlot>
      <router-link to="/">个人信息</router-link>
      <router-link to="/">退出</router-link>
    </template>


    <template v-slot:mainSlot>
      <el-form ref="form" :model="Article" label-width="80px" @submit.native.prevent="saveArticle">
        <el-form-item label="留言标题">
          <el-input v-model="Article.title"></el-input>
        </el-form-item>
        <el-form-item label="留言内容">
          <el-input v-model="Article.body"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">立即创建</el-button>
          <el-button @click="articleCancel">取消</el-button>
        </el-form-item>
      </el-form>

    </template>
  </mainslot>
</template>

<script>
import Mainslot from "../repeat/Mainslot";
import {mapState} from 'vuex';
export default {
  name: "name",
  components: {
    Mainslot,
  },
  data() {
    return {
      Article: {
         title: '',
         body:'',
      }
    }
  },
  computed:{
  ...mapState(["user"])
  },
  methods: {
    //录入文章
    saveArticle() {
      this.$http.post('articles',this.Article).then(res=>{
        console.log(res.data);
      })
      console.log(this.Article);
    },
    //取消
    articleCancel(){

    }
  },
}

</script>

<style scoped>


</style>
