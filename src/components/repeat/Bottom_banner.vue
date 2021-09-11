<!--网站顶部导航栏-->
<template>
  <div id="bottombanner">
    <a href="https://beian.miit.gov.cn">
    徽园科技：备案号：皖ICP备2021006489号-1
    </a>
  </div>
</template>


<script>
export default {
  name: "Bottombanner",
}
</script>

<style scoped>
#bottombanner {
  /*大小*/
  height: 100px;

  /*下对齐  定位类型：position，*/
  position: absolute;
  bottom: 0;
  left: 35%;
  /*文本居中*/
  line-height: 100px;
  text-align: center;
font-size: 20px;
}
</style>