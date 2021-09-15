<template>
  <mainslot>
    <template v-slot:topName>
      张三
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
import mainslot from "@/components/repeat/Mainslot";
export default {

  name: "name",
  components: {
    mainslot,
  },

  data() {
    return {
      Article: {
         title: '',
         body:'',
      }
    }
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
