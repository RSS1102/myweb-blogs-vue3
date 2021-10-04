<template>
  <div>
    <mainbanner>
      <template v-slot:topslot>
      <topbanner></topbanner>
      </template>
      <template v-slot:mainslot>
        <CustArticle  ></CustArticle  >
      </template>
      <template v-slot:footslot>
        <footbanner></footbanner>
      </template>
    </mainbanner>
  </div>
</template>
<script>
import mainbanner from "../banners/MainBanner.vue";
import CustArticle  from "../business/CustomArticle.vue";
import footbanner from "../banners/FootBanner.vue";
import topbanner from "../banners/TopBanner"
export default {
  name: "login",
  components: {
    topbanner,
    mainbanner,
    CustArticle ,
    footbanner,
  },
  mounted() {
    if (this.$store.state.user.username == "") {
      this.$router.push("/login");
      // 消息提示
      this.$message({
        duration: 2000,
        message: "您还没有登陆，请登陆后重试...",
        type: "warning",
      });
    }
  },

  methods: {},
};
</script>
<style>

</style>