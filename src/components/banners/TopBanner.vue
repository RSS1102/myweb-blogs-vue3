<!--网站底部ICP-->
<template>
  <div id="topBanner">
    <!--  返回首页-->

      <img
        src="../../assets/img/logo.png"
        alt="返回首页"
        @click="backHome"
        class="back-home"
      />
    <!-- 账号-->
    <div class="user-slot">
 <slot name="topName"></slot>
  <slot name="dropDown"></slot>
    </div>
  </div>
</template>


<script>

export default {
  name: "Topbanner",
  components: {

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
#topBanner{
  height: 80px;
  background-color: #7196dc;
  display: flex;
  position:relative
}

.back-home{
  border-radius:5%;
  width: 45px;
  height:45px;
  cursor: pointer;
  margin: 20px 0 0 200px;
}
.user-slot{
  margin: 20px 250px 0 0 ;
  position:absolute;
  right:0
}
</style>
