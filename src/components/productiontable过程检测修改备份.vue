<template>
  <!-- 生产运行 -->
  <div class="productiontable">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <!-- <img src="..\assets\production\sc_logo.png" alt> -->
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
       <p style="text-align: center; font-family: 庞门正道标题体; font-size: 180px;color:#11aedc; letter-spacing:15px;">
        <img src="..\assets\Administration\nav_logo.png" alt="" style="vertical-align: middle;margin-top: -37px;">
        <span>生产运行</span>
      </p>
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
            <el-table-column type="name" label="机台号" align="center" width="300"></el-table-column>
            <el-table-column prop="name" label="色号" align="center" width="300"></el-table-column>
            <el-table-column prop="name" label="缸号" align="center" width="300"></el-table-column>
            <el-table-column prop="name" label="品种" align="center" width="500"></el-table-column>
            <el-table-column prop="name" label="整经长度" align="center" width="450"></el-table-column>
            <el-table-column prop="name" label="开机时间" align="center" width="550"></el-table-column>
            <el-table-column prop="name" label="预计了机时间" align="center" width="540"></el-table-column>
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
        <div id="myChart-bar2" :style="{width: '100%', height: '640px'}"></div>
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
        <p>机台过程监测信息</p>
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
      dianlanA1: "",
      dianlanTimeA1: ""
    };
  },
  created() {
    this.setdata();
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
      this.dianlanA1 = [2, 4, 3, 2, 3, 4];
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
      // // 机台车速
      // let curveA = this.$echarts.init(
      //   document.getElementById("myChart-curveA")
      // );
      // let curveB = this.$echarts.init(
      //   document.getElementById("myChart-curveB")
      // );
      // let curveC = this.$echarts.init(
      //   document.getElementById("myChart-curveC")
      // );
      // let curveD = this.$echarts.init(
      //   document.getElementById("myChart-curveD")
      // );
      // let curveE = this.$echarts.init(
      //   document.getElementById("myChart-curveE")
      // );
      // 机台工艺执行
      let gyA1 = this.$echarts.init(document.getElementById("myChart-gyA1"));
      let gyA2 = this.$echarts.init(document.getElementById("myChart-gyA2"));
      let gyB1 = this.$echarts.init(document.getElementById("myChart-gyB1"));
      let gyB2 = this.$echarts.init(document.getElementById("myChart-gyB2"));
      let gyC1 = this.$echarts.init(document.getElementById("myChart-gyC1"));
      let gyC2 = this.$echarts.init(document.getElementById("myChart-gyC2"));
      let gyD1 = this.$echarts.init(document.getElementById("myChart-gyD1"));
      let gyD2 = this.$echarts.init(document.getElementById("myChart-gyD2"));
      let gyE1 = this.$echarts.init(document.getElementById("myChart-gyE1"));
      let gyE2 = this.$echarts.init(document.getElementById("myChart-gyE2"));
      // 机台过程检测信息
      let myChartA1 = this.$echarts.init(document.getElementById("myChartA1"));
      let myChartA2 = this.$echarts.init(document.getElementById("myChartA2"));
      let myChartB1 = this.$echarts.init(document.getElementById("myChartB1"));
      let myChartB2 = this.$echarts.init(document.getElementById("myChartB2"));
      let myChartC1 = this.$echarts.init(document.getElementById("myChartC1"));
      let myChartC2 = this.$echarts.init(document.getElementById("myChartC2"));
      let myChartD1 = this.$echarts.init(document.getElementById("myChartD1"));
      let myChartD2 = this.$echarts.init(document.getElementById("myChartD2"));
      let myChartE1 = this.$echarts.init(document.getElementById("myChartE1"));
      let myChartE2 = this.$echarts.init(document.getElementById("myChartE2"));

      // 绘制图表
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
          data: ["A机", "B机", "C机", "D机", "E机"]
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
            data: [320, 302, 301, 334, 390]
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
          data: ["A机", "B机", "C机", "D机", "E机"]
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
            data: [320, 302, 301, 334, 390]
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
      // // 机台车速
      // curveA.setOption({
      //   title: {
      //     text: "车速（m/min）",
      //     x: "7%",
      //     textStyle: {
      //       fontSize: 28, //字体大小
      //       color: "#fff" //字体颜色
      //     }
      //   },
      //   tooltip: {
      //     trigger: "axis"
      //   },
      //   legend: {
      //     margin: 100,
      //     data: [">200", "100-200", "<=100"],

      //     textStyle: {
      //       fontSize: 28, //字体大小
      //       color: "#fff" //字体颜色
      //     }
      //   },

      //   xAxis: {
      //     type: "category",
      //     data: ["1-1", "2-1", "3-1", "4-1", "5-1", "6-1", "7-1"],
      //     axisLabel: {
      //       formatter: "{value}",
      //       color: "white",
      //       fontSize: 20
      //     },
      //     axisLine: {
      //       lineStyle: {
      //         color: "#354875",
      //         width: 2
      //       }
      //     }
      //   },
      //   yAxis: {
      //     type: "value",
      //     // data:[50,100,200,300,400,500]
      //     axisLabel: {
      //       formatter: "{value}",
      //       color: "white",
      //       fontSize: 20
      //     },
      //     axisLine: {
      //       lineStyle: {
      //         color: "#354875",
      //         width: 2
      //       }
      //     },
      //     splitLine: {
      //       lineStyle: {
      //         type: "dashed",
      //         color: "#354875"
      //       }
      //     }
      //   },
      //   visualMap: {
      //     top: 0,
      //     right: 0,
      //     show: true,
      //     pieces: [
      //       {
      //         lte: 100,
      //         color: "#00ebee"
      //       },
      //       {
      //         gt: 100,
      //         lte: 200,
      //         color: "#e3bc46"
      //       },
      //       {
      //         gt: 200,
      //         color: "#00ebee"
      //       }
      //     ],
      //     outOfRange: {
      //       color: "#999"
      //     }
      //   },
      //   series: [
      //     {
      //       data: [70, 393, 101, 334, 90, 330, 120],
      //       type: "line",
      //       smooth: true,
      //       markLine: {
      //         silent: true,
      //         data: [
      //           {
      //             yAxis: 100,
      //             lineStyle: {
      //               type: "dashed",
      //               color: "#e3bc46"
      //             }
      //           },
      //           {
      //             yAxis: 200,
      //             lineStyle: {
      //               type: "dashed",
      //               color: "#e3bc46"
      //             }
      //           }
      //         ]
      //       }
      //     }
      //   ]
      // });
      // curveB.setOption({
      //   title: {
      //     text: "车速（m/min）",
      //     x: "7%",
      //     textStyle: {
      //       fontSize: 28, //字体大小
      //       color: "#fff" //字体颜色
      //     }
      //   },
      //   tooltip: {
      //     trigger: "axis"
      //   },
      //   legend: {
      //     margin: 100,
      //     data: [">200", "100-200", "<=100"],

      //     textStyle: {
      //       fontSize: 28, //字体大小
      //       color: "#fff" //字体颜色
      //     }
      //   },

      //   xAxis: {
      //     type: "category",
      //     data: ["1-1", "2-1", "3-1", "4-1", "5-1", "6-1", "7-1"],
      //     axisLabel: {
      //       formatter: "{value}",
      //       color: "white",
      //       fontSize: 20
      //     },
      //     axisLine: {
      //       lineStyle: {
      //         color: "#354875",
      //         width: 2
      //       }
      //     }
      //   },
      //   yAxis: {
      //     type: "value",
      //     // data:[50,100,200,300,400,500]
      //     axisLabel: {
      //       formatter: "{value}",
      //       color: "white",
      //       fontSize: 20
      //     },
      //     axisLine: {
      //       lineStyle: {
      //         color: "#354875",
      //         width: 2
      //       }
      //     },
      //     splitLine: {
      //       lineStyle: {
      //         type: "dashed",
      //         color: "#354875"
      //       }
      //     }
      //   },
      //   visualMap: {
      //     top: 0,
      //     right: 0,
      //     show: true,
      //     pieces: [
      //       {
      //         lte: 100,
      //         color: "#00ebee"
      //       },
      //       {
      //         gt: 100,
      //         lte: 200,
      //         color: "#e3bc46"
      //       },
      //       {
      //         gt: 200,
      //         color: "#00ebee"
      //       }
      //     ],
      //     outOfRange: {
      //       color: "#999"
      //     }
      //   },
      //   series: [
      //     {
      //       data: [70, 393, 101, 334, 90, 330, 120],
      //       type: "line",
      //       smooth: true,
      //       markLine: {
      //         silent: true,
      //         data: [
      //           {
      //             yAxis: 100,
      //             lineStyle: {
      //               type: "dashed",
      //               color: "#e3bc46"
      //             }
      //           },
      //           {
      //             yAxis: 200,
      //             lineStyle: {
      //               type: "dashed",
      //               color: "#e3bc46"
      //             }
      //           }
      //         ]
      //       }
      //     }
      //   ]
      // });
      // curveC.setOption({
      //   title: {
      //     text: "车速（m/min）",
      //     x: "7%",
      //     textStyle: {
      //       fontSize: 28, //字体大小
      //       color: "#fff" //字体颜色
      //     }
      //   },
      //   tooltip: {
      //     trigger: "axis"
      //   },
      //   legend: {
      //     margin: 100,
      //     data: [">200", "100-200", "<=100"],

      //     textStyle: {
      //       fontSize: 28, //字体大小
      //       color: "#fff" //字体颜色
      //     }
      //   },

      //   xAxis: {
      //     type: "category",
      //     data: ["1-1", "2-1", "3-1", "4-1", "5-1", "6-1", "7-1"],
      //     axisLabel: {
      //       formatter: "{value}",
      //       color: "white",
      //       fontSize: 20
      //     },
      //     axisLine: {
      //       lineStyle: {
      //         color: "#354875",
      //         width: 2
      //       }
      //     }
      //   },
      //   yAxis: {
      //     type: "value",
      //     // data:[50,100,200,300,400,500]
      //     axisLabel: {
      //       formatter: "{value}",
      //       color: "white",
      //       fontSize: 20
      //     },
      //     axisLine: {
      //       lineStyle: {
      //         color: "#354875",
      //         width: 2
      //       }
      //     },
      //     splitLine: {
      //       lineStyle: {
      //         type: "dashed",
      //         color: "#354875"
      //       }
      //     }
      //   },
      //   visualMap: {
      //     top: 0,
      //     right: 0,
      //     show: true,
      //     pieces: [
      //       {
      //         lte: 100,
      //         color: "#00ebee"
      //       },
      //       {
      //         gt: 100,
      //         lte: 200,
      //         color: "#e3bc46"
      //       },
      //       {
      //         gt: 200,
      //         color: "#00ebee"
      //       }
      //     ],
      //     outOfRange: {
      //       color: "#999"
      //     }
      //   },
      //   series: [
      //     {
      //       data: [70, 393, 101, 334, 90, 330, 120],
      //       type: "line",
      //       smooth: true,
      //       markLine: {
      //         silent: true,
      //         data: [
      //           {
      //             yAxis: 100,
      //             lineStyle: {
      //               type: "dashed",
      //               color: "#e3bc46"
      //             }
      //           },
      //           {
      //             yAxis: 200,
      //             lineStyle: {
      //               type: "dashed",
      //               color: "#e3bc46"
      //             }
      //           }
      //         ]
      //       }
      //     }
      //   ]
      // });
      // curveD.setOption({
      //   title: {
      //     text: "车速（m/min）",
      //     x: "7%",
      //     textStyle: {
      //       fontSize: 28, //字体大小
      //       color: "#fff" //字体颜色
      //     }
      //   },
      //   tooltip: {
      //     trigger: "axis"
      //   },
      //   legend: {
      //     margin: 100,
      //     data: [">200", "100-200", "<=100"],

      //     textStyle: {
      //       fontSize: 28, //字体大小
      //       color: "#fff" //字体颜色
      //     }
      //   },

      //   xAxis: {
      //     type: "category",
      //     data: ["1-1", "2-1", "3-1", "4-1", "5-1", "6-1", "7-1"],
      //     axisLabel: {
      //       formatter: "{value}",
      //       color: "white",
      //       fontSize: 20
      //     },
      //     axisLine: {
      //       lineStyle: {
      //         color: "#354875",
      //         width: 2
      //       }
      //     }
      //   },
      //   yAxis: {
      //     type: "value",
      //     // data:[50,100,200,300,400,500]
      //     axisLabel: {
      //       formatter: "{value}",
      //       color: "white",
      //       fontSize: 20
      //     },
      //     axisLine: {
      //       lineStyle: {
      //         color: "#354875",
      //         width: 2
      //       }
      //     },
      //     splitLine: {
      //       lineStyle: {
      //         type: "dashed",
      //         color: "#354875"
      //       }
      //     }
      //   },
      //   visualMap: {
      //     top: 0,
      //     right: 0,
      //     show: true,
      //     pieces: [
      //       {
      //         lte: 100,
      //         color: "#00ebee"
      //       },
      //       {
      //         gt: 100,
      //         lte: 200,
      //         color: "#e3bc46"
      //       },
      //       {
      //         gt: 200,
      //         color: "#00ebee"
      //       }
      //     ],
      //     outOfRange: {
      //       color: "#999"
      //     }
      //   },
      //   series: [
      //     {
      //       data: [70, 393, 101, 334, 90, 330, 120],
      //       type: "line",
      //       smooth: true,
      //       markLine: {
      //         silent: true,
      //         data: [
      //           {
      //             yAxis: 100,
      //             lineStyle: {
      //               type: "dashed",
      //               color: "#e3bc46"
      //             }
      //           },
      //           {
      //             yAxis: 200,
      //             lineStyle: {
      //               type: "dashed",
      //               color: "#e3bc46"
      //             }
      //           }
      //         ]
      //       }
      //     }
      //   ]
      // });
      // curveE.setOption({
      //   title: {
      //     text: "车速（m/min）",
      //     x: "7%",
      //     textStyle: {
      //       fontSize: 28, //字体大小
      //       color: "#fff" //字体颜色
      //     }
      //   },
      //   tooltip: {
      //     trigger: "axis"
      //   },
      //   legend: {
      //     margin: 100,
      //     data: [">200", "100-200", "<=100"],

      //     textStyle: {
      //       fontSize: 28, //字体大小
      //       color: "#fff" //字体颜色
      //     }
      //   },

      //   xAxis: {
      //     type: "category",
      //     data: ["1-1", "2-1", "3-1", "4-1", "5-1", "6-1", "7-1"],
      //     axisLabel: {
      //       formatter: "{value}",
      //       color: "white",
      //       fontSize: 20
      //     },
      //     axisLine: {
      //       lineStyle: {
      //         color: "#354875",
      //         width: 2
      //       }
      //     }
      //   },
      //   yAxis: {
      //     type: "value",
      //     // data:[50,100,200,300,400,500]
      //     axisLabel: {
      //       formatter: "{value}",
      //       color: "white",
      //       fontSize: 20
      //     },
      //     axisLine: {
      //       lineStyle: {
      //         color: "#354875",
      //         width: 2
      //       }
      //     },
      //     splitLine: {
      //       lineStyle: {
      //         type: "dashed",
      //         color: "#354875"
      //       }
      //     }
      //   },
      //   visualMap: {
      //     top: 0,
      //     right: 0,
      //     show: true,
      //     pieces: [
      //       {
      //         lte: 100,
      //         color: "#00ebee"
      //       },
      //       {
      //         gt: 100,
      //         lte: 200,
      //         color: "#e3bc46"
      //       },
      //       {
      //         gt: 200,
      //         color: "#00ebee"
      //       }
      //     ],
      //     outOfRange: {
      //       color: "#999"
      //     }
      //   },
      //   series: [
      //     {
      //       data: [70, 393, 101, 334, 90, 330, 120],
      //       type: "line",
      //       smooth: true,
      //       markLine: {
      //         silent: true,
      //         data: [
      //           {
      //             yAxis: 100,
      //             lineStyle: {
      //               type: "dashed",
      //               color: "#e3bc46"
      //             }
      //           },
      //           {
      //             yAxis: 200,
      //             lineStyle: {
      //               type: "dashed",
      //               color: "#e3bc46"
      //             }
      //           }
      //         ]
      //       }
      //     }
      //   ]
      // });

      // 机台工艺执行
      gyA1.setOption({
        color: ["#00ff0c", "#00eaff", "#ff6c00"],
        title: {
          text: "靛蓝浓度（g/L）",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              220,
              132,
              101,
              134,
              90,
              101,
              134,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
          text: "靛蓝浓度（g/L）",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              220,
              132,
              101,
              134,
              90,
              101,
              134,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
          text: "靛蓝浓度（g/L）",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              220,
              132,
              101,
              134,
              90,
              101,
              134,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
          text: "靛蓝浓度（g/L）",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              220,
              132,
              101,
              134,
              90,
              101,
              134,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
          text: "靛蓝浓度（g/L）",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              220,
              132,
              101,
              134,
              90,
              101,
              134,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
          text: "靛蓝浓度（g/L）",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              220,
              132,
              101,
              134,
              90,
              101,
              134,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
          text: "靛蓝浓度（g/L）",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              220,
              132,
              101,
              134,
              90,
              101,
              134,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
          text: "靛蓝浓度（g/L）",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              220,
              132,
              101,
              134,
              90,
              101,
              134,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
          text: "靛蓝浓度（g/L）",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              220,
              132,
              101,
              134,
              90,
              101,
              134,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
          text: "靛蓝浓度（g/L）",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              220,
              132,
              101,
              134,
              90,
              101,
              134,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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

      // 打印查看
      // console.log(this.dianlanA1);
      // console.log(this.dianlanTimeA1);
      myChartA1.setOption({
        color: ["#e6bf00", "#00e573"],
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
              name: "靛蓝前打底",
              textStyle: {
                color: "#e6bf00" // 图例文字颜色
              }
            },
            {
              name: "靛蓝",
              textStyle: {
                color: "#00e573" // 图例文字颜色
              }
            }
          ],
          x: "65%",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            symbolSize: 10,
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
                  color: "#e6bf00"
                }
              }
            }
          },
          {
            name: "靛蓝",
            type: "line",
            symbolSize: 10,
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
                },
                {
                  yAxis: 250,
                  lineStyle: {
                    type: "dash",
                    color: "#00e573 ",
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
        color: ["#00a8ff", "#ff9000"],
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
              name: "靛蓝前打底",
              textStyle: {
                color: "#00a8ff" // 图例文字颜色
              }
            },
            {
              name: "靛蓝",
              textStyle: {
                color: "#ff9000" // 图例文字颜色
              }
            }
          ],
          x: "65%",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            symbolSize: 10,
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
                  color: "#00a8ff"
                }
              }
            }
          },
          {
            name: "靛蓝",
            type: "line",
            symbolSize: 10,
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
                },
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
      myChartB1.setOption({
        color: ["#e6bf00", "#00e573"],
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
              name: "靛蓝前打底",
              textStyle: {
                color: "#e6bf00" // 图例文字颜色
              }
            },
            {
              name: "靛蓝",
              textStyle: {
                color: "#00e573" // 图例文字颜色
              }
            }
          ],
          x: "65%",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            symbolSize: 10,
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
                  color: "#e6bf00"
                }
              }
            }
          },
          {
            name: "靛蓝",
            type: "line",
            symbolSize: 10,
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
                },
                {
                  yAxis: 250,
                  lineStyle: {
                    type: "dash",
                    color: "#00e573 ",
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
        color: ["#00a8ff", "#ff9000"],
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
              name: "靛蓝前打底",
              textStyle: {
                color: "#00a8ff" // 图例文字颜色
              }
            },
            {
              name: "靛蓝",
              textStyle: {
                color: "#ff9000" // 图例文字颜色
              }
            }
          ],
          x: "65%",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            symbolSize: 10,
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
                  color: "#00a8ff"
                }
              }
            }
          },
          {
            name: "靛蓝",
            type: "line",
            symbolSize: 10,
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
                },
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
        color: ["#e6bf00", "#00e573"],
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
              name: "靛蓝前打底",
              textStyle: {
                color: "#e6bf00" // 图例文字颜色
              }
            },
            {
              name: "靛蓝",
              textStyle: {
                color: "#00e573" // 图例文字颜色
              }
            }
          ],
          x: "65%",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            symbolSize: 10,
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
                  color: "#e6bf00"
                }
              }
            }
          },
          {
            name: "靛蓝",
            type: "line",
            symbolSize: 10,
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
                },
                {
                  yAxis: 250,
                  lineStyle: {
                    type: "dash",
                    color: "#00e573 ",
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
        color: ["#00a8ff", "#ff9000"],
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
              name: "靛蓝前打底",
              textStyle: {
                color: "#00a8ff" // 图例文字颜色
              }
            },
            {
              name: "靛蓝",
              textStyle: {
                color: "#ff9000" // 图例文字颜色
              }
            }
          ],
          x: "65%",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            symbolSize: 10,
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
                  color: "#00a8ff"
                }
              }
            }
          },
          {
            name: "靛蓝",
            type: "line",
            symbolSize: 10,
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
                },
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
      myChartD1.setOption({
        color: ["#e6bf00", "#00e573"],
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
              name: "靛蓝前打底",
              textStyle: {
                color: "#e6bf00" // 图例文字颜色
              }
            },
            {
              name: "靛蓝",
              textStyle: {
                color: "#00e573" // 图例文字颜色
              }
            }
          ],
          x: "65%",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            symbolSize: 10,
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
                  color: "#e6bf00"
                }
              }
            }
          },
          {
            name: "靛蓝",
            type: "line",
            symbolSize: 10,
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
                },
                {
                  yAxis: 250,
                  lineStyle: {
                    type: "dash",
                    color: "#00e573 ",
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
        color: ["#00a8ff", "#ff9000"],
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
              name: "靛蓝前打底",
              textStyle: {
                color: "#00a8ff" // 图例文字颜色
              }
            },
            {
              name: "靛蓝",
              textStyle: {
                color: "#ff9000" // 图例文字颜色
              }
            }
          ],
          x: "65%",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            symbolSize: 10,
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
                  color: "#00a8ff"
                }
              }
            }
          },
          {
            name: "靛蓝",
            type: "line",
            symbolSize: 10,
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
                },
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
      myChartE1.setOption({
        color: ["#e6bf00", "#00e573"],
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
              name: "靛蓝前打底",
              textStyle: {
                color: "#e6bf00" // 图例文字颜色
              }
            },
            {
              name: "靛蓝",
              textStyle: {
                color: "#00e573" // 图例文字颜色
              }
            }
          ],
          x: "65%",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            symbolSize: 10,
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
                  color: "#e6bf00"
                }
              }
            }
          },
          {
            name: "靛蓝",
            type: "line",
            symbolSize: 10,
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
                },
                {
                  yAxis: 250,
                  lineStyle: {
                    type: "dash",
                    color: "#00e573 ",
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
        color: ["#00a8ff", "#ff9000"],
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
              name: "靛蓝前打底",
              textStyle: {
                color: "#00a8ff" // 图例文字颜色
              }
            },
            {
              name: "靛蓝",
              textStyle: {
                color: "#ff9000" // 图例文字颜色
              }
            }
          ],
          x: "65%",
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
          data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
          ],
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
            symbolSize: 10,
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              132,
              101,
              134,
              90,
              230,
              210
            ],
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
                  color: "#00a8ff"
                }
              }
            }
          },
          {
            name: "靛蓝",
            type: "line",
            symbolSize: 10,
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              232,
              201,
              154,
              190,
              330,
              410
            ],
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
                },
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


