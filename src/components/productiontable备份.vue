<template>
  <!-- 生产运行 -->
  <div class="productiontable">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <img src="..\assets\production\sc_logo.png" alt>
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
    </div>
    <!-- 返回主页 -->
    <div class="index-esc" @click="esc">
      <!-- 切换图标 -->
      <span>
        <img src="..\assets\Administration\home.png" alt>
        主页
      </span>
    </div>
    <!-- 显示用户登陆和退出 -->
    <div class="index-name_esc">
      <span>
        <img
          @click="tabtxt"
          class="index-name_esc-img1"
          src="..\assets\production-table\sc_table.png"
          alt
        >
      </span>
      <!-- 跳转登陆后的页面 -->
      <span @click="pro">
        <img class="index-name_esc-img2" src="..\assets\index\home_name.png" alt>
        小北
      </span>
      <span>
        <img class="index-name_esc-img3" src="..\assets\index\home_esc.png" alt>
        退出
      </span>
    </div>
    <div class="productiontable-box">
      <div class="protab-sc_bg1">
        <p>机台基本信息</p>
        <div class="protab-sc_bg1-box">
          <el-table :data="tableData" border style="width: 100%;">
            <el-table-column type="index" label="序号" align="center" width="300"></el-table-column>
            <el-table-column prop="name" label="色号" align="center" width="400"></el-table-column>
            <el-table-column prop="name" label="缸号" align="center" width="400"></el-table-column>
            <el-table-column prop="name" label="品种" align="center" width="400"></el-table-column>
            <el-table-column prop="name" label="整经长度" align="center" width="500"></el-table-column>
            <el-table-column prop="name" label="开机时间" align="center" width="500"></el-table-column>
            <el-table-column prop="name" label="预计了机时间" align="center" width="500"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="protab-sc_bg2">
        <p>水</p>
        <div id="myChart-bar1" :style="{width: '100%', height: '590px'}"></div>
      </div>
      <div class="protab-sc_bg3">
        <p>汽</p>
        <div id="myChart-bar2" :style="{width: '100%', height: '590px'}"></div>
      </div>
      <div class="protab-sc_bg4">
        <p>机台车速</p>
        <div id="myChart-curveA" :style="{width: '100%', height: '380px'}"></div>
        <div id="myChart-curveB" :style="{width: '100%', height: '380px'}"></div>
        <div id="myChart-curveC" :style="{width: '100%', height: '380px'}"></div>
        <div id="myChart-curveD" :style="{width: '100%', height: '380px'}"></div>
        <div id="myChart-curveE" :style="{width: '100%', height: '380px'}"></div>
      </div>
      <div class="protab-sc_bg5">
        <p>机台工艺执行信息</p>
        <div id="myChart-gyA1" :style="{width: '1270px', height: '380px'}"></div>
        <div id="myChart-gyB1" :style="{width: '1270px', height: '380px'}"></div>
        <div id="myChart-gyC1" :style="{width: '1270px', height: '380px'}"></div>
        <div id="myChart-gyD1" :style="{width: '1270px', height: '380px'}"></div>
        <div id="myChart-gyE1" :style="{width: '1270px', height: '380px'}"></div>
      </div>
      <div class="protab-sc_bg6">
        <p>机台过程监测信息</p>
        <div id="myChartA1" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartA2" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartA3" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartA4" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartB1" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartB2" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartB3" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartB4" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartC1" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartC2" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartC3" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartC4" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartD1" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartD2" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartD3" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartD4" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartE1" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartE2" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartE3" :style="{width: '660px', height: '316px'}"></div>
        <div id="myChartE4" :style="{width: '660px', height: '316px'}"></div>
      </div>
      <div class="protab-sc_bg7">
        <p>辅料用量</p>
        <div id="myChart-pieA" :style="{width: '100%', height: '500px'}"></div>
        <div id="myChart-pieB" :style="{width: '100%', height: '500px'}"></div>
        <div id="myChart-pieC" :style="{width: '100%', height: '500px'}"></div>
        <div id="myChart-pieD" :style="{width: '100%', height: '500px'}"></div>
        <div id="myChart-pieE" :style="{width: '100%', height: '500px'}"></div>
      </div>
    </div>
    <!-- 底部导航还没写呢 -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [
        {
          date: "i+1",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ],
      dianlanA1:"",
      dianlanTimeA1:"",

    };
  },
  created(){
    this.setdata()
  },
  mounted() {
    // this.setdata()
    this.drawLine();
  },
  methods: {

    setdata() {
    //   //机台过程检测信息
      // 获取数据



      // 数据渲染不出来不出来，111111111111111111
      // axios
      //   .get("http://125.89.236.222:8005/api/getProcessDetectionInfo", {
      //     params: {
      //       limit: "all",
      //       page: 1,
      //       lineID: "A"
      //     }
      //   })
      //   .then(res => {
      //     console.log("resmyChartA1", res.data);
      //     var arr = res.data.data;
      //     // 靛蓝
      //     var dianlanA1 = [];
      //     // 时间
      //     var dianlanTimeA1 = [];
      //     // for (var i = 0; i < arr.length; i++) {
      //     //   dianlanA1.push(arr[i].indigoConcentration);
           
      //     //   dianlanTimeA1.push(arr[i].time);
      //     // }
          
      //      this.dianlanA1=dianlanA1
      //     console.log(this.dianlanA1);

      //     this.dianlanTimeA1=dianlanTimeA1

      //   });
      this.dianlanA1 = [2,4,3,2,3,4]
      // 打印查看
      console.log(this.dianlanA1);
      // console.log(dianlanTimeA1);
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
      // 基于准备好的dom，初始化echarts实例
      // 水
      let bar1 = this.$echarts.init(document.getElementById("myChart-bar1"));
      // 汽
      let bar2 = this.$echarts.init(document.getElementById("myChart-bar2"));
      // 机台车速
      let curveA = this.$echarts.init(
        document.getElementById("myChart-curveA")
      );
      let curveB = this.$echarts.init(
        document.getElementById("myChart-curveB")
      );
      let curveC = this.$echarts.init(
        document.getElementById("myChart-curveC")
      );
      let curveD = this.$echarts.init(
        document.getElementById("myChart-curveD")
      );
      let curveE = this.$echarts.init(
        document.getElementById("myChart-curveE")
      );
      // 机台工艺执行
      let gyA1 = this.$echarts.init(document.getElementById("myChart-gyA1"));
      let gyB1 = this.$echarts.init(document.getElementById("myChart-gyB1"));
      let gyC1 = this.$echarts.init(document.getElementById("myChart-gyC1"));
      let gyD1 = this.$echarts.init(document.getElementById("myChart-gyD1"));
      let gyE1 = this.$echarts.init(document.getElementById("myChart-gyE1"));
      // 机台过程检测信息
      let myChartA1 = this.$echarts.init(document.getElementById("myChartA1"));
      let myChartA2 = this.$echarts.init(document.getElementById("myChartA2"));
      let myChartA3 = this.$echarts.init(document.getElementById("myChartA3"));
      let myChartA4 = this.$echarts.init(document.getElementById("myChartA4"));
      let myChartB1 = this.$echarts.init(document.getElementById("myChartB1"));
      let myChartB2 = this.$echarts.init(document.getElementById("myChartB2"));
      let myChartB3 = this.$echarts.init(document.getElementById("myChartB3"));
      let myChartB4 = this.$echarts.init(document.getElementById("myChartB4"));
      let myChartC1 = this.$echarts.init(document.getElementById("myChartC1"));
      let myChartC2 = this.$echarts.init(document.getElementById("myChartC2"));
      let myChartC3 = this.$echarts.init(document.getElementById("myChartC3"));
      let myChartC4 = this.$echarts.init(document.getElementById("myChartC4"));
      let myChartD1 = this.$echarts.init(document.getElementById("myChartD1"));
      let myChartD2 = this.$echarts.init(document.getElementById("myChartD2"));
      let myChartD3 = this.$echarts.init(document.getElementById("myChartD3"));
      let myChartD4 = this.$echarts.init(document.getElementById("myChartD4"));
      let myChartE1 = this.$echarts.init(document.getElementById("myChartE1"));
      let myChartE2 = this.$echarts.init(document.getElementById("myChartE2"));
      let myChartE3 = this.$echarts.init(document.getElementById("myChartE3"));
      let myChartE4 = this.$echarts.init(document.getElementById("myChartE4"));
      // 辅助用料
      let pieA = this.$echarts.init(document.getElementById("myChart-pieA"));
      let pieB = this.$echarts.init(document.getElementById("myChart-pieB"));
      let pieC = this.$echarts.init(document.getElementById("myChart-pieC"));
      let pieD = this.$echarts.init(document.getElementById("myChart-pieD"));
      let pieE = this.$echarts.init(document.getElementById("myChart-pieE"));

      // 绘制图表
      // 水
      bar1.setOption({
        title: {
          text: "单位（m²）",
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
          // x: "13%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
          }
        },
        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   data: ["标准值", "实际值"]
        // },
        color: ["#fef552", "#4f80f7"],
        xAxis: {
          data: ["A机", "B机", "C机", "D机", "E机"],
          // axisTick: { show: false },
          axisLabel: {
            formatter: "{value}",
            color: "white"
          }
        },

        yAxis: {
          // splitLine: { show: false },
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

        calculable: true,
        animationDurationUpdate: 1200,

        series: [
          {
            name: "实际值",
            type: "bar",
            itemStyle: {
              color: "#4f80f7"
            },
            label: {
              normal: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "white",
                  fontSize: 25
                }
              }
            },
            silent: true,
            barWidth: 200,
            barGap: "-100%", // Make series be overlap
            data: [60, 60, 60, 60, 52]
          },
          {
            name: "标准值",
            label: {
              normal: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "white",
                  fontSize: 25
                }
              }
            },
            type: "bar",
            barWidth: 200,
            z: 10,
            data: [45, 60, 13, 25, 30]
          }
        ]
      });
      // 汽
      bar2.setOption({
        title: {
          text: "单位（m²）",
          // subtext: '纯属虚构'
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 35
          }
        },
        legend: {
          margin: 100,
          data: ["标准值", "实际值"],

          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
          }
        },
        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   data: ["蒸发量", "降水量"]
        // },
        color: ["#00c8e0", "#4f80f7"],
        xAxis: {
          data: ["A机", "B机", "C机", "D机", "E机"],
          // axisTick: { show: false },
          axisLabel: {
            formatter: "{value}",
            color: "white"
          }
        },

        yAxis: {
          // splitLine: { show: false },
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
          }
        },

        calculable: true,
        animationDurationUpdate: 1200,

        series: [
          {
            name: "实际值",
            type: "bar",
            itemStyle: {
              color: "#fff"
            },
            label: {
              normal: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "white",
                  fontSize: 25
                }
              }
            },
            silent: true,
            barWidth: 200,
            barGap: "-100%", // Make series be overlap
            data: [60, 60, 60, 60, 52]
          },
          {
            name: "标准值",
            label: {
              normal: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "white",
                  fontSize: 25
                }
              }
            },
            type: "bar",
            barWidth: 200,
            z: 10,
            data: [45, 60, 13, 25, 30]
          }
        ]
      });
      // 机台车速
      curveA.setOption({
        title: {
          text: "车速（m/min）",
          x: "7%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#fff" //字体颜色
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: [">200", "100-200", "<=100"],

          textStyle: {
            fontSize: 28, //字体大小
            color: "#fff" //字体颜色
          }
        },

        xAxis: {
          type: "category",
          data: ["1-1", "2-1", "3-1", "4-1", "5-1", "6-1", "7-1"],
          axisLabel: {
            formatter: "{value}",
            color: "white",
            fontSize: 20
          },
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          }
        },
        yAxis: {
          type: "value",
          // data:[50,100,200,300,400,500]
          axisLabel: {
            formatter: "{value}",
            color: "white",
            fontSize: 20
          },
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#354875"
            }
          }
        },
        visualMap: {
          top: 0,
          right: 0,
          show: true,
          pieces: [
            {
              lte: 100,
              color: "#00ebee"
            },
            {
              gt: 100,
              lte: 200,
              color: "#e3bc46"
            },
            {
              gt: 200,
              color: "#00ebee"
            }
          ],
          outOfRange: {
            color: "#999"
          }
        },
        series: [
          {
            data: [70, 393, 101, 334, 90, 330, 120],
            type: "line",
            smooth: true,
            markLine: {
              silent: true,
              data: [
                {
                  yAxis: 100,
                  lineStyle: {
                    type: "dashed",
                    color: "#e3bc46"
                  }
                },
                {
                  yAxis: 200,
                  lineStyle: {
                    type: "dashed",
                    color: "#e3bc46"
                  }
                }
              ]
            }
          }
        ]
      });
      curveB.setOption({
        title: {
          text: "车速（m/min）",
          x: "7%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#fff" //字体颜色
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: [">200", "100-200", "<=100"],

          textStyle: {
            fontSize: 28, //字体大小
            color: "#fff" //字体颜色
          }
        },

        xAxis: {
          type: "category",
          data: ["1-1", "2-1", "3-1", "4-1", "5-1", "6-1", "7-1"],
          axisLabel: {
            formatter: "{value}",
            color: "white",
            fontSize: 20
          },
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          }
        },
        yAxis: {
          type: "value",
          // data:[50,100,200,300,400,500]
          axisLabel: {
            formatter: "{value}",
            color: "white",
            fontSize: 20
          },
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#354875"
            }
          }
        },
        visualMap: {
          top: 0,
          right: 0,
          show: true,
          pieces: [
            {
              lte: 100,
              color: "#00ebee"
            },
            {
              gt: 100,
              lte: 200,
              color: "#e3bc46"
            },
            {
              gt: 200,
              color: "#00ebee"
            }
          ],
          outOfRange: {
            color: "#999"
          }
        },
        series: [
          {
            data: [70, 393, 101, 334, 90, 330, 120],
            type: "line",
            smooth: true,
            markLine: {
              silent: true,
              data: [
                {
                  yAxis: 100,
                  lineStyle: {
                    type: "dashed",
                    color: "#e3bc46"
                  }
                },
                {
                  yAxis: 200,
                  lineStyle: {
                    type: "dashed",
                    color: "#e3bc46"
                  }
                }
              ]
            }
          }
        ]
      });
      curveC.setOption({
        title: {
          text: "车速（m/min）",
          x: "7%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#fff" //字体颜色
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: [">200", "100-200", "<=100"],

          textStyle: {
            fontSize: 28, //字体大小
            color: "#fff" //字体颜色
          }
        },

        xAxis: {
          type: "category",
          data: ["1-1", "2-1", "3-1", "4-1", "5-1", "6-1", "7-1"],
          axisLabel: {
            formatter: "{value}",
            color: "white",
            fontSize: 20
          },
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          }
        },
        yAxis: {
          type: "value",
          // data:[50,100,200,300,400,500]
          axisLabel: {
            formatter: "{value}",
            color: "white",
            fontSize: 20
          },
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#354875"
            }
          }
        },
        visualMap: {
          top: 0,
          right: 0,
          show: true,
          pieces: [
            {
              lte: 100,
              color: "#00ebee"
            },
            {
              gt: 100,
              lte: 200,
              color: "#e3bc46"
            },
            {
              gt: 200,
              color: "#00ebee"
            }
          ],
          outOfRange: {
            color: "#999"
          }
        },
        series: [
          {
            data: [70, 393, 101, 334, 90, 330, 120],
            type: "line",
            smooth: true,
            markLine: {
              silent: true,
              data: [
                {
                  yAxis: 100,
                  lineStyle: {
                    type: "dashed",
                    color: "#e3bc46"
                  }
                },
                {
                  yAxis: 200,
                  lineStyle: {
                    type: "dashed",
                    color: "#e3bc46"
                  }
                }
              ]
            }
          }
        ]
      });
      curveD.setOption({
        title: {
          text: "车速（m/min）",
          x: "7%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#fff" //字体颜色
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: [">200", "100-200", "<=100"],

          textStyle: {
            fontSize: 28, //字体大小
            color: "#fff" //字体颜色
          }
        },

        xAxis: {
          type: "category",
          data: ["1-1", "2-1", "3-1", "4-1", "5-1", "6-1", "7-1"],
          axisLabel: {
            formatter: "{value}",
            color: "white",
            fontSize: 20
          },
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          }
        },
        yAxis: {
          type: "value",
          // data:[50,100,200,300,400,500]
          axisLabel: {
            formatter: "{value}",
            color: "white",
            fontSize: 20
          },
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#354875"
            }
          }
        },
        visualMap: {
          top: 0,
          right: 0,
          show: true,
          pieces: [
            {
              lte: 100,
              color: "#00ebee"
            },
            {
              gt: 100,
              lte: 200,
              color: "#e3bc46"
            },
            {
              gt: 200,
              color: "#00ebee"
            }
          ],
          outOfRange: {
            color: "#999"
          }
        },
        series: [
          {
            data: [70, 393, 101, 334, 90, 330, 120],
            type: "line",
            smooth: true,
            markLine: {
              silent: true,
              data: [
                {
                  yAxis: 100,
                  lineStyle: {
                    type: "dashed",
                    color: "#e3bc46"
                  }
                },
                {
                  yAxis: 200,
                  lineStyle: {
                    type: "dashed",
                    color: "#e3bc46"
                  }
                }
              ]
            }
          }
        ]
      });
      curveE.setOption({
        title: {
          text: "车速（m/min）",
          x: "7%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#fff" //字体颜色
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: [">200", "100-200", "<=100"],

          textStyle: {
            fontSize: 28, //字体大小
            color: "#fff" //字体颜色
          }
        },

        xAxis: {
          type: "category",
          data: ["1-1", "2-1", "3-1", "4-1", "5-1", "6-1", "7-1"],
          axisLabel: {
            formatter: "{value}",
            color: "white",
            fontSize: 20
          },
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          }
        },
        yAxis: {
          type: "value",
          // data:[50,100,200,300,400,500]
          axisLabel: {
            formatter: "{value}",
            color: "white",
            fontSize: 20
          },
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#354875"
            }
          }
        },
        visualMap: {
          top: 0,
          right: 0,
          show: true,
          pieces: [
            {
              lte: 100,
              color: "#00ebee"
            },
            {
              gt: 100,
              lte: 200,
              color: "#e3bc46"
            },
            {
              gt: 200,
              color: "#00ebee"
            }
          ],
          outOfRange: {
            color: "#999"
          }
        },
        series: [
          {
            data: [70, 393, 101, 334, 90, 330, 120],
            type: "line",
            smooth: true,
            markLine: {
              silent: true,
              data: [
                {
                  yAxis: 100,
                  lineStyle: {
                    type: "dashed",
                    color: "#e3bc46"
                  }
                },
                {
                  yAxis: 200,
                  lineStyle: {
                    type: "dashed",
                    color: "#e3bc46"
                  }
                }
              ]
            }
          }
        ]
      });

      // 机台工艺执行
      gyA1.setOption({
        title: {
          // text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#ffffff",
            fontSize: 28
          }
        },
        color: ["#00f1f4", "#cdac47", "#599be5"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: [
            "母液追加流量（L/min）",
            "缸次母液实时累加量（L）",
            "实时上染率（%）"
          ],
          x: "13%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            name: "母液追加流量（L/min）",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            serieslabel: {
              color: "white"
            }
          },
          {
            name: "缸次母液实时累加量（L）",
            type: "line",
            symbolSize: 10,
            data: [11, 5, 13, 10, 11, 20, 13],
            serieslabel: {
              color: "white"
            }
          },
          {
            name: "实时上染率（%）",
            type: "line",
            symbolSize: 10,
            data: [13, 5, 13, 11, 11, 20, 10],
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      gyB1.setOption({
        title: {
          // text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#00f1f4", "#cdac47", "#599be5"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: [
            "母液追加流量（L/min）",
            "缸次母液实时累加量（L）",
            "实时上染率（%）"
          ],
          x: "13%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            name: "母液追加流量（L/min）",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            serieslabel: {
              color: "white"
            }
          },
          {
            name: "缸次母液实时累加量（L）",
            type: "line",
            symbolSize: 10,
            data: [11, 5, 13, 10, 11, 20, 13],
            serieslabel: {
              color: "white"
            }
          },
          {
            name: "实时上染率（%）",
            type: "line",
            symbolSize: 10,
            data: [13, 5, 13, 11, 11, 20, 10],
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      gyC1.setOption({
        title: {
          // text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#00f1f4", "#cdac47", "#599be5"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: [
            "母液追加流量（L/min）",
            "缸次母液实时累加量（L）",
            "实时上染率（%）"
          ],
          x: "13%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            name: "母液追加流量（L/min）",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            serieslabel: {
              color: "white"
            }
          },
          {
            name: "缸次母液实时累加量（L）",
            type: "line",
            symbolSize: 10,
            data: [11, 5, 13, 10, 11, 20, 13],
            serieslabel: {
              color: "white"
            }
          },
          {
            name: "实时上染率（%）",
            type: "line",
            symbolSize: 10,
            data: [13, 5, 13, 11, 11, 20, 10],
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      gyD1.setOption({
        title: {
          // text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#00f1f4", "#cdac47", "#599be5"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: [
            "母液追加流量（L/min）",
            "缸次母液实时累加量（L）",
            "实时上染率（%）"
          ],
          x: "13%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            name: "母液追加流量（L/min）",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            serieslabel: {
              color: "white"
            }
          },
          {
            name: "缸次母液实时累加量（L）",
            type: "line",
            symbolSize: 10,
            data: [11, 5, 13, 10, 11, 20, 13],
            serieslabel: {
              color: "white"
            }
          },
          {
            name: "实时上染率（%）",
            type: "line",
            symbolSize: 10,
            data: [13, 5, 13, 11, 11, 20, 10],
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      gyE1.setOption({
        title: {
          // text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#00f1f4", "#cdac47", "#599be5"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: [
            "母液追加流量（L/min）",
            "缸次母液实时累加量（L）",
            "实时上染率（%）"
          ],
          x: "13%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            name: "母液追加流量（L/min）",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            serieslabel: {
              color: "white"
            }
          },
          {
            name: "缸次母液实时累加量（L）",
            type: "line",
            symbolSize: 10,
            data: [11, 5, 13, 10, 11, 20, 13],
            serieslabel: {
              color: "white"
            }
          },
          {
            name: "实时上染率（%）",
            type: "line",
            symbolSize: 10,
            data: [13, 5, 13, 11, 11, 20, 10],
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      // 打印查看
      // console.log(this.dianlanA1);
      // console.log(this.dianlanTimeA1);
      myChartA1.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#60c3c6"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: this.dianlanTimeA1,
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: this.dianlanA1,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartA2.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#ed7b4d"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],

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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartA3.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#fef552"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartA4.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#538638"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartB1.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#60c3c6"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartB2.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#ed7b4d"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartB3.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#fef552"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],

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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartB4.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#538638"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartC1.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#60c3c6"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartC2.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#ed7b4d"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartC3.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#fef552"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartC4.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#538638"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartD1.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#60c3c6"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartD2.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#ed7b4d"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartD3.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#fef552"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartD4.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#538638"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartE1.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#60c3c6"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartE2.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#ed7b4d"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartE3.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#fef552"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      myChartE4.setOption({
        title: {
          text: "靛蓝浓度（g/L）",
          // subtext: "纯属虚构"
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#fff",
            fontSize: 28
          }
        },
        color: ["#538638"],

        tooltip: {
          trigger: "axis"
        },
        legend: {
          margin: 100,
          data: ["靛蓝浓度"],
          x: "65%",
          textStyle: {
            fontSize: 28, //字体大小
            color: "#ffffff" //字体颜色
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
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
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
            name: "靛蓝浓度",
            type: "line",
            symbolSize: 10,
            data: [11, 11, 20, 13, 5, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            serieslabel: {
              color: "white"
            }
          }
        ]
      });
      // 辅助用料
      pieA.setOption({
        title: {
          // text: "",
          // subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          // orient: "vertical",
          // x: "left",
          data: ["nihao a ", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          show: false
        },
        toolbox: {
          show: true,
          feature: {}
        },

        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              {
                value: 150,
                name: "浆染联合机C",
                itemStyle: { normal: { color: "#50cdf6" } }
              },
              {
                value: 200,
                name: "绳染D",
                itemStyle: { normal: { color: "#1d9ff2" } }
              },
              {
                value: 500,
                name: "浆染联合机A",
                itemStyle: { normal: { color: "#83b15a" } }
              },
              {
                value: 150,
                name: "绳染E",
                itemStyle: { normal: { color: "#ed5655" } }
              },
              {
                value: 150,
                name: "浆染联合机B",
                itemStyle: { normal: { color: "#ed7b4d" } }
              }
            ],
            label: {
              //  normal:{
              //                   show:true,
              //                   position:'inner', //标签的位置
              //                   textStyle : {
              //                       fontWeight : 300 ,
              //                       fontSize : 16    //文字的字体大小
              //                   },
              //                   formatter:'{d}%'
              //               },
              textStyle: {
                fontSize: "20", //外层字号大小
                fontWeight: "bold"
              }
            }
          }
        ]
      });
      pieB.setOption({
        title: {
          // text: "",
          // subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          // orient: "vertical",
          // x: "left",
          data: ["nihao a ", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          show: false
        },
        toolbox: {
          show: true,
          feature: {}
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              {
                value: 150,
                name: "浆染联合机C",
                itemStyle: { normal: { color: "#50cdf6" } }
              },
              {
                value: 200,
                name: "绳染D",
                itemStyle: { normal: { color: "#1d9ff2" } }
              },
              {
                value: 500,
                name: "浆染联合机A",
                itemStyle: { normal: { color: "#83b15a" } }
              },
              {
                value: 150,
                name: "绳染E",
                itemStyle: { normal: { color: "#ed5655" } }
              },
              {
                value: 150,
                name: "浆染联合机B",
                itemStyle: { normal: { color: "#ed7b4d" } }
              }
            ],
            label: {
              textStyle: {
                fontSize: "20", //外层字号大小
                fontWeight: "bold"
              }
            }
          }
        ]
      });
      pieC.setOption({
        title: {
          // text: "",
          // subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          // orient: "vertical",
          // x: "left",
          data: ["nihao a ", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          show: false
        },
        toolbox: {
          show: true,
          feature: {}
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              {
                value: 150,
                name: "浆染联合机C",
                itemStyle: { normal: { color: "#50cdf6" } }
              },
              {
                value: 200,
                name: "绳染D",
                itemStyle: { normal: { color: "#1d9ff2" } }
              },
              {
                value: 500,
                name: "浆染联合机A",
                itemStyle: { normal: { color: "#83b15a" } }
              },
              {
                value: 150,
                name: "绳染E",
                itemStyle: { normal: { color: "#ed5655" } }
              },
              {
                value: 150,
                name: "浆染联合机B",
                itemStyle: { normal: { color: "#ed7b4d" } }
              }
            ],
            label: {
              textStyle: {
                fontSize: "20", //外层字号大小
                fontWeight: "bold"
              }
            }
          }
        ]
      });
      pieD.setOption({
        title: {
          // text: "",
          // subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          // orient: "vertical",
          // x: "left",
          data: ["nihao a ", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          show: false
        },
        toolbox: {
          show: true,
          feature: {}
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              {
                value: 150,
                name: "浆染联合机C",
                itemStyle: { normal: { color: "#50cdf6" } }
              },
              {
                value: 200,
                name: "绳染D",
                itemStyle: { normal: { color: "#1d9ff2" } }
              },
              {
                value: 500,
                name: "浆染联合机A",
                itemStyle: { normal: { color: "#83b15a" } }
              },
              {
                value: 150,
                name: "绳染E",
                itemStyle: { normal: { color: "#ed5655" } }
              },
              {
                value: 150,
                name: "浆染联合机B",
                itemStyle: { normal: { color: "#ed7b4d" } }
              }
            ],
            label: {
              textStyle: {
                fontSize: "20", //外层字号大小
                fontWeight: "bold"
              }
            }
          }
        ]
      });
      pieE.setOption({
        title: {
          // text: "",
          // subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          // orient: "vertical",
          // x: "left",
          data: ["nihao a ", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          show: false
        },
        toolbox: {
          show: true,
          feature: {}
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              {
                value: 150,
                name: "浆染联合机C",
                itemStyle: { normal: { color: "#50cdf6" } }
              },
              {
                value: 200,
                name: "绳染D",
                itemStyle: { normal: { color: "#1d9ff2" } }
              },
              {
                value: 500,
                name: "浆染联合机A",
                itemStyle: { normal: { color: "#83b15a" } }
              },
              {
                value: 150,
                name: "绳染E",
                itemStyle: { normal: { color: "#ed5655" } }
              },
              {
                value: 150,
                name: "浆染联合机B",
                itemStyle: { normal: { color: "#ed7b4d" } }
              }
            ],
            label: {
              textStyle: {
                fontSize: "20", //外层字号大小
                fontWeight: "bold"
              }
            }
          }
        ]
      });
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
  padding: 0 100px;
  margin-top: 38px;
  /* border: solid 1px white; */
  overflow: hidden;
}
.protab-sc_bg1 {
  float: left;

  /* border: solid 1px; */
  width: 3640px;
  height: 700px;
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
  padding: 18px 0 35px;
}
.protab-sc_bg1-box {
  background: rgba(255, 255, 255, 5%);
  margin: 0 auto;
  width: 3000px;
}
.protab-sc_bg2,
.protab-sc_bg3 {
  float: left;
  margin-left: 100px;
  width: 1820px;
  height: 700px;
  background: url(..\assets\production-table\sc_bg23.png);
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
  margin-left: 100px;
  margin-top: 100px;
  width: 1720px;
  height: 2100px;
  background: url(..\assets\production-table\sc_bg5.png);
}
.protab-sc_bg6 {
  float: left;
  margin-left: 100px;
  margin-top: 100px;
  width: 2800px;
  height: 2100px;
  background: url(..\assets\production-table\sc_bg6.png);
}
.protab-sc_bg7 {
  float: left;
  margin-left: 100px;
  margin-top: 100px;
  width: 840px;
  height: 2100px;
  background: url(..\assets\production-table\sc_bg7.png);
}
/* 水  汽 */
/* #myChart-bar1,
#myChart-bar2 {
  border: solid 1px red;
} */
#myChartA1,
#myChartB1,
#myChartC1,
#myChartD1,
#myChartE1 {
  margin-bottom: 100px;
  float: left;
  margin-left: 80px;
}
#myChartA2,
#myChartA3,
#myChartA4,
#myChartB2,
#myChartB3,
#myChartB4,
#myChartC2,
#myChartC3,
#myChartC4,
#myChartD2,
#myChartD3,
#myChartD4,
#myChartE2,
#myChartE3,
#myChartE4 {
  float: left;
  margin-left: 25px;
  margin-bottom: 100px;
}
/* 机台车速 */
#myChart-curveB,
#myChart-curveC,
#myChart-curveD,
#myChart-curveE {
  margin-top: 20px;
}
/* 工艺 */

#myChart-gyA1,
#myChart-gyB1,
#myChart-gyC1,
#myChart-gyD1,
#myChart-gyE1 {
  margin: 0 auto 20px;
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
.index-top_nav img {
  display: block;
  margin: 45px auto;
  width: 960px;
  height: 168px;
}
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


