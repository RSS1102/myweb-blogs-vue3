<template>
  <div class="home-loading">
    <div class="home-loading-box">
      <section class="section-text1">
        <h1>欢迎来到阿力的小破站</h1>
        <div class="box-text">
        <p>你好，欢迎您因为缘分我的小破站。 <p>
        <p> 如果你看到我的作品,还请不要嫌弃我现在薄弱的能力。</p>
        <p>时间在往前走，技术还需要成长，希望以后会越做越好。</p>
        </div>
        <p class="btn-goLogin">前往神秘之地</p>
        <p class="box-sign">———来自还在学习的新手的阿力</p>
      </section>
      <section class="section-text2" @click="goLogin">
        进入主页
      </section>

    </div>
  </div>
</template>

<script>
export default {
  name: "homeLoading",
  methods:{
    goLogin(){
      this.$router.push('/login')

    }
  }
};

</script>

<style scoped>

.home-loading{
  background: url("../../assets/img/homeLoading/home_loading.jpg")no-repeat;
  height: 100vh;
  width: 100vw;
  background-size:cover;
  overflow:hidden;
  position: relative;
}
.home-loading-box{
  /*正居中*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  /*透明box*/
  height: 500px;
  width: 600px;
  border-radius: 38px;
  box-shadow:  41px 41px 82px #9eaac9,  -41px -41px 82px #7f98b4;
  background: linear-gradient(145deg, rgba(204,200,200,0.8), rgba(204,200,200,0.8));

}
section h1 {
  text-align: center;
  font-size: 30px;
}
section .box-text{
  margin: 100px 0 0 50px;
}
section .box-sign{
  position: absolute;
  bottom:40px;
  right: 40px;
}
section p {
  /*linear-gradient:从*(1deg 旋转1度)开始，转为*色，再到*色*/
  background: linear-gradient(to right, red, blue);
  /*background-clip 的意思即是背景裁剪*/
  /*以区块内的文字作为裁剪区域向外裁剪，文字的背景即为区块的背景，文字之外的区域都将被裁剪掉。*/
  -webkit-background-clip: text;
  /*透明的*/
  color: transparent;
 margin-top:30px ;
  font-size: 20px;
}
/*进入主页的方法*/
.section-text2{
  display : none;
  font-size: 43px;
  background: linear-gradient(158deg, rgb(14, 74, 203), rgba(116, 234, 26, 0.5));
  -webkit-background-clip: text;
  /*透明的*/
  color: transparent;
  text-align: center;
  line-height: 80px;
  width: 220px;
  height: 80px;
/*  圆*/
  border-radius: 11px;
  /*正居中*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  box-shadow:  21px 41px 82px #9eaac9,  -21px -41px 82px #7f98b4;
  cursor: pointer;
}

.home-loading-box:hover .section-text1 {
  display : none;
}
.home-loading-box:hover .section-text2{
  display:block;
}
.home-loading-box:hover {
   box-shadow:  41px 41px 82px #cccccc, -41px -41px 82px #f4f4f4;
 }

/*做一个旋转box，慢慢放大显示*/
</style>