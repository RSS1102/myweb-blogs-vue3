<template>
  <div>
    <mainbanner>
      <template v-slot:topslot></template>
      <template v-slot:mainslot>
        <div class="box">
          <div class="home-box">
            <logintable class="home-box-margin"></logintable>
            <loginlogin ></loginlogin>
          </div>
        </div>
      </template>
      <template v-slot:footslot>
        <footbanner></footbanner>
      </template>
    </mainbanner>
  </div>
</template>

<script>
import mainbanner from "../banners/MainBanner.vue";
import logintable from "../login/LoginTable";
import loginlogin from "../login/LoginLogin";
import footbanner from "../banners/FootBanner.vue";

export default {
  name: "login",
  components: {
    mainbanner,
    logintable,
    loginlogin,
    footbanner,
  },

  methods: {},
};
</script>

<style scoped>
.box {
  /* 利用flex布局，配合margin：auto使用，实现水平垂直居中。*/
  display: flex;
  height: 650px;

}

.home-box {
  margin: auto;
  /*两个box flex*/
  display: flex;
}

.home-box-margin {
  margin-right:400px;
}

</style>