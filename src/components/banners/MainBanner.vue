<template>
  <div>
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
.el-header {
  padding: 0;
}
</style>