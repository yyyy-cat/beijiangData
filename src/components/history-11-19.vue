<template>
  <!-- 历史数据分析 -->
  <div class="history">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <!-- <img src="..\assets\history\logo_history.png" alt> -->
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
      <p
        style="text-align: center; font-family: 庞门正道标题体; font-size: 180px;color:#00ecfc; letter-spacing:15px;"
      >
        <img
          src="..\assets\Administration\nav_logo.png"
          alt
          style="vertical-align: middle; margin-top: -37px;"
        />
        <span>历史数据分析</span>
      </p>
    </div>
    <!-- 返回主页 -->
    <div class="index-esc" @click="esc">
      <span>
        <img src="..\assets\Administration\home.png" alt />
        主页
      </span>
    </div>
    <!-- 显示用户登陆和退出 -->
    <login></login>
    <!-- 筛选条件 -->
    <div class="history-top">
      <div class="history-topbox">
        <span style="float: left; line-height: 120px;">请选择生产线:</span>
        <select style="float: left;" v-model="select1" name id class="history-select">
          <option value selected>请选择</option>
          <option value="A">A机</option>
          <option value="B">B机</option>
          <option value="C">C机</option>
          <option value="D">D机</option>
          <option value="E">E机</option>
        </select>
        <span style="float: left; line-height: 120px;">选择时间:</span>
        <el-date-picker
          id="time"
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd H:m"
        ></el-date-picker>
        <!-- <el-time-select
          class="el-time-select"
          placeholder="起始时间"
          v-model="startTime"
          :picker-options="{
             start: '08:30',
             step: '00:15',
             end: '18:30'
         }"
        ></el-time-select>
        <span class="span--">--</span>
        <el-time-select
          class="el-time-select"
          placeholder="结束时间"
          v-model="endTime"
          :picker-options="{
           start: '08:30',
           step: '00:15',
           end: '18:30',
           minTime: startTime
         }"
        ></el-time-select>-->

        <span style="float: left; line-height: 120px;">请选择类别:</span>
        <select style="float: left;" v-model="select2" name id class="history-select">
          <option value selected>请选择</option>
          <option value="缸号">缸号</option>
          <option value="色号">色号</option>
          <option value="品种">品种</option>
        </select>
        <input style="float: left;" type="text" v-model="plac" placeholder="请输入..." />
        <button style="float: left; line-height: 120px;" @click="tijiao">查&nbsp;&nbsp;&nbsp;询</button>
      </div>
    </div>
    <!-- <p> -->
    <!-- <button @click="hidShow('母液用料分析')">母液用料分析</button>
      <button @click="hidShow('能耗分析')">能耗分析</button>
      <button @click="hidShow('母液检测分析')">母液检测分析</button>
    <button @click="hidShow('底水检测')">底水检测</button>-->
    <!-- <label style="font-size: 50px; "><input type="radio" name="qwe" id="a" v-model="bol[0]" style="font-size: 50px;" >母液用料分析</label>
      <label style="font-size: 50px; "><input type="radio" name="qwe" id="a" v-model="bol[1]" style="font-size: 50px;" >能耗分析</label>
      <label style="font-size: 50px; "><input type="radio" name="qwe" id="a" v-model="bol[2]" style="font-size: 50px;" >母液检测分析</label>
    <label style="font-size: 50px; "><input type="radio" name="qwe" id="a" v-model="bol[3]" style="font-size: 50px;" >底水检测</label>-->

    <!-- </p> -->
    <ul class="ul">
      <!-- <li @click="cur=0" :class="{active:cur==5}">母液用料分析</li> -->
      <li @click="aaa(0)" :class="{active:cur==0}">母液用料分析</li>
      <li @click="aaa(1)" :class="{active:cur==1}">能耗分析</li>
      <li @click="aaa(2)" :class="{active:cur==2}">母液检测分析</li>
      <li @click="aaa(3)" :class="{active:cur==3}">底水检测</li>
      <!-- <li @click="cur=4" :class="{active:cur==4}">E机</li> -->
    </ul>
    <br />

    <div class="history-content">
      <!-- AA1 -->
      <div class="mother-shuju-one" v-show="cur==0" style="color: white !important;">
        <div class="mother-shuju-table1 historyShow" style="color: white !important;">
          <el-table
            @row-click="openDetails"
            :data="tableData1.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            border
            style="width: 98.5%; margin: 0 auto; color: white !important;"
          >
            <el-table-column prop="cylinderNo" label="缸号" align="center" width="210"></el-table-column>
            <el-table-column prop="varieties" label="品种" align="center" width="210"></el-table-column>
            <el-table-column prop="colorNo" label="色号" align="center" width="210"></el-table-column>
            <el-table-column label="母液用料分析" align="center" width="210">
              <el-table-column label="上染率%(靛蓝前打底)" align="center" width="210">
                <el-table-column prop="dyeUptakeB" label="实际值" align="center" width="210"></el-table-column>
                <el-table-column prop="dyeUptakeBStandard" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="dyeUptakeADeviation" label="偏差" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="上染率%(靛蓝)" align="center" width="210">
                <el-table-column prop="dyeUptake" label="实际值" align="center" width="210"></el-table-column>
                <el-table-column prop="dyeUptakeStandard" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="dyeUptakeDeviation" label="偏差" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="上染率%(靛蓝后套面)" align="center" width="210">
                <el-table-column prop="dyeUptakeA" label="实际值" align="center" width="210"></el-table-column>
                <el-table-column prop="dyeUptakeAStandard" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="dyeUptakeBDeviation" label="偏差" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="用料总量(l/万米)" align="center" width="210">
                <el-table-column prop="hlTotal" label="实际值" align="center" width="210"></el-table-column>
                <el-table-column prop="hlTotalStandard" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="hlTotalDeviation" label="偏差" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="烧碱用量(kg/万米)" align="center" width="210">
                <el-table-column prop="sjDosage" label="实际值" align="center" width="210"></el-table-column>
                <el-table-column prop="sjDosageStandard" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="sjDosageDeviation" label="偏差" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝用量(kg/万米)" align="center" width="210">
                <el-table-column prop="dlDosage" label="实际值" align="center" width="210"></el-table-column>
                <el-table-column prop="dlDosageStandard" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="dlDosageDeviation" label="偏差" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="保险粉用量(kg/万米)" align="center" width="210">
                <el-table-column prop="bxfDosage" label="实际值" align="center" width="210"></el-table-column>
                <el-table-column prop="bxfDosageStandard" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="bxfDosageDeviation" label="偏差" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="扩散剂用量(kg/万米)" align="center" width="210">
                <el-table-column prop="ksjDosage" label="实际值" align="center" width="210"></el-table-column>
                <el-table-column prop="ksjDosageStandard" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="ksjDosageDeviation" label="偏差" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="渗透剂用量(kg/万米)" align="center" width="210">
                <el-table-column prop="stjDosage" label="实际值" align="center" width="210"></el-table-column>
                <el-table-column prop="stjDosageStandard" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="stjDosageDeviation" label="偏差" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝前打底(kg/万米)" align="center" width="210">
                <el-table-column prop="dyeDosageBRD" label="染料用量" align="center" width="210"></el-table-column>
                <el-table-column prop="hyjDosageBRD" label="还原剂用量" align="center" width="210"></el-table-column>
                <el-table-column prop="zjDosageBCD" label="助剂用量" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝后套面(kg/万米)" align="center" width="210">
                <el-table-column prop="dyeDosageBCD" label="染料用量" align="center" width="210"></el-table-column>
                <el-table-column prop="hyjDosageBCD" label="还原剂用量" align="center" width="210"></el-table-column>
                <el-table-column prop="zjDosageBCD" label="助剂用量" align="center" width="210"></el-table-column>
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>

        <!-- <div class="mother-shuju-two">
            <div class="mother-shuju-three1">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPage"
                background
                layout="jumper , prev, pager, next"
                :total="total"
              ></el-pagination>
            </div>
        </div>-->
      </div>
      <!-- AA2 -->
      <div class="mother-shuju-one" v-show="cur==1">
        <div class="mother-shuju-table1">
          <el-table
            @row-click="openDetails"
            :data="tableData2.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            border
            style="width: 35.5%; margin: 0 auto; color: white;"
          >
            <el-table-column prop="cylinderNo" label="缸号" align="center" width="300"></el-table-column>
            <el-table-column prop="varieties" label="品种" align="center" width="300"></el-table-column>
            <el-table-column prop="colorNo" label="色号" align="center" width="300"></el-table-column>
            <el-table-column label="能耗分析" align="center" width="300">
              <el-table-column label="用水数据(吨/万米)" align="center" width="300">
                <el-table-column prop="waterM" label="实际值" align="center" width="300"></el-table-column>
                <el-table-column prop="waterInformationM" label="标准值" align="center" width="300"></el-table-column>
                <el-table-column prop="waterInformationD" label="偏差" align="center" width="300"></el-table-column>
              </el-table-column>
              <el-table-column label="用蒸汽数据(m³/万米)" align="center" width="300">
                <el-table-column prop="steamM" label="实际值" align="center" width="300"></el-table-column>
                <el-table-column
                  prop="electricityInformationM"
                  label="标准值"
                  align="center"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="electricityInformationD"
                  label="偏差"
                  align="center"
                  width="300"
                ></el-table-column>
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>

        <!-- <div class="mother-shuju-two">
            <div class="mother-shuju-three2">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPage"
                background
                layout="jumper , prev, pager, next"
                :total="total"
              ></el-pagination>
            </div>
        </div>-->
      </div>
      <!-- AA3 -->
      <div class="mother-shuju-one" v-show="cur==2">
        <div class="mother-shuju-table1" style="color: white;">
          <el-table
            @row-click="openDetails"
            :data="tableData3.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            border
            style="width: 52%; margin: 0 auto; color: white;"
          >
            <el-table-column prop="cylinderNo" label="缸号" align="center" width="210"></el-table-column>
            <el-table-column prop="varieties" label="品种" align="center" width="210"></el-table-column>
            <el-table-column prop="colorNo" label="色号" align="center" width="210"></el-table-column>
            <el-table-column label="母液检测分析" align="center" width="210">
              <el-table-column label="靛蓝浓度(g/l)" align="center" width="210">
                <el-table-column prop="indigoConcentration" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column
                  prop="indigoConcentrationAverage"
                  label="平均值"
                  align="center"
                  width="210"
                ></el-table-column>
                <el-table-column
                  prop="indigoConcentrationMax"
                  label="最大值"
                  align="center"
                  width="210"
                ></el-table-column>
                <el-table-column
                  prop="indigoConcentrationMin"
                  label="最小值"
                  align="center"
                  width="210"
                ></el-table-column>
              </el-table-column>
              <el-table-column label="pH" align="center" width="210">
                <el-table-column prop="ph" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="phAverage" label="平均值" align="center" width="210"></el-table-column>
                <el-table-column prop="phMax" label="最大值" align="center" width="210"></el-table-column>
                <el-table-column prop="phMin" label="最小值" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="ORP" align="center" width="210">
                <el-table-column prop="orp" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="orpAverage" label="平均值" align="center" width="210"></el-table-column>
                <el-table-column prop="orpMax" label="最大值" align="center" width="210"></el-table-column>
                <el-table-column prop="orpMin" label="最小值" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="游离保险粉浓度(g/l)" align="center" width="210">
                <el-table-column prop="powder" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="powderAverage" label="平均值" align="center" width="210"></el-table-column>
                <el-table-column prop="powderMax" label="最大值" align="center" width="210"></el-table-column>
                <el-table-column prop="powderMin" label="最小值" align="center" width="210"></el-table-column>
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>

        <!-- <div class="mother-shuju-two">
            <div class="mother-shuju-three2">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPage"
                background
                layout="jumper , prev, pager, next"
                :total="total"
              ></el-pagination>
            </div>
        </div>-->
      </div>
      <!-- AA4 -->
      <div class="mother-shuju-one" v-show="cur==3">
        <div class="mother-shuju-table1" id="history">
          <el-table
            @row-click="openDetails"
            :data="tableData4.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            border
            style="width: 52.3%; margin: 0 auto; color: white;"
          >
            <el-table-column prop="cylinderNo" label="缸号" align="center" width="210"></el-table-column>
            <el-table-column prop="varieties" label="品种" align="center" width="210"></el-table-column>
            <el-table-column prop="colorNo" label="色号" align="center" width="210"></el-table-column>
            <el-table-column label="底水检测" align="center" width="210">
              <el-table-column label="靛蓝浓度(g/l)" align="center" width="210">
                <el-table-column prop="indigoConcentration" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column
                  prop="indigoConcentrationAverage"
                  label="平均值"
                  align="center"
                  width="210"
                ></el-table-column>
                <el-table-column
                  prop="indigoConcentrationMax"
                  label="最大值"
                  align="center"
                  width="210"
                ></el-table-column>
                <el-table-column
                  prop="indigoConcentrationMin"
                  label="最小值"
                  align="center"
                  width="210"
                ></el-table-column>
              </el-table-column>
              <el-table-column label="pH" align="center" width="210">
                <el-table-column prop="ph" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="phAverage" label="平均值" align="center" width="210"></el-table-column>
                <el-table-column prop="phMax" label="最大值" align="center" width="210"></el-table-column>
                <el-table-column prop="phMin" label="最小值" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="ORP" align="center" width="210">
                <el-table-column prop="orp" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="orpAverage" label="平均值" align="center" width="210"></el-table-column>
                <el-table-column prop="orpMax" label="最大值" align="center" width="210"></el-table-column>
                <el-table-column prop="orpMin" label="最小值" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="游离保险粉浓度(g/l)" align="center" width="210">
                <el-table-column prop="powder" label="标准值" align="center" width="210"></el-table-column>
                <el-table-column prop="powderAverage" label="平均值" align="center" width="210"></el-table-column>
                <el-table-column prop="powderMax" label="最大值" align="center" width="210"></el-table-column>
                <el-table-column prop="powderMin" label="最小值" align="center" width="210"></el-table-column>
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>

        <!-- <div class="mother-shuju-two4">
            <div class="mother-shuju-three4">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPage"
                background
                layout="jumper , prev, pager, next"
                :total="total"
              ></el-pagination>
            </div>
        </div>-->
      </div>
    </div>
    <foot></foot>
  </div>
  <!-- <script type="text/html" id="toolbarDemo">
  </script>-->
