<template>
  <!-- 历史数据分析 -->
  <div class="history">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <!-- <img src="..\assets\history\logo_history.png" alt> -->
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
       <p style="text-align: center; font-family: 庞门正道标题体; font-size: 180px;color:#11aedc; letter-spacing:15px;">
        <img src="..\assets\Administration\nav_logo.png" alt="" style="vertical-align: middle; margin-top: -37px;">
        <span>历史数据中心</span>
      </p>
    </div>
    <!-- 返回主页 -->
    <div class="index-esc" @click="esc">
      <span>
        <img src="..\assets\Administration\home.png" alt>
        主页
      </span>
    </div>
    <!-- 显示用户登陆和退出 -->
    <!-- <div class="index-name_esc"> -->
      <!-- 跳转登陆后的页面 -->
      <!-- <span @click="pro">
        <img src="..\assets\index\home_name.png" alt>
        小北
      </span>
      <span>
        <img src="..\assets\index\home_esc.png" alt>
        退出
      </span>
    </div> -->
    <div class="history2-left">
      <div class="history2-Cylinder">
        <div class="top"></div>
        缸号：{{batchNo}}
        <div class="top"></div>
      </div>
      <div class="history2-CylinderTab">
        <table border="1" class="CylinderTab1">
          <tr>
            <td class="history2-CylinderTab-td" rowspan="4">成品<br>结果</td>
            <td>LOT色</td>
          </tr>
          <tr>
            <td>分光测色仪*A</td>
          </tr>
          <tr>
            <td>分光测色仪*B</td>
          </tr>
           <tr>
            <td>分光测色仪*L</td>
          </tr>
          <tr>
            <td class="history2-CylinderTab-td" rowspan="6">染色<br>过程<br>信息</td>
            <td>母液追加流量（l/min）</td>
          </tr>
          <tr>
            <td>上染率（%）</td>
          </tr>
          <tr>
            <td>靛蓝浓度（g/l）</td>
          </tr>
          <tr>
            <td>pH</td>
          </tr>
          <tr>
            <td>ORP(mv)</td>
          </tr>
          <tr>
            <td>游离保险粉浓度（g/l）</td>
          </tr>
        </table>
        <table border="1" class="CylinderTab2">
          <tr>
            <td colspan="13">检测序号(染色位置)</td>
          </tr>
          <tr></tr>
          <tr>
            <td v-for="(item,index) in lotdata.data2" :key="index">{{item}}</td>
          </tr>
          <tr>
            <td v-for="(item,index) in ictdata.data2" :key="index">{{item}}</td>
          </tr>
          <tr>
            <td v-for="(item,index) in ictdatab.data2" :key="index">{{item}}</td>
          </tr>
          <tr>
            <td v-for="(item,index) in ictdatal.data2" :key="index">{{item}}</td>
          </tr>
          <tr>
            <td v-for="(item,index) in liquire.data2" :key="index">{{item}}</td>
          </tr>
           <tr>
            <td v-for="(item,index) in uptake.data2" :key="index">{{item}}</td>
          </tr>
          <tr>
            <td v-for="(item,index) in blue.data2" :key="index">{{item}}</td>
          </tr>
          <tr>
            <td v-for="(item,index) in ph.data2" :key="index">{{item}}</td>
          </tr>
          <tr>
            <td v-for="(item,index) in orp.data2" :key="index">{{item}}</td>
          </tr>
          <tr>
            <td v-for="(item,index) in potency.data2" :key="index">{{item}}</td>
          </tr>
        </table>
      </div>
      <!-- <div class="history2-CylinderPro">
        <el-pagination
          :page-size="pagesize"
          :current-page.sync="currentPage"
          background
          layout="prev, pager, next"
          :total="tableData111.length"
        ></el-pagination>
      </div> -->
      <div class="icon-j"></div>
    </div>
    <div class="history2-right">
      <div class="main-left">
         <div id="myChart-gy-All1" :style="{width: '90%', height: '320px'}"></div>
        <div id="myChart-gy-All2" :style="{width: '90%', height: '320px'}"></div>
        <div id="myChart-gy-AllB2" :style="{width: '90%', height: '320px'}"></div>
        <div id="myChart-gy-AllC2" :style="{width: '90%', height: '320px'}"></div>
        <div id="myChart-gy-All3" :style="{width: '90%', height: '320px'}"></div>
        <div id="myChart-gy-All4" :style="{width: '90%', height: '320px'}"></div>
        <div id="myChart-gy-All5" :style="{width: '90%', height: '320px'}"></div>
        <div id="myChart-gy-All6" :style="{width: '90%', height: '320px'}"></div>
        <div id="myChart-gy-All7" :style="{width: '90%', height: '320px'}"></div>
        <div id="myChart-gy-All8" :style="{width: '90%', height: '320px'}"></div>
      </div>
     
     <div class="main-right"></div>
     <div class="icon-j"></div>
    </div>

    <foot></foot>
  </div>
