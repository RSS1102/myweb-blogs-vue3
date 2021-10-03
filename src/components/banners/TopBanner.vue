<!--网站底部ICP-->
<template>
  <div id="topBanner">
    <!--  返回首页-->
    <div class="topLeft" title="主页">
      <img
        src="../../assets/img/logo.png"
        alt="返回首页"
        @click="backHome"
        class="Finger"
      />
    </div>
    <!-- 账号-->
    <div class="topRight">
 <slot name="topName"></slot></template>
  <slot name="topSlot"></slot></template>
    </div>
  </div>
</template>


<script>
// import dropdownbox from "../repeat/DropdownBox.vue";
export default {
  name: "Topbanner",
  components: {
    // dropdownbox,
  },
  methods: {
    //返回首页
    backHome() {
      console.log("返回首页");
      this.$router.replace("/login");
    },
  },
};
</script>
<style>
/* el */
.el-header {
  background-color: rgb(72, 218, 169);
}
</style>
