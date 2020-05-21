<template>
  <!-- 生产运行 -->
  <div class="production">
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
        <!-- 跳转图表 -->
        <img
          @click="tabimg"
          class="index-name_esc-img1"
          src="..\assets\production\sc_chart.png"
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
    <ul class="mother-ul">
      <li @click="cur=0" :class="{active:cur==0}">A机</li>
      <li @click="cur=1" :class="{active:cur==1}">B机</li>
      <li @click="cur=2" :class="{active:cur==2}">C机</li>
      <li @click="cur=3" :class="{active:cur==3}">D机</li>
      <li @click="cur=4" :class="{active:cur==4}">E机</li>
    </ul>
    <!-- A机 -->
    <div v-show="cur==0" class="production-shuju">
      <div class="production-top">
        <div class="production-topbox">
          <span>色号:</span>
          <input type="text" disabled="disabled" :value="mA.colorNo">
          <span>品种:</span>
          <input type="text" disabled="disabled" :value="mA.varieties">
          <span>缸号:</span>
          <input type="text" disabled="disabled" :value="mA.cylinderNo">
          <span>整经长度:</span>
          <input type="text" disabled="disabled" :value="mA.warpingLength">
          <span>开机时间:</span>
          <input type="text" disabled="disabled" :value="mA.startTime">
          <span>预计了机时间:</span>
          <input type="text" disabled="disabled" :value="mA.endTime">
          <span>染色序号:</span>
          <input type="text" disabled="disabled" :value="mA.dyeingNo">
        </div>
      </div>
      <div class="mother-shuju">
        <div class="mother-shuju-one">
          <p>工艺执行信息</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataAA1.slice((currentPageAA1-1)*pagesize1,currentPageAA1*pagesize1)"
              border
              style="width: 100%;"
            >
              <el-table-column width="1000">
                <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
                <el-table-column prop="time" label="采集时间" align="center" width="450"></el-table-column>
                <el-table-column prop="vehicleSpeed" label="车速（m/min）" align="center" width="450"></el-table-column>
              </el-table-column>
              <el-table-column label="母液追加流量（L/min）" align="center" width="900">
                <el-table-column
                  prop="additionalTrafficBRD"
                  label="靛蓝前打底"
                  align="center"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="additionalTrafficIndigoD"
                  label="靛蓝"
                  align="center"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="additionalTrafficIndigoBCD"
                  label="靛蓝后套面"
                  align="center"
                  width="300"
                ></el-table-column>
              </el-table-column>
              <el-table-column label="缸次母液实时累加量（L）" align="center" width="900">
                <el-table-column prop="cumulantBI" label="靛蓝前打底" align="center" width="320"></el-table-column>
                <el-table-column prop="cumulantI" label="靛蓝" align="center" width="320"></el-table-column>
                <el-table-column prop="cumulantAI" label="靛蓝后套面" align="center" width="320"></el-table-column>
              </el-table-column>
              <el-table-column label="实时上染率（%）" align="center" width="900">
                <el-table-column prop="dyeUptakeBI" label="靛蓝前打底" align="center" width="320"></el-table-column>
                <el-table-column prop="dyeUptakeI" label="靛蓝" align="center" width="320"></el-table-column>
                <el-table-column prop="dyeUptakeAI" label="靛蓝后套面" align="center" width="318"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three1">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageAA1"
                background
                layout="jumper , prev, pager, next"
                :total="totalAA1"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>过程检测信息</p>
          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataAA2.slice((currentPageAA2-1)*pagesize,currentPageAA2*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="type" label="采集点" align="center" width="170"></el-table-column>
              <el-table-column prop="time" label="采集时间" align="center" width="430"></el-table-column>
              <el-table-column
                prop="indigoConcentration"
                label="靛蓝浓度（g/L）"
                align="center"
                width="330"
              ></el-table-column>
              <el-table-column prop="ph" label="pH" align="center" width="200"></el-table-column>
              <el-table-column prop="orp" label="ORP" align="center" width="200"></el-table-column>
              <el-table-column prop="powder" label="游离保险粉浓度（g/L）" align="center" width="470"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three2">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageAA2"
                background
                layout="jumper , prev, pager, next"
                :total="totalAA2"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>能耗</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataAA3.slice((currentPageAA3-1)*pagesize,currentPageAA3*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="collectTime" label="采集时间" align="center" width="450"></el-table-column>
              <el-table-column prop="waterInformation" label="用水信息（吨）" align="center" width="300"></el-table-column>
              <el-table-column
                prop="waterInformationM"
                label="用水信息（吨/万米）"
                align="center"
                width="400"
              ></el-table-column>
              <el-table-column
                prop="electricityInformation"
                label="用汽信息（m³）"
                align="center"
                width="300"
              ></el-table-column>
              <el-table-column
                prop="electricityInformationM"
                label="用汽信息（m³/万米）"
                align="center"
                width="348"
              ></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three3">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageAA3"
                background
                layout="jumper , prev, pager, next"
                :total="totalAA3"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>辅料用量</p>
          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataAA4.slice((currentPageAA4-1)*pagesize2,currentPageAA4*pagesize2)"
              border
              style="width: 100%;"
            >
              <el-table-column width="1260">
                <el-table-column type="index" label="序号" align="center" width="360"></el-table-column>
                <el-table-column prop="time" label="采集时间" align="center" width="900"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝前打底" align="center" width="1920">
                <el-table-column prop="dyeDosageBRD" label="染料用量（kg/万米）" align="center" width="640"></el-table-column>
                <el-table-column
                  prop="hyjDosageBRD"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="640"
                ></el-table-column>
                <el-table-column prop="zjDosageBRD" label="助剂用量（kg/万米）" align="center" width="640"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝" align="center" width="1920">
                <el-table-column prop="dlDosage" label="靛蓝用量（kg/万米）" align="center" width="366"></el-table-column>
                <el-table-column prop="sjDosage" label="烧碱用量（kg/万米）" align="center" width="366"></el-table-column>
                <el-table-column prop="bxfDosage" label="保险粉用量（kg/万米）" align="center" width="396"></el-table-column>
                <el-table-column prop="ksjDosage" label="扩散剂用量（kg/万米）" align="center" width="396"></el-table-column>
                <el-table-column prop="stjDosage" label="渗透剂用量（kg/万米）" align="center" width="396"></el-table-column>
              </el-table-column>
              <el-table-column label="实时上染率（%）" align="center" width="1260">
                <el-table-column prop="dyeDosageBCD" label="染料用量（kg/万米）" align="center" width="420"></el-table-column>
                <el-table-column
                  prop="hyjDosageBCD"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="420"
                ></el-table-column>
                <el-table-column prop="zjDosageBCD" label="助剂用量（kg/万米）" align="center" width="420"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two4">
            <div class="mother-shuju-three4">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageAA4"
                background
                layout="jumper , prev, pager, next"
                :total="totalAA4"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- B机 -->
    <div v-show="cur==1" class="production-shuju">
      <div class="production-top">
        <div class="production-topbox">
          <span>色号:</span>
          <input type="text" disabled="disabled" :value="mB.colorNo">
          <span>品种:</span>
          <input type="text" disabled="disabled" :value="mB.varieties">
          <span>缸号:</span>
          <input type="text" disabled="disabled" :value="mB.cylinderNo">
          <span>整经长度:</span>
          <input type="text" disabled="disabled" :value="mB.warpingLength">
          <span>开机时间:</span>
          <input type="text" disabled="disabled" :value="mB.startTime">
          <span>预计了机时间:</span>
          <input type="text" disabled="disabled" :value="mB.endTime">
          <span>染色序号:</span>
          <input type="text" disabled="disabled" :value="mB.dyeingNo">
        </div>
      </div>
      <div class="mother-shuju">
        <div class="mother-shuju-one">
          <p>工艺执行信息</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataBB1.slice((currentPageBB1-1)*pagesize1,currentPageBB1*pagesize1)"
              border
              style="width: 100%;"
            >
             <el-table-column width="1000">
                <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
                <el-table-column prop="time" label="采集时间" align="center" width="450"></el-table-column>
                <el-table-column prop="vehicleSpeed" label="车速（m/min）" align="center" width="450"></el-table-column>
              </el-table-column>
              <el-table-column label="母液追加流量（L/min）" align="center" width="900">
                <el-table-column
                  prop="additionalTrafficBRD"
                  label="靛蓝前打底"
                  align="center"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="additionalTrafficIndigoD"
                  label="靛蓝"
                  align="center"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="additionalTrafficIndigoBCD"
                  label="靛蓝后套面"
                  align="center"
                  width="300"
                ></el-table-column>
              </el-table-column>
              <el-table-column label="缸次母液实时累加量（L）" align="center" width="900">
                <el-table-column prop="cumulantBI" label="靛蓝前打底" align="center" width="320"></el-table-column>
                <el-table-column prop="cumulantI" label="靛蓝" align="center" width="320"></el-table-column>
                <el-table-column prop="cumulantAI" label="靛蓝后套面" align="center" width="320"></el-table-column>
              </el-table-column>
              <el-table-column label="实时上染率（%）" align="center" width="900">
                <el-table-column prop="dyeUptakeBI" label="靛蓝前打底" align="center" width="320"></el-table-column>
                <el-table-column prop="dyeUptakeI" label="靛蓝" align="center" width="320"></el-table-column>
                <el-table-column prop="dyeUptakeAI" label="靛蓝后套面" align="center" width="318"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three1">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageBB1"
                background
                layout="jumper , prev, pager, next"
                :total="totalBB1"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>过程检测信息</p>
          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataBB2.slice((currentPageBB2-1)*pagesize,currentPageBB2*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="type" label="采集点" align="center" width="170"></el-table-column>
              <el-table-column prop="time" label="采集时间" align="center" width="430"></el-table-column>
              <el-table-column
                prop="indigoConcentration"
                label="靛蓝浓度（g/L）"
                align="center"
                width="330"
              ></el-table-column>
              <el-table-column prop="ph" label="pH" align="center" width="200"></el-table-column>
              <el-table-column prop="orp" label="ORP" align="center" width="200"></el-table-column>
              <el-table-column prop="powder" label="游离保险粉浓度（g/L）" align="center" width="470"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three2">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageBB2"
                background
                layout="jumper , prev, pager, next"
                :total="totalBB2"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>能耗</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataBB3.slice((currentPageBB3-1)*pagesize,currentPageBB3*pagesize)"
              border
              style="width: 100%;"
            >
            <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="collectTime" label="采集时间" align="center" width="450"></el-table-column>
              <el-table-column prop="waterInformation" label="用水信息（吨）" align="center" width="300"></el-table-column>
              <el-table-column
                prop="waterInformationM"
                label="用水信息（吨/万米）"
                align="center"
                width="400"
              ></el-table-column>
              <el-table-column
                prop="electricityInformation"
                label="用汽信息（m³）"
                align="center"
                width="300"
              ></el-table-column>
              <el-table-column
                prop="electricityInformationM"
                label="用汽信息（m³/万米）"
                align="center"
                width="348"
              ></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three3">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageBB3"
                background
                layout="jumper , prev, pager, next"
                :total="totalBB3"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>辅料用量</p>
          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataBB4.slice((currentPageBB4-1)*pagesize2,currentPageBB4*pagesize2)"
              border
              style="width: 100%;"
            >
             <el-table-column width="1260">
                <el-table-column type="index" label="序号" align="center" width="360"></el-table-column>
                <el-table-column prop="time" label="采集时间" align="center" width="900"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝前打底" align="center" width="1920">
                <el-table-column prop="dyeDosageBRD" label="染料用量（kg/万米）" align="center" width="640"></el-table-column>
                <el-table-column
                  prop="hyjDosageBRD"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="640"
                ></el-table-column>
                <el-table-column prop="zjDosageBRD" label="助剂用量（kg/万米）" align="center" width="640"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝" align="center" width="1920">
                <el-table-column prop="dlDosage" label="靛蓝用量（kg/万米）" align="center" width="366"></el-table-column>
                <el-table-column prop="sjDosage" label="烧碱用量（kg/万米）" align="center" width="366"></el-table-column>
                <el-table-column prop="bxfDosage" label="保险粉用量（kg/万米）" align="center" width="396"></el-table-column>
                <el-table-column prop="ksjDosage" label="扩散剂用量（kg/万米）" align="center" width="396"></el-table-column>
                <el-table-column prop="stjDosage" label="渗透剂用量（kg/万米）" align="center" width="396"></el-table-column>
              </el-table-column>
              <el-table-column label="实时上染率（%）" align="center" width="1260">
                <el-table-column prop="dyeDosageBCD" label="染料用量（kg/万米）" align="center" width="420"></el-table-column>
                <el-table-column
                  prop="hyjDosageBCD"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="420"
                ></el-table-column>
                <el-table-column prop="zjDosageBCD" label="助剂用量（kg/万米）" align="center" width="420"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two4">
            <div class="mother-shuju-three4">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageBB4"
                background
                layout="jumper , prev, pager, next"
                :total="totalBB4"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- C机 -->
    <div v-show="cur==2" class="production-shuju">
      <div class="production-top">
        <div class="production-topbox">
          <span>色号:</span>
          <input type="text" disabled="disabled" :value="mC.colorNo">
          <span>品种:</span>
          <input type="text" disabled="disabled" :value="mC.varieties">
          <span>缸号:</span>
          <input type="text" disabled="disabled" :value="mC.cylinderNo">
          <span>整经长度:</span>
          <input type="text" disabled="disabled" :value="mC.warpingLength">
          <span>开机时间:</span>
          <input type="text" disabled="disabled" :value="mC.startTime">
          <span>预计了机时间:</span>
          <input type="text" disabled="disabled" :value="mC.endTime">
          <span>染色序号:</span>
          <input type="text" disabled="disabled" :value="mC.dyeingNo">
        </div>
      </div>
      <div class="mother-shuju">
        <div class="mother-shuju-one">
          <p>工艺执行信息</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataCC1.slice((currentPageCC1-1)*pagesize1,currentPageCC1*pagesize1)"
              border
              style="width: 100%;"
            >
              <el-table-column width="1000">
                <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
                <el-table-column prop="time" label="采集时间" align="center" width="450"></el-table-column>
                <el-table-column prop="vehicleSpeed" label="车速（m/min）" align="center" width="450"></el-table-column>
              </el-table-column>
              <el-table-column label="母液追加流量（L/min）" align="center" width="900">
                <el-table-column
                  prop="additionalTrafficBRD"
                  label="靛蓝前打底"
                  align="center"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="additionalTrafficIndigoD"
                  label="靛蓝"
                  align="center"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="additionalTrafficIndigoBCD"
                  label="靛蓝后套面"
                  align="center"
                  width="300"
                ></el-table-column>
              </el-table-column>
              <el-table-column label="缸次母液实时累加量（L）" align="center" width="900">
                <el-table-column prop="cumulantBI" label="靛蓝前打底" align="center" width="320"></el-table-column>
                <el-table-column prop="cumulantI" label="靛蓝" align="center" width="320"></el-table-column>
                <el-table-column prop="cumulantAI" label="靛蓝后套面" align="center" width="320"></el-table-column>
              </el-table-column>
              <el-table-column label="实时上染率（%）" align="center" width="900">
                <el-table-column prop="dyeUptakeBI" label="靛蓝前打底" align="center" width="320"></el-table-column>
                <el-table-column prop="dyeUptakeI" label="靛蓝" align="center" width="320"></el-table-column>
                <el-table-column prop="dyeUptakeAI" label="靛蓝后套面" align="center" width="318"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three1">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageCC1"
                background
                layout="jumper , prev, pager, next"
                :total="totalCC1"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>过程检测信息</p>
          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataCC2.slice((currentPageCC2-1)*pagesize,currentPageCC2*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="type" label="采集点" align="center" width="170"></el-table-column>
              <el-table-column prop="time" label="采集时间" align="center" width="430"></el-table-column>
              <el-table-column
                prop="indigoConcentration"
                label="靛蓝浓度（g/L）"
                align="center"
                width="330"
              ></el-table-column>
              <el-table-column prop="ph" label="pH" align="center" width="200"></el-table-column>
              <el-table-column prop="orp" label="ORP" align="center" width="200"></el-table-column>
              <el-table-column prop="powder" label="游离保险粉浓度（g/L）" align="center" width="470"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three2">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageCC2"
                background
                layout="jumper , prev, pager, next"
                :total="totalCC2"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>能耗</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataCC3.slice((currentPageCC3-1)*pagesize,currentPageCC3*pagesize)"
              border
              style="width: 100%;"
            >
             <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="collectTime" label="采集时间" align="center" width="450"></el-table-column>
              <el-table-column prop="waterInformation" label="用水信息（吨）" align="center" width="300"></el-table-column>
              <el-table-column
                prop="waterInformationM"
                label="用水信息（吨/万米）"
                align="center"
                width="400"
              ></el-table-column>
              <el-table-column
                prop="electricityInformation"
                label="用汽信息（m³）"
                align="center"
                width="300"
              ></el-table-column>
              <el-table-column
                prop="electricityInformationM"
                label="用汽信息（m³/万米）"
                align="center"
                width="348"
              ></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three3">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageCC3"
                background
                layout="jumper , prev, pager, next"
                :total="totalCC3"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>辅料用量</p>
          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataCC4.slice((currentPageCC4-1)*pagesize2,currentPageCC4*pagesize2)"
              border
              style="width: 100%;"
            >
              <el-table-column width="1260">
                <el-table-column type="index" label="序号" align="center" width="360"></el-table-column>
                <el-table-column prop="time" label="采集时间" align="center" width="900"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝前打底" align="center" width="1920">
                <el-table-column prop="dyeDosageBRD" label="染料用量（kg/万米）" align="center" width="640"></el-table-column>
                <el-table-column
                  prop="hyjDosageBRD"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="640"
                ></el-table-column>
                <el-table-column prop="zjDosageBRD" label="助剂用量（kg/万米）" align="center" width="640"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝" align="center" width="1920">
                <el-table-column prop="dlDosage" label="靛蓝用量（kg/万米）" align="center" width="366"></el-table-column>
                <el-table-column prop="sjDosage" label="烧碱用量（kg/万米）" align="center" width="366"></el-table-column>
                <el-table-column prop="bxfDosage" label="保险粉用量（kg/万米）" align="center" width="396"></el-table-column>
                <el-table-column prop="ksjDosage" label="扩散剂用量（kg/万米）" align="center" width="396"></el-table-column>
                <el-table-column prop="stjDosage" label="渗透剂用量（kg/万米）" align="center" width="396"></el-table-column>
              </el-table-column>
              <el-table-column label="实时上染率（%）" align="center" width="1260">
                <el-table-column prop="dyeDosageBCD" label="染料用量（kg/万米）" align="center" width="420"></el-table-column>
                <el-table-column
                  prop="hyjDosageBCD"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="420"
                ></el-table-column>
                <el-table-column prop="zjDosageBCD" label="助剂用量（kg/万米）" align="center" width="420"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two4">
            <div class="mother-shuju-three4">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageCC4"
                background
                layout="jumper , prev, pager, next"
                :total="totalCC4"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- D机 -->
    <div v-show="cur==3" class="production-shuju">
      <div class="production-top">
        <div class="production-topbox">
          <span>色号:</span>
          <input type="text" disabled="disabled" :value="mD.colorNo">
          <span>品种:</span>
          <input type="text" disabled="disabled" :value="mD.varieties">
          <span>缸号:</span>
          <input type="text" disabled="disabled" :value="mD.cylinderNo">
          <span>整经长度:</span>
          <input type="text" disabled="disabled" :value="mD.warpingLength">
          <span>开机时间:</span>
          <input type="text" disabled="disabled" :value="mD.startTime">
          <span>预计了机时间:</span>
          <input type="text" disabled="disabled" :value="mD.endTime">
          <span>染色序号:</span>
          <input type="text" disabled="disabled" :value="mD.dyeingNo">
        </div>
      </div>
      <div class="mother-shuju">
        <div class="mother-shuju-one">
          <p>工艺执行信息</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataDD1.slice((currentPageDD1-1)*pagesize1,currentPageDD1*pagesize1)"
              border
              style="width: 100%;"
            >
             <el-table-column width="1000">
                <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
                <el-table-column prop="time" label="采集时间" align="center" width="450"></el-table-column>
                <el-table-column prop="vehicleSpeed" label="车速（m/min）" align="center" width="450"></el-table-column>
              </el-table-column>
              <el-table-column label="母液追加流量（L/min）" align="center" width="900">
                <el-table-column
                  prop="additionalTrafficBRD"
                  label="靛蓝前打底"
                  align="center"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="additionalTrafficIndigoD"
                  label="靛蓝"
                  align="center"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="additionalTrafficIndigoBCD"
                  label="靛蓝后套面"
                  align="center"
                  width="300"
                ></el-table-column>
              </el-table-column>
              <el-table-column label="缸次母液实时累加量（L）" align="center" width="900">
                <el-table-column prop="cumulantBI" label="靛蓝前打底" align="center" width="320"></el-table-column>
                <el-table-column prop="cumulantI" label="靛蓝" align="center" width="320"></el-table-column>
                <el-table-column prop="cumulantAI" label="靛蓝后套面" align="center" width="320"></el-table-column>
              </el-table-column>
              <el-table-column label="实时上染率（%）" align="center" width="900">
                <el-table-column prop="dyeUptakeBI" label="靛蓝前打底" align="center" width="320"></el-table-column>
                <el-table-column prop="dyeUptakeI" label="靛蓝" align="center" width="320"></el-table-column>
                <el-table-column prop="dyeUptakeAI" label="靛蓝后套面" align="center" width="318"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three1">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageDD1"
                background
                layout="jumper , prev, pager, next"
                :total="totalDD1"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>过程检测信息</p>
          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataDD2.slice((currentPageDD2-1)*pagesize,currentPageDD2*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="type" label="采集点" align="center" width="170"></el-table-column>
              <el-table-column prop="time" label="采集时间" align="center" width="430"></el-table-column>
              <el-table-column
                prop="indigoConcentration"
                label="靛蓝浓度（g/L）"
                align="center"
                width="330"
              ></el-table-column>
              <el-table-column prop="ph" label="pH" align="center" width="200"></el-table-column>
              <el-table-column prop="orp" label="ORP" align="center" width="200"></el-table-column>
              <el-table-column prop="powder" label="游离保险粉浓度（g/L）" align="center" width="470"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three2">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageDD2"
                background
                layout="jumper , prev, pager, next"
                :total="totalDD2"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>能耗</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataDD3.slice((currentPageDD3-1)*pagesize,currentPageDD3*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="collectTime" label="采集时间" align="center" width="450"></el-table-column>
              <el-table-column prop="waterInformation" label="用水信息（吨）" align="center" width="300"></el-table-column>
              <el-table-column
                prop="waterInformationM"
                label="用水信息（吨/万米）"
                align="center"
                width="400"
              ></el-table-column>
              <el-table-column
                prop="electricityInformation"
                label="用汽信息（m³）"
                align="center"
                width="300"
              ></el-table-column>
              <el-table-column
                prop="electricityInformationM"
                label="用汽信息（m³/万米）"
                align="center"
                width="348"
              ></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three3">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageDD3"
                background
                layout="jumper , prev, pager, next"
                :total="totalDD3"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>辅料用量</p>
          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataDD4.slice((currentPageDD4-1)*pagesize2,currentPageDD4*pagesize2)"
              border
              style="width: 100%;"
            >
             <el-table-column width="1260">
                <el-table-column type="index" label="序号" align="center" width="360"></el-table-column>
                <el-table-column prop="time" label="采集时间" align="center" width="900"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝前打底" align="center" width="1920">
                <el-table-column prop="dyeDosageBRD" label="染料用量（kg/万米）" align="center" width="640"></el-table-column>
                <el-table-column
                  prop="hyjDosageBRD"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="640"
                ></el-table-column>
                <el-table-column prop="zjDosageBRD" label="助剂用量（kg/万米）" align="center" width="640"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝" align="center" width="1920">
                <el-table-column prop="dlDosage" label="靛蓝用量（kg/万米）" align="center" width="366"></el-table-column>
                <el-table-column prop="sjDosage" label="烧碱用量（kg/万米）" align="center" width="366"></el-table-column>
                <el-table-column prop="bxfDosage" label="保险粉用量（kg/万米）" align="center" width="396"></el-table-column>
                <el-table-column prop="ksjDosage" label="扩散剂用量（kg/万米）" align="center" width="396"></el-table-column>
                <el-table-column prop="stjDosage" label="渗透剂用量（kg/万米）" align="center" width="396"></el-table-column>
              </el-table-column>
              <el-table-column label="实时上染率（%）" align="center" width="1260">
                <el-table-column prop="dyeDosageBCD" label="染料用量（kg/万米）" align="center" width="420"></el-table-column>
                <el-table-column
                  prop="hyjDosageBCD"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="420"
                ></el-table-column>
                <el-table-column prop="zjDosageBCD" label="助剂用量（kg/万米）" align="center" width="420"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two4">
            <div class="mother-shuju-three4">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageDD4"
                background
                layout="jumper , prev, pager, next"
                :total="totalDD4"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- E机 -->
    <div v-show="cur==4" class="production-shuju">
      <div class="production-top">
        <div class="production-topbox">
          <span>色号:</span>
          <input type="text" disabled="disabled" :value="mE.colorNo">
          <span>品种:</span>
          <input type="text" disabled="disabled" :value="mE.varieties">
          <span>缸号:</span>
          <input type="text" disabled="disabled" :value="mE.cylinderNo">
          <span>整经长度:</span>
          <input type="text" disabled="disabled" :value="mE.warpingLength">
          <span>开机时间:</span>
          <input type="text" disabled="disabled" :value="mE.startTime">
          <span>预计了机时间:</span>
          <input type="text" disabled="disabled" :value="mE.endTime">
          <span>染色序号:</span>
          <input type="text" disabled="disabled" :value="mE.dyeingNo">
        </div>
      </div>
      <div class="mother-shuju">
        <div class="mother-shuju-one">
          <p>工艺执行信息</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataEE1.slice((currentPageEE1-1)*pagesize1,currentPageEE1*pagesize1)"
              border
              style="width: 100%;"
            >
              <el-table-column width="1000">
                <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
                <el-table-column prop="time" label="采集时间" align="center" width="450"></el-table-column>
                <el-table-column prop="vehicleSpeed" label="车速（m/min）" align="center" width="450"></el-table-column>
              </el-table-column>
              <el-table-column label="母液追加流量（L/min）" align="center" width="900">
                <el-table-column
                  prop="additionalTrafficBRD"
                  label="靛蓝前打底"
                  align="center"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="additionalTrafficIndigoD"
                  label="靛蓝"
                  align="center"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="additionalTrafficIndigoBCD"
                  label="靛蓝后套面"
                  align="center"
                  width="300"
                ></el-table-column>
              </el-table-column>
              <el-table-column label="缸次母液实时累加量（L）" align="center" width="900">
                <el-table-column prop="cumulantBI" label="靛蓝前打底" align="center" width="320"></el-table-column>
                <el-table-column prop="cumulantI" label="靛蓝" align="center" width="320"></el-table-column>
                <el-table-column prop="cumulantAI" label="靛蓝后套面" align="center" width="320"></el-table-column>
              </el-table-column>
              <el-table-column label="实时上染率（%）" align="center" width="900">
                <el-table-column prop="dyeUptakeBI" label="靛蓝前打底" align="center" width="320"></el-table-column>
                <el-table-column prop="dyeUptakeI" label="靛蓝" align="center" width="320"></el-table-column>
                <el-table-column prop="dyeUptakeAI" label="靛蓝后套面" align="center" width="318"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three1">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageEE1"
                background
                layout="jumper , prev, pager, next"
                :total="totalEE1"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>过程检测信息</p>
          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataEE2.slice((currentPageEE2-1)*pagesize,currentPageEE2*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="type" label="采集点" align="center" width="170"></el-table-column>
              <el-table-column prop="time" label="采集时间" align="center" width="430"></el-table-column>
              <el-table-column
                prop="indigoConcentration"
                label="靛蓝浓度（g/L）"
                align="center"
                width="330"
              ></el-table-column>
              <el-table-column prop="ph" label="pH" align="center" width="200"></el-table-column>
              <el-table-column prop="orp" label="ORP" align="center" width="200"></el-table-column>
              <el-table-column prop="powder" label="游离保险粉浓度（g/L）" align="center" width="470"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three2">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageEE2"
                background
                layout="jumper , prev, pager, next"
                :total="totalEE2"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>能耗</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataEE3.slice((currentPageEE3-1)*pagesize,currentPageEE3*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="collectTime" label="采集时间" align="center" width="450"></el-table-column>
              <el-table-column prop="waterInformation" label="用水信息（吨）" align="center" width="300"></el-table-column>
              <el-table-column
                prop="waterInformationM"
                label="用水信息（吨/万米）"
                align="center"
                width="400"
              ></el-table-column>
              <el-table-column
                prop="electricityInformation"
                label="用汽信息（m³）"
                align="center"
                width="300"
              ></el-table-column>
              <el-table-column
                prop="electricityInformationM"
                label="用汽信息（m³/万米）"
                align="center"
                width="348"
              ></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three3">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageEE3"
                background
                layout="jumper , prev, pager, next"
                :total="totalEE3"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>辅料用量</p>
          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataEE4.slice((currentPageEE4-1)*pagesize2,currentPageEE4*pagesize2)"
              border
              style="width: 100%;"
            >
             <el-table-column width="1260">
                <el-table-column type="index" label="序号" align="center" width="360"></el-table-column>
                <el-table-column prop="time" label="采集时间" align="center" width="900"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝前打底" align="center" width="1920">
                <el-table-column prop="dyeDosageBRD" label="染料用量（kg/万米）" align="center" width="640"></el-table-column>
                <el-table-column
                  prop="hyjDosageBRD"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="640"
                ></el-table-column>
                <el-table-column prop="zjDosageBRD" label="助剂用量（kg/万米）" align="center" width="640"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝" align="center" width="1920">
                <el-table-column prop="dlDosage" label="靛蓝用量（kg/万米）" align="center" width="366"></el-table-column>
                <el-table-column prop="sjDosage" label="烧碱用量（kg/万米）" align="center" width="366"></el-table-column>
                <el-table-column prop="bxfDosage" label="保险粉用量（kg/万米）" align="center" width="396"></el-table-column>
                <el-table-column prop="ksjDosage" label="扩散剂用量（kg/万米）" align="center" width="396"></el-table-column>
                <el-table-column prop="stjDosage" label="渗透剂用量（kg/万米）" align="center" width="396"></el-table-column>
              </el-table-column>
              <el-table-column label="实时上染率（%）" align="center" width="1260">
                <el-table-column prop="dyeDosageBCD" label="染料用量（kg/万米）" align="center" width="420"></el-table-column>
                <el-table-column
                  prop="hyjDosageBCD"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="420"
                ></el-table-column>
                <el-table-column prop="zjDosageBCD" label="助剂用量（kg/万米）" align="center" width="420"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two4">
            <div class="mother-shuju-three4">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageEE4"
                background
                layout="jumper , prev, pager, next"
                :total="totalEE4"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import axios from "axios";
import foot from "./foot.vue";
export default {
  data() {
    return {
      mA: "",
      mB: "",
      mC: "",
      mD: "",
      mE: "",
      pagesize: 9,
      pagesize1: 8,
      pagesize2: 5,
      currentPage: 1,
      cur: 0,
      isShow: true,

      tableDataAA1: [],
      currentPageAA1: 1,
      totalAA1: 0,

      tableDataAA2: [],
      currentPageAA2: 1,
      totalAA2: 0,

      tableDataAA3: [],
      currentPageAA3: 1,
      totalAA3: 0,

      tableDataAA4: [],
      currentPageAA4: 1,
      totalAA4: 0,

      tableDataBB1: [],
      currentPageBB1: 1,
      totalBB1: 0,

      tableDataBB2: [],
      currentPageBB2: 1,
      totalBB2: 0,

      tableDataBB3: [],
      currentPageBB3: 1,
      totalBB3: 0,

      tableDataBB4: [],
      currentPageBB4: 1,
      totalBB4: 0,

      tableDataCC1: [],
      currentPageCC1: 1,
      totalCC1: 0,

      tableDataCC2: [],
      currentPageCC2: 1,
      totalCC2: 0,

      tableDataCC3: [],
      currentPageCC3: 1,
      totalCC3: 0,

      tableDataCC4: [],
      currentPageCC4: 1,
      totalCC4: 0,

      tableDataDD1: [],
      currentPageDD1: 1,
      totalDD1: 0,

      tableDataDD2: [],
      currentPageDD2: 1,
      totalDD2: 0,

      tableDataDD3: [],
      currentPageDD3: 1,
      totalDD3: 0,

      tableDataDD4: [],
      currentPageDD4: 1,
      totalDD4: 0,

      tableDataEE1: [],
      currentPageEE1: 1,
      totalEE1: 0,

      tableDataEE2: [],
      currentPageEE2: 1,
      totalEE2: 0,

      tableDataEE3: [],
      currentPageEE3: 1,
      totalEE3: 0,

      tableDataEE4: [],
      currentPageEE4: 1,
      totalEE4: 0
    };
  },
  components: { foot },
  mounted() {

 setTimeout(() => {
        this.AA1();
        // setInterval(this.AA1, 60000);
        this.AA2();
        // setInterval(this.AA2, 60000);
        this.AA3();
        // setInterval(this.AA3, 60000);
        this.AA4();
        // setInterval(this.AA4, 60000);
        this.AA5();
        // setInterval(this.AA5, 60000);
      }, 1000);




    // 轮播
    setInterval(this.sett,90000)
    this.setA();
    setInterval(this.setA, 60000);
    // this.AA1()
    // setInterval(this.AA1, 60000);
    this.AA2();
    setInterval(this.AA2, 60000);
    // this.AA3()
    // setInterval(this.AA3, 60000);
    // this.AA4()
    // setInterval(this.AA4, 60000);


    this.setB();
    setInterval(this.setB, 60000);
    // this.BB1()
    // setInterval(this.BB1, 60000);
    this.BB2();
    setInterval(this.BB2, 60000);
    // this.BB3()
    // setInterval(this.BB3, 60000);
    // this.BB4()
    // setInterval(this.BB4, 60000);


    this.setC();
    setInterval(this.setC, 60000);
    // this.CC1()
    // setInterval(this.CC1, 60000);
    this.CC2();
    setInterval(this.CC2, 60000);
    // this.CC3()
    // setInterval(this.CC3, 60000);
    // this.CC4()
    // setInterval(this.CC4, 60000);


    this.setD();
    setInterval(this.setD, 60000);
    // this.DD1()
    // setInterval(this.DD1, 60000);
    this.DD2();
    setInterval(this.DD2, 60000);
    // this.DD3()
    // setInterval(this.DD3, 60000);
    // this.DD4()
    // setInterval(this.DD4, 60000);


    this.setE();
    setInterval(this.setE, 60000);
    // this.EE1();
    // setInterval(this.EE1, 60000);
    this.EE2();
    setInterval(this.EE2, 60000);
    // this.EE3()
    // setInterval(this.EE3, 60000);
    // this.EE4()
    // setInterval(this.EE4, 60000);
  },
  methods: {
    setA() {
      var usp = new URLSearchParams();
      usp.append("lineID", "A");
      console.log(usp);
      axios
        .post("http://192.168.10.32:8005/getRunningBasicInfo", usp)
        .then(res => {
          console.log("res基本数据获取A", res.data.data);
          var datasetA = res.data.data
          for (let i = 0; i < datasetA.length; i++) {
            this.mA = datasetA[0];
          }
        });
    },
    AA1() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize1);
      usp.append("page", this.currentPageAA1);
      usp.append("startTime", this.mA.startTime);
      usp.append("lineID", "A");
      axios
        .post("http://192.168.10.32:8005/getProcessExecutionInfo", usp)
        .then(res => {
          // console.log("resAA1", res.data.data);
          this.tableDataAA1 = res.data.data;
          this.totalAA1 = res.data.total;
        });
    },
    AA2() {
      // var usp = new URLSearchParams();
      // usp.append("limit", this.pagesize);
      // usp.append("page", this.currentPageAA2);
      // // usp.append("startTime", this.mA.startTime);
      // usp.append("lineID","A");
      axios.get("http://192.168.10.32:8005/api/getProcessDetectionInfo", {
          params: {
            limit: this.pagesize,
            page: this.currentPageAA2,
            lineID: "A"
          }
        })
        .then(res => {
          console.log("resAA2", res.data);
          this.tableDataAA2 = res.data.data;
          this.totalAA2 = res.data.total;
        });
    },
    AA3() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageAA3);
      usp.append("startTime", this.mA.startTime);
      usp.append("lineID", "A");
      axios
        .post("http://192.168.10.32:8005/api/getEnergyConsumption", usp)
        .then(res => {
          console.log("resAA3", res.data.data);
          this.tableDataAA3 = res.data.data;
          this.totalAA3 = res.data.total;
        });
    },
    AA4() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize2);
      usp.append("page", this.currentPageAA4);
      usp.append("startTime", this.mA.startTime);
      usp.append("lineID", "A");
      axios
        .post("http://192.168.10.32:8005/getDosageOfExcipients", usp)
        .then(res => {
          // console.log("resAA4", res.data.data);
          console.log("1111111",res.data.type);
          
          this.tableDataAA4 = res.data.data;

          this.totalAA4 = res.data.total;
        });
    },
    
    setB() {
      var usp = new URLSearchParams();
      // 现在全用A端口测试，到时候记得改过来
      usp.append("lineID", "A");
      console.log(usp);
      axios
        .post("http://192.168.10.32:8005/getRunningBasicInfo", usp)
         .then(res => {
          console.log("res基本数据获取B", res.data.data);
          var datasetB = res.data.data
          for (let i = 0; i < datasetB.length; i++) {
            this.mB = datasetB[0];
          }
        });
    },
    BB1() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize1);
      usp.append("page", this.currentPageBB1);
      usp.append("startTime", this.mB.startTime);
      usp.append("lineID", "B");
      axios
        .post("http://192.168.10.32:8005/getProcessExecutionInfo", usp)
        .then(res => {
          // console.log("resAA1", res.data.data);
          this.tableDataBB1 = res.data.data;
          this.totalBB1 = res.data.total;
        });
    },
    BB2() {
      // var usp = new URLSearchParams();
      // usp.append("limit", this.pagesize);
      // usp.append("page", this.currentPageAA2);
      // // usp.append("startTime", this.mA.startTime);
      // usp.append("lineID","A");
      axios
        .get("http://192.168.10.32:8005/api/getProcessDetectionInfo", {
          params: {
            limit: this.pagesize,
            page: this.currentPageBB2,
            lineID: "B"
          }
        })
        .then(res => {
          console.log("resBB2", res.data);
          this.tableDataBB2 = res.data.data;
          this.totalBB2 = res.data.total;
        });
    },
    BB3() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageBB3);
      usp.append("startTime", this.mB.startTime);
      usp.append("lineID", "B");
      axios
        .post("http://192.168.10.32:8005/getEnergyConsumption", usp)
        .then(res => {
          console.log("resBB3", res.data.data);
          this.tableDataBB3 = res.data.data;
          this.totalBB3 = res.data.total;
        });
    },
    BB4() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize2);
      usp.append("page", this.currentPageBB4);
      usp.append("startTime", this.mB.startTime);
      usp.append("lineID", "B");
      axios
        .post("http://192.168.10.32:8005/getDosageOfExcipients", usp)
        .then(res => {
          // console.log("resBB4", res.data.data);
          this.tableDataBB4 = res.data.data;
          this.totalBB4 = res.data.total;
        });
    },
    setC() {
      var usp = new URLSearchParams();
      // 现在全用A端口测试，到时候记得改过来
      usp.append("lineID", "A");
      console.log(usp);
      axios
        .post("http://192.168.10.32:8005/getRunningBasicInfo", usp)
         .then(res => {
          console.log("res基本数据获取C", res.data.data);
          var datasetC = res.data.data
          for (let i = 0; i < datasetC.length; i++) {
            this.mC = datasetC[0];
          }
        });
    },
    CC1() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize1);
      usp.append("page", this.currentPageCC1);
      usp.append("startTime", this.mC.startTime);
      usp.append("lineID", "C");
      axios
        .post("http://192.168.10.32:8005/getProcessExecutionInfo", usp)
        .then(res => {
          // console.log("resCC1", res.data.data);
          this.tableDataCC1 = res.data.data;
          this.totalCC1 = res.data.total;
        });
    },
    CC2() {
      // var usp = new URLSearchParams();
      // usp.append("limit", this.pagesize);
      // usp.append("page", this.currentPageAA2);
      // // usp.append("startTime", this.mA.startTime);
      // usp.append("lineID","A");
      axios
        .get("http://192.168.10.32:8005/api/getProcessDetectionInfo", {
          params: {
            limit: this.pagesize,
            page: this.currentPageCC2,
            lineID: "C"
          }
        })
        .then(res => {
          console.log("resCC2", res.data);
          this.tableDataCC2 = res.data.data;
          this.totalCC2 = res.data.total;
        });
    },
    CC3() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageCC3);
      usp.append("startTime", this.mC.startTime);
      usp.append("lineID", "C");
      axios
        .post("http://192.168.10.32:8005/getEnergyConsumption", usp)
        .then(res => {
          console.log("resCC3", res.data.data);
          this.tableDataCC3 = res.data.data;
          this.totalCC3 = res.data.total;
        });
    },
    CC4() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize2);
      usp.append("page", this.currentPageCC4);
      usp.append("startTime", this.mC.startTime);
      usp.append("lineID", "C");
      axios
        .post("http://192.168.10.32:8005/getDosageOfExcipients", usp)
        .then(res => {
          // console.log("resCC4", res.data.data);
          this.tableDataCC4 = res.data.data;
          this.totalCC4 = res.data.total;
        });
    },
    setD() {
      var usp = new URLSearchParams();
      // // 现在全用A端口测试，到时候记得改过来
      usp.append("lineID", "A");
      console.log(usp);
      axios
        .post("http://192.168.10.32:8005/getRunningBasicInfo", usp)
         .then(res => {
          console.log("res基本数据获取D", res.data.data);
          var datasetD = res.data.data
          for (let i = 0; i < datasetD.length; i++) {
            this.mD = datasetD[0];
          }
        });
    },
    DD1() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize1);
      usp.append("page", this.currentPageDD1);
      usp.append("startTime", this.mD.startTime);
      usp.append("lineID", "D");
      axios
        .post("http://192.168.10.32:8005/getProcessExecutionInfo", usp)
        .then(res => {
          // console.log("resDD1", res.data.data);
          this.tableDataDD1 = res.data.data;
          this.totalDD1 = res.data.total;
        });
    },
    DD2() {
      // var usp = new URLSearchParams();
      // usp.append("limit", this.pagesize);
      // usp.append("page", this.currentPageAA2);
      // // usp.append("startTime", this.mA.startTime);
      // usp.append("lineID","A");
      axios
        .get("http://192.168.10.32:8005/api/getProcessDetectionInfo", {
          params: {
            limit: this.pagesize,
            page: this.currentPageDD2,
            lineID: "D"
          }
        })
        .then(res => {
          console.log("resDD2", res.data);
          this.tableDataDD2 = res.data.data;
          this.totalDD2 = res.data.total;
        });
    },
    DD3() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageDD3);
      usp.append("startTime", this.mD.startTime);
      usp.append("lineID", "D");
      axios
        .post("http://192.168.10.32:8005/getEnergyConsumption", usp)
        .then(res => {
          console.log("resDD3", res.data.data);
          this.tableDataDD3 = res.data.data;
          this.totalDD3 = res.data.total;
        });
    },
    DD4() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize2);
      usp.append("page", this.currentPageDD4);
      usp.append("startTime", this.mD.startTime);
      usp.append("lineID", "D");
      axios
        .post("http://192.168.10.32:8005/getDosageOfExcipients", usp)
        .then(res => {
          // console.log("resDD4", res.data.data);
          this.tableDataDD4 = res.data.data;
          this.totalDD4 = res.data.total;
        });
    },
    setE() {
      var usp = new URLSearchParams();
      // 现在全用A端口测试，到时候记得改过来
      usp.append("lineID", "A");
      console.log(usp);
      axios
        .post("http://192.168.10.32:8005/getRunningBasicInfo", usp)
        .then(res => {
          console.log("res基本数据获取E", res.data.data);
          var datasetE = res.data.data
          for (let i = 0; i < datasetE.length; i++) {
            this.mE = datasetE[0];
          }
        });
    },
    EE1() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize1);
      usp.append("page", this.currentPageEE1);
      usp.append("startTime", this.mE.startTime);
      usp.append("lineID", "E");
      axios
        .post("http://192.168.10.32:8005/getProcessExecutionInfo", usp)
        .then(res => {
          // console.log("resEE1", res.data.data);
          this.tableDataEE1 = res.data.data;
          this.totalEE1 = res.data.total;
        });
    },
    EE2() {
      // var usp = new URLSearchParams();
      // usp.append("limit", this.pagesize);
      // usp.append("page", this.currentPageAA2);
      // // usp.append("startTime", this.mA.startTime);
      // usp.append("lineID","A");
      axios
        .get("http://192.168.10.32:8005/api/getProcessDetectionInfo", {
          params: {
            limit: this.pagesize,
            page: this.currentPageEE2,
            lineID: "E"
          }
        })
        .then(res => {
          console.log("resEE2", res.data);
          this.tableDataEE2 = res.data.data;
          this.totalEE2 = res.data.total;
        });
    },
    EE3() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageEE3);
      usp.append("startTime", this.mE.startTime);
      usp.append("lineID", "E");
      axios
        .post("http://192.168.10.32:8005/getEnergyConsumption", usp)
        .then(res => {
          console.log("resEE3", res.data.data);
          this.tableDataEE3 = res.data.data;
          this.totalEE3 = res.data.total;
        });
    },
    EE4() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize2);
      usp.append("page", this.currentPageEE4);
      usp.append("startTime", this.mE.startTime);
      usp.append("lineID", "E");
      axios
        .post("http://192.168.10.32:8005/getDosageOfExcipients", usp)
        .then(res => {
          // console.log("resEE4", res.data.data);
          this.tableDataEE4 = res.data.data;
          this.totalEE4 = res.data.total;
        });
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    esc() {
      this.$router.push("/index");
    },
    tabimg() {
      this.$router.push("/productiontable");
    },
    sett() {
      console.log(this.cur);
      this.cur++;
      if (this.cur > 4) {
        this.cur = 0;
      }
    },
    pro() {
      this.$router.push("/personal");
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
/* tab切换 */
.mother-ul {
  display: flex;
  justify-content: center;
  width: 2658px;
  height: 278px;
  margin: 80px auto 0;
  background: url(..\assets\mother\my_nav.png);
}
.mother-ul li {
  cursor: pointer;
  width: 18%;
  text-align: center;
  font-size: 100px;
  line-height: 270px;
  color: #00ecfc;
}
.mother-ul .active {
  color: #e4c072;
}
.mother-shuju {
  margin-top: 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.mother-shuju-one {
  height: 1120px;
  margin-top: 100px;
}

.mother-shuju-one:nth-child(1) {
  width: 3820px;
  /* height: 1870px; */
  /* border: 1px solid; */
  position: relative;
}
.mother-shuju-one:nth-child(2) {
  width: 1900px;
  /* height: 1870px; */
  /* border: 1px solid; */
  position: relative;
}
.mother-shuju-one:nth-child(3) {
  width: 1900px;
  /* height: 1870px; */
  /* border: 1px solid; */
  position: relative;
}
.mother-shuju-one:nth-child(4) {
  width: 6360px;
  height: 850px;
  /* border: 1px solid; */
  position: relative;
  margin-top: 40px;
}
.mother-shuju-one p {
  height: 110px;
  width: 100%;
  /* border: solid 1px; */
  text-align: center;
  font-size: 60px;
  color: white;
}

.production-top {
  overflow: hidden;
  margin-top: 40px;
  background: rgba(26, 75, 140, 20%);
  width: 7680px;
  height: 200px;
}
.production-topbox {
  height: 120px;
  /* border: solid 1px; */
  margin: 40px auto;
  width: 6240px;
}
.production-topbox span {
  font-size: 60px;
  color: white;
  margin-left: 64px;
}
.production-topbox input {
  background: transparent;
  outline: #e4c072;
  font-size: 60px;
  padding-left: 20px;
  color: white;
  margin-left: 60px;
  width: 520px;
  height: 120px;
}
/* 表格 */
/* 表格 */
.mother-shuju-table1 {
  background: rgba(0, 0, 0, 15%);
}
.mother-shuju-table2 {
  background: rgba(255, 255, 255, 15%);
}
.el-table__header th {
  padding: 0;
  height: 88px;
}
.el-table,
.el-table__expanded-cell {
  background-color: transparent;
  border: black;
}

.el-table th,
.el-table tr {
  color: white;
  border: black;

  background-color: transparent;
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
  background-color: transparent;
}
/* 分页 */
.mother-shuju-two {
  width: 1900px;
  height: 76px;
  /* border: 1px solid; */
  position: absolute;
  bottom: 0px;
}
.mother-shuju-two4 {
  width: 6360px;
  height: 76px;
  /* border: 1px solid; */
  position: absolute;
  bottom: 0px;
}
/* .mother-shuju-three {
  border: solid yellow 1px;
  position: relative;
  width: 1900px;
  height: 76px;
} */
.mother-shuju-three1 {
  /* border: solid yellow 1px; */
  position: relative;
  width: 3820px;
  height: 76px;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ffffff;
  color: #000;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: transparent;
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

/* 头部 */
.production {
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
