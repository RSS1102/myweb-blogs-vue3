<template>
  <div style="display: flex">
    <NavMenus></NavMenus>

  <div class="div1">
    <el-descriptions
        title="近期数据"
        direction="vertical"
        :column="2"
        border
    >
      <el-descriptions-item label="用户注册数量：" >{{userNum }}</el-descriptions-item>
      <el-descriptions-item label="用户发布留言量：" >{{messageNum }}</el-descriptions-item>
    </el-descriptions>
    <div id="main" style="width: 1000px;height:400px;"></div>
  </div>



  </div>
</template>
<script>
import  NavMenus from "../menufrom/NavMenus";
let echarts = require('echarts');
export default {
  name:'ManageMenu',
  components: {
    NavMenus,
  },
  data(){
    return{
      userNum:0,
      messageList:[],
      messageNum:0,
      date:{
        date1:0,
        date2:0,
        date3:0,
        date4:0,
        date5:0,

      }
    }
  },
  methods:{
    myEcharts(a,b,c,d,e){
      console.log(a,b,c,d,e)
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
     let option = {
        title: {
          text: '文章数量'
        },
        tooltip: {},
        legend: {
          data:['数量']
        },
        xAxis: {
          data: ["2021-10-01","2021-10-02","2021-10-03","2021-10-04","2021-10-05"]
        },
        yAxis: {},

       series: [{
          name: '数量',
          type: 'bar',
          data: [a,b,c, d, e]
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },

  async mounted() {
    //用户注册信息
    this.$http('getaccounts').then((res)=>{
      console.log(res.data)
      this.userNum=res.data
    })
    //用户发布文章信息
    //异步
  await  this.$http.get("getarticle").then((res) => {
      this.messageList=res.data
      this.messageNum=this.messageList.length
      console.log(res.data)
      let dateList=res.data.reduce((o,v)=>(o[v.date]?o[v.date]++:o[v.date]=1,o),{})
      console.log(dateList)
      this.date.date1=dateList['2021-10-01']
      this.date.date2=dateList['2021-10-02']
      this.date.date3=dateList['2021-10-03']
      this.date.date4=dateList['2021-10-04']
      this.date.date5=dateList['2021-10-05']
    });
    this.myEcharts( this.date.date1, this.date.date2, this.date.date3, this.date.date4, this.date.date5);
  },


}
</script>
<style>
.div1{
  height: 100vh;
  width: 100vw;
  background: white;

}

</style>