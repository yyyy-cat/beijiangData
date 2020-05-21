
<template>
  <!-- 生产运行 -->
  <div class="productiontable">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <!-- <img src="..\assets\production\sc_logo.png" alt> -->
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
      <p
        style="text-align: center; font-family: 庞门正道标题体; font-size: 180px;color:#11aedc; letter-spacing:15px;"
      >
        <img
          src="..\assets\Administration\nav_logo.png"
          alt
          style="vertical-align: middle;margin-top: -37px;"
        />
        <span>生产运行</span>
      </p>
    </div>
    <!-- 返回主页 -->
    <div class="index-esc" @click="esc">
      <!-- 切换图标 -->
      <span>
        <img src="..\assets\Administration\home.png" alt />
        主页
      </span>
    </div>
    <!-- 显示用户登陆和退出 -->
    
      <div id="imgs">
        <img
          @click="tabtxt"
          class="index-name_esc-img1"
          src="..\assets\production-table\sc_table.png"
          alt
        />
      </div>
      <!-- 跳转登陆后的页面 -->
     <login></login>

    <div class="productiontable-box">
      <div class="protab-sc_bg1">
        <p>机台基本信息</p>
        <div class="protab-sc_bg1-box">
          <el-table :data="tableData" border style="width: 100%;">
            <el-table-column prop="lineID" label="机号" align="center" width="100"></el-table-column>
            <el-table-column prop="colorNo" label="色号" align="center" width="200"></el-table-column>
            <el-table-column prop="cylinderNo" label="缸号" align="center" width="300"></el-table-column>
            <el-table-column prop="varieties" label="品种" align="center" width="250"></el-table-column>
            <el-table-column prop="warpingLength" label="整经长度" align="center" width="280"></el-table-column>
            <el-table-column prop="startTime" label="开机时间" align="center" width="500"></el-table-column>
            <el-table-column prop="endTime" label="预计了机时间" align="center" width="500"></el-table-column>
            <el-table-column prop="standardCylinder" label="标准缸号" align="center" width="300"></el-table-column>
            <el-table-column prop="standardStartup" label="标准开机时间" align="center" width="500"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="protab-sc_bg2">
        <p>水用量</p>
        <div id="myChart-bar1" :style="{width: '100%', height: '640px'}"></div>
      </div>
      <div class="protab-sc_bg3">
        <p>汽用量</p>
        <div id="myChart-bar2" :style="{width: '100%', height: '640px'}"></div>
      </div>
      <div class="protab-sc_bg7">
        <p>母液用量</p>
        <div id="myChart-bar3" :style="{width: '100%', height: '640px'}"></div>
      </div>
      <!-- <div class="protab-sc_bg4">
        <p>机台车速</p>
        <div id="myChart-curveA" :style="{width: '100%', height: '380px'}"></div>
        <div id="myChart-curveB" :style="{width: '100%', height: '380px'}"></div>
        <div id="myChart-curveC" :style="{width: '100%', height: '380px'}"></div>
        <div id="myChart-curveD" :style="{width: '100%', height: '380px'}"></div>
        <div id="myChart-curveE" :style="{width: '100%', height: '380px'}"></div>
      </div>-->
      <div class="protab-sc_bg5">
        <p>机台工艺执行信息</p>
        <div class="bg5-content">
          <div id="myChart-gyA1" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChart-gyA2" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChart-gyB1" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChart-gyB2" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChart-gyC1" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChart-gyC2" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChart-gyD1" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChart-gyD2" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChart-gyE1" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChart-gyE2" :style="{width: '1790px', height: '334px'}"></div>
        </div>
      </div>
      <div class="protab-sc_bg6">
        <p>机台过程检测信息</p>
        <div class="bg6-content">
          <div id="myChartA1" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChartA2" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChartB1" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChartB2" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChartC1" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChartC2" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChartD1" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChartD2" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChartE1" :style="{width: '1790px', height: '334px'}"></div>
          <div id="myChartE2" :style="{width: '1790px', height: '334px'}"></div>
        </div>
      </div>
    </div>
    <!-- 底部导航还没写呢 -->
  </div>
