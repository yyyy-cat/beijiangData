<template>
  <!-- 生产运行 -->
  <div class="production">
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
      <!-- 跳转图表 -->
      <img @click="tabimg" class="index-name_esc-img1" src="..\assets\production\sc_chart.png" alt />
    </div>
    <login></login>
    <ul class="mother-ul">
      <li @click="aaa(0,valuA)" :class="{active:cur==0}">A机</li>
      <li @click="aaa(1,valuB)" :class="{active:cur==1}">B机</li>
      <li @click="aaa(2,valuC)" :class="{active:cur==2}">C机</li>
      <li @click="aaa(3,valuD)" :class="{active:cur==3}">D机</li>
      <li @click="aaa(4,valuE)" :class="{active:cur==4}">E机</li>
    </ul>
    <!-- A机 -->
    <div class="production-shuju">
      <div class="production-top">
        <div class="production-topbox">
          <span>色号:</span>
          <input type="text" disabled="disabled" :value="mm.colorNo" />
          <span>品种:</span>
          <input type="text" disabled="disabled" :value="mm.varieties" />
          <span>缸号:</span>
          <input type="text" disabled="disabled" :value="mm.cylinderNo" />
          <span>整经长度:</span>
          <input type="text" disabled="disabled" :value="mm.warpingLength" />
          <span>开机时间:</span>
          <input type="text" disabled="disabled" :value="mm.startTime" />
          <span>预计了机时间:</span>
          <input type="text" disabled="disabled" :value="mm.endTime" />
          <span>染色序号:</span>
          <input type="text" disabled="disabled" :value="mm.dyeingNo" />
        </div>
      </div>
      <div class="mother-shuju">
        <!-- AA1 -->
        <div class="mother-shuju-one">
          <p>1.工艺执行信息</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataAA1.slice((currentPageAA1-1)*pagesize3,currentPageAA1*pagesize3)"
              border
              style="width: 100%;"
            >
              <el-table-column width="980">
                <!-- <el-table-column type="index" label="序号" align="center" width="100"></el-table-column> -->
                <el-table-column prop="time" label="采集时间" align="center" width="530"></el-table-column>
                <el-table-column prop="vehicleSpeed" label="车速（m/min）" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="母液追加流量（l/min）" align="center" width="920">
                <el-table-column
                  prop="realTimeFlowBCD"
                  label="靛蓝前打底"
                  align="center"
                  width="310"
                ></el-table-column>
                <el-table-column
                  prop="realTimeFlow"
                  label="靛蓝"
                  align="center"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="realTimeFlowBRD"
                  label="靛蓝后套面"
                  align="center"
                  width="310"
                ></el-table-column>
              </el-table-column>
              <el-table-column label="缸次母液实时累加量（l）" align="center" width="940">
                <el-table-column prop="cumulantB" label="靛蓝前打底" align="center" width="400"></el-table-column>
                <el-table-column prop="cumulant" label="靛蓝" align="center" width="380"></el-table-column>
                <el-table-column prop="cumulantA" label="靛蓝后套面" align="center" width="400"></el-table-column>
              </el-table-column>
              <el-table-column label="实时上染率（%）" align="center" width="960">
                <el-table-column prop="dyeUptakeB" label="靛蓝前打底" align="center" width="320"></el-table-column>
                <el-table-column prop="dyeUptake" label="靛蓝" align="center" width="320"></el-table-column>
                <el-table-column prop="dyeUptakeA" label="靛蓝后套面" align="center" width="320"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <!-- <div class="mother-shuju-two">
            <div class="mother-shuju-three1">
              <el-pagination
                
                @current-change="handleCurrentChange"
                :page-size="pagesize"
                :current-page="currentPageAA1"
                background
                layout="jumper , prev, pager, next"
                :total="totalAA1"
              ></el-pagination>
            </div>
          </div> -->
        </div>
        <!-- AA2 -->
        <div class="mother-shuju-one">
          <p>2.能耗信息（水）</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataAA2.slice((currentPageAA2-1)*pagesize,currentPageAA2*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column prop="time" label="采集时间" align="center" width="560"></el-table-column>
              <el-table-column prop="water" label="用水信息（吨）" align="center" width="600"></el-table-column>
              <el-table-column prop="waterM" label="用水信息（吨/万米）" align="center" width="740"></el-table-column>
            </el-table>
          </div>

          <!-- <div class="mother-shuju-two">
            <div class="mother-shuju-three2">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageAA2"
                background
                layout="jumper , prev, pager, next"
                :total="totalAA2"
              ></el-pagination>
            </div>
          </div>-->
        </div>
        <!-- AA3 -->
        <div class="mother-shuju-one">
          <p>3.能耗信息（汽）</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataAA3.slice((currentPageAA3-1)*pagesize,currentPageAA3*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column prop="time" label="采集时间" align="center" width="560"></el-table-column>
              <el-table-column prop="steam" label="用汽信息（m³）" align="center" width="600"></el-table-column>
              <el-table-column prop="steamM" label="用汽信息（m³/万米）" align="center" width="740"></el-table-column>
            </el-table>
          </div>

          <!-- <div class="mother-shuju-two">
            <div class="mother-shuju-three2">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageAA3"
                background
                layout="jumper , prev, pager, next"
                :total="totalAA3"
              ></el-pagination>
            </div>
          </div>-->
        </div>
        
        <!-- AA5 -->
        <div class="mother-shuju-one">
          <p style="visibility: hidden;">4.辅料用量信息</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataAA5.slice((currentPageAA5-1)*pagesize2,currentPageAA5*pagesize2)"
              border
              style="width: 100%;"
            >
              <el-table-column width="530">
                <el-table-column prop="time" label="采集时间" align="center" width="530"></el-table-column>
              </el-table-column>

              <el-table-column label="靛蓝" align="center" width="1920">
                <el-table-column prop="dlDosage" label="靛蓝用量（kg/万米）" align="center" width="463.6‬"></el-table-column>
                <el-table-column prop="sjDosage" label="烧碱用量（kg/万米）" align="center" width="463.6‬"></el-table-column>
                <el-table-column prop="bxfDosage" label="保险粉用量（kg/万米）" align="center" width="463.6‬"></el-table-column>
                <el-table-column prop="ksjDosage" label="扩散剂用量（kg/万米）" align="center" width="463.6‬"></el-table-column>
                <!-- <el-table-column prop="stjDosage" label="渗透剂用量（kg/万米）" align="center" width="480"></el-table-column> -->
                <el-table-column prop="stjDosage" label="渗透剂用量（kg/万米）" align="center" width="463.6‬"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <!-- <div class="mother-shuju-two4">
            <div class="mother-shuju-three4">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageAA5"
                background
                layout="jumper , prev, pager, next"
                :total="totalAA5"
              ></el-pagination>
            </div>
          </div>-->
        </div>
        <!-- AA4 -->
        <div class="mother-shuju-one">
          <p>4.辅料用量信息</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataAA4.slice((currentPageAA4-1)*pagesize2,currentPageAA4*pagesize2)"
              border
              style="width: 100%;"
            >
              <!-- <el-table-column width="450">
                <el-table-column prop="time" label="采集时间" align="center" width="150"></el-table-column>
              </el-table-column> -->
              <el-table-column label="靛蓝前打底" align="center" width="1450">
                <el-table-column prop="dyeDosageBRD" label="染料用量（kg/万米）" align="center" width="482"></el-table-column>
                <el-table-column
                  prop="hyjDosageBRD"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="484"
                ></el-table-column>
                <el-table-column prop="zjDosageBRD" label="助剂用量（kg/万米）" align="center" width="459"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <!-- <div class="mother-shuju-two4">
            <div class="mother-shuju-three4">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageAA4"
                background
                layout="jumper , prev, pager, next"
                :total="totalAA4"
              ></el-pagination>
            </div>
          </div>-->
        </div>
        <!-- AA6 -->
        <div class="mother-shuju-one">
          <p style="visibility: hidden;">6.辅料用量信息</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataAA6.slice((currentPageAA6-1)*pagesize2,currentPageAA6*pagesize2)"
              border
              style="width: 100%;"
            >
              <!-- <el-table-column width="450">
                <el-table-column prop="time" label="采集时间" align="center" width="150"></el-table-column>
              </el-table-column> -->

              <el-table-column label="靛蓝后套面" align="center" width="1900">
                <el-table-column prop="dyeDosageBCD" label="染料用量（kg/万米）" align="center" width="480"></el-table-column>
                <el-table-column
                  prop="hyjDosageBCD"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="470"
                ></el-table-column>
                <el-table-column prop="zjDosageBCD" label="助剂用量（kg/万米）" align="center" width="445"></el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <!-- <div class="mother-shuju-two4">
            <div class="mother-shuju-three4">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageAA6"
                background
                layout="jumper , prev, pager, next"
                :total="totalAA6"
              ></el-pagination>
            </div>
          </div>-->
        </div>
        <!-- AA7 -->
        <div class="mother-shuju-one">
          <p>5.过程检测信息</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataAA7.slice((currentPageAA7-1)*pagesize,currentPageAA7*pagesize)"
              border
              style="width: 100%;"
            >
              <el-table-column prop="time" label="采集时间" align="center" width="650"></el-table-column>
              <el-table-column prop="type" label="采集点" align="center" width="240"></el-table-column>
              <el-table-column
                prop="indigoConcentration"
                label="靛蓝浓度（g/l）"
                align="center"
                width="260"
              ></el-table-column>
              <el-table-column prop="ph" label="pH" align="center" width="140"></el-table-column>
              <el-table-column prop="orp" label="ORP（mv）" align="center" width="140"></el-table-column>
              <el-table-column prop="powder" label="游离保险粉浓度（g/l）" align="center" width="470"></el-table-column>
            </el-table>
          </div>

          <!-- <div class="mother-shuju-two">
            <div class="mother-shuju-three2">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageAA7"
                background
                layout="jumper , prev, pager, next"
                :total="totalAA7"
              ></el-pagination>
            </div>
          </div>-->
        </div>
      </div>
    </div>

    <foot></foot>
  </div>
</template>
<script>
import axios from "axios";
import foot from "./foot.vue";
import login from "./login_assembly.vue";
export default {
  data() {
    return {
      valuA: "A",
      valuB: "B",
      valuC: "C",
      valuD: "D",
      valuE: "E",

      mm: {},
      biaozhunzhi: {},
      // mB: "",
      // mC: "",
      // mD: "",
      // mE: "",

      // bzA: {},
      // bzB: {},
      // bzC: {},
      // bzD: {},
      // bzE: {},

      pagesize: 9,
      pagesize1: 8,
      pagesize3: 8,

      pagesize2: 6, //之后要改回来
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

      tableDataAA5: [],
      currentPageAA5: 1,
      totalAA5: 0,

      tableDataAA6: [],
      currentPageAA6: 1,
      totalAA6: 0,

      tableDataAA7: [],
      currentPageAA7: 1,
      totalAA7: 0,

       str:Object
    };
  },
  
  components: { foot, login },
  mounted() {
    this.setShuju(0, "A");
    // 轮播
    // setInterval(this.sett, 90000);
    this.xuanran()
    this.str = setInterval(this.xuanran,30000)

    
  },
  beforeDestroy(){
    console.log(1111);
    
    clearInterval(this.str)
  },
  // created() {
  //       this.handleUserList()
  //   },
    
  methods: {
     // 初始页currentPage、初始每页数据数pagesize和数据data
        // handleSizeChange: function (size) {
        //         this.pagesize = size;
        //         console.log(this.pagesize)  //每页下拉显示数据
        // },
        // handleCurrentChange: function(currentPage){
        //         this.currentPageAA1 = currentPage;
        //         console.log(this.currentPageAA1)  //点击第几页
        //         //AA1
        //         axios
        //           .get(
        //             "/api/getProcessExecutionInfo",
        //             {
        //               params: {
        //                 limit: this.pagesize3,
        //                 page: this.currentPageAA1,
        //                 lineID: lineID,
        //                 cylinderNo: `${dataset.cylinderNo}`,
        //                 type: 4
        //               }
        //             }
        //           )
        //           .then(res => {
        //             // console.log("resAA1", res.data);
        //             this.tableDataAA1 = res.data.data;
        //             var obj1 = {
        //               additionalTrafficBottoming: this.biaozhunzhi
        //                 .additionalFlowRateIStandardBRD, //靛蓝前母液追加流量
        //               additionalTrafficIndigo: this.biaozhunzhi
        //                 .additionalFlowRateIStandard, //靛蓝母液追加流量
        //               additionalTrafficSurface: this.biaozhunzhi
        //                 .additionalFlowRateIStandardBCD, //靛蓝后母液追加流量
        //               boardName: "A", //生产线名称
        //               cumulant: this.biaozhunzhi.totalDosage, //靛蓝缸次累加量
        //               cumulantA: this.biaozhunzhi.totalDosageBCD, //靛蓝后缸次累加量
        //               cumulantB: this.biaozhunzhi.totalDosageBRD, //靛蓝前缸次累加量
        //               cylinderNo: this.biaozhunzhi.cylinderNo, //缸号
        //               dyeUptake: this.biaozhunzhi.dyeUptakeI, //上染率实际值
        //               dyeUptakeA: this.biaozhunzhi.dyeUptakeIBCD, //上染率实际值（靛蓝后）
        //               dyeUptakeB: this.biaozhunzhi.dyeUptakeIBRD, //上染率实际值（靛蓝前）
        //               time: "标准值", //
        //               // totalCount: 12,//
        //               vehicleSpeed: this.biaozhunzhi.speedStandard //车速
        //             };

        //             // this.tableDataAA1.unshift(obj1);
        //             this.totalAA1 = res.data.total;
        //           });

        // },
        // handleUserList() {
        //     this.$http.get('/api/getProcessExecutionInfo').then(res => {  //这是从本地请求的数据接口，
        //         console.log('分页',res);
                
        //         this.userList = res.body
        //     })
        // },
     xuanran() {
       console.log(this.cur);
      if (this.cur==0) {
        lineID = "A"
      }
      if (this.cur==1) {
        lineID = "B"
      }
      if (this.cur==2) {
        lineID = "C"
      }
      if (this.cur==3) {
        lineID = "D"
      }
      if (this.cur==4) {
        lineID = "E"
      }

      console.log(lineID);

      this.tableDataAA1 = [];
      this.tableDataAA2 = [];
      this.tableDataAA3 = [];
      this.tableDataAA4 = [];
      this.tableDataAA5 = [];
      this.tableDataAA6 = [];
      this.tableDataAA7 = [];

      //////////////////////////////////////////////////////
      var usp = new URLSearchParams();
      usp.append("lineID", lineID);
      // console.log(usp);
      axios
        .post("/getRunningBasicInfo", usp)
        .then(res => {
          console.log("res基本数据获取" + lineID, res.data.data);
          var dataset = res.data.data[0];
          console.log(dataset); //undefined

          if (dataset === undefined) {
            console.log("没有数据");
            this.mm = "";

            return;
          }
          this.mm = dataset;

          if (this.mm != "") {
            axios //标准
              .get(
                "/api/getControlStandardProduction",
                {
                  params: {
                    cylinderNo: this.mm.cylinderNo
                  }
                }
              )
              .then(res => {
                // console.log("setbiaozhunA", res.data);
                this.biaozhunzhi = res.data.data[0];

                //////////////////////////////////////////////////////////////////////////

                //AA1
                axios
                  .get(
                    "/api/getProcessExecutionInfo",
                    {
                      params: {
                        limit: this.pagesize3,
                        page: this.currentPageAA1,
                        lineID: lineID,
                        cylinderNo: `${dataset.cylinderNo}`,
                        type: 4
                      }
                    }
                  )
                  .then(res => {
                    // console.log("resAA1", res.data);
                    this.tableDataAA1 = res.data.data;
                    var obj1 = {
                      additionalTrafficBottoming: this.biaozhunzhi
                        .additionalFlowRateIStandardBRD, //靛蓝前母液追加流量
                      additionalTrafficIndigo: this.biaozhunzhi
                        .additionalFlowRateIStandard, //靛蓝母液追加流量
                      additionalTrafficSurface: this.biaozhunzhi
                        .additionalFlowRateIStandardBCD, //靛蓝后母液追加流量
                      boardName: "A", //生产线名称
                      cumulant: this.biaozhunzhi.totalDosage, //靛蓝缸次累加量
                      cumulantA: this.biaozhunzhi.totalDosageBCD, //靛蓝后缸次累加量
                      cumulantB: this.biaozhunzhi.totalDosageBRD, //靛蓝前缸次累加量
                      cylinderNo: this.biaozhunzhi.cylinderNo, //缸号
                      dyeUptake: this.biaozhunzhi.dyeUptakeI, //上染率实际值
                      dyeUptakeA: this.biaozhunzhi.dyeUptakeIBCD, //上染率实际值（靛蓝后）
                      dyeUptakeB: this.biaozhunzhi.dyeUptakeIBRD, //上染率实际值（靛蓝前）
                      time: "标准值", //
                      // totalCount: 12,//
                      vehicleSpeed: this.biaozhunzhi.speedStandard //车速
                    };

                    this.tableDataAA1.unshift(obj1);
                    this.totalAA1 = res.data.total;
                  });

                //AA2
                axios
                  .get("/api/getEnergyConsumption", {
                    params: {
                      limit: this.pagesize,
                      page: this.currentPageAA2,
                      lineID: lineID,
                      cylinderNo: `${dataset.cylinderNo}`,
                      type: 2
                    }
                  })
                  .then(res => {
                    // console.log("resAA2", res.data);
                    this.tableDataAA2 = res.data.data;
                    var obj2 = {
                      boardName: "A",
                      cylinderNo: "001", //
                      id: "F50AC117-F833-4418-83B4-0608B2BE3165", //
                      steam: 0, //累计流量//
                      steamM: 0, //
                      time: "标准值", //
                      totalCount: 7, //
                      water: Number(this.biaozhunzhi.waterInformationM) / 10000, //
                      waterM: this.biaozhunzhi.waterInformationM //用水信息万米量
                    };
                    this.tableDataAA2.unshift(obj2);
                    this.totalAA2 = res.data.total;
                  });
                //AA3
                axios
                  .get("/api/getEnergyConsumption", {
                    params: {
                      limit: this.pagesize,
                      page: this.currentPageAA3,
                      lineID: "A",
                      cylinderNo: `${dataset.cylinderNo}`,
                      type: 1
                    }
                  })
                  .then(res => {
                    // console.log("resAA3", res.data);
                    this.tableDataAA3 = res.data.data;
                    var obj3 = {
                      boardName: "A",
                      cylinderNo: "001",
                      id: "E7EF72A3-F3C1-4294-91F0-AD45CF7C20AA",
                      steam:
                        Number(this.biaozhunzhi.electricityInformationM) /
                        10000,
                      steamM: this.biaozhunzhi.electricityInformationM, //用汽信息（吨/万米）
                      time: "标准值",
                      totalCount: 7,
                      water: 0,
                      waterM: 0
                    };
                    this.tableDataAA3.unshift(obj3);
                    this.totalAA3 = res.data.total;
                  });

                //AA5
                axios
                  .get("/api/getDosageOfExcipients", {
                    params: {
                      limit: this.pagesize2,
                      page: this.currentPageAA5,
                      cylinderNo: `${dataset.cylinderNo}`,
                      type: 1
                    }
                  })
                  .then(res => {
                    // console.log("resAA4", res.data);
                    this.tableDataAA5 = res.data.data;
                    var obj5 = {
                      bxfDosage: this.biaozhunzhi.bxfDosage, //保险粉用量
                      dlDosage: this.biaozhunzhi.dlDosage, //靛蓝用量
                      ksjDosage: this.biaozhunzhi.ksjDosage, //扩散剂用量
                      sjDosage: this.biaozhunzhi.sjDosage, //烧碱用量
                      stjDosage: this.biaozhunzhi.stjDosage, //渗透液用量
                      time: "标准值" //
                    };
                    this.tableDataAA5.unshift(obj5);
                    this.totalAA5 = res.data.total;

                    //AA4
                    axios
                      .get(
                        "/api/getDosageOfExcipients",
                        {
                          params: {
                            limit: this.pagesize2,
                            page: this.currentPageAA4,
                            cylinderNo: `${dataset.cylinderNo}`,
                            type: 2
                          }
                        }
                      )
                      .then(res => {
                        // console.log("resAA4", res.data);
                        this.tableDataAA4 = res.data.data;
                        var obj4 = {
                          time: "标准值", //
                          dyeDosageBRD: this.biaozhunzhi.dyeDosageBRD, //染料靛蓝前用量
                          zjDosageBRD: this.biaozhunzhi.zjDosageBRD, //助剂靛蓝前用量
                          hyjDosageBRD: this.biaozhunzhi.lhjDosageBRD //还原剂靛蓝前用量
                        };
                        this.tableDataAA4.unshift(obj4);
                        this.totalAA4 = res.data.total;

                        //AA6
                        axios
                          .get(
                            "/api/getDosageOfExcipients",
                            {
                              params: {
                                limit: this.pagesize2,
                                page: this.currentPageAA6,
                                cylinderNo: `${dataset.cylinderNo}`,
                                type: 3
                              }
                            }
                          )
                          .then(res => {
                            // console.log("resAA4", res.data);
                            this.tableDataAA6 = res.data.data;
                            var obj6 = {
                              time: "标准值", //
                              dyeDosageBCD: this.biaozhunzhi.dyeDosageBCD, //染料靛后用量
                              zjDosageBCD: this.biaozhunzhi.zjDosageBCD, //助剂靛蓝后用量
                              hyjDosageBCD: this.biaozhunzhi.lhjDosageBCD //还原剂靛蓝后用量
                            };
                            this.tableDataAA6.unshift(obj6);
                            this.totalAA6 = res.data.total;
                          });
                      });
                  });

                //AA7
                axios
                  .get(
                    "/api/getProcessDetectionInfo",
                    {
                      params: {
                        limit: this.pagesize,
                        page: this.currentPageAA7,
                        cylinderNo: this.mm.cylinderNo,
                        type: 4
                        // lineID: "A"
                      }
                    }
                  )
                  .then(res => {
                    // console.log("resAA5", res.data);
                    this.tableDataAA7 = res.data.data;
                    var obj7 = {
                      boardName: "A",
                      cylinderNo: "001",
                      dyeingTank: "2",
                      id: "F6D12B9E-E275-47B7-8431-32ED9CAAA2B6",
                      indigoConcentration: this.biaozhunzhi.indigoConcentration, //生产过程检测靛蓝浓度
                      orp: this.biaozhunzhi.oRP,
                      ph: this.biaozhunzhi.pH,
                      powder: this.biaozhunzhi.insurancePowder, //保险粉
                      time: "标准值",
                      totalCount: 20,
                      type: "靛蓝"
                    };
                    this.tableDataAA7.unshift(obj7);
                    this.totalAA7 = res.data.total;
                  });
              });
          }
        });
    },
    setShuju(over, lineID) {
      this.cur = over;
      console.log(lineID);

      this.tableDataAA1 = [];
      this.tableDataAA2 = [];
      this.tableDataAA3 = [];
      this.tableDataAA4 = [];
      this.tableDataAA5 = [];
      this.tableDataAA6 = [];
      this.tableDataAA7 = [];

      //////////////////////////////////////////////////////
      var usp = new URLSearchParams();
      usp.append("lineID", lineID);
      // console.log(usp);
      axios
        .post("/getRunningBasicInfo", usp)
        .then(res => {
          console.log("res基本数据获取" + lineID, res.data.data);
          var dataset = res.data.data[0];
          console.log(dataset); //undefined

          if (dataset === undefined) {
            console.log("没有数据");
            this.mm = "";

            return;
          }
          this.mm = dataset;

          if (this.mm != "") {
            axios //标准
              .get(
                "/api/getControlStandardProduction",
                {
                  params: {
                    cylinderNo: this.mm.cylinderNo
                  }
                }
              )
              .then(res => {
                // console.log("setbiaozhunA", res.data);
                this.biaozhunzhi = res.data.data[0];

                //////////////////////////////////////////////////////////////////////////

                //AA1
                axios
                  .get(
                    "/api/getProcessExecutionInfo",
                    {
                      params: {
                        limit: "all",
                        page: this.currentPageAA1,
                        lineID: lineID,
                        cylinderNo: `${dataset.cylinderNo}`,
                        type: 4
                      }
                    }
                  )
                  .then(res => {
                    // console.log("resAA1", res.data);
                    this.tableDataAA1 = res.data.data;
                    var obj1 = {
                      additionalTrafficBottoming: this.biaozhunzhi
                        .additionalFlowRateIStandardBRD, //靛蓝前母液追加流量
                      additionalTrafficIndigo: this.biaozhunzhi
                        .additionalFlowRateIStandard, //靛蓝母液追加流量
                      additionalTrafficSurface: this.biaozhunzhi
                        .additionalFlowRateIStandardBCD, //靛蓝后母液追加流量
                      boardName: "A", //生产线名称
                      cumulant: this.biaozhunzhi.totalDosage, //靛蓝缸次累加量
                      cumulantA: this.biaozhunzhi.totalDosageBCD, //靛蓝后缸次累加量
                      cumulantB: this.biaozhunzhi.totalDosageBRD, //靛蓝前缸次累加量
                      cylinderNo: this.biaozhunzhi.cylinderNo, //缸号
                      dyeUptake: this.biaozhunzhi.dyeUptakeI, //上染率实际值
                      dyeUptakeA: this.biaozhunzhi.dyeUptakeIBCD, //上染率实际值（靛蓝后）
                      dyeUptakeB: this.biaozhunzhi.dyeUptakeIBRD, //上染率实际值（靛蓝前）
                      time: "标准值", //
                      // totalCount: 12,//
                      vehicleSpeed: this.biaozhunzhi.speedStandard //车速
                    };

                    this.tableDataAA1.unshift(obj1);
                    this.totalAA1 = res.data.total;
                  });

                //AA2
                axios
                  .get("/api/getEnergyConsumption", {
                    params: {
                      limit: this.pagesize,
                      page: this.currentPageAA2,
                      lineID: lineID,
                      cylinderNo: `${dataset.cylinderNo}`,
                      type: 2
                    }
                  })
                  .then(res => {
                    // console.log("resAA2", res.data);
                    this.tableDataAA2 = res.data.data;
                    var obj2 = {
                      boardName: "A",
                      cylinderNo: "001", //
                      id: "F50AC117-F833-4418-83B4-0608B2BE3165", //
                      steam: 0, //累计流量//
                      steamM: 0, //
                      time: "标准值", //
                      totalCount: 7, //
                      water: Number(this.biaozhunzhi.waterInformationM) / 10000, //
                      waterM: this.biaozhunzhi.waterInformationM //用水信息万米量
                    };
                    this.tableDataAA2.unshift(obj2);
                    this.totalAA2 = res.data.total;
                  });
                //AA3
                axios
                  .get("/api/getEnergyConsumption", {
                    params: {
                      limit: this.pagesize,
                      page: this.currentPageAA3,
                      lineID: "A",
                      cylinderNo: `${dataset.cylinderNo}`,
                      type: 1
                    }
                  })
                  .then(res => {
                    // console.log("resAA3", res.data);
                    this.tableDataAA3 = res.data.data;
                    var obj3 = {
                      boardName: "A",
                      cylinderNo: "001",
                      id: "E7EF72A3-F3C1-4294-91F0-AD45CF7C20AA",
                      steam:
                        Number(this.biaozhunzhi.electricityInformationM) /
                        10000,
                      steamM: this.biaozhunzhi.electricityInformationM, //用汽信息（吨/万米）
                      time: "标准值",
                      totalCount: 7,
                      water: 0,
                      waterM: 0
                    };
                    this.tableDataAA3.unshift(obj3);
                    this.totalAA3 = res.data.total;
                  });

                //AA5
                axios
                  .get("/api/getDosageOfExcipients", {
                    params: {
                      limit: this.pagesize2,
                      page: this.currentPageAA5,
                      cylinderNo: `${dataset.cylinderNo}`,
                      type: 1
                    }
                  })
                  .then(res => {
                    // console.log("resAA4", res.data);
                    this.tableDataAA5 = res.data.data;
                    var obj5 = {
                      bxfDosage: this.biaozhunzhi.bxfDosage, //保险粉用量
                      dlDosage: this.biaozhunzhi.dlDosage, //靛蓝用量
                      ksjDosage: this.biaozhunzhi.ksjDosage, //扩散剂用量
                      sjDosage: this.biaozhunzhi.sjDosage, //烧碱用量
                      stjDosage: this.biaozhunzhi.stjDosage, //渗透液用量
                      time: "标准值" //
                    };
                    this.tableDataAA5.unshift(obj5);
                    this.totalAA5 = res.data.total;

                    //AA4
                    axios
                      .get(
                        "/api/getDosageOfExcipients",
                        {
                          params: {
                            limit: this.pagesize2,
                            page: this.currentPageAA4,
                            cylinderNo: `${dataset.cylinderNo}`,
                            type: 2
                          }
                        }
                      )
                      .then(res => {
                        // console.log("resAA4", res.data);
                        this.tableDataAA4 = res.data.data;
                        var obj4 = {
                          time: "标准值", //
                          dlDosageBRD: this.biaozhunzhi.dyeDosageBRD, //染料靛蓝前用量
                          zjDosageBRD: this.biaozhunzhi.zjDosageBRD, //助剂靛蓝前用量
                          hyjDosageBRD: this.biaozhunzhi.lhjDosageBRD //还原剂靛蓝前用量
                        };
                        this.tableDataAA4.unshift(obj4);
                        this.totalAA4 = res.data.total;

                        //AA6
                        axios
                          .get(
                            "/api/getDosageOfExcipients",
                            {
                              params: {
                                limit: this.pagesize2,
                                page: this.currentPageAA6,
                                cylinderNo: `${dataset.cylinderNo}`,
                                type: 3
                              }
                            }
                          )
                          .then(res => {
                            // console.log("resAA4", res.data);
                            this.tableDataAA6 = res.data.data;
                            var obj6 = {
                              time: "标准值", //
                              dlDosageBCD: this.biaozhunzhi.dyeDosageBCD, //染料靛后用量
                              zjDosageBCD: this.biaozhunzhi.zjDosageBCD, //助剂靛蓝后用量
                              hyjDosageBCD: this.biaozhunzhi.lhjDosageBCD //还原剂靛蓝后用量
                            };
                            this.tableDataAA6.unshift(obj6);
                            this.totalAA6 = res.data.total;
                          });
                      });
                  });

                //AA7
                axios
                  .get(
                    "/api/getProcessDetectionInfo",
                    {
                      params: {
                        limit: this.pagesize,
                        page: this.currentPageAA7,
                        cylinderNo: this.mm.cylinderNo,
                        type: 4
                        // lineID: "A"
                      }
                    }
                  )
                  .then(res => {
                    // console.log("resAA5", res.data);
                    this.tableDataAA7 = res.data.data;
                    var obj7 = {
                      boardName: "A",
                      cylinderNo: "001",
                      dyeingTank: "2",
                      id: "F6D12B9E-E275-47B7-8431-32ED9CAAA2B6",
                      indigoConcentration: this.biaozhunzhi.indigoConcentration, //生产过程检测靛蓝浓度
                      orp: this.biaozhunzhi.oRP,
                      ph: this.biaozhunzhi.pH,
                      powder: this.biaozhunzhi.insurancePowder, //保险粉
                      time: "标准值",
                      totalCount: 20,
                      type: "靛蓝"
                    };
                    this.tableDataAA7.unshift(obj7);
                    this.totalAA7 = res.data.total;
                  });
              });
          }
        });
    },
    ///////////////////////////////////////////
    aaa(over, lineID) {
      this.cur = over;
      console.log(lineID);

      this.tableDataAA1 = [];
      this.tableDataAA2 = [];
      this.tableDataAA3 = [];
      this.tableDataAA4 = [];
      this.tableDataAA5 = [];
      this.tableDataAA6 = [];
      this.tableDataAA7 = [];

      //////////////////////////////////////////////////////
      var usp = new URLSearchParams();
      usp.append("lineID", lineID);
      // console.log(usp);
      axios
        .post("/getRunningBasicInfo", usp)
        .then(res => {
          console.log("res基本数据获取" + lineID, res.data.data);
          var dataset = res.data.data[0];
          console.log(dataset); //undefined

          if (dataset === undefined) {
            console.log("没有数据");
            this.mm = "";

            return;
          }
          this.mm = dataset;

          if (this.mm != "") {
            axios //标准
              .get(
                "/api/getControlStandardProduction",
                {
                  params: {
                    cylinderNo: this.mm.cylinderNo
                  }
                }
              )
              .then(res => {
                // console.log("setbiaozhunA", res.data);
                this.biaozhunzhi = res.data.data[0];
                console.log(this.biaozhunzhi);
                

                //////////////////////////////////////////////////////////////////////////

                //AA1
                axios
                  .get(
                    "/api/getProcessExecutionInfo",
                    {
                      params: {
                        limit: this.pagesize3,
                        page: this.currentPageAA1,
                        lineID: lineID,
                        cylinderNo: `${dataset.cylinderNo}`,
                        type: 4
                      }
                    }
                  )
                  .then(res => {
                    // console.log("resAA1", res.data);
                    this.tableDataAA1 = res.data.data;
                    var obj1 = {
                      additionalTrafficBottoming: this.biaozhunzhi
                        .additionalFlowRateIStandardBRD, //靛蓝前母液追加流量
                      additionalTrafficIndigo: this.biaozhunzhi
                        .additionalFlowRateIStandard, //靛蓝母液追加流量
                      additionalTrafficSurface: this.biaozhunzhi
                        .additionalFlowRateIStandardBCD, //靛蓝后母液追加流量
                      boardName: "A", //生产线名称
                      cumulant: this.biaozhunzhi.totalDosage, //靛蓝缸次累加量
                      cumulantA: this.biaozhunzhi.totalDosageBCD, //靛蓝后缸次累加量
                      cumulantB: this.biaozhunzhi.totalDosageBRD, //靛蓝前缸次累加量
                      cylinderNo: this.biaozhunzhi.cylinderNo, //缸号
                      dyeUptake: this.biaozhunzhi.dyeUptakeI, //上染率实际值
                      dyeUptakeA: this.biaozhunzhi.dyeUptakeIBCD, //上染率实际值（靛蓝后）
                      dyeUptakeB: this.biaozhunzhi.dyeUptakeIBRD, //上染率实际值（靛蓝前）
                      time: "标准值", //
                      // totalCount: 12,//
                      vehicleSpeed: this.biaozhunzhi.speedStandard //车速
                    };

                    this.tableDataAA1.unshift(obj1);
                    this.totalAA1 = res.data.total;
                  });

                //AA2
                axios
                  .get("http://125.89.236.222:8006/api/getEnergyConsumption", {
                    params: {
                      limit: this.pagesize,
                      page: this.currentPageAA2,
                      lineID: lineID,
                      cylinderNo: `${dataset.cylinderNo}`,
                      type: 2
                    }
                  })
                  .then(res => {
                    // console.log("resAA2", res.data);
                    this.tableDataAA2 = res.data.data;
                    var obj2 = {
                      boardName: "A",
                      cylinderNo: "001", //
                      id: "F50AC117-F833-4418-83B4-0608B2BE3165", //
                      steam: 0, //累计流量//
                      steamM: 0, //
                      time: "标准值", //
                      totalCount: 7, //
                      water: Number(this.biaozhunzhi.waterInformationM) / 10000, //
                      waterM: this.biaozhunzhi.waterInformationM //用水信息万米量
                    };
                    this.tableDataAA2.unshift(obj2);
                    this.totalAA2 = res.data.total;
                  });
                //AA3
                axios
                  .get("http://125.89.236.222:8006/api/getEnergyConsumption", {
                    params: {
                      limit: this.pagesize,
                      page: this.currentPageAA3,
                      lineID: "A",
                      cylinderNo: `${dataset.cylinderNo}`,
                      type: 1
                    }
                  })
                  .then(res => {
                    // console.log("resAA3", res.data);
                    this.tableDataAA3 = res.data.data;
                    var obj3 = {
                      boardName: "A",
                      cylinderNo: "001",
                      id: "E7EF72A3-F3C1-4294-91F0-AD45CF7C20AA",
                      steam:
                        Number(this.biaozhunzhi.electricityInformationM) /
                        10000,
                      steamM: this.biaozhunzhi.electricityInformationM, //用汽信息（吨/万米）
                      time: "标准值",
                      totalCount: 7,
                      water: 0,
                      waterM: 0
                    };
                    this.tableDataAA3.unshift(obj3);
                    this.totalAA3 = res.data.total;
                  });

                //AA5
                axios
                  .get("http://125.89.236.222:8006/api/getDosageOfExcipients", {
                    params: {
                      limit: this.pagesize2,
                      page: this.currentPageAA5,
                      cylinderNo: `${dataset.cylinderNo}`,
                      type: 1
                    }
                  })
                  .then(res => {
                    // console.log("resAA4", res.data);
                    this.tableDataAA5 = res.data.data;
                    var obj5 = {
                      bxfDosage: this.biaozhunzhi.bxfDosage, //保险粉用量
                      dlDosage: this.biaozhunzhi.dlDosage, //靛蓝用量
                      ksjDosage: this.biaozhunzhi.ksjDosage, //扩散剂用量
                      sjDosage: this.biaozhunzhi.sjDosage, //烧碱用量
                      stjDosage: this.biaozhunzhi.stjDosage, //渗透液用量
                      time: "标准值" //
                    };
                    this.tableDataAA5.unshift(obj5);
                    this.totalAA5 = res.data.total;

                    //AA4
                    axios
                      .get(
                        "http://125.89.236.222:8006/api/getDosageOfExcipients",
                        {
                          params: {
                            limit: this.pagesize2,
                            page: this.currentPageAA4,
                            cylinderNo: `${dataset.cylinderNo}`,
                            type: 2
                          }
                        }
                      )
                      .then(res => {
                        // console.log("resAA4", res.data);
                        this.tableDataAA4 = res.data.data;
                        var obj4 = {
                          time: "标准值", //
                          dyeDosageBRD: this.biaozhunzhi.dyeDosageBRD, //染料靛蓝前用量
                          zjDosageBRD: this.biaozhunzhi.zjDosageBRD, //助剂靛蓝前用量
                          hyjDosageBRD: this.biaozhunzhi.lhjDosageBRD //还原剂靛蓝前用量
                        };
                        this.tableDataAA4.unshift(obj4);
                        this.totalAA4 = res.data.total;

                        //AA6
                        axios
                          .get(
                            "http://125.89.236.222:8006/api/getDosageOfExcipients",
                            {
                              params: {
                                limit: this.pagesize2,
                                page: this.currentPageAA6,
                                cylinderNo: `${dataset.cylinderNo}`,
                                type: 3
                              }
                            }
                          )
                          .then(res => {
                            // console.log("resAA4", res.data);
                            this.tableDataAA6 = res.data.data;
                            var obj6 = {
                              time: "标准值", //
                              dyeDosageBCD: this.biaozhunzhi.dyeDosageBCD, //染料靛后用量
                              zjDosageBCD: this.biaozhunzhi.zjDosageBCD, //助剂靛蓝后用量
                              hyjDosageBCD: this.biaozhunzhi.lhjDosageBCD //还原剂靛蓝后用量
                            };
                            this.tableDataAA6.unshift(obj6);
                            this.totalAA6 = res.data.total;
                          });
                      });
                  });

                //AA7
                axios
                  .get(
                    "http://125.89.236.222:8006/api/getProcessDetectionInfo",
                    {
                      params: {
                        limit: this.pagesize,
                        page: this.currentPageAA7,
                        cylinderNo: this.mm.cylinderNo,
                        type: 4
                        // lineID: "A"
                      }
                    }
                  )
                  .then(res => {
                    // console.log("resAA5", res.data);
                    this.tableDataAA7 = res.data.data;
                    var obj7 = {
                      boardName: "A",
                      cylinderNo: "001",
                      dyeingTank: "2",
                      id: "F6D12B9E-E275-47B7-8431-32ED9CAAA2B6",
                      indigoConcentration: this.biaozhunzhi.indigoConcentration, //生产过程检测靛蓝浓度
                      orp: this.biaozhunzhi.oRP,
                      ph: this.biaozhunzhi.pH,
                      powder: this.biaozhunzhi.insurancePowder, //保险粉
                      time: "标准值",
                      totalCount: 20,
                      type: "靛蓝"
                    };
                    this.tableDataAA7.unshift(obj7);
                    this.totalAA7 = res.data.total;
                  });
              });
          }
        });
    },

   

    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    // },
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
  /* height: 278px; */
  margin: 88px auto 78px;
  /* background: url(..\assets\mother\my_nav.png); */
}
.mother-ul li {
  cursor: pointer;
  width: 18%;
  text-align: center;
  font-size: 100px;
  /* line-height: 270px; */
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
  height: 930px;
  margin-top: 70px;
  margin-left: 20px;
}

.mother-shuju-one:nth-child(1) {
  width: 3800px;
  /* height: 1870px; */
  /* border: 1px solid; */
  position: relative;
  height: 1150px;
}
.mother-shuju-one:nth-child(2) {
  width: 1900px;
  /* height: 1870px; */
  /* border: 1px solid; */
  position: relative;
  height: 1150px;
}
.mother-shuju-one:nth-child(3) {
  width: 1900px;
  /* height: 1870px; */
  /* border: 1px solid; */
  position: relative;
  height: 1150px;
}
.mother-shuju-one:nth-child(4) {
  width: 2848px;
  height: 970px;
  /* border: 1px solid; */
  position: relative;
  margin-top: 40px;
}
.mother-shuju-one:nth-child(5) {
  width: 1426px;
  height: 970px;
  /* border: 1px solid; */
  position: relative;
  margin-top: 40px;
}
.mother-shuju-one:nth-child(6) {
  width: 1426px;
  height: 970px;
  /* border: 1px solid; */
  position: relative;
  margin-top: 40px;
}
.mother-shuju-one:nth-child(7) {
  width: 1900px;
  height: 970px;
  /* border: 1px solid; */
  position: relative;
  margin-top: 40px;
}
.mother-shuju-one p {
  height: 110px;
  width: 100%;
  /* border: solid 1px; */
  text-align: center;
  font-size: 88px;
  color: white;
}

.production-top {
  overflow: hidden;
  /* margin-top: 40px; */
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

.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: transparent;
}
.el-table td,
.el-table th.is-leaf {
  background: transparent;
}
.el-table th,
.el-table tr {
  background: transparent;
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
#imgs {
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
.mother-shuju-table1 .el-table th,
/* .mother-shuju-table1 .el-table tr,  */
.mother-shuju-table2 .el-table th
/* .mother-shuju-table2 .el-table tr{ */ {
  color: white;
  border: rgb(255, 255, 255);

  background-color: transparent !important;
}

.mother-shuju-table1 .el-table tr,
.mother-shuju-table2 .el-table tr {
  color: #e4c072;
  border: rgb(255, 255, 255);
  background-color: transparent !important;
}
/* .mother-shuju-table1 .el-table th, */
.mother-shuju-table1 .el-table tr td, 
/* .mother-shuju-table2 .el-table th, */
.mother-shuju-table2 .el-table tr td {
  padding: 0 !important;
  /* color: #ffffff; */
}

.mother-shuju-table1 .el-table tr {
  padding: 0;
  color: #00ecfc;

  border: rgb(255, 255, 255);
  background-color: transparent !important;
}

.mother-shuju-table1 .el-table tr:nth-child(1) {
  padding: 0;
  color: #e4c072 !important;

  border: rgb(255, 255, 255);
  background-color: transparent !important;
}
</style>