</template>
<script>
import foot from "./foot.vue";
import shaoguanUrl from "../assets/shaoguanUrl";
import axios from "axios";
export default {
  data() {
    return {
      pagesize: 13,
      currentPage: 1,
      batchNo: this.$route.query.batchNo,
      // batchNo: 1905077,
      lotdata: {},
      ictdata: {},
      ictdatab: {},
      ictdatal: {},
      liquire: {},
      uptake: {},
      blue: {},
      ph: {},
      orp: {},
      potency: {},
      toShowLine: false
    };
  },
  created() {
   this.toDownData()
  },
  components: { foot },
  watch:{
    toShowLine: function(newdata,olddata){
      if(newdata){
        this.drawLine();
      }
    }
  },
  methods: {
    toDownData() {
      var batchNo = new URLSearchParams();
      batchNo.append("batchNo", this.batchNo);
      axios.post(shaoguanUrl + '/api/getlishitubiaoData',batchNo).then(res =>{
        let data = res.data.data;
        var lot = res.data.data.LOT色.slice(0,13);
        var ict = res.data.data["分光测色仪*A"].slice(0,13);
        var ictb = res.data.data["分光测色仪*B"].slice(0,13);
        var ictl = res.data.data["分光测色仪*L"].slice(0,13);
        var blue1 = res.data.data["靛蓝浓度（g/l）"].slice(0,13);
        var ph = res.data.data["pH"].slice(0,13);
        var liquire1 = res.data.data["母液追加流量（l/min）"].slice(0,13);
        var uptake1 = res.data.data["上染率（%）"].slice(0,13);
        var orp1 = res.data.data["ORP(mv)"].slice(0,13);
        var potency1 = res.data.data["游离保险粉浓度（g/l）"].slice(0,13);
        this.lotdata ={
          data1: data.LOT色,
          data2: lot
        }
        this.ictdata = {
          data1: data["分光测色仪*A"],
          data2: ict
        }
        this.ictdatab = {
          data1: data["分光测色仪*B"],
          data2: ictb
        }
        this.ictdatal = {
           data1: data["分光测色仪*L"],
           data2: ictl
        }
        this.blue = {
          data1: data["靛蓝浓度（g/l）"],
          data2: blue1
        }
        this.ph = {
          data1: data["pH"],
          data2: ph
        }
        this.liquire = {
          data1: data["母液追加流量（l/min）"],
          data2: liquire1
        }
        this.uptake = {
          data1: data["上染率（%）"],
          data2: uptake1
        }
        this.orp = {
          data1: data["ORP(mv)"],
          data2: orp1
        }
        this.potency = {
          data1: data["游离保险粉浓度（g/l）"],
          data2: potency1
        }
        this.toShowLine = true
      })
    },
    drawLine() {
      let gyAll1 = this.$echarts.init(
        document.getElementById("myChart-gy-All1")
      );
      let gyAll2 = this.$echarts.init(
        document.getElementById("myChart-gy-All2")
      );
      let gyAllB2 = this.$echarts.init(
        document.getElementById("myChart-gy-AllB2")
      );
       let gyAllC2 = this.$echarts.init(
        document.getElementById("myChart-gy-AllC2")
      );
      let gyAll3 = this.$echarts.init(
        document.getElementById("myChart-gy-All3")
      );
      let gyAll4 = this.$echarts.init(
        document.getElementById("myChart-gy-All4")
      );
      let gyAll5 = this.$echarts.init(
        document.getElementById("myChart-gy-All5")
      );
      let gyAll6 = this.$echarts.init(
        document.getElementById("myChart-gy-All6")
      );
      let gyAll7 = this.$echarts.init(
        document.getElementById("myChart-gy-All7")
      );
      let gyAll8 = this.$echarts.init(
        document.getElementById("myChart-gy-All8")
      );
      // 右侧数据
      gyAll1.setOption({
        // title: {
        //   // text: "靛蓝浓度（g/L）",
        //   // subtext: "纯属虚构"
        //   textStyle: {
        //     fontWeight: "normal", //标题颜色
        //     color: "#fff",
        //     fontSize: 28
        //   }
        // },
        color: ["#0ff"],

        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   margin: 100,
        //   data: [
        //     "母液追加流量（L/min）",
        //     "缸次母液实时累加量（L）",
        //     "实时上染率（%）"
        //   ],
        //   x: "13%",
        //   textStyle: {
        //     fontSize: 28, //字体大小
        //     color: "#ffffff" //字体颜色
        //   }
        // },

        xAxis: {
          type: "category",
          axisLabel: {
            // formatter: "{value}",
            color: "white"
            // width:"8"

            // fontSize: 35
          },
          //线框颜色
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          boundaryGap: false,
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
          // data: ["20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100"],
          axisLabel: {
            formatter: "{value}",
            color: "white",
            // width:"8"
            fontSize: 20
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "transparent"
            }
          }
        },

        series: [
          {
            name: "LOT色",
            type: "line",
            smooth: 0.5,
            stack: "总量",
            symbolSize: 10,
            data: this.lotdata.data1,
            serieslabel: {
              color: "white"
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3 //设置线条粗细
                }
              }
            }
          }
        ]
      });
      gyAll2.setOption({
        // title: {
        //   // text: "靛蓝浓度（g/L）",
        //   // subtext: "纯属虚构"
        //   textStyle: {
        //     fontWeight: "normal", //标题颜色
        //     color: "#fff",
        //     fontSize: 28
        //   }
        // },
        color: ["#ff67af"],


        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   margin: 100,
        //   data: [
        //     "母液追加流量（L/min）",
        //     "缸次母液实时累加量（L）",
        //     "实时上染率（%）"
        //   ],
        //   x: "13%",
        //   textStyle: {
        //     fontSize: 28, //字体大小
        //     color: "#ffffff" //字体颜色
        //   }
        // },

        xAxis: {
          type: "category",
          axisLabel: {
            // formatter: "{value}",
            color: "white"
            // width:"8"

            // fontSize: 35
          },
          //线框颜色
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          boundaryGap: false,
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
            color: "white",
            // width:"8"
            fontSize: 20
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "transparent"
            }
          }
        },

        series: [
          {
            name: "分光测色仪*A",
            type: "line",
            smooth: 0.5,
            stack: "总量",
            symbolSize: 10,
            data: this.ictdata.data1,
            serieslabel: {
              color: "white"
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3 //设置线条粗细
                }
              }
            }
          }
        ]
      });
       gyAllB2.setOption({
        // title: {
        //   // text: "靛蓝浓度（g/L）",
        //   // subtext: "纯属虚构"
        //   textStyle: {
        //     fontWeight: "normal", //标题颜色
        //     color: "#fff",
        //     fontSize: 28
        //   }
        // },
        color: ["#d0b04b"],

        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   margin: 100,
        //   data: [
        //     "母液追加流量（L/min）",
        //     "缸次母液实时累加量（L）",
        //     "实时上染率（%）"
        //   ],
        //   x: "13%",
        //   textStyle: {
        //     fontSize: 28, //字体大小
        //     color: "#ffffff" //字体颜色
        //   }
        // },

        xAxis: {
          type: "category",
          axisLabel: {
            // formatter: "{value}",
            color: "white"
            // width:"8"

            // fontSize: 35
          },
          //线框颜色
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          boundaryGap: false,
          data: [
            "200",
            "400",
            "600",
            "800",
            "1000",
            "1200",
            "1400",
            "1600",
            "1800",
            "2000",
            "2200",
            "2400",
            "2600",
            "2800",
            "3000",
            "3200",
            "3400",
            "3600",
            "3800",
            "4000"
          ],
          axisLabel: {
            color: "transparent",
            fontSize: 20
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
            color: "white",
            // width:"8"
            fontSize: 20
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "transparent"
            }
          }
        },

        series: [
          {
            name: "分光测色仪",
            type: "line",
            smooth: 0.5,
            stack: "总量",
            symbolSize: 10,
            data: this.ictdatab.data1,
            serieslabel: {
              color: "white"
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3 //设置线条粗细
                }
              }
            }
          }
        ]
      });
      gyAllC2.setOption({
        // title: {
        //   // text: "靛蓝浓度（g/L）",
        //   // subtext: "纯属虚构"
        //   textStyle: {
        //     fontWeight: "normal", //标题颜色
        //     color: "#fff",
        //     fontSize: 28
        //   }
        // },
        color: ["#abdd0a"],

        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   margin: 100,
        //   data: [
        //     "母液追加流量（L/min）",
        //     "缸次母液实时累加量（L）",
        //     "实时上染率（%）"
        //   ],
        //   x: "13%",
        //   textStyle: {
        //     fontSize: 28, //字体大小
        //     color: "#ffffff" //字体颜色
        //   }
        // },

        xAxis: {
          type: "category",
          axisLabel: {
            // formatter: "{value}",
            color: "white"
            // width:"8"

            // fontSize: 35
          },
          //线框颜色
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          boundaryGap: false,
          data: [
            "200",
            "400",
            "600",
            "800",
            "1000",
            "1200",
            "1400",
            "1600",
            "1800",
            "2000",
            "2200",
            "2400",
            "2600",
            "2800",
            "3000",
            "3200",
            "3400",
            "3600",
            "3800",
            "4000"
          ],
          axisLabel: {
            color: "transparent",
            fontSize: 20
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
            color: "white",
            // width:"8"
            fontSize: 20
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "transparent"
            }
          }
        },

        series: [
          {
            name: "分光测色仪",
            type: "line",
            smooth: 0.5,
            stack: "总量",
            symbolSize: 10,
            data: this.ictdatal.data1,
            serieslabel: {
              color: "white"
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3 //设置线条粗细
                }
              }
            }
          }
        ]
      });
      gyAll3.setOption({
        // title: {
        //   // text: "靛蓝浓度（g/L）",
        //   // subtext: "纯属虚构"
        //   textStyle: {
        //     fontWeight: "normal", //标题颜色
        //     color: "#fff",
        //     fontSize: 28
        //   }
        // },
        color: ["#538cd6"],

        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   margin: 100,
        //   data: [
        //     "母液追加流量（L/min）",
        //     "缸次母液实时累加量（L）",
        //     "实时上染率（%）"
        //   ],
        //   x: "13%",
        //   textStyle: {
        //     fontSize: 28, //字体大小
        //     color: "#ffffff" //字体颜色
        //   }
        // },

        xAxis: {
          type: "category",
          axisLabel: {
            // formatter: "{value}",
            color: "white"
            // width:"8"

            // fontSize: 35
          },
          //线框颜色
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          boundaryGap: false,
          data: [
            "200",
            "400",
            "600",
            "800",
            "1000",
            "1200",
            "1400",
            "1600",
            "1800",
            "2000",
            "2200",
            "2400",
            "2600",
            "2800",
            "3000",
            "3200",
            "3400",
            "3600",
            "3800",
            "4000"
          ],
          axisLabel: {
            color: "transparent",
            fontSize: 20
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
          // data: ["20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100"],
          axisLabel: {
            formatter: "{value}",
            color: "white",
            // width:"8"
            fontSize: 20
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "transparent"
            }
          }
        },

        series: [
          {
            name: "母液追加流量（l/min）",
            type: "line",
            smooth: 0.5,
            stack: "总量",
            symbolSize: 10,
            data: this.liquire.data1,
            serieslabel: {
              color: "white"
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3 //设置线条粗细
                }
              }
            }
          }
        ]
      });
      gyAll4.setOption({
        // title: {
        //   // text: "靛蓝浓度（g/L）",
        //   // subtext: "纯属虚构"
        //   textStyle: {
        //     fontWeight: "normal", //标题颜色
        //     color: "#fff",
        //     fontSize: 28
        //   }
        // },
        color: ["#00d008"],

        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   margin: 100,
        //   data: [
        //     "母液追加流量（L/min）",
        //     "缸次母液实时累加量（L）",
        //     "实时上染率（%）"
        //   ],
        //   x: "13%",
        //   textStyle: {
        //     fontSize: 28, //字体大小
        //     color: "#ffffff" //字体颜色
        //   }
        // },

        xAxis: {
          type: "category",
          axisLabel: {
            // formatter: "{value}",
            color: "white"
            // width:"8"

            // fontSize: 35
          },
          //线框颜色
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          boundaryGap: false,
          data: [
            "200",
            "400",
            "600",
            "800",
            "1000",
            "1200",
            "1400",
            "1600",
            "1800",
            "2000",
            "2200",
            "2400",
            "2600",
            "2800",
            "3000",
            "3200",
            "3400",
            "3600",
            "3800",
            "4000"
          ],
          axisLabel: {
            color: "transparent",
            fontSize: 20
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
          // data: ["20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100"],
          axisLabel: {
            formatter: "{value}",
            color: "white",
            // width:"8"
            fontSize: 20
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "transparent"
            }
          }
        },

        series: [
          {
            name: "上染率(%)",
            type: "line",
            smooth: 0.5,
            stack: "总量",
            symbolSize: 10,
            data: this.uptake.data1,
            serieslabel: {
              color: "white"
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3 //设置线条粗细
                }
              }
            }
          }
        ]
      });
      gyAll5.setOption({
        // title: {
        //   // text: "靛蓝浓度（g/L）",
        //   // subtext: "纯属虚构"
        //   textStyle: {
        //     fontWeight: "normal", //标题颜色
        //     color: "#fff",
        //     fontSize: 28
        //   }
        // },
        color: ["#dd724f"],

        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   margin: 100,
        //   data: [
        //     "母液追加流量（L/min）",
        //     "缸次母液实时累加量（L）",
        //     "实时上染率（%）"
        //   ],
        //   x: "13%",
        //   textStyle: {
        //     fontSize: 28, //字体大小
        //     color: "#ffffff" //字体颜色
        //   }
        // },

        xAxis: {
          type: "category",
          axisLabel: {
            // formatter: "{value}",
            color: "white"
            // width:"8"

            // fontSize: 35
          },
          //线框颜色
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          boundaryGap: false,
          data: [
            "200",
            "400",
            "600",
            "800",
            "1000",
            "1200",
            "1400",
            "1600",
            "1800",
            "2000",
            "2200",
            "2400",
            "2600",
            "2800",
            "3000",
            "3200",
            "3400",
            "3600",
            "3800",
            "4000"
          ],
          axisLabel: {
            color: "transparent",
            fontSize: 20
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
          // data: ["20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100"],
          axisLabel: {
            formatter: "{value}",
            color: "white",
            // width:"8"
            fontSize: 20
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "transparent"
            }
          }
        },

        series: [
          {
            name: "靛蓝浓度(G/L)",
            type: "line",
            smooth: 0.5,
            stack: "总量",
            symbolSize: 10,
            data: this.blue.data1,
            serieslabel: {
              color: "white"
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3 //设置线条粗细
                }
              }
            }
          }
        ]
      });
      gyAll6.setOption({
        // title: {
        //   // text: "靛蓝浓度（g/L）",
        //   // subtext: "纯属虚构"
        //   textStyle: {
        //     fontWeight: "normal", //标题颜色
        //     color: "#fff",
        //     fontSize: 28
        //   }
        // },
        color: ["#b871fe"],

        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   margin: 100,
        //   data: [
        //     "母液追加流量（L/min）",
        //     "缸次母液实时累加量（L）",
        //     "实时上染率（%）"
        //   ],
        //   x: "13%",
        //   textStyle: {
        //     fontSize: 28, //字体大小
        //     color: "#ffffff" //字体颜色
        //   }
        // },

        xAxis: {
          type: "category",
          axisLabel: {
            // formatter: "{value}",
            color: "white"
            // width:"8"

            // fontSize: 35
          },
          //线框颜色
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          boundaryGap: false,
          data: [
            "200",
            "400",
            "600",
            "800",
            "1000",
            "1200",
            "1400",
            "1600",
            "1800",
            "2000",
            "2200",
            "2400",
            "2600",
            "2800",
            "3000",
            "3200",
            "3400",
            "3600",
            "3800",
            "4000"
          ],
          axisLabel: {
            color: "transparent",
            fontSize: 20
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
          // data: ["20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100"],
          axisLabel: {
            formatter: "{value}",
            color: "white",
            // width:"8"
            fontSize: 20
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "transparent"
            }
          }
        },

        series: [
          {
            name: "PH",
            type: "line",
            smooth: 0.5,
            stack: "总量",
            symbolSize: 10,
            data: this.ph.data1,
            serieslabel: {
              color: "white"
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3 //设置线条粗细
                }
              }
            }
          }
        ]
      });
      gyAll7.setOption({
        // title: {
        //   // text: "靛蓝浓度（g/L）",
        //   // subtext: "纯属虚构"
        //   textStyle: {
        //     fontWeight: "normal", //标题颜色
        //     color: "#fff",
        //     fontSize: 28
        //   }
        // },
        color: ["#f00"],

        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   margin: 100,
        //   data: [
        //     "母液追加流量（L/min）",
        //     "缸次母液实时累加量（L）",
        //     "实时上染率（%）"
        //   ],
        //   x: "13%",
        //   textStyle: {
        //     fontSize: 28, //字体大小
        //     color: "#ffffff" //字体颜色
        //   }
        // },

        xAxis: {
          type: "category",
          axisLabel: {
            // formatter: "{value}",
            color: "white"
            // width:"8"

            // fontSize: 35
          },
          //线框颜色
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          boundaryGap: false,
          data: [
            "200",
            "400",
            "600",
            "800",
            "1000",
            "1200",
            "1400",
            "1600",
            "1800",
            "2000",
            "2200",
            "2400",
            "2600",
            "2800",
            "3000",
            "3200",
            "3400",
            "3600",
            "3800",
            "4000"
          ],
          axisLabel: {
            color: "transparent",
            fontSize: 20
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
          // data: ["20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100"],
          axisLabel: {
            formatter: "{value}",
            color: "white",
            // width:"8"
            fontSize: 20
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "transparent"
            }
          }
        },

        series: [
          {
            name: "ORP(mv)",
            type: "line",
            smooth: 0.5,
            stack: "总量",
            symbolSize: 10,
            data: this.orp.data1,
            serieslabel: {
              color: "white"
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3 //设置线条粗细
                }
              }
            }
          }
        ]
      });
      gyAll8.setOption({
        // title: {
        //   // text: "靛蓝浓度（g/L）",
        //   // subtext: "纯属虚构"
        //   textStyle: {
        //     fontWeight: "normal", //标题颜色
        //     color: "#fff",
        //     fontSize: 28
        //   }
        // },
        color: ["#fff"],

        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   margin: 100,
        //   data: [
        //     "母液追加流量（L/min）",
        //     "缸次母液实时累加量（L）",
        //     "实时上染率（%）"
        //   ],
        //   x: "13%",
        //   textStyle: {
        //     fontSize: 28, //字体大小
        //     color: "#ffffff" //字体颜色
        //   }
        // },

        xAxis: {
          type: "category",
          axisLabel: {
            // formatter: "{value}",
            color: "white"
            // width:"8"

            // fontSize: 35
          },
          //线框颜色
          axisLine: {
            lineStyle: {
              color: "#354875",
              width: 2
            }
          },
          boundaryGap: false,
          data: [
            "200",
            "400",
            "600",
            "800",
            "1000",
            "1200",
            "1400",
            "1600",
            "1800",
            "2000",
            "2200",
            "2400",
            "2600",
            "2800",
            "3000",
            "3200",
            "3400",
            "3600",
            "3800",
            "4000"
          ],
          axisLabel: {
            color: "white",
            fontSize: 20
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
          // data: ["20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100","20", "40", "60", "80", "100"],
          axisLabel: {
            formatter: "{value}",
            color: "white",
            // width:"8"
            fontSize: 20
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "transparent"
            }
          }
        },

        series: [
          {
            name: "游离保险粉浓度(G/L)",
            type: "line",
            smooth: 0.5,
            stack: "总量",
            symbolSize: 10,
            data: this.potency.data1,
            serieslabel: {
              color: "white"
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3 //设置线条粗细
                }
              }
            }
          }
        ]
      });
    },
    esc() {
      this.$router.push("/index");
    },
    pro() {
      this.$router.push("/personal");
    },

    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " ";
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
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
/* 头部 */
.history {
  overflow: hidden;
  position: relative;
  width: 7680px;
  height: 3240px;
  background: url(../assets/history/login_bg1.png);
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
  width: 1366px;
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
  width: 1000px;
  height: 100px;
}
.index-name_esc img {
  padding-right: 40px;
  width: 140px;
  height: 100px;
  vertical-align: -20px;
}
.index-name_esc span {
  padding: 0 100px;
  color: #00ecfc;
  font-size: 80px;
  line-height: 100px;
}