</template>
<script>
import axios from "axios";
import a1 from "../assets/a1.js";
import login from "./login_assembly.vue";
export default {
  data() {
    return {
      tableData: [],
      shui: "",
      dianlanTimeA1: "",
      mA:"",
      mB:"",
      mC:"",
      mD:"",
      mE:"",
      bzA:{},
      bzB:{},
      bzC:{},
      bzD:{},
      bzE:{},
    };
  },
   components: {login},
  created() {
    // this.setdata();
  },
  mounted() {
    // this.setdata()
    // this.setShui();
    // setTimeout(this.drawLine(),1000)
    this.setData();

    this.drawLine();
    console.log(a1)
  },
  methods: {
    biaozhun(){

    },
    setShui() {
      //水能耗
      axios
        .get("/api/getEnergyConsumptionChart", {
          params: {
            type: 2
          }
        })
        .then(res => {
          console.log("resshui", res.data);
          // this.tableData = res.data.data;
          var shuiA = "";
          var shuiB = "";
          var shuiC = "";
          var shuiD = "";
          var shuiE = "";
          var datdashui = res.data.data;
          for (let i = 0; i < datdashui.length; i++) {
            if (datdashui[i].boardName == "A") {
              console.log(datdashui[i].steam);

              shuiA = datdashui[i].steam;
            }
            if (datdashui[i].boardName == "B") {
              shuiB = datdashui[i].steam;
            }
            if (datdashui[i].boardName == "C") {
              shuiC = datdashui[i].steam;
            }
            if (datdashui[i].boardName == "D") {
              shuiD = datdashui[i].steam;
            }
            if (datdashui[i].boardName == "E") {
              shuiE = datdashui[i].steam;
            }
          }
          if (shuiA == "") {
            shuiA = 0;
          }
          if (shuiB == "") {
            shuiB = 0;
          }
          if (shuiC == "") {
            shuiC = 0;
          }
          if (shuiD == "") {
            shuiD = 0;
          }
          if (shuiE == "") {
            shuiE = 0;
          }

          this.shui = [shuiE, shuiD, shuiC, shuiB, shuiA];
          console.log(this.shui);
        });

      // drawLine()
    },
    setData() {
      axios///getRunningBasicInfo
        .get("a1", {
          // params: {
          //   lineID: "all"
          // }
        })
        .then(res => {
          console.log("resAA1", res.data);
          this.tableData = res.data.data;
          var arr  = res.data.data
          for (let i = 0; i < arr.length; i++) {
            if (arr[i].lineID == "A") {
              this.mA = arr[i].cylinderNo
            }
            if (arr[i].lineID == "B") {
              this.mB = arr[i].cylinderNo
            }
            if (arr[i].lineID == "C") {
              this.mC = arr[i].cylinderNo
            }
            if (arr[i].lineID == "D") {
              this.mD = arr[i].cylinderNo
            }
            if (arr[i].lineID == "E") {
              this.mE = arr[i].cylinderNo
            }
            
          }
          //A机标准
           axios
        .get("/api/getControlStandardProduction", {
          params: {
            cylinderNo: this.mA
          }
        })
        .then(res => {
          console.log("resmA", res.data.data[0]);
          if (res.data.data[0]!="") {
            this.bzA = res.data.data[0]
          }
          if (res.data.data[0]==undefined) {
            this.bzA = {}
          }
          console.log("bzA", this.bzA);
          
        })
          //B机标准
           axios
        .get("/api/getControlStandardProduction", {
          params: {
            cylinderNo: this.mB
          }
        })
        .then(res => {
          console.log("resmB", res.data.data[0]);
          if (res.data.data[0]!="") {
            this.bzB = res.data.data[0]
          }
          if (res.data.data[0]==undefined) {
            this.bzB = {}
          }
          console.log("bzB", this.bzB);
        })
          //C机标准
           axios
        .get("/api/getControlStandardProduction", {
          params: {
            cylinderNo: this.mC
          }
        })
        .then(res => {
          console.log("resmC", res.data.data[0]);
          if (res.data.data[0]!="") {
            this.bzC = res.data.data[0]
          }
          if (res.data.data[0]==undefined) {
            this.bzC = {}
          }
          console.log("bzC", this.bzC);
        })
          //D机标准
           axios
        .get("/api/getControlStandardProduction", {
          params: {
            cylinderNo: this.mD
          }
        })
        .then(res => {
          console.log("resmD", res.data.data[0]);
          if (res.data.data[0]!="") {
            this.bzD = res.data.data[0]
          }
          if (res.data.data[0]==undefined) {
            this.bzD = {}
          }
          console.log("bzD", this.bzD);
        })
          //E机标准
           axios
        .get("/api/getControlStandardProduction", {
          params: {
            cylinderNo: this.mE
          }
        })
        .then(res => {
          console.log("resmE", res.data.data[0]);
          if (res.data.data[0]!="") {
            this.bzE = res.data.data[0]
          }
          if (res.data.data[0]==undefined) {
            this.bzE = {}
          }
          console.log("bzE", this.bzE);
        })








        });
    },
    pro() {
      this.$router.push("/personal");
    },
    tabtxt() {
      this.$router.push("/production");
    },
    esc() {
      this.$router.push("/index");
    },
    drawLine() {
      //////////标准信息
      axios
        .get("/api/getControlStandardDaping", {
          params: {
            lineID: "all"
          }
        })
        .then(res => {
          console.log("biaozhun", res.data);
          var qwe = res.data
          /////////////水能耗
          axios
            .get("/api/getEnergyConsumptionChart", {
              params: {
                type: 2
              }
            })
            .then(res => {
              console.log("qwe",qwe);
              
              // console.log("resshui", res.data);
              // this.tableData = res.data.data;
              var shuiA = "";
              var shuiB = "";
              var shuiC = "";
              var shuiD = "";
              var shuiE = "";
              var datdashui = res.data.data;
              for (let i = 0; i < datdashui.length; i++) {
                if (datdashui[i].boardName == "A") {
                  // console.log(datdashui[i].steam);

                  shuiA = datdashui[i].steam;
                }
                if (datdashui[i].boardName == "B") {
                  shuiB = datdashui[i].steam;
                }
                if (datdashui[i].boardName == "C") {
                  shuiC = datdashui[i].steam;
                }
                if (datdashui[i].boardName == "D") {
                  shuiD = datdashui[i].steam;
                }
                if (datdashui[i].boardName == "E") {
                  shuiE = datdashui[i].steam;
                }
              }
              if (shuiA == "") {
                shuiA = 0;
              }
              if (shuiB == "") {
                shuiB = 0;
              }
              if (shuiC == "") {
                shuiC = 0;
              }
              if (shuiD == "") {
                shuiD = 0;
              }
              if (shuiE == "") {
                shuiE = 0;
              }

              var shuibz = [this.bzA.waterInformationM,
              this.bzB.waterInformationM,
              this.bzC.waterInformationM,
              this.bzD.waterInformationM,
              this.bzE.waterInformationM]
              console.log("shuibz1111111111111111111111111111111111");
              
              var shuiAll = [shuiE, shuiD, shuiC, shuiB, shuiA];
              console.log(shuiAll);

              // 水
              let bar1 = this.$echarts.init(document.getElementById("myChart-bar1"));

              // 水
              bar1.setOption({
                title: {
                  // text: "单位（m²）",
                  // subtext: '纯属虚构'
                  textStyle: {
                    fontWeight: "normal", //标题颜色
                    color: "#fff",
                    fontSize: 28
                  }
                },
                legend: {
                  margin: 100,
                  data: ["标准值", "实际值"],
                  x: "80%",
                  textStyle: {
                    fontSize: 28, //字体大小
                    color: "#fff", //字体颜色
                    borderColor: "blue"
                  }
                },
                // tooltip: {
                //   trigger: "axis"
                // },
                // legend: {
                //   data: ["标准值", "实际值"]
                // },
                // color: ["#fef552", "#4f80f7"],
                tooltip: {
                  trigger: "axis",
                  axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                  }
                },
                // legend: {
                //     data: ['实际值', '标准值']
                // },
                grid: {//设置图表位置
                  // top: "20%",
                  left: "3%",
                  right: "4%",
                  bottom: "11%",
                  containLabel: true
                },
                xAxis: {
                  // type: 'value',
                  axisLabel: {
                    formatter: "{value}",
                    color: "white",
                    fontSize: 35
                  }
                },
                yAxis: {
                  axisLine: {
                    lineStyle: {
                      color: "#354875",
                      width: 2
                    }
                  },
                  axisLabel: {
                    formatter: "{value}",
                    color: "white",
                    // width:"8"
                    // fontSize:"30px"
                    fontSize: 35
                  },
                  splitLine: {
                    lineStyle: {
                      type: "dashed",
                      color: "#354875"
                    }
                  },

                  // axisLabel: {
                  //     // formatter: "{value}",
                  //     color: "white"
                  //     // width:"8"
                  //     // fontSize:"30px"
                  //   },
                  type: "category",
                  data: ["E机", "D机", "C机", "B机", "A机"]
                },
                calculable: true,
                animationDurationUpdate: 1200,
                series: [
                  {
                    name: "实际值",
                    type: "bar",
                    barWidth: 60,
                    // stack: '总量',
                    itemStyle: {
                      color: "#00c8e0"
                    },
                    label: {
                      normal: {
                        show: true,
                        position: "right",
                        textStyle: {
                          //数值样式
                          color: "white",
                          fontSize: 25
                        }
                      }
                    },
                    barGap: "-100%",
                    // [320, 302, 301, 334, 390]
                    data: shuiAll
                  },
                  {
                    name: "标准值",
                    type: "bar",
                    barWidth: 60,
                    // stack: '总量',
                    itemStyle: {
                      normal: {
                        color: "rgba(237,125,49, 0)",
                        borderColor: "#fef552",
                        borderWidth: "6"
                      }
                    },
                    label: {
                      normal: {
                        show: true,
                        position: "top",
                        textStyle: {
                          //数值样式
                          color: "white",
                          fontSize: 25
                        }
                      }
                    },

                    data: [120, 132, 101, 134, 90]
                  }
                ]
              });
            });
          // console.log(this.shui);
        });

      /////////////水蒸气能耗
      axios
        .get("/api/getEnergyConsumptionChart", {
          params: {
            type: 1
          }
        })
        .then(res => {
          // console.log("resqi", res.data);
          // this.tableData = res.data.data;
          var qiA = "";
          var qiB = "";
          var qiC = "";
          var qiD = "";
          var qiE = "";
          var datdaqi = res.data.data;
          for (let i = 0; i < datdaqi.length; i++) {
            if (datdaqi[i].boardName == "A") {
              console.log(datdaqi[i].water);

              qiA = datdaqi[i].water;
            }
            if (datdaqi[i].boardName == "B") {
              qiB = datdaqi[i].water;
            }
            if (datdaqi[i].boardName == "C") {
              qiC = datdaqi[i].water;
            }
            if (datdaqi[i].boardName == "D") {
              qiD = datdaqi[i].water;
            }
            if (datdaqi[i].boardName == "E") {
              qiE = datdaqi[i].water;
            }
          }
          if (qiA == "") {
            qiA = 0;
          }
          if (qiB == "") {
            qiB = 0;
          }
          if (qiC == "") {
            qiC = 0;
          }
          if (qiD == "") {
            qiD = 0;
          }
          if (qiE == "") {
            qiE = 0;
          }

          var qiAll = [qiE, qiD, qiC, qiB, qiA];
          // console.log(qiAll);

          // 汽
          let bar2 = this.$echarts.init(
            document.getElementById("myChart-bar2")
          );

          // 汽
          bar2.setOption({
            title: {
              // text: "单位（m²）",
              // subtext: '纯属虚构'
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              }
            },
            legend: {
              margin: 100,
              data: ["标准值", "实际值"],
              x: "80%",
              x: "80%",
              textStyle: {
                fontSize: 28, //字体大小
                color: "#fff", //字体颜色
                borderColor: "blue"
              }
            },
            // tooltip: {
            //   trigger: "axis"
            // },
            // legend: {
            //   data: ["标准值", "实际值"]
            // },
            // color: ["#fef552", "#4f80f7"],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            // legend: {
            //     data: ['实际值', '标准值']
            // },
            grid: {
              // top: "20%",
              left: "3%",
              right: "4%",
              bottom: "11%",
              containLabel: true
            },
            xAxis: {
              // type: 'value',
              axisLabel: {
                formatter: "{value}",
                color: "white",
                fontSize: 35
              }
            },
            yAxis: {
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white",
                // width:"8"
                // fontSize:"30px"
                fontSize: 35
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              },

              // axisLabel: {
              //     // formatter: "{value}",
              //     color: "white"
              //     // width:"8"
              //     // fontSize:"30px"
              //   },
              type: "category",
              data: ["E机", "D机", "C机", "B机", "A机"]
            },
            calculable: true,
            animationDurationUpdate: 1200,
            series: [
              {
                name: "实际值",
                type: "bar",
                barWidth: 60,
                // stack: '总量',
                itemStyle: {
                  color: "#e0bb00"
                },
                label: {
                  normal: {
                    show: true,
                    position: "right",
                    textStyle: {
                      //数值样式
                      color: "white",
                      fontSize: 25
                    }
                  }
                },
                barGap: "-100%",
                data: qiAll
              },
              {
                name: "标准值",
                type: "bar",
                barWidth: 60,
                // stack: '总量',
                itemStyle: {
                  normal: {
                    color: "rgba(237,125,49, 0)",
                    borderColor: "#51fcc0",
                    borderWidth: "5"
                  }
                },
                label: {
                  normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                      //数值样式
                      color: "white",
                      fontSize: 25
                    }
                  }
                },

                data: [120, 132, 101, 134, 90]
              }
            ]
          });
        });

      ////////////母液用量
      axios
        .get("/api/getDosageOfExcipientsChart", {
          params: {
            type: 4
          }
        })
        .then(res => {
          console.log("母液用量", res.data);
          var muyeAll = res.data.data;
          var muyeA = [];
          console.log("muyeA", muyeA);

          var muyeB = [];
          var muyeC = [];
          var muyeD = [];
          var muyeE = [];
          var time = [];

          var cumulantA = "";
          var cumulantBA = "";
          var cumulantAA = "";
          var cumulantB = "";
          var cumulantBB = "";
          var cumulantAB = "";
          var cumulantC = "";
          var cumulantBC = "";
          var cumulantAC = "";
          var cumulantD = "";
          var cumulantBD = "";
          var cumulantAD = "";
          var cumulantE = "";
          var cumulantBE = "";
          var cumulantAE = "";

          for (let i = 0; i < muyeAll.length; i++) {
            time.push(muyeAll[i].time);

            if (muyeAll[i].boardName == "A") {
              muyeA.push(muyeAll[i]);
            }
            if (muyeAll[i].boardName == "B") {
              muyeB.push(muyeAll[i]);
            }
            if (muyeAll[i].boardName == "C") {
              muyeC.push(muyeAll[i]);
            }
            if (muyeAll[i].boardName == "D") {
              muyeD.push(muyeAll[i]);
            }
            if (muyeAll[i].boardName == "E") {
              muyeE.push(muyeAll[i]);
            }
          }
          for (let j = 0; j < muyeA.length; j++) {
            var cumulantA = muyeA[j].cumulant; //靛蓝缸次累加量
            var cumulantBA = muyeA[j].cumulantB; //靛蓝前缸次累加量
            var cumulantAA = muyeA[j].cumulantA; //靛蓝后缸次累加量
          }
          for (let j = 0; j < muyeB.length; j++) {
            var cumulantB = muyeB[j].cumulant; //靛蓝缸次累加量
            var cumulantBB = muyeB[j].cumulantB; //靛蓝前缸次累加量
            var cumulantAB = muyeB[j].cumulantA; //靛蓝后缸次累加量
          }
          for (let j = 0; j < muyeC.length; j++) {
            var cumulantC = muyeC[j].cumulant; //靛蓝缸次累加量
            var cumulantBC = muyeC[j].cumulantB; //靛蓝前缸次累加量
            var cumulantAC = muyeC[j].cumulantA; //靛蓝后缸次累加量
          }
          for (let j = 0; j < muyeD.length; j++) {
            var cumulantD = muyeD[j].cumulant; //靛蓝缸次累加量
            var cumulantBD = muyeD[j].cumulantB; //靛蓝前缸次累加量
            var cumulantAD = muyeD[j].cumulantA; //靛蓝后缸次累加量
          }
          for (let j = 0; j < muyeE.length; j++) {
            var cumulantE = muyeE[j].cumulant; //靛蓝缸次累加量
            var cumulantBE = muyeE[j].cumulantB; //靛蓝前缸次累加量
            var cumulantAE = muyeE[j].cumulantA; //靛蓝后缸次累加量
          }
          if (cumulantA == "") {
            cumulantA = 0;
          }
          if (cumulantBA == "") {
            cumulantBA = 0;
          }
          if (cumulantAA == "") {
            cumulantAA = 0;
          }
          if (cumulantB == "") {
            cumulantB = 0;
          }
          if (cumulantBB == "") {
            cumulantBB = 0;
          }
          if (cumulantAB == "") {
            cumulantAB = 0;
          }
          if (cumulantC == "") {
            cumulantC = 0;
          }
          if (cumulantBC == "") {
            cumulantBC = 0;
          }
          if (cumulantAC == "") {
            cumulantAC = 0;
          }
          if (cumulantD == "") {
            cumulantD = 0;
          }
          if (cumulantBD == "") {
            cumulantBD = 0;
          }
          if (cumulantAD == "") {
            cumulantAD = 0;
          }
          if (cumulantE == "") {
            cumulantE = 0;
          }
          if (cumulantBE == "") {
            cumulantBE = 0;
          }
          if (cumulantAE == "") {
            cumulantAE = 0;
          }

          var muyeshuju = [
            cumulantE,
            cumulantBE,
            cumulantAE,
            cumulantD,
            cumulantBD,
            cumulantAD,
            cumulantC,
            cumulantBC,
            cumulantAC,
            cumulantB,
            cumulantBB,
            cumulantAB,
            cumulantA,
            cumulantBA,
            cumulantAA
          ];
          // console.log("1111", muyeshuju, time);
          // 母液用量
          let bar3 = this.$echarts.init(
            document.getElementById("myChart-bar3")
          );

          // 母液用量
          bar3.setOption({
            title: {
              // text: "单位（m²）",
              // subtext: '纯属虚构'
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              }
            },
            legend: {
              margin: 100,
              //   data: ["标准值", "实际值","靛蓝标准值", "靛蓝实际值"],
              x: "50%",
              textStyle: {
                fontSize: 28, //字体大小
                color: "#fff", //字体颜色
                borderColor: "blue"
              }
            },
            // tooltip: {
            //   trigger: "axis"
            // },
            // legend: {
            //   data: ["标准值", "实际值"]
            // },
            // color: ["#fef552", "#4f80f7"],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            // legend: {
            //     data: ['实际值', '标准值']
            // },
            grid: {
              // top: "20%",
              left: "3%",
              right: "4%",
              bottom: "11%",
              containLabel: true
            },
            xAxis: {
              // type: 'value',
              axisLabel: {
                formatter: "{value}",
                color: "white",
                fontSize: 35
              }
            },
            yAxis: {
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white",
                // width:"8"
                // fontSize:"30px"
                fontSize: 22
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              },

              // axisLabel: {
              //     // formatter: "{value}",
              //     color: "white"
              //     // width:"8"
              //     // fontSize:"30px"
              //   },
              type: "category",
              data: [
                "E机靛蓝",
                "E机前打底",
                "E机后套面",
                "D机靛蓝",
                "D机前打底",
                "D机后套面",
                "C机靛蓝",
                "C机前打底",
                "C机后套面",
                "B机靛蓝",
                "B机前打底",
                "B机后套面",
                "A机靛蓝",
                "A机前打底",
                "A机后套面"
              ]
            },
            calculable: true,
            animationDurationUpdate: 1200,
            series: [
              {
                name: "实际值",
                type: "bar",
                barWidth: 30,
                // stack: '总量',
                itemStyle: {
                  color: function(params) {
                    // build a color map as your need.
                    var colorList = [
                      "#0487f9",
                      "#ff7d89",
                      "#ff7200",
                      "#0487f9",
                      "#ff7d89",
                      "#ff7200",
                      "#0487f9",
                      "#ff7d89",
                      "#ff7200",
                      "#0487f9",
                      "#ff7d89",
                      "#ff7200",
                      "#0487f9",
                      "#ff7d89",
                      "#ff7200"
                    ];
                    return colorList[params.dataIndex];
                  }
                },
                label: {
                  normal: {
                    show: true,
                    position: "right",
                    textStyle: {
                      //数值样式
                      color: "white",
                      fontSize: 25
                    }
                  }
                },
                barGap: "-100%",
                data: muyeshuju
              },
              {
                name: "标准值",
                type: "bar",
                barWidth: 30,
                // stack: '总量',
                itemStyle: {
                  normal: {
                    color: "rgba(237,125,49, 0)",
                    borderColor: "#fbfa50",
                    borderWidth: "5"
                  }
                },
                label: {
                  normal: {
                    show: true,
                    position: "inside",
                    textStyle: {
                      //数值样式
                      color: "fbfa50",
                      fontSize: 25
                    }
                  }
                },

                data: [
                  300,
                  310,
                  287,
                  300,
                  370,
                  310,
                  330,
                  323,
                  300,
                  323,
                  300,
                  350,
                  323,
                  300,
                  350
                ]
              }
            ]
          });
        });

      /////////////生产运行-工艺执行信息
      axios
        .get("/api/getProcessExecutionInfo", {
          params: {
            limit: "all",
            page: 1,
            type: 4,
            cylinderNo: "all"
          }
        })
        .then(res => {
          console.log("shengchanAll", res.data.data);
          var shengchanAll = res.data.data;
          var shengchanA = [];
          var shengchanB = [];
          var shengchanC = [];
          var shengchanD = [];
          var shengchanE = [];

          var additionalTrafficIndigoA = []; //A机器靛蓝母液追加流量
          var additionalTrafficBottomingA = []; //A机器靛蓝前母液追加流量
          var additionalTrafficSurfaceA = []; //A机器靛蓝后母液追加流量

          var additionalTrafficIndigoB = []; //B机器靛蓝母液追加流量
          var additionalTrafficBottomingB = []; //B机器靛蓝前母液追加流量
          var additionalTrafficSurfaceB = []; //B机器靛蓝后母液追加流量

          var additionalTrafficIndigoC = []; //C机器靛蓝母液追加流量
          var additionalTrafficBottomingC = []; //C机器靛蓝前母液追加流量
          var additionalTrafficSurfaceC = []; //C机器靛蓝后母液追加流量

          var additionalTrafficIndigoD = []; //D机器靛蓝母液追加流量
          var additionalTrafficBottomingD = []; //D机器靛蓝前母液追加流量
          var additionalTrafficSurfaceD = []; //D机器靛蓝后母液追加流量

          var additionalTrafficIndigoE = []; //E机器靛蓝母液追加流量
          var additionalTrafficBottomingE = []; //E机器靛蓝前母液追加流量
          var additionalTrafficSurfaceE = []; //E机器靛蓝后母液追加流量

          var dyeUptakeA = []; //A机器靛蓝上染率
          var dyeUptakeBA = []; //A机器靛蓝前上染率
          var dyeUptakeAA = []; //A机器靛蓝后上染率

          var dyeUptakeB = []; //B机器靛蓝上染率
          var dyeUptakeBB = []; //B机器靛蓝前上染率
          var dyeUptakeAB = []; //B机器靛蓝后上染率

          var dyeUptakeC = []; //C机器靛蓝上染率
          var dyeUptakeBC = []; //C机器靛蓝前上染率
          var dyeUptakeAC = []; //C机器靛蓝后上染率

          var dyeUptakeD = []; //D机器靛蓝上染率
          var dyeUptakeBD = []; //D机器靛蓝前上染率
          var dyeUptakeAD = []; //D机器靛蓝后上染率

          var dyeUptakeE = []; //E机器靛蓝上染率
          var dyeUptakeBE = []; //E机器靛蓝前上染率
          var dyeUptakeAE = []; //E机器靛蓝后上染率

          var timeA = [];
          var timeB = [];
          var timeC = [];
          var timeD = [];
          var timeE = [];

          //按照生产线划分数据
          for (let i = 0; i < shengchanAll.length; i++) {
            if (shengchanAll[i].boardName == "A") {
              shengchanA.push(shengchanAll[i]);
            }
            if (shengchanAll[i].boardName == "B") {
              shengchanB.push(shengchanAll[i]);
            }
            if (shengchanAll[i].boardName == "C") {
              shengchanC.push(shengchanAll[i]);
            }
            if (shengchanAll[i].boardName == "D") {
              shengchanD.push(shengchanAll[i]);
            }
            if (shengchanAll[i].boardName == "E") {
              shengchanE.push(shengchanAll[i]);
            }
          }
          //这边是每个生产线的母液追加流量
          //A
          for (let j = 0; j < shengchanA.length; j++) {
            additionalTrafficIndigoA.push(
              shengchanA[j].additionalTrafficIndigo
            );
            additionalTrafficBottomingA.push(
              shengchanA[j].additionalTrafficBottoming
            );
            additionalTrafficSurfaceA.push(
              shengchanA[j].additionalTrafficSurface
            );
            timeA.push(shengchanA[j].time);
          }
          //B
          for (let j = 0; j < shengchanC.length; j++) {
            additionalTrafficIndigoC.push(
              shengchanC[j].additionalTrafficIndigo
            );
            additionalTrafficCottomingC.push(
              shengchanC[j].additionalTrafficCottoming
            );
            additionalTrafficSurfaceC.push(
              shengchanC[j].additionalTrafficSurface
            );
            timeC.push(shengchanC[j].time);
          }
          //C
          for (let j = 0; j < shengchanC.length; j++) {
            additionalTrafficIndigoC.push(
              shengchanC[j].additionalTrafficIndigo
            );
            additionalTrafficCottomingC.push(
              shengchanC[j].additionalTrafficCottoming
            );
            additionalTrafficSurfaceC.push(
              shengchanC[j].additionalTrafficSurface
            );
            timeC.push(shengchanC[j].time);
          }
          //D
          for (let j = 0; j < shengchanD.length; j++) {
            additionalTrafficIndigoD.push(
              shengchanD[j].additionalTrafficIndigo
            );
            additionalTrafficCottomingD.push(
              shengchanD[j].additionalTrafficCottoming
            );
            additionalTrafficSurfaceD.push(
              shengchanD[j].additionalTrafficSurface
            );
            timeD.push(shengchanD[j].time);
          }
          //E
          for (let j = 0; j < shengchanE.length; j++) {
            additionalTrafficIndigoE.push(
              shengchanE[j].additionalTrafficIndigo
            );
            additionalTrafficCottomingE.push(
              shengchanE[j].additionalTrafficCottoming
            );
            additionalTrafficSurfaceE.push(
              shengchanE[j].additionalTrafficSurface
            );
            timeE.push(shengchanE[j].time);
          }
          //这边是每个生产线的上染率
          //A
          for (let j = 0; j < shengchanA.length; j++) {
            dyeUptakeA.push(shengchanA[j].dyeUptake);
            dyeUptakeBA.push(shengchanA[j].dyeUptakeB);
            dyeUptakeAA.push(shengchanA[j].dyeUptakeA);
          }
          //B
          for (let j = 0; j < shengchanB.length; j++) {
            dyeUptakeB.push(shengchanB[j].dyeUptake);
            dyeUptakeBB.push(shengchanB[j].dyeUptakeB);
            dyeUptakeAB.push(shengchanB[j].dyeUptakeA);
          }
          //C
          for (let j = 0; j < shengchanC.length; j++) {
            dyeUptakeC.push(shengchanC[j].dyeUptake);
            dyeUptakeBC.push(shengchanC[j].dyeUptakeB);
            dyeUptakeAC.push(shengchanC[j].dyeUptakeA);
          }
          //D
          for (let j = 0; j < shengchanD.length; j++) {
            dyeUptakeD.push(shengchanD[j].dyeUptake);
            dyeUptakeBD.push(shengchanD[j].dyeUptakeB);
            dyeUptakeAD.push(shengchanD[j].dyeUptakeA);
          }
          //E
          for (let j = 0; j < shengchanE.length; j++) {
            dyeUptakeE.push(shengchanE[j].dyeUptake);
            dyeUptakeBE.push(shengchanE[j].dyeUptakeB);
            dyeUptakeAE.push(shengchanE[j].dyeUptakeA);
          }

          // console.log( "shuju",  additionalTrafficIndigoA,  additionalTrafficDottomingA,  additionalTrafficSurfaceA,  timeA );
          // console.log( "shuju",additionalTrafficIndigoD,additionalTrafficDottomingD,additionalTrafficSurfaceD,timeB );

          // 机台工艺执行
          let gyA1 = this.$echarts.init(
            document.getElementById("myChart-gyA1")
          );
          let gyA2 = this.$echarts.init(
            document.getElementById("myChart-gyA2")
          );
          let gyB1 = this.$echarts.init(
            document.getElementById("myChart-gyB1")
          );
          let gyB2 = this.$echarts.init(
            document.getElementById("myChart-gyB2")
          );
          let gyC1 = this.$echarts.init(
            document.getElementById("myChart-gyC1")
          );
          let gyC2 = this.$echarts.init(
            document.getElementById("myChart-gyC2")
          );
          let gyD1 = this.$echarts.init(
            document.getElementById("myChart-gyD1")
          );
          let gyD2 = this.$echarts.init(
            document.getElementById("myChart-gyD2")
          );
          let gyE1 = this.$echarts.init(
            document.getElementById("myChart-gyE1")
          );
          let gyE2 = this.$echarts.init(
            document.getElementById("myChart-gyE2")
          );

          // 机台工艺执行
          gyA1.setOption({
            color: ["#00ff0c", "#00eaff", "#ff6c00"],
            title: {
              text: "母液追加流量（g/L）",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              },
              x: "5%"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: ["靛蓝前打底", "靛蓝", "靛蓝后套面"],
              data: [
                {
                  name: "靛蓝前打底",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00ff0c" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00eaff" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝后套面",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#ff6c00" // 图例文字颜色
                  }
                }
              ],
              x: "60%",
              textStyle: {
                fontSize: 28 //字体大小
              }
            },

            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeA,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝前打底",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficBottomingA,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ff0c"
                    }
                  }
                }
              },
              {
                name: "靛蓝",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficIndigoA,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00eaff"
                    }
                  }
                }
              },
              {
                name: "靛蓝后套面",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficSurfaceA,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff6c00"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00ff0c ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 100,
                      lineStyle: {
                        type: "dash",
                        color: "#00eaff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 300,
                      lineStyle: {
                        type: "dash",
                        color: "#ff6c00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          gyA2.setOption({
            color: ["#00ffd4", "#00c0ff", "#f6ff00"],
            title: {
              text: "实时上染率（g/L）",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              },
              x: "5%"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: ["靛蓝前打底", "靛蓝", "靛蓝后套面"],
              data: [
                {
                  name: "靛蓝前打底",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00ffd4" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00c0ff" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝后套面",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#f6ff00" // 图例文字颜色
                  }
                }
              ],
              x: "60%",
              textStyle: {
                fontSize: 28 //字体大小
              }
            },

            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeA,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝前打底",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeBA,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ffd4"
                    }
                  }
                }
              },
              {
                name: "靛蓝",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeA,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00c0ff"
                    }
                  }
                }
              },
              {
                name: "靛蓝后套面",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeAA,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#f6ff00"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00ffd4 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 100,
                      lineStyle: {
                        type: "dash",
                        color: "#00c0ff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 300,
                      lineStyle: {
                        type: "dash",
                        color: "#f6ff00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          gyB1.setOption({
            color: ["#00ff0c", "#00eaff", "#ff6c00"],
            title: {
              text: "母液追加流量（g/L）",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              },
              x: "5%"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: ["靛蓝前打底", "靛蓝", "靛蓝后套面"],
              data: [
                {
                  name: "靛蓝前打底",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00ff0c" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00eaff" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝后套面",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#ff6c00" // 图例文字颜色
                  }
                }
              ],
              x: "60%",
              textStyle: {
                fontSize: 28 //字体大小
              }
            },

            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeB,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝前打底",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficBottomingB,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ff0c"
                    }
                  }
                }
              },
              {
                name: "靛蓝",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficIndigoB,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00eaff"
                    }
                  }
                }
              },
              {
                name: "靛蓝后套面",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficSurfaceB,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff6c00"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00ff0c ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 100,
                      lineStyle: {
                        type: "dash",
                        color: "#00eaff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 300,
                      lineStyle: {
                        type: "dash",
                        color: "#ff6c00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          gyB2.setOption({
            color: ["#00ffd4", "#00c0ff", "#f6ff00"],
            title: {
              text: "实时上染率（g/L）",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              },
              x: "5%"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: ["靛蓝前打底", "靛蓝", "靛蓝后套面"],
              data: [
                {
                  name: "靛蓝前打底",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00ffd4" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00c0ff" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝后套面",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#f6ff00" // 图例文字颜色
                  }
                }
              ],
              x: "60%",
              textStyle: {
                fontSize: 28 //字体大小
              }
            },

            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeB,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝前打底",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeBB,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ffd4"
                    }
                  }
                }
              },
              {
                name: "靛蓝",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeB,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00c0ff"
                    }
                  }
                }
              },
              {
                name: "靛蓝后套面",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeAB,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#f6ff00"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00ffd4 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 100,
                      lineStyle: {
                        type: "dash",
                        color: "#00c0ff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 300,
                      lineStyle: {
                        type: "dash",
                        color: "#f6ff00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          gyC1.setOption({
            color: ["#00ff0c", "#00eaff", "#ff6c00"],
            title: {
              text: "母液追加流量（g/L）",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              },
              x: "5%"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: ["靛蓝前打底", "靛蓝", "靛蓝后套面"],
              data: [
                {
                  name: "靛蓝前打底",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00ff0c" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00eaff" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝后套面",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#ff6c00" // 图例文字颜色
                  }
                }
              ],
              x: "60%",
              textStyle: {
                fontSize: 28 //字体大小
              }
            },

            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeC,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝前打底",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficBottomingC,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ff0c"
                    }
                  }
                }
              },
              {
                name: "靛蓝",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficIndigoC,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00eaff"
                    }
                  }
                }
              },
              {
                name: "靛蓝后套面",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficSurfaceC,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff6c00"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00ff0c ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 100,
                      lineStyle: {
                        type: "dash",
                        color: "#00eaff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 300,
                      lineStyle: {
                        type: "dash",
                        color: "#ff6c00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          gyC2.setOption({
            color: ["#00ffd4", "#00c0ff", "#f6ff00"],
            title: {
              text: "实时上染率（g/L）",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              },
              x: "5%"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: ["靛蓝前打底", "靛蓝", "靛蓝后套面"],
              data: [
                {
                  name: "靛蓝前打底",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00ffd4" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00c0ff" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝后套面",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#f6ff00" // 图例文字颜色
                  }
                }
              ],
              x: "60%",
              textStyle: {
                fontSize: 28 //字体大小
              }
            },

            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeC,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝前打底",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeBC,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ffd4"
                    }
                  }
                }
              },
              {
                name: "靛蓝",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeC,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00c0ff"
                    }
                  }
                }
              },
              {
                name: "靛蓝后套面",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeAC,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#f6ff00"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00ffd4 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 100,
                      lineStyle: {
                        type: "dash",
                        color: "#00c0ff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 300,
                      lineStyle: {
                        type: "dash",
                        color: "#f6ff00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          gyD1.setOption({
            color: ["#00ff0c", "#00eaff", "#ff6c00"],
            title: {
              text: "母液追加流量（g/L）",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              },
              x: "5%"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: ["靛蓝前打底", "靛蓝", "靛蓝后套面"],
              data: [
                {
                  name: "靛蓝前打底",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00ff0c" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00eaff" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝后套面",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#ff6c00" // 图例文字颜色
                  }
                }
              ],
              x: "60%",
              textStyle: {
                fontSize: 28 //字体大小
              }
            },

            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeD,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝前打底",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficBottomingD,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ff0c"
                    }
                  }
                }
              },
              {
                name: "靛蓝",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficIndigoD,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00eaff"
                    }
                  }
                }
              },
              {
                name: "靛蓝后套面",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficSurfaceD,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff6c00"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00ff0c ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 100,
                      lineStyle: {
                        type: "dash",
                        color: "#00eaff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 300,
                      lineStyle: {
                        type: "dash",
                        color: "#ff6c00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          gyD2.setOption({
            color: ["#00ffd4", "#00c0ff", "#f6ff00"],
            title: {
              text: "实时上染率（g/L）",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              },
              x: "5%"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: ["靛蓝前打底", "靛蓝", "靛蓝后套面"],
              data: [
                {
                  name: "靛蓝前打底",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00ffd4" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00c0ff" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝后套面",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#f6ff00" // 图例文字颜色
                  }
                }
              ],
              x: "60%",
              textStyle: {
                fontSize: 28 //字体大小
              }
            },

            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeD,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝前打底",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeBD,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ffd4"
                    }
                  }
                }
              },
              {
                name: "靛蓝",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeD,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00c0ff"
                    }
                  }
                }
              },
              {
                name: "靛蓝后套面",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeAD,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#f6ff00"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00ffd4 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 100,
                      lineStyle: {
                        type: "dash",
                        color: "#00c0ff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 300,
                      lineStyle: {
                        type: "dash",
                        color: "#f6ff00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          gyE1.setOption({
            color: ["#00ff0c", "#00eaff", "#ff6c00"],
            title: {
              text: "母液追加流量（g/L）",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              },
              x: "5%"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: ["靛蓝前打底", "靛蓝", "靛蓝后套面"],
              data: [
                {
                  name: "靛蓝前打底",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00ff0c" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00eaff" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝后套面",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#ff6c00" // 图例文字颜色
                  }
                }
              ],
              x: "60%",
              textStyle: {
                fontSize: 28 //字体大小
              }
            },

            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeE,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝前打底",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficBottomingE,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ff0c"
                    }
                  }
                }
              },
              {
                name: "靛蓝",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficIndigoE,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00eaff"
                    }
                  }
                }
              },
              {
                name: "靛蓝后套面",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: additionalTrafficSurfaceE,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff6c00"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00ff0c ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 100,
                      lineStyle: {
                        type: "dash",
                        color: "#00eaff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 300,
                      lineStyle: {
                        type: "dash",
                        color: "#ff6c00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          gyE2.setOption({
            color: ["#00ffd4", "#00c0ff", "#f6ff00"],
            title: {
              text: "实时上染率（g/L）",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              },
              x: "5%"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: ["靛蓝前打底", "靛蓝", "靛蓝后套面"],
              data: [
                {
                  name: "靛蓝前打底",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00ffd4" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00c0ff" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝后套面",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#f6ff00" // 图例文字颜色
                  }
                }
              ],
              x: "60%",
              textStyle: {
                fontSize: 28 //字体大小
              }
            },

            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeE,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝前打底",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeBE,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ffd4"
                    }
                  }
                }
              },
              {
                name: "靛蓝",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeE,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00c0ff"
                    }
                  }
                }
              },
              {
                name: "靛蓝后套面",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dyeUptakeAE,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#f6ff00"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00ffd4 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 100,
                      lineStyle: {
                        type: "dash",
                        color: "#00c0ff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    },
                    {
                      yAxis: 300,
                      lineStyle: {
                        type: "dash",
                        color: "#f6ff00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
        });

      //过程检测信息
      axios
        .get("/api/getProcessDetectionInfo", {
          params: {
            limit: "all",
            page: 1,
            type: 1,
            cylinderNo: "all"
          }
        })
        .then(res => {
          console.log("guochengAll", res.data);
          var guochengAll = res.data.data;
          //生产线划分
          var guochengA = [];
          var guochengB = [];
          var guochengC = [];
          var guochengD = [];
          var guochengE = [];

          //靛蓝   靛蓝浓度
          var indigoConcentrationA = [];
          var indigoConcentrationB = [];
          var indigoConcentrationC = [];
          var indigoConcentrationD = [];
          var indigoConcentrationE = [];

          //靛蓝 orp
          var orpA = [];
          var orpB = [];
          var orpC = [];
          var orpD = [];
          var orpE = [];

          //时间
          var timeAs = [];
          var timeBs = [];
          var timeCs = [];
          var timeDs = [];
          var timeEs = [];

          for (let i = 0; i < guochengAll.length; i++) {
            if (guochengAll[i].boardName == "A") {
              guochengA.push(guochengAll[i]);
            }
            if (guochengAll[i].boardName == "B") {
              guochengB.push(guochengAll[i]);
            }
            if (guochengAll[i].boardName == "C") {
              guochengC.push(guochengAll[i]);
            }
            if (guochengAll[i].boardName == "D") {
              guochengD.push(guochengAll[i]);
            }
            if (guochengAll[i].boardName == "E") {
              guochengE.push(guochengAll[i]);
            }
          }

          //靛蓝浓度 orp 时间
          for (let j = 0; j < guochengA.length; j++) {
            indigoConcentrationA.push(guochengA[j].indigoConcentration);
            orpA.push(guochengA[j].orp);
            timeAs.push(guochengA[j].time);
          }
          for (let j = 0; j < guochengB.length; j++) {
            indigoConcentrationB.push(guochengB[j].indigoConcentration);
            orpB.push(guochengB[j].orp);
            timeBs.push(guochengB[j].time);
          }
          for (let j = 0; j < guochengC.length; j++) {
            indigoConcentrationC.push(guochengC[j].indigoConcentration);
            orpC.push(guochengC[j].orp);
            timeCs.push(guochengC[j].time);
          }
          for (let j = 0; j < guochengD.length; j++) {
            indigoConcentrationD.push(guochengD[j].indigoConcentration);
            orpD.push(guochengD[j].orp);
            timeDs.push(guochengD[j].time);
          }
          for (let j = 0; j < guochengE.length; j++) {
            indigoConcentrationE.push(guochengE[j].indigoConcentration);
            orpE.push(guochengE[j].orp);
            timeEs.push(guochengE[j].time);
          }

          // 机台过程检测信息
          let myChartA1 = this.$echarts.init(
            document.getElementById("myChartA1")
          );
          let myChartA2 = this.$echarts.init(
            document.getElementById("myChartA2")
          );
          let myChartB1 = this.$echarts.init(
            document.getElementById("myChartB1")
          );
          let myChartB2 = this.$echarts.init(
            document.getElementById("myChartB2")
          );
          let myChartC1 = this.$echarts.init(
            document.getElementById("myChartC1")
          );
          let myChartC2 = this.$echarts.init(
            document.getElementById("myChartC2")
          );
          let myChartD1 = this.$echarts.init(
            document.getElementById("myChartD1")
          );
          let myChartD2 = this.$echarts.init(
            document.getElementById("myChartD2")
          );
          let myChartE1 = this.$echarts.init(
            document.getElementById("myChartE1")
          );
          let myChartE2 = this.$echarts.init(
            document.getElementById("myChartE2")
          );

          myChartA1.setOption({
            color: "#00e573",
            title: {
              text: "靛蓝浓度（g/L）",
              x: "7%",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              }
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: [
                {
                  name: "靛蓝",
                  textStyle: {
                    color: "#00e573" // 图例文字颜色
                  }
                }
              ],
              x: "80%",
              textStyle: {
                fontSize: 28 //字体大小
                // color: "#ffffff" //字体颜色
              }
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         dataZoom: {
            //             yAxisIndex: 'none'
            //         },
            //         dataView: {readOnly: false},
            //         magicType: {type: ['line', 'bar']},
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeAs,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝",
                type: "line",
                symbolSize: 10,
                data: indigoConcentrationA,
                markPoint: {
                  data: [
                    { type: "max", name: "最大值" },
                    { type: "min", name: "最小值" }
                  ]
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00e573"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#e6bf00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          myChartA2.setOption({
            color: "#ff9000",
            title: {
              text: "ORP",
              x: "7%",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              }
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: [
                {
                  name: "靛蓝",
                  textStyle: {
                    color: "#ff9000" // 图例文字颜色
                  }
                }
              ],
              x: "80%",
              textStyle: {
                fontSize: 28 //字体大小
                // color: "#ffffff" //字体颜色
              }
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         dataZoom: {
            //             yAxisIndex: 'none'
            //         },
            //         dataView: {readOnly: false},
            //         magicType: {type: ['line', 'bar']},
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeAs,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝",
                type: "line",
                symbolSize: 10,
                data: orpA,
                markPoint: {
                  data: [
                    { type: "max", name: "最大值" },
                    { type: "min", name: "最小值" }
                  ]
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff9000"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00a8ff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          myChartB1.setOption({
            color: "#00e573",
            title: {
              text: "靛蓝浓度（g/L）",
              x: "7%",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              }
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: [
                {
                  name: "靛蓝",
                  textStyle: {
                    color: "#00e573" // 图例文字颜色
                  }
                }
              ],
              x: "80%",
              textStyle: {
                fontSize: 28 //字体大小
                // color: "#ffffff" //字体颜色
              }
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         dataZoom: {
            //             yAxisIndex: 'none'
            //         },
            //         dataView: {readOnly: false},
            //         magicType: {type: ['line', 'bar']},
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeBs,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝",
                type: "line",
                symbolSize: 10,
                data: indigoConcentrationB,
                markPoint: {
                  data: [
                    { type: "max", name: "最大值" },
                    { type: "min", name: "最小值" }
                  ]
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00e573"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#e6bf00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          myChartB2.setOption({
            color: "#ff9000",
            title: {
              text: "ORP",
              x: "7%",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              }
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: [
                {
                  name: "靛蓝",
                  textStyle: {
                    color: "#ff9000" // 图例文字颜色
                  }
                }
              ],
              x: "80%",
              textStyle: {
                fontSize: 28 //字体大小
                // color: "#ffffff" //字体颜色
              }
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         dataZoom: {
            //             yAxisIndex: 'none'
            //         },
            //         dataView: {readOnly: false},
            //         magicType: {type: ['line', 'bar']},
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeBs,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝",
                type: "line",
                symbolSize: 10,
                data: orpB,
                markPoint: {
                  data: [
                    { type: "max", name: "最大值" },
                    { type: "min", name: "最小值" }
                  ]
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff9000"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 250,
                      lineStyle: {
                        type: "dash",
                        color: "#ff9000 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          myChartC1.setOption({
            color: "#00e573",
            title: {
              text: "靛蓝浓度（g/L）",
              x: "7%",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              }
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: [
                {
                  name: "靛蓝",
                  textStyle: {
                    color: "#00e573" // 图例文字颜色
                  }
                }
              ],
              x: "80%",
              textStyle: {
                fontSize: 28 //字体大小
                // color: "#ffffff" //字体颜色
              }
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         dataZoom: {
            //             yAxisIndex: 'none'
            //         },
            //         dataView: {readOnly: false},
            //         magicType: {type: ['line', 'bar']},
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeCs,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝",
                type: "line",
                symbolSize: 10,
                data: indigoConcentrationC,
                markPoint: {
                  data: [
                    { type: "max", name: "最大值" },
                    { type: "min", name: "最小值" }
                  ]
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00e573"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#e6bf00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          myChartC2.setOption({
            color: "#ff9000",
            title: {
              text: "ORP",
              x: "7%",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              }
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: [
                {
                  name: "靛蓝",
                  textStyle: {
                    color: "#ff9000" // 图例文字颜色
                  }
                }
              ],
              x: "80%",
              textStyle: {
                fontSize: 28 //字体大小
                // color: "#ffffff" //字体颜色
              }
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         dataZoom: {
            //             yAxisIndex: 'none'
            //         },
            //         dataView: {readOnly: false},
            //         magicType: {type: ['line', 'bar']},
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeCs,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝",
                type: "line",
                symbolSize: 10,
                data: orpC,
                markPoint: {
                  data: [
                    { type: "max", name: "最大值" },
                    { type: "min", name: "最小值" }
                  ]
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff9000"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00a8ff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          myChartD1.setOption({
            color: "#00e573",
            title: {
              text: "靛蓝浓度（g/L）",
              x: "7%",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              }
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: [
                {
                  name: "靛蓝",
                  textStyle: {
                    color: "#00e573" // 图例文字颜色
                  }
                }
              ],
              x: "80%",
              textStyle: {
                fontSize: 28 //字体大小
                // color: "#ffffff" //字体颜色
              }
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         dataZoom: {
            //             yAxisIndex: 'none'
            //         },
            //         dataView: {readOnly: false},
            //         magicType: {type: ['line', 'bar']},
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeDs,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝",
                type: "line",
                symbolSize: 10,
                data: indigoConcentrationD,
                markPoint: {
                  data: [
                    { type: "max", name: "最大值" },
                    { type: "min", name: "最小值" }
                  ]
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00e573"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#e6bf00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          myChartD2.setOption({
            color: "#ff9000",
            title: {
              text: "ORP",
              x: "7%",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              }
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: [
                {
                  name: "靛蓝",
                  textStyle: {
                    color: "#ff9000" // 图例文字颜色
                  }
                }
              ],
              x: "80%",
              textStyle: {
                fontSize: 28 //字体大小
                // color: "#ffffff" //字体颜色
              }
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         dataZoom: {
            //             yAxisIndex: 'none'
            //         },
            //         dataView: {readOnly: false},
            //         magicType: {type: ['line', 'bar']},
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeDs,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝",
                type: "line",
                symbolSize: 10,
                data: orpD,
                markPoint: {
                  data: [
                    { type: "max", name: "最大值" },
                    { type: "min", name: "最小值" }
                  ]
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff9000"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00a8ff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          myChartE1.setOption({
            color: "#00e573",
            title: {
              text: "靛蓝浓度（g/L）",
              x: "7%",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              }
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: [
                {
                  name: "靛蓝",
                  textStyle: {
                    color: "#00e573" // 图例文字颜色
                  }
                }
              ],
              x: "80%",
              textStyle: {
                fontSize: 28 //字体大小
                // color: "#ffffff" //字体颜色
              }
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         dataZoom: {
            //             yAxisIndex: 'none'
            //         },
            //         dataView: {readOnly: false},
            //         magicType: {type: ['line', 'bar']},
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeEs,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝",
                type: "line",
                symbolSize: 10,
                data: indigoConcentrationE,
                markPoint: {
                  data: [
                    { type: "max", name: "最大值" },
                    { type: "min", name: "最小值" }
                  ]
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00e573"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#e6bf00 ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
          myChartE2.setOption({
            color: "#ff9000",
            title: {
              text: "ORP",
              x: "7%",
              // subtext: "纯属虚构"
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#fff",
                fontSize: 28
              }
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              margin: 100,
              data: [
                {
                  name: "靛蓝",
                  textStyle: {
                    color: "#ff9000" // 图例文字颜色
                  }
                }
              ],
              x: "80%",
              textStyle: {
                fontSize: 28 //字体大小
                // color: "#ffffff" //字体颜色
              }
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         dataZoom: {
            //             yAxisIndex: 'none'
            //         },
            //         dataView: {readOnly: false},
            //         magicType: {type: ['line', 'bar']},
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
              type: "category",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              boundaryGap: false,
              data: timeEs,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              //线框颜色
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
                // width:"8"
                // fontSize:"30px"
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#354875"
                }
              }
            },
            series: [
              {
                name: "靛蓝",
                type: "line",
                symbolSize: 10,
                data: orpE,
                markPoint: {
                  data: [
                    { type: "max", name: "最大值" },
                    { type: "min", name: "最小值" }
                  ]
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff9000"
                    }
                  }
                }
              },
              {
                name: "平行于y轴的趋势线",
                type: "line",
                //data:[0],
                markLine: {
                  silent: true,
                  data: [
                    {
                      yAxis: 200,
                      lineStyle: {
                        type: "dash",
                        color: "#00a8ff ",
                        width: 3
                      },
                      label: {
                        // formatter: "12.6",
                        textStyle: {
                          fontSize: 20
                          // fontWeight: "bolder"
                        }
                      }
                    }
                  ],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,

                      lineStyle: {
                        type: "dash",
                        color: "red ",
                        width: 3
                      }

                      // label: {
                      //   formatter: "12.6",
                      //   textStyle: {
                      //     fontSize: 20,
                      //     fontWeight: "bolder"
                      //   }
                      // }
                    }
                  }
                }
              }
            ]
          });
        });

      // console.log(this.dianlanA1);
      // console.log(this.dianlanTimeA1);
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}

.productiontable-box {
  width: 7680;
  padding: 0 32px;
  margin-top: 38px;
  /* border: solid 1px white; */
  overflow: hidden;
}
.protab-sc_bg1 {
  float: left;

  /* border: solid 1px; */
  width: 3004px;
  height: 782px;
  background: rgba(255, 255, 255, 5%);
  background: url(..\assets\production-table\sc_bg1.png);
}
.protab-sc_bg1 p {
  text-align: center;
  font-size: 60px;
  color: white;
  padding: 18px 0 40px;
}

.protab-sc_bg4 p,
.protab-sc_bg5 p,
.protab-sc_bg6 p,
.protab-sc_bg7 p {
  text-align: center;
  font-size: 60px;
  color: white;
  padding: 18px 0 20px;
}
.protab-sc_bg2 p,
.protab-sc_bg3 p {
  text-align: center;
  font-size: 60px;
  color: white;
  padding: 18px 0 54px;
}
.protab-sc_bg1-box {
  background: rgba(255, 255, 255, 5%);
  margin: 0 auto;
  width: 2940px;
}
.protab-sc_bg2,
.protab-sc_bg3 {
  float: left;
  margin-left: 32px;
  width: 1314px;
  height: 782px;
  background: url(..\assets\production-table\sc_bg2.png);
}

.protab-sc_bg4 {
  float: left;
  margin-top: 100px;
  width: 1820px;
  height: 2100px;
  background: url(..\assets\production-table\sc_bg4.png);
}
.protab-sc_bg5 {
  float: left;
  /* margin-left: 100px; */
  margin-top: 32px;
  width: 3808px;
  height: 1968px;
  background: url(..\assets\production-table\sc_bg5.png);
}
.protab-sc_bg6 {
  float: left;
  margin-left: 32px;
  margin-top: 32px;
  width: 3776px;
  height: 1968px;
  background: url(..\assets\production-table\sc_bg6.png);
}
.protab-sc_bg7 {
  float: left;
  margin-left: 32px;
  /* margin-top: 100px; */
  width: 1888px;
  height: 782px;
  background: url(..\assets\production-table\sc_bg4.png);
}
/* 水  汽 */
/* #myChart-bar1,
#myChart-bar2 {
  border: solid 1px red;
} */
/* 过程检测 */
.bg6-content {
  width: 100%;
  /* height: 100%; */
  /* border: solid 1px white; */
  display: flex;
  flex-wrap: wrap;
}
#myChartA1,
#myChartB1,
#myChartC1,
#myChartD1,
#myChartE1 {
  margin-bottom: 34px;
  margin-left: 156px;
}
#myChartA2,
#myChartB2,
#myChartC2,
#myChartD2,
#myChartE2 {
  margin-bottom: 34px;
  margin-left: 38px;
}

/* 机台车速 */
#myChart-curveB,
#myChart-curveC,
#myChart-curveD,
#myChart-curveE {
  margin-top: 20px;
}
/* 工艺 */
.bg5-content {
  width: 100%;
  /* height: 100%; */
  /* border: solid 1px white; */
  display: flex;
  flex-wrap: wrap;
}
#myChart-gyA1,
#myChart-gyB1,
#myChart-gyC1,
#myChart-gyD1,
#myChart-gyE1 {
  /* margin: 0 auto 20px; */
  margin-bottom: 34px;
  margin-left: 165px;
}
#myChart-gyA2,
#myChart-gyB2,
#myChart-gyC2,
#myChart-gyD2,
#myChart-gyE2 {
  /* margin: 0 auto 20px; */
  margin-bottom: 34px;
  margin-left: 38px;
}
/* 辅助用料 */
#myChart-pieA {
  /* border: solid 1px red; */
  margin-top: -150px;
}
#myChart-pieB,
#myChart-pieC,
#myChart-pieD,
#myChart-pieE {
  /* border: solid 1px red; */
  margin-top: -80px;
}

/* 头部 */
.productiontable {
  overflow: hidden;
  position: relative;
  width: 7680px;
  height: 3240px;
  background: url(..\assets\Administration\other_bg.png);
}
.index-top_nav {
  overflow: hidden;
  width: 3358px;
  height: 292px;
  margin: 0 auto;
  background: url(../assets/index/top_nav.png);
}
/* .index-top_nav img {
  display: block;
  margin: 45px auto;
  width: 960px;
  height: 168px;
} */
/* 返回首页 */
.index-esc {
  position: absolute;
  top: 100px;
  left: 640px;
  width: 1000px;
  height: 100px;
}
.index-esc img {
  padding-right: 40px;
  width: 140px;
  height: 100px;
  vertical-align: -20px;
}
.index-esc span {
  padding: 0 100px;
  color: #00ecfc;
  font-size: 80px;
  line-height: 100px;
}
/* 退出登陆 */
#imgs{
  position: absolute;
  top: 100px;
  right: 1500px;
 
}
.index-name_esc {
  position: absolute;
  top: 100px;
  right: 400px;
  width: 1600px;
  height: 100px;
}
.index-name_esc-img2,
.index-name_esc-img3 {
  padding-right: 40px;
  width: 140px;
  height: 100px;
  vertical-align: -20px;
}
.index-name_esc-img1 {
  padding-right: 40px;
  width: 288px;
  height: 100px;
  vertical-align: -20px;
}
.index-name_esc span {
  padding: 0 100px;
  color: #00ecfc;
  font-size: 80px;
  line-height: 100px;
}
</style>
<style>
</style>


