<template>
  <!-- 母液化料 -->
  <div class="mother">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <img src="..\assets\mother\my_logo.png" alt>
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
    </div>
    <!-- 返回主页 -->
    <div class="index-esc" @click="esc">
      <span>
        <img src="..\assets\Administration\home.png" alt>
        主页
      </span>
    </div>
    <!-- 显示用户登陆和退出 -->
    <div class="index-name_esc">
      <!-- 跳转登陆后的页面 -->
      <span @click="pro">
        <img src="..\assets\index\home_name.png" alt>
        小北
      </span>
      <span>
        <img src="..\assets\index\home_esc.png" alt>
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
    <div class="mother-shuju-all">
      <!-- A机 -->
      <div v-show="cur==0" class="mother-shuju">
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝前打底</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataA1.slice((currentPageA1-1)*pagesize,currentPageA1*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="dianLanAfterMuYeNo" label="前打底母液代码" align="center" width="440"></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="330"></el-table-column>
              <el-table-column prop="dyeDosageBRD" label="染料用量（Kg）" align="center" width="330"></el-table-column>
              <el-table-column prop="lhjDosageBRD" label="硫化用量（Kg）" align="center" width="350"></el-table-column>
              <el-table-column prop="zjDosageBRD" label="助剂用量（Kg）" align="center" width="350"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageA1"
                background
                layout="jumper , prev, pager, next"
                :total="totalA1"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝</p>

          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataA2.slice((currentPageA2-1)*pagesize,currentPageA2*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="dianLanMuYeNo" label="前打底母液代码" align="center" width="280"></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="240"></el-table-column>
              <el-table-column prop="dlDosage" label="靛蓝用量（Kg）" align="center" width="240"></el-table-column>
              <el-table-column prop="sjDosage" label="烧碱用量（Kg）" align="center" width="240"></el-table-column>
              <el-table-column prop="bxfDosage" label="保险粉用量（Kg）" align="center" width="280"></el-table-column>
              <el-table-column prop="ksjDosage" label="扩散剂用量（Kg）" align="center" width="260"></el-table-column>
              <el-table-column prop="stjDosage" label="渗透剂用量（Kg）" align="center" width="260"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageA2"
                background
                layout="jumper , prev, pager, next"
                :total="totalA2"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝后套面</p>

          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataA3.slice((currentPageA3-1)*pagesize,currentPageA3*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column
                prop="dianLanBeforeMuYeNo"
                label="后套面母液代码"
                align="center"
                width="440"
              ></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="330"></el-table-column>
              <el-table-column prop="dyeDosageBCD" label="染料用量（Kg）" align="center" width="330"></el-table-column>
              <el-table-column prop="lhjDosageBCD" label="硫化用量（Kg）" align="center" width="350"></el-table-column>
              <el-table-column prop="zjDosageBCD" label="助剂用量（Kg）" align="center" width="350"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageA3"
                background
                layout="jumper , prev, pager, next"
                :total="totalA3"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液检测信息</p>

          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataA4.slice((currentPageA4-1)*pagesize,currentPageA4*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="type" label="类型" align="center" width="240"></el-table-column>
              <el-table-column prop="recipeCode" label="配方代码" align="center" width="200"></el-table-column>
              <el-table-column prop="time" label="检测时间" align="center" width="360"></el-table-column>
              <el-table-column
                prop="indigoConcentration"
                label="靛蓝浓度（g/L）"
                align="center"
                width="300"
              ></el-table-column>
              <el-table-column prop="ph" label="pH" align="center" width="180"></el-table-column>
              <el-table-column prop="orp" label="ORP" align="center" width="180"></el-table-column>
              <el-table-column prop="powder" label="游离保险粉浓度量（g/L）" align="center" width="340"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                @current-change="handleCurrentChangeA4"
                :page-size="pagesize"
                :current-page.sync="currentPageA4"
                background
                layout="jumper , prev, pager, next"
                :total="totalA4"
              ></el-pagination>
              <!-- <el-pagination
                background
                layout="sizes,prev, pager, next,total,jumper"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="pageSizes"
                :page-size="pageSize"
                :total="info.length"
              ></el-pagination> -->
            </div>
          </div>
        </div>
      </div>
      <!-- B机 -->
      <div v-show="cur==1" class="mother-shuju">
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝前打底</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataB1.slice((currentPageB1-1)*pagesize,currentPageB1*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="dianLanAfterMuYeNo" label="前打底母液代码" align="center" width="440"></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="330"></el-table-column>
              <el-table-column prop="dyeDosageBRD" label="染料用量（Kg）" align="center" width="330"></el-table-column>
              <el-table-column prop="lhjDosageBRD" label="硫化用量（Kg）" align="center" width="350"></el-table-column>
              <el-table-column prop="zjDosageBRD" label="助剂用量（Kg）" align="center" width="350"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageB1"
                background
                layout="jumper , prev, pager, next"
                :total="totalB1"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝</p>

          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataB2.slice((currentPageB2-1)*pagesize,currentPageB2*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="dianLanMuYeNo" label="前打底母液代码" align="center" width="280"></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="240"></el-table-column>
              <el-table-column prop="dlDosage" label="靛蓝用量（Kg）" align="center" width="240"></el-table-column>
              <el-table-column prop="sjDosage" label="烧碱用量（Kg）" align="center" width="240"></el-table-column>
              <el-table-column prop="bxfDosage" label="保险粉用量（Kg）" align="center" width="280"></el-table-column>
              <el-table-column prop="ksjDosage" label="扩散剂用量（Kg）" align="center" width="260"></el-table-column>
              <el-table-column prop="stjDosage" label="渗透剂用量（Kg）" align="center" width="260"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageB2"
                background
                layout="jumper , prev, pager, next"
                :total="totalB2"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝后套面</p>

          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataB3.slice((currentPageB3-1)*pagesize,currentPageB3*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column
                prop="dianLanBeforeMuYeNo"
                label="后套面母液代码"
                align="center"
                width="440"
              ></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="330"></el-table-column>
              <el-table-column prop="dyeDosageBCD" label="染料用量（Kg）" align="center" width="330"></el-table-column>
              <el-table-column prop="lhjDosageBCD" label="硫化用量（Kg）" align="center" width="350"></el-table-column>
              <el-table-column prop="zjDosageBCD" label="助剂用量（Kg）" align="center" width="350"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageB3"
                background
                layout="jumper , prev, pager, next"
                :total="totalB3"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液检测信息</p>

          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataB4.slice((currentPageB4-1)*pagesize,currentPageB4*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="type" label="类型" align="center" width="240"></el-table-column>
              <el-table-column prop="recipeCode" label="配方代码" align="center" width="200"></el-table-column>
              <el-table-column prop="time" label="检测时间" align="center" width="360"></el-table-column>
              <el-table-column
                prop="indigoConcentration"
                label="靛蓝浓度（g/L）"
                align="center"
                width="300"
              ></el-table-column>
              <el-table-column prop="ph" label="pH" align="center" width="180"></el-table-column>
              <el-table-column prop="orp" label="ORP" align="center" width="180"></el-table-column>
              <el-table-column prop="powder" label="游离保险粉浓度量（g/L）" align="center" width="340"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageB4"
                background
                layout="jumper , prev, pager, next"
                :total="totalB4"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
      <!-- C机 -->
      <div v-show="cur==2" class="mother-shuju">
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝前打底</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataC1.slice((currentPageC1-1)*pagesize,currentPageC1*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="dianLanAfterMuYeNo" label="前打底母液代码" align="center" width="440"></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="330"></el-table-column>
              <el-table-column prop="dyeDosageBRD" label="染料用量（Kg）" align="center" width="330"></el-table-column>
              <el-table-column prop="lhjDosageBRD" label="硫化用量（Kg）" align="center" width="350"></el-table-column>
              <el-table-column prop="zjDosageBRD" label="助剂用量（Kg）" align="center" width="350"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageC1"
                background
                layout="jumper , prev, pager, next"
                :total="totalC1"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝</p>

          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataC2.slice((currentPageC2-1)*pagesize,currentPageC2*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="dianLanMuYeNo" label="前打底母液代码" align="center" width="280"></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="240"></el-table-column>
              <el-table-column prop="dlDosage" label="靛蓝用量（Kg）" align="center" width="240"></el-table-column>
              <el-table-column prop="sjDosage" label="烧碱用量（Kg）" align="center" width="240"></el-table-column>
              <el-table-column prop="bxfDosage" label="保险粉用量（Kg）" align="center" width="280"></el-table-column>
              <el-table-column prop="ksjDosage" label="扩散剂用量（Kg）" align="center" width="260"></el-table-column>
              <el-table-column prop="stjDosage" label="渗透剂用量（Kg）" align="center" width="260"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageC2"
                background
                layout="jumper , prev, pager, next"
                :total="totalC2"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝后套面</p>

          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataC3.slice((currentPageC3-1)*pagesize,currentPageC3*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="dianLanAfterMuYeNo" label="后套面母液代码" align="center" width="440"></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="330"></el-table-column>
              <el-table-column prop="dyeDosageBRD" label="染料用量（Kg）" align="center" width="330"></el-table-column>
              <el-table-column prop="lhjDosageBRD" label="硫化用量（Kg）" align="center" width="350"></el-table-column>
              <el-table-column prop="zjDosageBRD" label="助剂用量（Kg）" align="center" width="350"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageC3"
                background
                layout="jumper , prev, pager, next"
                :total="totalC3"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液检测信息</p>

          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataC4.slice((currentPageC4-1)*pagesize,currentPageC4*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="type" label="类型" align="center" width="240"></el-table-column>
              <el-table-column prop="recipeCode" label="配方代码" align="center" width="200"></el-table-column>
              <el-table-column prop="time" label="检测时间" align="center" width="360"></el-table-column>
              <el-table-column
                prop="indigoConcentration"
                label="靛蓝浓度（g/L）"
                align="center"
                width="300"
              ></el-table-column>
              <el-table-column prop="ph" label="pH" align="center" width="180"></el-table-column>
              <el-table-column prop="orp" label="ORP" align="center" width="180"></el-table-column>
              <el-table-column prop="powder" label="游离保险粉浓度量（g/L）" align="center" width="340"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageC4"
                background
                layout="jumper , prev, pager, next"
                :total="totalC4"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
      <!-- D机 -->
      <div v-show="cur==3" class="mother-shuju">
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝前打底</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataD1.slice((currentPageD1-1)*pagesize,currentPageD1*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="dianLanAfterMuYeNo" label="前打底母液代码" align="center" width="440"></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="330"></el-table-column>
              <el-table-column prop="dyeDosageBRD" label="染料用量（Kg）" align="center" width="330"></el-table-column>
              <el-table-column prop="lhjDosageBRD" label="硫化用量（Kg）" align="center" width="350"></el-table-column>
              <el-table-column prop="zjDosageBRD" label="助剂用量（Kg）" align="center" width="350"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageD1"
                background
                layout="jumper , prev, pager, next"
                :total="totalD1"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝</p>

          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataD2.slice((currentPageD2-1)*pagesize,currentPageD2*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="dianLanMuYeNo" label="前打底母液代码" align="center" width="280"></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="240"></el-table-column>
              <el-table-column prop="dlDosage" label="靛蓝用量（Kg）" align="center" width="240"></el-table-column>
              <el-table-column prop="sjDosage" label="烧碱用量（Kg）" align="center" width="240"></el-table-column>
              <el-table-column prop="bxfDosage" label="保险粉用量（Kg）" align="center" width="280"></el-table-column>
              <el-table-column prop="ksjDosage" label="扩散剂用量（Kg）" align="center" width="260"></el-table-column>
              <el-table-column prop="stjDosage" label="渗透剂用量（Kg）" align="center" width="260"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageD2"
                background
                layout="jumper , prev, pager, next"
                :total="totalD2"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝后套面</p>

          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataD3.slice((currentPageD3-1)*pagesize,currentPageD3*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="dianLanAfterMuYeNo" label="后套面母液代码" align="center" width="440"></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="330"></el-table-column>
              <el-table-column prop="dyeDosageBRD" label="染料用量（Kg）" align="center" width="330"></el-table-column>
              <el-table-column prop="lhjDosageBRD" label="硫化用量（Kg）" align="center" width="350"></el-table-column>
              <el-table-column prop="zjDosageBRD" label="助剂用量（Kg）" align="center" width="350"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageD3"
                background
                layout="jumper , prev, pager, next"
                :total="totalD3"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液检测信息</p>

          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataD4.slice((currentPageD4-1)*pagesize,currentPageD4*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="type" label="类型" align="center" width="240"></el-table-column>
              <el-table-column prop="recipeCode" label="配方代码" align="center" width="200"></el-table-column>
              <el-table-column prop="time" label="检测时间" align="center" width="360"></el-table-column>
              <el-table-column
                prop="indigoConcentration"
                label="靛蓝浓度（g/L）"
                align="center"
                width="300"
              ></el-table-column>
              <el-table-column prop="ph" label="pH" align="center" width="180"></el-table-column>
              <el-table-column prop="orp" label="ORP" align="center" width="180"></el-table-column>
              <el-table-column prop="powder" label="游离保险粉浓度量（g/L）" align="center" width="340"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageD4"
                background
                layout="jumper , prev, pager, next"
                :total="totalD4"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
      <!-- E机 -->
      <div v-show="cur==4" class="mother-shuju">
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝前打底</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataE1.slice((currentPageE1-1)*pagesize,currentPageE1*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="dianLanAfterMuYeNo" label="前打底母液代码" align="center" width="440"></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="330"></el-table-column>
              <el-table-column prop="dyeDosageBRD" label="染料用量（Kg）" align="center" width="330"></el-table-column>
              <el-table-column prop="lhjDosageBRD" label="硫化用量（Kg）" align="center" width="350"></el-table-column>
              <el-table-column prop="zjDosageBRD" label="助剂用量（Kg）" align="center" width="350"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageE1"
                background
                layout="jumper , prev, pager, next"
                :total="totalE1"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝</p>

          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataE2.slice((currentPageE2-1)*pagesize,currentPageE2*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="dianLanMuYeNo" label="前打底母液代码" align="center" width="280"></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="240"></el-table-column>
              <el-table-column prop="dlDosage" label="靛蓝用量（Kg）" align="center" width="240"></el-table-column>
              <el-table-column prop="sjDosage" label="烧碱用量（Kg）" align="center" width="240"></el-table-column>
              <el-table-column prop="bxfDosage" label="保险粉用量（Kg）" align="center" width="280"></el-table-column>
              <el-table-column prop="ksjDosage" label="扩散剂用量（Kg）" align="center" width="260"></el-table-column>
              <el-table-column prop="stjDosage" label="渗透剂用量（Kg）" align="center" width="260"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageE2"
                background
                layout="jumper , prev, pager, next"
                :total="totalE2"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液化料实时信息--靛蓝后套面</p>

          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataE3.slice((currentPageE3-1)*pagesize,currentPageE3*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="dianLanAfterMuYeNo" label="后套面母液代码" align="center" width="440"></el-table-column>
              <el-table-column prop="hlTotal" label="化料总量（L）" align="center" width="330"></el-table-column>
              <el-table-column prop="dyeDosageBRD" label="染料用量（Kg）" align="center" width="330"></el-table-column>
              <el-table-column prop="lhjDosageBRD" label="硫化用量（Kg）" align="center" width="350"></el-table-column>
              <el-table-column prop="zjDosageBRD" label="助剂用量（Kg）" align="center" width="350"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageE3"
                background
                layout="jumper , prev, pager, next"
                :total="totalE3"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="mother-shuju-one">
          <p>母液检测信息</p>

          <div class="mother-shuju-table2">
            <el-table
              :data="tableDataE4.slice((currentPageE4-1)*pagesize,currentPageE4*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
              <el-table-column prop="type" label="类型" align="center" width="240"></el-table-column>
              <el-table-column prop="recipeCode" label="配方代码" align="center" width="200"></el-table-column>
              <el-table-column prop="time" label="检测时间" align="center" width="360"></el-table-column>
              <el-table-column
                prop="indigoConcentration"
                label="靛蓝浓度（g/L）"
                align="center"
                width="300"
              ></el-table-column>
              <el-table-column prop="ph" label="pH" align="center" width="180"></el-table-column>
              <el-table-column prop="orp" label="ORP" align="center" width="180"></el-table-column>
              <el-table-column prop="powder" label="游离保险粉浓度量（g/L）" align="center" width="340"></el-table-column>
            </el-table>
          </div>

          <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageE4"
                background
                layout="jumper , prev, pager, next"
                :total="totalE4"
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
      cur: 0,
      pagesize: 16,

      tableDataA1: [],
      currentPageA1: 1,
      totalA1: 0,

      tableDataA2: [],
      currentPageA2: 1,
      totalA2: 0,

      tableDataA3: [],
      currentPageA3: 1,
      totalA3: 0,

      tableDataA4: [],
      currentPageA4: 1,
      totalA4: 0,

      tableDataB1: [],
      currentPageB1: 1,
      totalB1: 0,

      tableDataB2: [],
      currentPageB2: 1,
      totalB2: 0,

      tableDataB3: [],
      currentPageB3: 1,
      totalB3: 0,

      tableDataB4: [],
      currentPageB4: 1,
      totalB4: 0,

      tableDataC1: [],
      currentPageC1: 1,
      totalC1: 0,

      tableDataC2: [],
      currentPageC2: 1,
      totalC2: 0,

      tableDataC3: [],
      currentPageC3: 1,
      totalC3: 0,

      tableDataC4: [],
      currentPageC4: 1,
      totalC4: 0,

      tableDataD1: [],
      currentPageD1: 1,
      totalD1: 0,

      tableDataD2: [],
      currentPageD2: 1,
      totalD2: 0,

      tableDataD3: [],
      currentPageD3: 1,
      totalD3: 0,

      tableDataD4: [],
      currentPageD4: 1,
      totalD4: 0,

      tableDataE1: [],
      currentPageE1: 1,
      totalE1: 0,

      tableDataE2: [],
      currentPageE2: 1,
      totalE2: 0,

      tableDataE3: [],
      currentPageE3: 1,
      totalE3: 0,

      tableDataE4: [],
      currentPageE4: 1,
      totalE4: 0
    };
  },
  components: { foot },
  mounted() {
    // setInterval(this.setdata, 60000);
    //母液化料实时信息接口 靛蓝前打底
    this.A1();
    this.B1();
    this.C1();
    this.D1();
    this.E1();
    setInterval(this.A1, 60000);
    setInterval(this.B1, 60000);
    setInterval(this.C1, 60000);
    setInterval(this.D1, 60000);
    setInterval(this.E1, 60000);
    //母液化料实时信息接口 靛蓝
    this.A2();
    this.B2();
    this.C2();
    this.D2();
    this.E2();
    setInterval(this.A2, 60000);
    setInterval(this.B2, 60000);
    setInterval(this.C2, 60000);
    setInterval(this.D2, 60000);
    setInterval(this.E2, 60000);
    //母液化料实时信息接口 靛蓝后套面
    this.A3();
    this.B3();
    this.C3();
    this.D3();
    this.E3();
    setInterval(this.A3, 60000);
    setInterval(this.B3, 60000);
    setInterval(this.C3, 60000);
    setInterval(this.D3, 60000);
    setInterval(this.E3, 60000);
    //母液检测信息
    this.A4();
    this.B4();
    this.C4();
    this.D4();
    this.E4();
    setInterval(this.A4, 60000);
    setInterval(this.B4, 60000);
    setInterval(this.C4, 60000);
    setInterval(this.D4, 60000);
    setInterval(this.E4, 60000);
    //机器轮播
    // setInterval(this.sett,90000)
  },
  methods: {
    A1() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageA1);
      usp.append("lineID", "A");
      usp.append("type", 2);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("res1", res.data.data);
        this.tableDataA1 = res.data.data;
        this.totalA1 = res.data.total;
      });
    },
    // handleCurrentChangeA1(val) {
    //   // console.log(`当前页: ${val}`);
    //   this.currentPageA1=val;
    //   console.log("val",val,"currentPageA1",currentPageA1);

    // },
    B1() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageB1);
      usp.append("lineID", "B");
      usp.append("type", 2);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("res1", res.data.data);
        this.tableDataB1 = res.data.data;
        this.totalB1 = res.data.total;
      });
    },
    C1() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageC1);
      usp.append("lineID", "C");
      usp.append("type", 2);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("resC1", res.data.data);
        this.tableDataC1 = res.data.data;
        this.totalC1 = res.data.total;
      });
    },
    D1() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageD1);
      usp.append("lineID", "D");
      usp.append("type", 2);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("resD1", res.data.data);
        this.tableDataD1 = res.data.data;
        this.totalD1 = res.data.total;
      });
    },
    E1() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageE1);
      usp.append("lineID", "E");
      usp.append("type", 2);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("resE1", res.data.data);
        this.tableDataE1 = res.data.data;
        this.totalE1 = res.data.total;
      });
    },
    A2() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageA2);
      usp.append("lineID", "A");
      usp.append("type", 1);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("res", res.data.data);
        this.tableDataA2 = res.data.data;
        this.totalA2 = res.data.total;
      });
    },
    B2() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageB2);
      usp.append("lineID", "B");
      usp.append("type", 1);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("resB2", res.data.data);
        this.tableDataB2 = res.data.data;
        this.totalB2 = res.data.total;
      });
    },
    C2() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageC2);
      usp.append("lineID", "C");
      usp.append("type", 1);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("resC2", res.data.data);
        this.tableDataC2 = res.data.data;
        this.totalC2 = res.data.total;
      });
    },
    D2() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageD2);
      usp.append("lineID", "D");
      usp.append("type", 1);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("resD2", res.data.data);
        this.tableDataD2 = res.data.data;
        this.totalD2 = res.data.total;
      });
    },
    E2() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageE2);
      usp.append("lineID", "E");
      usp.append("type", 1);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("resE2", res.data.data);
        this.tableDataE2 = res.data.data;
        this.totalE2 = res.data.total;
      });
    },
    A3() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageA3);
      usp.append("lineID", "A");
      usp.append("type", 3);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("res3", res.data.data);
        this.tableDataA3 = res.data.data;

        this.totalA3 = res.data.total;
      });
    },
    B3() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageB3);
      usp.append("lineID", "B");
      usp.append("type", 3);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("resB3", res.data.data);
        this.tableDataB3 = res.data.data;

        this.totalB3 = res.data.total;
      });
    },
    C3() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageC3);
      usp.append("lineID", "C");
      usp.append("type", 3);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("resC3", res.data.data);
        this.tableDataC3 = res.data.data;

        this.totalC3 = res.data.total;
      });
    },
    D3() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageD3);
      usp.append("lineID", "D");
      usp.append("type", 3);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("resD3", res.data.data);
        this.tableDataD3 = res.data.data;

        this.totalD3 = res.data.total;
      });
    },
    E3() {
      var usp = new URLSearchParams();
      usp.append("limit", this.pagesize);
      usp.append("page", this.currentPageE3);
      usp.append("lineID", "E");
      usp.append("type", 3);
      console.log(usp);
      axios.post("http://192.168.10.32:8005/getMuYeHuaLiao", usp).then(res => {
        console.log("resE3", res.data.data);
        this.tableDataE3 = res.data.data;

        this.totalE3 = res.data.total;
      });
    },
    A4() {
      axios
        .get("http://192.168.10.32:8005/api/getMuYeTestInfo", {
          params: {
            limit: this.pagesize,
            page: this.currentPageA4
          }
        })
        .then(res => {
          for (let i = 0; i < res.data.data.length; i++) {
            // res.data.data[i].type
            if (res.data.data[i].type == 1) {
              res.data.data[i].type = "靛蓝";
            }
            if (res.data.data[i].type == 2) {
              res.data.data[i].type = "靛蓝前";
            }
            if (res.data.data[i].type == 3) {
              res.data.data[i].type = "靛蓝后";
            }
          }
          console.log("11111111");
          // console.log("1111111",res.data.data);

          console.log("resA4", res.data);
          this.tableDataA4 = res.data.data;
          this.totalA4 = res.data.total;
        });
    },
    handleCurrentChangeA4(val) {
      console.log(`当前页: ${val}`);
      this.currentPageA4 = val;
     axios
        .get("http://192.168.10.32:8005/api/getMuYeTestInfo", {
          params: {
            limit: this.pagesize,
            page: this.currentPageA4
          }
        })
        .then(res => {
          for (let i = 0; i < res.data.data.length; i++) {
            // res.data.data[i].type
            if (res.data.data[i].type == 1) {
              res.data.data[i].type = "靛蓝";
            }
            if (res.data.data[i].type == 2) {
              res.data.data[i].type = "靛蓝前";
            }
            if (res.data.data[i].type == 3) {
              res.data.data[i].type = "靛蓝后";
            }
          }
          console.log("11111111");
          // console.log("1111111",res.data.data);

          console.log("resA4", res.data);
          // var a = res.data.data
          this.tableDataA4 = res.data.data;

       
          // this.totalA4 = res.data.total;
          

        });
        console.log("数据",this.currentPageA4);
        
    },
  

    B4() {
      axios
        .get("http://192.168.10.32:8005/api/getMuYeTestInfo", {
          params: {
            limit: this.pagesize,
            page: this.currentPageB4
          }
        })
        .then(res => {
          for (let i = 0; i < res.data.data.length; i++) {
            // res.data.data[i].type
            console.log(res.data.data[i].type);
            if (res.data.data[i].type == 1) {
              res.data.data[i].type = "靛蓝";
            }
            if (res.data.data[i].type == 2) {
              res.data.data[i].type = "靛蓝前";
            }
            if (res.data.data[i].type == 3) {
              res.data.data[i].type = "靛蓝后";
            }
          }
          console.log("resB4", res.data);
          this.tableDataB4 = res.data.data;
          this.totalB4 = res.data.total;
        });
    },
    C4() {
      axios
        .get("http://192.168.10.32:8005/api/getMuYeTestInfo", {
          params: {
            limit: this.pagesize,
            page: this.currentPageC4
          }
        })
        .then(res => {
          for (let i = 0; i < res.data.data.length; i++) {
            // res.data.data[i].type
            console.log(res.data.data[i].type);
            if (res.data.data[i].type == 1) {
              res.data.data[i].type = "靛蓝";
            }
            if (res.data.data[i].type == 2) {
              res.data.data[i].type = "靛蓝前";
            }
            if (res.data.data[i].type == 3) {
              res.data.data[i].type = "靛蓝后";
            }
          }
          console.log("resC4", res.data);
          this.tableDataC4 = res.data.data;
          this.totalC4 = res.data.total;
        });
    },
    D4() {
      axios
        .get("http://192.168.10.32:8005/api/getMuYeTestInfo", {
          params: {
            limit: this.pagesize,
            page: this.currentPageD4
          }
        })
        .then(res => {
          for (let i = 0; i < res.data.data.length; i++) {
            // res.data.data[i].type
            console.log(res.data.data[i].type);
            if (res.data.data[i].type == 1) {
              res.data.data[i].type = "靛蓝";
            }
            if (res.data.data[i].type == 2) {
              res.data.data[i].type = "靛蓝前";
            }
            if (res.data.data[i].type == 3) {
              res.data.data[i].type = "靛蓝后";
            }
          }
          console.log("resD4", res.data);
          this.tableDataD4 = res.data.data;
          this.totalD4 = res.data.total;
        });
    },
    E4() {
      axios
        .get("http://192.168.10.32:8005/api/getMuYeTestInfo", {
          params: {
            limit: this.pagesize,
            page: this.currentPageE4
          }
        })
        .then(res => {
          for (let i = 0; i < res.data.data.length; i++) {
            // res.data.data[i].type
            console.log(res.data.data[i].type);
            if (res.data.data[i].type == 1) {
              res.data.data[i].type = "靛蓝";
            }
            if (res.data.data[i].type == 2) {
              res.data.data[i].type = "靛蓝前";
            }
            if (res.data.data[i].type == 3) {
              res.data.data[i].type = "靛蓝后";
            }
          }
          console.log("resE4", res.data.data);
          this.tableDataE4 = res.data.data;
          this.totalE4 = res.data.total;
        });
    },
    // handleCurrentChangeA1(val) {
    //   console.log(`当前页: ${val}`);
    //   this.currentPageA1=val;
    // },
    // aaa(){
    //     return aaa
    // },
    esc() {
      this.$router.push("/index");
    },
    pro() {
      this.$router.push("/personal");
    },
    sett() {
      console.log(this.cur);
      this.cur++;
      if (this.cur > 4) {
        this.cur = 0;
      }
    },
    setdata() {
      axios.get("http://localhost:3000/getAllGanghao", usp).then(res => {
        console.log("res", res.data);
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
/* tab切换 */
.mother-ul {
  visibility: hidden;
  display: flex;
  justify-content: center;
  width: 2658px;
  height: 278px;
  margin: 90px auto 0;
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
/* .mother-ul li:hover {
  color: #e4c072;
} */
.mother-ul .active {
  color: #e4c072;
}
/* .mother-ul li:visited{
  color: #e4c072;
} */
.mother-shuju {
  margin-top: 320px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.mother-shuju-one {
  width: 1900px;
  height: 1870px;
  /* border: 1px solid; */
  position: relative;
}
.mother-shuju-one p {
  height: 110px;
  width: 1900px;
  /* border: solid 1px; */
  text-align: center;
  font-size: 60px;
  color: white;
}
/* 头部 */
.mother {
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
/* 表格 */
.mother-shuju-table1 .el-table,
.mother-shuju-table1 .el-table__expanded-cell,
.mother-shuju-table2 .el-table,
.mother-shuju-table2 .el-table__expanded-cell {
  background-color: transparent !important;
  border: rgb(255, 255, 255);
}

.mother-shuju-table1 .el-table th,
.mother-shuju-table1 .el-table tr,
.mother-shuju-table2 .el-table th,
.mother-shuju-table2 .el-table tr {
  color: white;
  border: rgb(255, 255, 255);

  background-color: transparent !important;
}
.mother-shuju-table1 > .el-table,
.mother-shuju-table1 > .el-table__expanded-cell,
.mother-shuju-table1 > .el-table th,
.mother-shuju-table1 > .el-table tr,
.mother-shuju-table2 > .el-table,
.mother-shuju-table2 > .el-table__expanded-cell,
.mother-shuju-table2 > .el-table th,
.mother-shuju-table2 > .el-table tr {
  background: transparent !important;
}
</style>
