<template>
  <div class="article-area">
    <h1 class="article-title">写下您想说的话吧</h1>
    <el-form
        ref="form"
        :model="Article"
        label-width="80px"
        @submit.native.prevent="saveArticle"
        :rules="rules"
        class="article-form"
    >

      <el-form-item label="文章标题" prop="title">
        <el-input v-model="Article.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" prop="body">
        <el-input class="area-article" v-model="Article.body"></el-input>
      </el-form-item>



      <el-form-item>
        <el-button type="primary" @click="saveArticle_btn('form')"
        >立即发布
        </el-button
        >
        <el-button @click="articleCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "CustArticle",
  components: {},
  data() {
    return {
      User_Article: "",
      Calmsg: false,
      Article: {
        title: "",
        body: "",
      },
      rules: {
        title: [{required: true, message: "起一个标题吧", trigger: "blur"}],
        body: [{required: true, message: "写下你想说的吧", trigger: "blur"}],
      },
    };
  },
  computed: {},

  methods: {
    //录入文章
    saveArticle_btn(Article) {
      this.$refs[Article].validate((valid) => {
        if (valid) {
          this.saveArticle();
        } else {
          return false;
        }
      });
    },
    saveArticle() {
      this.Article = Object.assign(this.Article,this.$store.state.user)
      console.log(this.Article);
      this.$http.post("article", this.Article).then((res) => {
        console.log(res.data);
      });
    },
    //取消
    articleCancel() {
     this.Article. title=""
      this.Article.body=""
    },
  },
};
</script>

<style scoped>
.article-area {
background-image: url("../../assets/img/article/article_flame.jpg");
  border-radius:4%;
}
.article-title{
  text-align: center;
}
.article-form {
  width: 450px;
  height: 200px;
  margin: 40px;
}

</style>
