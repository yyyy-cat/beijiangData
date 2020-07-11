
<template>
  <!-- 生产运行 -->
  <div class="productiontable">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <!-- <img src="..\assets\production\sc_logo.png" alt> -->
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
      <p
        style="text-align: center; font-family: 庞门正道标题体; font-size: 180px;color:#00ecfc; letter-spacing:15px;"
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
            <el-table-column prop="机台编号" label="机台号" align="center" :width="tableWidth"></el-table-column>
            <el-table-column prop="色号" label="色号" align="center" :width="tableWidth"></el-table-column>
            <el-table-column prop="标准缸号" label="缸号" align="center" width="500"></el-table-column>
            <el-table-column prop="品种" label="品种" align="center" :width="tableWidth"></el-table-column>
            <el-table-column prop="整经长度" label="整经长度" align="center" :width="tableWidth"></el-table-column>
            <el-table-column prop="标准开机时间" label="标准开机时间" align="center" width="510"></el-table-column>
            <el-table-column prop="预计了机时间" label="预计了机时间" align="center" width="510"></el-table-column>
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
import a2 from "../assets/a2.js";
import a3 from "../assets/a3.js";
import login from "./login_assembly.vue";
export default {
  data() {
    return {
      gcDataA:[],
      gcDataB:[],
      gcDataC:[],
      gcDataD:[],
      gcDataE:[],
      muyeData: [],//母液数据
      qishuiData: [],//汽水数据
      shuiyongliang: [],//水用量数据
      jtgyData: [],//机台工艺的总和数据
      jtgyDataB: [],
      jtgyDataC: [],
      jtgyDataD: [],
      jtgyDataE: [],
      tableWidth: '350',
      baseUrl: 'http://120.78.186.60:8090/api',
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
    this.setShuiData();
    this.setQiData();
    this.setmyData();
    this.setZhixingShiJian();
    this.setjitaiguochengjiancexinxi();
  },
  mounted() {
    this.setData();
  },
  watch: {
    shuiyongliang: function(newData, oldData) {
      this.drawLineS();
    },
    qishuiData: function() {
      this.drawLineQ()
    },
    muyeData: function(newData, oldData) {
      this.drawLineM();
    },
    jtgyData: function(newData, oldData) {
      this.drawLine();
    },
    gcDataA: function() {
      this.drawJtGc();
    }
    // drawJtGc
  },
  methods: {
    //设置机台过程检测信息
    setJtOptions() {
      let options = {
            color: "#00e573",
            title: {
              text: "靛蓝浓度（g/L）",
              x: "7%",
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
              data: timeDs,
              axisLabel: {
                color: "white"
              }
            },
            yAxis: {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#354875",
                  width: 2
                }
              },
              axisLabel: {
                formatter: "{value}",
                color: "white"
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
                data: [10,20,30,40],
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
                        textStyle: {
                          fontSize: 20
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
                    }
                  }
                }
              }
            ]
          }
    },
    //设置母液化料数据
    setMyData() {
     let option = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
          legend: {
              margin: 100,
              x: "50%",
              textStyle: {
                fontSize: 28, //字体大小
                color: "#fff", //字体颜色
                borderColor: "blue"
              }
          },
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
              type: "category",
              data: [
                "E机",
                "D机",
                "C机",
                "B机",
                "A机",
                "A机",
              ]
            },
            calculable: true,
            animationDurationUpdate: 1200,
            series: [
              {
                name: "实际值",
                type: "bar",
                barWidth: 30,
                color: '#00c8e1',
                label: {
                  normal: {
                    show: true,
                    position: "right",
                    textStyle: {
                      //数值样式
                      color: "#fff",
                      fontSize: 25
                    }
                  }
                },
                barGap: "-100%",
                data: [100,200,300] 
              },
              {
                name: "标准值",
                type: "bar",
                barWidth: 30,
                itemStyle: {
                  normal: {
                    color: '#fbfa50',
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
                      color: "#fbfa50",
                      fontSize: 25
                    }
                  }
                },
                data: [200,300,400,500,600] //标准值
              }
            ]
      };
      return option
    },
    
    //设置上面水汽的基本设置
    setShuiqiData(data, sj, bz, colorsj, colorbz) {
      let option = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
          legend: {
              margin: 100,
              x: "50%",
              textStyle: {
                fontSize: 28, //字体大小
                color: "#fff", //字体颜色
                borderColor: "blue"
              }
          },
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
              type: "category",
              data: [
                "E机",
                "D机",
                "C机",
                "B机",
                "A机",
              ]
            },
            calculable: true,
            animationDurationUpdate: 1200,
            series: [
              {
                name: "实际值",
                type: "bar",
                barWidth: 30,
                color: colorsj,//'#00c8e1',
                label: {
                  normal: {
                    show: true,
                    position: "right",
                    textStyle: {
                      //数值样式
                      color: "#fff",
                      fontSize: 25
                    }
                  }
                },
                barGap: "-100%",
                data: this.returnShui(data,sj) 
              },
              {
                name: "标准值",
                type: "bar",
                barWidth: 30,
                itemStyle: {
                  normal: {
                    color: colorbz,//'#fbfa50',
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
                data: this.returnShui(data, bz)//标准值
              }
            ]
      };
    return option
    },
    //机台工艺执行时间基本设置
    setGyOption(dlqdd,dlqddbz,dlhtm,dlhtmbz,dl,dlbz,time) {
      let options = {
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
              data: time,
              axisLabel: {
                color: "white",
                fontSize: '20'
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
                data: dlqdd,
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
                data: dl,
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
                data: dlhtm,
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
                name: "靛蓝前打底标准",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlqddbz,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ff0c",
                      type:'dotted'
                    }
                  }
                }
              },
              {
                name: "靛蓝标准",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlbz,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00eaff",
                      type:'dotted'
                    }
                  }
                }
              },
              {
                name: "靛蓝后套面标准",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlhtmbz,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff6c00",
                      type:'dotted'
                    }
                  }
                }
              },
            ]
      }
      return options
    },
    setSrOption(dlqdd,dlqddbz,dlhtm,dlhtmbz,dl,dlbz,time) {
      let options = {
            color: ["#00ff0c", "#00eaff", "#ff6c00"],
            title: {
              text: "实际上染率（%）",
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
              data: ["上染率靛蓝前打底", "上染率靛蓝", "上染率靛蓝后套面"],
              data: [
                {
                  name: "上染率靛蓝前打底",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00ff0c" // 图例文字颜色
                  }
                },
                {
                  name: "上染率靛蓝",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00eaff" // 图例文字颜色
                  }
                },
                {
                  name: "上染率靛蓝后套面",
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
              data: time,
              axisLabel: {
                color: "white",
                fontSize: '20'
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
                name: "上染率靛蓝前打底",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlqdd,
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
                name: "上染率靛蓝",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dl,
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
                name: "上染率靛蓝后套面",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlhtm,
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
                name: "上染率靛蓝前打底标准",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlqddbz,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ff0c",
                      type:'dotted'
                    }
                  }
                }
              },
              {
                name: "上染率靛蓝标准",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlbz,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00eaff",
                      type:'dotted'
                    }
                  }
                }
              },
              {
                name: "上染率靛蓝后套面标准",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlhtmbz,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff6c00",
                      type:'dotted'
                    }
                  }
                }
              },
            ]
      }
      return options
    },
    //机台工艺过程
    //"靛蓝浓度实际","靛蓝浓度标准","靛蓝前浓度实际","靛蓝前浓度标准","靛蓝后浓度标准",靛蓝后浓度标准
     setJtOption(dlndsj, dlndbz, dlqndsj, dlqndbz, dlhndsj, dlhndbz,time) {
      let options = {
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
              data: ["靛蓝浓度", "靛蓝前浓度", "靛蓝后浓度"],
              data: [
                {
                  name: "靛蓝浓度",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00ff0c" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝前浓度",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00eaff" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝后浓度",
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
              data: time,
              axisLabel: {
                color: "white",
                fontSize: '20'
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
                // stack: '总量',
                symbolSize: 10,
                data: dlndsj,
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
                name: "靛蓝前浓度",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlqndsj,
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
                name: "靛蓝后浓度",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlhndsj,
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
                name: "靛蓝浓度标准",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlndbz,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ff0c",
                      type:'dotted'
                    }
                  }
                }
              },
              {
                name: "靛蓝前浓度标准",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlqndbz,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00eaff",
                      type:'dotted'
                    }
                  }
                }
              },
              {
                name: "靛蓝后浓度标准",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlhndbz,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff6c00",
                      type:'dotted'
                    }
                  }
                }
              },
            ]
      }
      return options
    },
    setJtOprOption(dlndsj, dlndbz, dlqndsj, dlqndbz, dlhndsj, dlhndbz,time) {
      let options = {
            color: ["#00ff0c", "#00eaff", "#ff6c00"],
            title: {
              text: "OPR（g/L）",
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
              data: ["靛蓝ORP浓度", "靛蓝前ORP浓度", "靛蓝后ORP浓度"],
              data: [
                {
                  name: "靛蓝ORP浓度",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00ff0c" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝前ORP浓度",
                  //  icon : 'circle',
                  textStyle: {
                    color: "#00eaff" // 图例文字颜色
                  }
                },
                {
                  name: "靛蓝后ORP浓度",
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
              data: time,
              axisLabel: {
                color: "white",
                fontSize: '20'
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
                name: "靛蓝ORP浓度",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlndsj,
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
                name: "靛蓝前ORP浓度",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlqndsj,
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
                name: "靛蓝后ORP浓度",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlhndsj,
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
                name: "靛蓝ORP浓度标准",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlndbz,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00ff0c",
                      type:'dotted'
                    }
                  }
                }
              },
              {
                name: "靛蓝前ORP浓度标准",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlqndbz,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#00eaff",
                      type:'dotted'
                    }
                  }
                }
              },
              {
                name: "靛蓝后ORP浓度标准",
                type: "line",
                // stack: '总量',
                symbolSize: 10,
                data: dlhndbz,
                smooth: true,
                serieslabel: {
                  color: "white"
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      color: "#ff6c00",
                      type:'dotted'
                    }
                  }
                }
              },
            ]
      }
      return options
    },
    setZhixingShiJian() {
      axios.post(this.baseUrl + '/getDatatuBiao65gongyizhixingxinxi').then(res => {
        this.jtgyData = res.data.data[0]['A机台数据'];
        this.jtgyDataB = res.data.data[1]['B机台数据'];
        this.jtgyDataC = res.data.data[2]['C机台数据'];
        this.jtgyDataD = res.data.data[2]['C机台数据'];
        this.jtgyDataE = res.data.data[2]['C机台数据'];
      })
    },
    setjitaiguochengjiancexinxi() {
      axios.post(this.baseUrl + '/getDatatuBiao66gongyizhixingxinxi').then((res)=> {
        this.gcDataA = res.data.data[0]['A机台数据'];
        this.gcDataB = res.data.data[1]['B机台数据'];
        this.gcDataC = res.data.data[2]['C机台数据'];
        this.gcDataD = res.data.data[3]['D机台数据'];
        this.gcDataE = res.data.data[4]['E机台数据'];
      })
    },
    //左边表格图
    returnData(dataList) {
      let dlqdd = [];
      let dlqddbz = [];
      let dlhtm = [];
      let dlhtmbz = [];
      let dl = [];
      let dlbz = [];
      let zhData = []
      //上染率
      let srqddbz = [];
      let srqdd = [];
      let srdlbz = [];
      let srdl = [];
      let srhtmbz = [];
      let srhtm = [];
      let srData = [];
      let timer = []
       dataList.map((item, idx)=> {
         dlqdd.push(item['追加流量靛蓝前打底实际'])
         dlqddbz.push(item['追加流量靛蓝前打底标准'])
         dlhtm.push(item['追加流量靛蓝后套面实际'])
         dlhtmbz.push(item['追加流量靛蓝后套面标准'])
         dl.push(item['追加流量靛蓝实际'])
         dlbz.push(item['追加流量靛蓝标准'])
         //上染
        srqddbz.push(item['上染率靛蓝前打底标准'])
        srqdd.push(item['上染率靛蓝前打底实际'])
        srdlbz.push(item['上染率靛蓝标准'])
        srdl.push(item['上染率靛蓝实际'])
        srhtmbz.push(item['上染率靛蓝后套面标准'])
        srhtm.push(item['上染率靛蓝后套面实际'])
        timer.push(item['采集时间'].slice(14,18))
        })
        zhData.push(dlqdd,dlqddbz,dlhtm,dlhtmbz,dl,dlbz)
        srData.push(srqdd,srqddbz,srhtm,srhtmbz,srdl,srdlbz);
        let oData = {
          myData: zhData,
          srData: srData,
          time: timer
        }
        return oData
    },
    //右边表格图

    returnDataNd(dataList) {
      let dlnd = [];
      let dlndbz = [];
      let dlqnd = [];
      let dlqndbz = [];
      let dlhnd = [];
      let dlhndbz = [];
      let zhData = []
      //上染率
      let opdlnd = [];
      let opdlndbz = [];
      let opdlqnd = [];
      let opdlqndbz = [];
      let opdlhnd = [];
      let opdlhndbz = [];
      let srData = [];
      let timer = []
       dataList.map((item, idx)=> {
         dlnd.push(item['靛蓝浓度实际'])
         dlndbz.push(item['靛蓝浓度标准'])
         dlqnd.push(item['靛蓝前浓度实际'])
         dlqndbz.push(item['靛蓝前浓度标准'])
         dlhnd.push(item['靛蓝后浓度实际'])
         dlhndbz.push(item['靛蓝后浓度标准'])
         //上染
         opdlnd.push(item['靛蓝ORP浓度实际'])
         opdlndbz.push(item['靛蓝ORP浓度标准'])
         opdlqnd.push(item['靛蓝前ORP浓度实际'])
         opdlqndbz.push(item['靛蓝前ORP浓度标准'])
         opdlhnd.push(item['靛蓝后ORP浓度实际'])
         opdlhndbz.push(item['靛蓝后ORP浓度标准'])
        timer.push(item['采集时间'].slice(14,18))
        })
        zhData.push(dlnd,dlndbz,dlqnd,dlqndbz,dlhnd,dlhndbz)
        srData.push(opdlnd,opdlndbz,opdlqnd,opdlqndbz,opdlhnd,opdlhndbz);
        let oData = {
          myData: zhData,
          srData: srData,
          time: timer
        }
        return oData
    },
    //公共使用数据处理图this.shuiyongliang
     returnShui(dataName,name) {
      let data = [];
      dataName.map((item, idx) => {
        data.push(item[name])
      })
      return data
    },
    //横向柱状图基本数据
    setOption() {
      let options = {
         title: {
            textStyle: {
                fontWeight: "normal", 
                color: "#fff",
                fontSize: 28
              }
            },
            legend: {
              margin: 100,
              x: "50%",
              textStyle: {
                fontSize: 28, //字体大小
                color: "#fff", //字体颜色
                borderColor: "blue"
              }
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "11%",
              containLabel: true
            },
            xAxis: {
              axisLabel: {
                formatter: "{value}",
                color: "white",
                fontSize: 35
              }
            },
            yAxis: {
                    type: 'value',
                     nameTextStyle: {
                        color: opt.zts,
                        fontSize: 40,
                        lineHeight: 50
                    },
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: { 
                            fontSize : 30,
                            color: opt.zts     
                            }
                    },
            },
            calculable: true,
            animationDurationUpdate: 1200,
            series: [
              {
                name: "实际值",
                type: "bar",
                barWidth: 30,
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
                data: [100,200,300,400] // 母液数据
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

                data:muyeshuju11
              }
            ]
      }
    },
    // 水能耗渲染数据
    setShuiData() {
       axios.post(this.baseUrl + '/getDatatuBiao62shuiyongliang').then(res => {
        this.shuiyongliang = res.data.data
      })
    },
    //汽耗能渲染数据
    setQiData() {
      axios.post(this.baseUrl + '/getDatatuBiao63qiyongliang').then((res)=> {
        this.qishuiData = res.data.data
      })
    },
    //母液耗能渲染数据
    setmyData() {
      axios.post(this.baseUrl + '/getDatatuBiao64muyeyongliang').then((res)=> {
        this.muyeData = res.data.data
      })
    },
    setData() {
      axios///getRunningBasicInfo
        .post(this.baseUrl + "/getDatatuBiao61jitaijibenxinxi")
        .then(res => {
          this.tableData = res.data.data;
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
    //水用量挂载
    drawLineS() {
        let bar1 = this.$echarts.init(document.getElementById("myChart-bar1"));
        bar1.setOption(this.setShuiqiData(this.shuiyongliang, "实际用水","标准用水",'#00c8e1','#f2e950'))
    },
    //汽用量挂载
    drawLineQ() {
      let bar2 = this.$echarts.init(document.getElementById("myChart-bar2"));
        bar2.setOption(this.setShuiqiData(this.qishuiData,"实际用汽","标准用汽",'#e1bb02','#52fcbc' ))
    },
    drawLineM() {
      let bar3 = this.$echarts.init(document.getElementById("myChart-bar3"));
      bar3.setOption(this.setMyData())
    },
    drawJtGc() {
         let A = this.returnDataNd(this.gcDataA);
         let myChartA1 = this.$echarts.init(
            document.getElementById("myChartA1")
          );
          let myChartA2 = this.$echarts.init(
            document.getElementById("myChartA2")
          );
          myChartA1.setOption(this.setJtOption(A.myData[0],A.myData[1],A.myData[2],A.myData[3],A.myData[4],A.myData[5],A.time))
          myChartA2.setOption(this.setJtOprOption(A.srData[0],A.srData[1],A.srData[2],A.srData[3],A.srData[4],A.srData[5],A.time))
          let B = this.returnDataNd(this.gcDataB);
          let myChartB1 = this.$echarts.init(
            document.getElementById("myChartB1")
          );
          let myChartB2 = this.$echarts.init(
            document.getElementById("myChartB2")
          );

          myChartB1.setOption(this.setJtOption(B.myData[0],B.myData[1],B.myData[2],B.myData[3],B.myData[4],B.myData[5],B.time))
          myChartB2.setOption(this.setJtOprOption(B.srData[0],B.srData[1],B.srData[2],B.srData[3],B.srData[4],B.srData[5],B.time))
          let C = this.returnDataNd(this.gcDataC);
          let myChartC1 = this.$echarts.init(
            document.getElementById("myChartC1")
          );
          let myChartC2 = this.$echarts.init(
            document.getElementById("myChartC2")
          );
          myChartC1.setOption(this.setJtOption(C.myData[0],C.myData[1],C.myData[2],C.myData[3],C.myData[4],C.myData[5],C.time))
          myChartC2.setOption(this.setJtOprOption(C.srData[0],C.srData[1],C.srData[2],C.srData[3],C.srData[4],C.srData[5],C.time))
          
          let D = this.returnDataNd(this.gcDataD);
          let myChartD1 = this.$echarts.init(
            document.getElementById("myChartD1")
          );
          let myChartD2 = this.$echarts.init(
            document.getElementById("myChartD2")
          );
          myChartD1.setOption(this.setJtOption(D.myData[0],D.myData[1],D.myData[2],D.myData[3],D.myData[4],D.myData[5],D.time))
          myChartD2.setOption(this.setJtOprOption(D.srData[0],D.srData[1],D.srData[2],D.srData[3],D.srData[4],D.srData[5],D.time))
          
          let E = this.returnDataNd(this.gcDataE);
          let myChartE1 = this.$echarts.init(
            document.getElementById("myChartE1")
          );
          let myChartE2 = this.$echarts.init(
            document.getElementById("myChartE2")
          );
          myChartE1.setOption(this.setJtOption(E.myData[0],E.myData[1],E.myData[2],E.myData[3],E.myData[4],E.myData[5],E.time))
          myChartE2.setOption(this.setJtOprOption(E.srData[0],E.srData[1],E.srData[2],E.srData[3],E.srData[4],E.srData[5],E.time))

    },
    // setMyData
    drawLine() {
          // 机台工艺执行
          let gyA1 = this.$echarts.init(
            document.getElementById("myChart-gyA1")
          );
           let jyData = this.returnData(this.jtgyData);
          gyA1.setOption(this.setGyOption(jyData.myData[0],jyData.myData[1],jyData.myData[2],jyData.myData[3],jyData.myData[4],jyData.myData[5],jyData.time))
          let gyA2 = this.$echarts.init(
            document.getElementById("myChart-gyA2")
          );
            gyA2.setOption(this.setSrOption(jyData.srData[0],jyData.srData[1],jyData.srData[2],jyData.srData[3],jyData.srData[4],jyData.srData[5],jyData.time))
         let jyDataB = this.returnData(this.jtgyDataB);
         let gyB1 = this.$echarts.init(
            document.getElementById("myChart-gyB1")
          );
          gyB1.setOption(this.setGyOption(jyDataB.myData[0],jyDataB.myData[1],jyDataB.myData[2],jyDataB.myData[3],jyDataB.myData[4],jyDataB.myData[5],jyDataB.time))
          let gyB2 = this.$echarts.init(
            document.getElementById("myChart-gyB2")
          );
          gyB2.setOption(this.setSrOption(jyDataB.srData[0],jyDataB.srData[1],jyDataB.srData[2],jyDataB.srData[3],jyDataB.srData[4],jyDataB.srData[5],jyDataB.time))
        
          //c机器
          let jyDataC = this.returnData(this.jtgyDataC);
          let gyC1 = this.$echarts.init(
            document.getElementById("myChart-gyC1")
          );
           gyC1.setOption(this.setGyOption(jyDataC.myData[0],jyDataC.myData[1],jyDataC.myData[2],jyDataC.myData[3],jyDataC.myData[4],jyDataC.myData[5],jyDataC.time))
          let gyC2 = this.$echarts.init(
            document.getElementById("myChart-gyC2")
          );
           gyC2.setOption(this.setSrOption(jyDataC.srData[0],jyDataC.srData[1],jyDataC.srData[2],jyDataC.srData[3],jyDataC.srData[4],jyDataC.srData[5],jyDataC.time))
        //D机器
        let jyDataD = this.returnData(this.jtgyDataD);
         let gyD1 = this.$echarts.init(
            document.getElementById("myChart-gyD1")
          );
          let gyD2 = this.$echarts.init(
            document.getElementById("myChart-gyD2")
          );
          gyD1.setOption(this.setGyOption(jyDataD.myData[0],jyDataD.myData[1],jyDataD.myData[2],jyDataD.myData[3],jyDataD.myData[4],jyDataD.myData[5],jyDataD.time))
          gyD2.setOption(this.setSrOption(jyDataD.srData[0],jyDataD.srData[1],jyDataD.srData[2],jyDataD.srData[3],jyDataD.srData[4],jyDataD.srData[5],jyDataD.time))
          //E机器
          let jyDataE = this.returnData(this.jtgyDataE);
          let gyE1 = this.$echarts.init(
            document.getElementById("myChart-gyE1")
          );
          let gyE2 = this.$echarts.init(
            document.getElementById("myChart-gyE2")
          );
          gyE1.setOption(this.setGyOption(jyDataE.myData[0],jyDataE.myData[1],jyDataE.myData[2],jyDataE.myData[3],jyDataE.myData[4],jyDataE.myData[5],jyDataE.time))
          gyE2.setOption(this.setSrOption(jyDataE.srData[0],jyDataE.srData[1],jyDataE.srData[2],jyDataE.srData[3],jyDataE.srData[4],jyDataE.srData[5],jyDataE.time))
    }
  }
};
</script>
<style scoped lang='less'>
/* 修改机台基本信息 */
.el-table--enable-row-transition .el-table__body td {
  border: 2px solid #000;
}
.el-table__body tr.current-row>td{
    background-color: #134087 !important;
}
/deep/.cell{
  line-height: 60px;
}
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


