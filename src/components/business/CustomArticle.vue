<template>
  <div>
    <el-form
      ref="form"
      :model="Article"
      label-width="80px"
      @submit.native.prevent="saveArticle"
      :rules="rules"
      class="form-article"
    >
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="Article.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" prop="body">
        <el-input class="area-article"  v-model="Article.body"></el-input>
      </el-form-item>


      <div v-if="Calmsg" class="cal-msg ">抱歉目前还没有取消功能呢</div>
      <el-form-item>
        <el-button type="primary" @click="saveArticle_btn('form')"
          >立即发布</el-button
        >
        <el-button @click="articleCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CustArticle",
  components: {},
  data() {
    return {
      Calmsg: false,
      Article: {
        title: "",
        body: "",
      },
      rules: {
        title: [{ required: true, message: "起一个标题吧", trigger: "blur" }],
        body: [{ required: true, message: "写下你想说的吧", trigger: "blur" }],
      },
    };
  },
  computed: {
    // ...mapState(["user"]),
  },

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
      console.log(this.Article);
      this.$http.post("article", this.Article).then((res) => {
        console.log(res.data);
      });
    },
    //取消
    articleCancel() {
      this.Calmsg = true;
      setTimeout(() => {
        this.Calmsg = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.cal-msg {
  color: red;
  font-size: 16px;
  margin-left: 30px;
  margin-bottom: 10px;
}
.form-article{
  width: 450px;
  height: 450px;
}
.area-article{

}
</style>
