<template>
  <div class="main-class">
    <el-container>
      <el-header >
        <slot name="topslot">
        </slot>
      </el-header>
      <el-main>
        <slot name="mainslot"></slot>
      </el-main>
      <el-footer>
        <slot name="footslot"></slot>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "mainbanner",
  components: {},

  methods: {},
};
</script>

<style scoped>
.main-class{
  background-image: url(../../assets/img/Home/bg.png);
}
.el-header {
  padding: 0;
}
</style>