.el-table_1_column_1 .is-center {
  background: red;
}
/* 左表格 */
.history2-left {
  width: 3940px;
  height: 2316px;
  float: left;
  margin-left: 30px;
  margin-top: 300px;
  position: relative;
  font-size: 80px;
  color: white;
  line-height: 120px;
  border: 1px solid #263bb3;
  background: rgba(0, 0, 0, 0.4);
}
.history2-left::before{
   position: absolute;
    width: 64px;
    height: 64px;
    top: 0;
    left: 0;
    border-left: 10px solid #0072bc;
    border-top: 10px solid #0072bc;
    content: "";
}
.history2-left::after{
   position: absolute;
    width: 64px;
    height: 64px;
    top: 0;
    right: 0;
    border-right: 10px solid #0072bc;
    border-top: 10px solid #0072bc;
    content: "";
}
.history2-left .icon-j::before{
   position: absolute;
    width: 64px;
    height: 64px;
    bottom: 0;
    left: 0;
    border-left: 7px solid #0072bc;
    border-bottom: 7px solid #0072bc;
    content: "";
}
.history2-left .icon-j::after{
   position: absolute;
    width: 64px;
    height: 64px;
    bottom: 0;
    right: 0;
    border-right: 10px solid #0072bc;
    border-bottom: 10px solid #0072bc;
    content: "";
}
.history2-Cylinder {
  text-align: center;
  height: 192px;
  line-height: 192px;
  width: 1880px;
  margin: 140px auto;
}