</template>
<script>
// if(this.$refs.a.checked){

// }
</script>
<script>
import foot from "./foot.vue";
import axios from "axios";
import login from "./login_assembly.vue";
export default {
  data() {
    return {
      cur: 0,
      pagesize: 15,
      // currentPage: 1,
      // startTime: "",
      // endTime: "",
      select1: "",
      select2: "",
      plac: "",
      value1: "",
      tableData: [
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        },
        {
          name: 1,
          pac: 2
        }
      ],
      currentPage: 1,
      total: 0,
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      obj: {}

      // myArr: [
      //   { align: "center", title: "母液用料分析", colspan: 33 }, //colspan即横跨的单元格数，这种情况下不用设置field和width
      //   { align: "center", title: "能耗分析", colspan: 6 }, //colspan即横跨的单元格数，这种情况下不用设置field和width
      //   { align: "center", title: "母液检测分析", colspan: 16 }, //colspan即横跨的单元格数，这种情况下不用设置field和width
      //   { align: "center", title: "底水检测", colspan: 16 } //colspan即横跨的单元格数，这种情况下不用设置field和width
      // ]
    };
  },
  computed: {},
  mounted() {
    this.getMotherLiquorDosage(); //母液用料分析
    // this.getEnergyConsumptionAnalysisService()//能耗分析
    // this.getHistoryMProcessDetection()//母液检测分析
    // this.getHistoryProcessDetection()//底水分析
  },
  components: { foot, login },
  methods: {
    aaa(over) {
      this.cur = over;
      console.log(this.obj);

      if (over == 0) {
        axios
          .get("/api/getMotherLiquorDosage", {
            params: this.obj
          })
          .then(res => {
            console.log(res.data.data);

            this.tableData1 = res.data.data;
          });
      }
      if (over == 1) {
        axios
          .get(
            "/api/getEnergyConsumptionAnalysisService",
            { params: this.obj }
          )
          .then(res => {
            console.log(res.data.data);

            this.tableData2 = res.data.data;
          });
      }
      if (over == 2) {
        axios
          .get("/api/getHistoryMProcessDetection", {
            params: this.obj
          })
          .then(res => {
            console.log(res.data.data);

            this.tableData3 = res.data.data;
          });
      }
      if (over == 3) {
        axios
          .get("/api/getHistoryProcessDetection", {
            params: this.obj
          })
          .then(res => {
            console.log(res.data.data);

            this.tableData4 = res.data.data;
          });
      }
    },

    getMotherLiquorDosage() {
      axios
        .get("/api/getMotherLiquorDosage")
        .then(res => {
          console.log(res.data.data);

          this.tableData1 = res.data.data;
        });
    },
    getEnergyConsumptionAnalysisService() {
      axios
        .get(
          "/api/getEnergyConsumptionAnalysisService"
        )
        .then(res => {
          console.log(res.data.data);

          this.tableData2 = res.data.data;
        });
    },
    getHistoryMProcessDetection() {
      axios
        .get("/api/getHistoryMProcessDetection")
        .then(res => {
          console.log(res.data.data);

          this.tableData3 = res.data.data;
        });
    },
    getHistoryProcessDetection() {
      axios
        .get("/api/getHistoryProcessDetection")
        .then(res => {
          console.log(res.data.data);

          this.tableData4 = res.data.data;
        });
    },

    // openDetails(row) {
    //   //具体操作
    //   console.log(row);
    //   this.$router.push("./history2");
    // },
    // toggleCol(tableObj,{field: "", title: '用户名'},toggle){
    //   layui.each(tableObj.config.cols[0],function(i,v){//一级表头
    //       if(colName==v.field){
    //         if(toggle==null)toggle=!v.hide;
    //         v.hide=toggle//切换隐藏显示状态
    //         return false;//结束遍历
    //        }
    //    });
    // },
    hidShow(str) {
      this.isshow = "true";
      console.log(layui.table);
      this.toggle(layui.table, {});
    },
    // 获取数据渲染页面
    tijiao() {
      var reg = /^[0-9a-zA-Z]+$/;
      if (!reg.test(this.plac)) {
        alert("你输入的字符不是数字或者字母");
      }

      console.log(
        this.select1,
        this.startTime,
        this.endTime,
        this.select2,
        this.plac
      );

      var obj = {
        lineID: this.select1,
        historicalMarking: 111
      };

      if (this.value1 !== undefined) {
        obj.startTime = this.value1[0];
        obj.endTime = this.value1[1];
      }

      if (this.select2 == "色号") {
        obj.colorNo = this.plac;
      }
      if (this.select2 == "缸号") {
        obj.cylinderNo = this.plac;
      }
      if (this.select2 == "品种") {
        obj.varieties = this.plac;
      }

      // console.log(usp);

      console.log(obj);
      this.obj = obj;
      if (this.cur == 0) {
        axios
          .get("/api/getMotherLiquorDosage", {
            params: this.obj
          })
          .then(res => {
            console.log(res.data.data);

            this.tableData1 = res.data.data;
          });
      }
      if (this.cur == 1) {
        axios
          .get(
            "/api/getEnergyConsumptionAnalysisService",
            { params: this.obj }
          )
          .then(res => {
            console.log(res.data.data);

            this.tableData2 = res.data.data;
          });
      }
      if (this.cur == 2) {
        axios
          .get("/api/getHistoryMProcessDetection", {
            params: this.obj
          })
          .then(res => {
            console.log(res.data.data);

            this.tableData3 = res.data.data;
          });
      }
      if (this.cur == 3) {
        axios
          .get("/api/getHistoryProcessDetection", {
            params: this.obj
          })
          .then(res => {
            console.log(res.data.data);

            this.tableData4 = res.data.data;
          });
      }
      

      // axios.get("/getAllGanghao",obj).then(res => {
      //   console.log("res", res.data);
      // });
    },
    // getUrl() {
    //   axios.get("http://localhost:8088http://125.89.236.222:8006/api/weaveTechnics?pageIndex=1&pageSize=15&bbh=250").then(res => {
    //     console.log("res", res.data);
    //   });
    // },
    openDetails(row) {
      //具体操作
      console.log(row);
      // this.$router.push("./history2");
      var id = 2;
      this.$router.push({ path: "/history2", query: { userid: id } });
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
ul {
  height: 80px;
  width: 23%;
  margin: 0 auto;
}
ul li {
  text-align: center;
  margin: 0 10px;
  width: 400px;
  border: solid 5px wheat;
  border-radius: 10px;
  padding: 5px 0;
  margin-left: 30px;
  font-size: 60px;
  color: white;
  float: left;
}
/* 头部 */
.history {
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
#aaa {
  border: solid 1px white;

  /* border-bottom:none;  */
}

.el-table_1_column_1 .is-center {
  background: red;
}
.history-top {
  /* overflow: hidden; */
  margin-top: 40px;
  background: rgba(26, 75, 140, 20%);
  width: 7680px;
  /* height: 200px; */
}
.history-select {
  /* margin-right: 110px; */
  width: 480px;
  height: 120px;
  background: transparent;
  border: solid 1px white;
  color: white;
  padding-left: 40px;
  box-sizing: border-box;
  font-size: 60px;
}
.history-select option {
  background: #000836;
  /* border: solid 1px white; */
}
.history-topbox {
  height: 120px;
  /* border: solid 1px; */
  margin: 200px auto;
  width: 5000px;
}

.history-topbox span {
  font-size: 60px;
  color: white;
  margin-left: 164px;
}
.span-- {
  margin: 80px;
}
.history-topbox input {
  background: transparent;
  outline: #e4c072;
  font-size: 60px;
  padding-left: 20px;
  color: white;
  margin-left: 60px;
  width: 480px;
  height: 120px;
}
.history-topbox button {
  background: transparent;
  outline: #e4c072;
  font-size: 60px;
  padding-left: 20px;
  color: white;
  margin-left: 60px;
  width: 480px;
  height: 120px;
  border: solid 1px white;
  cursor: pointer;
}
.el-time-select {
  width: 480px;
  height: 120px;
  border: solid 1px white;
}
.history-topbox .el-input--prefix .el-input__inner {
  background: transparent;
}
.history-topbox .el-input__inner {
  height: 120px;
  border: solid 1px white;
}
.history-topbox .el-input__prefix {
  display: none;
}
.el-table .el-table__body tr:hover > td {
  background-color: transparent !important;
  background: #000836;
}
/* #aaa >>> .el-table__body-wrapper {
  overflow: auto;
}
#aaa >>> .el-table__body-wrapper::-webkit-scrollbar {
  滚动条整体样式
  width: 50px; 高宽分别对应横竖滚动条的尺寸
  height: 50px;
}
#aaa >>> .el-table__body-wrapper::-webkit-scrollbar-thumb {
  滚动条里面小方块
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #3343ad;
}
#aaa >>> .el-table__body-wrapper::-webkit-scrollbar-track {
  滚动条里面轨道
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #EDEDED;
  background: #0c1968;
} */
.mother-shuju-table1 > .el-table tr:nth-child(1) {
  display: none !important;
}
.mother-shuju-table1 .el-table tr:nth-child(1) {
  color: white !important;
}
</style>
<style>
.history-topbox .el-input--prefix .el-input__inner {
  background: transparent;
}
.history-topbox .el-input__inner {
  height: 120px;
}
.history-topbox .el-input__prefix {
  display: none;
}
::-webkit-scrollbar-track {
  background: #000836;
}
::-webkit-scrollbar-thumb {
  background: #00137e;
}
</style>
<style>
#history {
  color: white !important;
}
#historyShow {
  color: white !important;
}
</style>

