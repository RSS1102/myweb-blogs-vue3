<template>
  <div>
    <el-container >
      <el-header height="85px">
        <Topbanner>
          <template  v-slot:topName> <slot name="topName"></slot></template>
          <template  v-slot:topSlot> <slot name="topSlot"></slot></template>
        </Topbanner>
      </el-header>
      <el-main>
        <slot name="mainSlot"></slot>
      </el-main>
      <el-footer>
        <bottombanner></bottombanner>
      </el-footer>
    </el-container>
  </div>
</template>
<script>

import Topbanner from './Top_banner';
import Bottombanner from './Bottom_banner';

export default {

  name: "mainsolt",
  components: {
    Topbanner,
    Bottombanner,
  },

  methods: {


  }
}

</script>

<style scoped>

</style>