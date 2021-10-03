<template>
  <div>
    <mainbanner>
      <template v-slot:topslot> </template>
      <template v-slot:mainslot>
        <div class="Home_Box">
          <logintable class="Home_Box_table"></logintable>
          <loginlogin class="Home_Box_login"></loginlogin>
        </div>
      </template>
      <template v-slot:footslot>
        <footbanner></footbanner>
      </template>
    </mainbanner>
  </div>
</template>


</mainbanner>
  
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
.Home_Box {
  display: flex;
  margin: 10% auto;
  width: 1080px;
}
.Home_Box_table {
  margin: 0 250px 0 0;
}
.Home_Box_login {
  margin: 40px 0 0 180px;
}
</style>