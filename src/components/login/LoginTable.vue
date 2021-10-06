<!--网站介绍-->
<template >
  <div>
    <el-card class="box-card">
      <div class="text item">
        <h1 class="span1">{{ cardData.name }}</h1>
        <h5 class="span2">{{ cardData.message1 }}</h5>
        <h5 class="span2">{{ cardData.message2 }}</h5>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      cardData: {
        name: "欢迎大家来到阿力的小破站",
        message1: "这是自己搭建学习的一个小网站，",
        message2: "希望大家多多关照.",
      },
    };
  },
};
</script>

<style scoped>
.span1 {
  margin-bottom: 50px;
  color: #57c75a;
}
.span2 {
  text-align: center;
}
.text {
  font-size: 18px;
}

.item {
  padding: 22px 0;
}

.box-card {
  width: 400px;
  height: 300px;
  box-sizing: border-box;
}
</style>