.history2-Cylinder .top{
  background: url(../assets/history/is_line.png);
   width: 1880px;
   height: 4px;
}

.el-table--enable-row-hover .el-table__body tr:hover > td {
  /* background-color: transparent !important; */
  background: #000836 !important;
}

.history2-CylinderTab {
  /* overflow: hidden; */
  padding: 0;
  font-size: 40px;
  margin: 0 auto;
  width: 3760px;
  height: 1244px;
  /* margin-top: 120px; */
  background: rgba(0, 0, 0, 20%);
  box-sizing: border-box;
  /* border: solid 1px red; */
}
.CylinderTab1 {
  padding: 0;
  height: 880px;
  width: 880px;
  float: left;
  margin-top: 242px;
  border-collapse: collapse;
  border: solid 1px rgb(0, 0, 0);
}
.CylinderTab2 {
  text-align: center;
  width: 2860px;
  height: 880px;

  float: left;
  border-collapse: collapse;
  border: solid 1px rgb(0, 0, 0);
}
.CylinderTab1 tr,
.CylinderTab2 tr {
  height: 110px;
}
.history2-CylinderTab-td {
  width: 200px;
  line-height: 80px;
  text-align: center;
}
.history2-CylinderPro {
  position: relative;
  width: 3940px;
  overflow: hidden;
  margin-top: 100px;
  height: 80px;
}
/* 右表格 */
.history2-right {
  width: 3629px;
  float: left;
  margin-left: 50px;
  margin-top: 300px;
  display: flex;
  position: relative;
   border: 1px solid #263bb3;
  background: rgba(0, 0, 0, 0.4);
}
.history2-right::before{
   position: absolute;
    width: 64px;
    height: 64px;
    top: 0;
    left: 0;
    border-left: 10px solid #0072bc;
    border-top: 10px solid #0072bc;
    content: "";
}
.history2-right::after{
   position: absolute;
    width: 64px;
    height: 64px;
    top: 0;
    right: 0;
    border-right: 10px solid #0072bc;
    border-top: 10px solid #0072bc;
    content: "";
}
.history2-right .icon-j::before{
   position: absolute;
    width: 64px;
    height: 64px;
    bottom: 0;
    left: 0;
    border-left: 7px solid #0072bc;
    border-bottom: 7px solid #0072bc;
    content: "";
}
.history2-right .icon-j::after{
   position: absolute;
    width: 64px;
    height: 64px;
    bottom: 0;
    right: 0;
    border-right: 10px solid #0072bc;
    border-bottom: 10px solid #0072bc;
    content: "";
}
.main-left{
  width: 90%;
}
.main-right{
  background: url(..\assets\history\is_icon.png);
  width: 468px;
  height: 859px;
  position: absolute;
  left: 75%;
  top: 20%;
}
#myChart-gy-All1 {
  margin-left: -100px;
  margin-top: 100px;
}
#myChart-gy-All2,
#myChart-gy-AllB2,
#myChart-gy-AllC2,
#myChart-gy-All3,
#myChart-gy-All4,
#myChart-gy-All5,
#myChart-gy-All6,
#myChart-gy-All7,
#myChart-gy-All8 {
  margin: -120px 178px 0 -100px;
}
#myChart-gy-All8{
  margin-bottom: 95px;
}
</style>


