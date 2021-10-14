<template>
  <div>
    <mainbanner>
      <template v-slot:topslot>
        <topbanner>
          <template v-slot:dropDown>
            <dropdown></dropdown>
          </template>
        </topbanner>
      </template>
      <template v-slot:mainslot>
        <div class="article-box">
          <div class="article-release">
            <CustArticle></CustArticle>
            <!--            <div v-for="item in articleList">-->
            <!--              {{}}-->
            <!--              {{}}-->
            <!--              {{}}-->
            <!--            </div>-->
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
import CustArticle from "../business/CustomArticle.vue";
import footbanner from "../banners/FootBanner.vue";
import topbanner from "../banners/TopBanner";
import dropdown from "../repeat/DropdownBox"

export default {
  name: "login",
  components: {
    topbanner,
    mainbanner,
    CustArticle,
    footbanner,
    dropdown,
  },
  data() {
    return {
      articleList: []
    }
  },
  
  methods: {



  },

};
</script>
<style>

.article-box {
  overflow-y: hidden;
  position: relative;
  width: 100%;
  height: 400px;

}

.article-release {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>