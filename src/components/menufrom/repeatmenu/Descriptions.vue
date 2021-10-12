<template>
  <el-descriptions title="{{meenu_title}}" :column="3" border>
    <el-descriptions-item
        label="{{meenu_label1}}"
        label-align="right"
        align="center"
        label-class-name="my-label"
        class-name="my-content"
    >{{meenu_item1}}</el-descriptions-item
    >

    <el-descriptions-item label="{{meenu_label2}}" label-align="right" align="center"
    >{{ meenu_item2 }}</el-descriptions-item
    >

    <el-descriptions-item label="{{meenu_label2}}" label-align="right" align="center"
    >{{ meenu_item2 }}</el-descriptions-item
    >
    <el-descriptions-item label="{{meenu_label4}}" label-align="right" align="center"
    >{{ meenu_item2 }}</el-descriptions-item
    >
  </el-descriptions>
</template>
<script>
export default {
  name: "Descriptions"
}
</script>

<style scoped>

</style>