<style>
/* 表格 */
.el-table__header th {
  padding: 0;
  height: 88px;
}
.el-table,
.el-table__expanded-cell {
  /* background-color: transparent; */
  background: #000836 !important;

  border: black;
}

.el-table th,
.el-table tr {
  color: white;
  border: black;

  /* background-color: transparent; */
  background: #000836 !important;
}
.el-table--border td,
.el-table--border th,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border: 1px black solid;
}

.el-table__body tr {
  height: 88px;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: rgb(0, 0, 0);
}
.el-table td,
.el-table th.is-leaf {
  border: 1px solid rgb(0, 0, 0);
}

.el-table th > .cell {
  font-size: 25px;
}
.el-table .cell {
  font-size: 25px;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  /* background-color: transparent !important; */
  background: #000836 !important;
}
/* 分页 */
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ffffff;
  color: #000;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  /* background-color: transparent; */
  background: #000836 !important;
  color: #ffffff;
  border: solid 1px white;
}
.el-pager li {
  line-height: 76px;
  width: 76px;
  height: 76px;
  font-size: 20px;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  width: 76px;
  height: 76px;
}
.el-pagination {
  position: absolute;
  right: 0px;
  /* border: solid 1px red; */

  color: #303133;

  width: 1300px;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  line-height: 76px;
}
.el-pagination button,
.el-pagination span:not([class*="suffix"]) {
  font-size: 30px;
  height: 76px;
  line-height: 76px;
  color: white;
  margin-right: 30px;
  /* margin-top: -4px; */
}
.el-pagination__editor.el-input {
  width: 76px;
  margin: auto 20px;
}
.el-pagination__editor.el-input .el-input__inner {
  color: white;
  height: 76px;
  width: 76px;
  font-size: 30px;
  border: solid 1px white;
  /* background: transparent; */
  background: #000836 !important;
}
.el-table thead.is-group th {
  background: transparent !important;
}
.el-table__fixed-footer-wrapper table tr > td {
  background: #000836 !important;
  color: #ffffff;
  font-size: 25px;
}
/* 滚动条的宽度 */
.your-table .el-table__body-wrapper::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/* 滚动条的滑块 */
.your-table .el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 3px;
}
</style>

