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
          <span>机台编号:</span>
          <input type="text" disabled="disabled" :value="mm.机台编号" />
          <span>色号:</span>
          <input type="text" disabled="disabled" :value="mm.色号" />
          <span>品种:</span>
          <input type="text" disabled="disabled" :value="mm.品种" />
          <span>缸号:</span>
          <input type="text" disabled="disabled" :value="mm.缸号" />
          <span>整经长度:</span>
          <input type="text" disabled="disabled" :value="mm.整经长度" />
          <span>开机时间:</span>
          <input type="text" disabled="disabled" :value="mm.开机时间" />
          <span>预计了机时间:</span>
          <input type="text" disabled="disabled" :value="mm.预计了机时间" />
          <span>染色序号:</span>
          <input type="text" disabled="disabled" :value="mm.染色序号" />
        </div>
      </div>
      <div class="mother-shuju">
        <!-- AA1 -->
        <div class="mother-shuju-one">
          <p>1.工艺执行信息</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataAA1"
              border
              height="1000"
              style="width: 100%;"
            >  <!-- :row-class-name="tableRowClassName"-->
              <el-table-column width="980">
                <!-- <el-table-column type="index" label="序号" align="center" width="100"></el-table-column> -->
                <el-table-column prop="采集时间" label="采集时间" align="center" width="530">
                  <!--<template slot-scope="scope">-->
                    <!--<span>{{timestampToTime(scope.row.stockTime)}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column prop="车速" label="车速（m/min）" align="center" width="210"></el-table-column>
              </el-table-column>
              <el-table-column label="母液追加流量（l/min）" align="center" width="920">
                <el-table-column
                  prop="追加流量_靛蓝前"
                  label="靛蓝前打底"
                  align="center"
                  width="310"
                ></el-table-column>
                <el-table-column
                  prop="追加流量_靛蓝"
                  label="靛蓝"
                  align="center"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="追加流量_靛蓝后"
                  label="靛蓝后套面"
                  align="center"
                  width="310"
                ></el-table-column>
              </el-table-column>
              <el-table-column label="缸次母液实时累加量（l）" align="center" width="940">
                <el-table-column prop="累加量_靛蓝前" label="靛蓝前打底" align="center" width="400"></el-table-column>
                <el-table-column prop="累加量_靛蓝" label="靛蓝" align="center" width="380"></el-table-column>
                <el-table-column prop="累加量_靛蓝后" label="靛蓝后套面" align="center" width="400"></el-table-column>
              </el-table-column>
              <el-table-column label="实时上染率（%）" align="center" width="960">
                <el-table-column prop="上染率_靛蓝前" label="靛蓝前打底" align="center" width="320"></el-table-column>
                <el-table-column prop="上染率_靛蓝" label="靛蓝" align="center" width="320"></el-table-column>
                <el-table-column prop="上染率_靛蓝后" label="靛蓝后套面" align="center" width="320"></el-table-column>
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
              height="900"
              :data="tableDataAA2"
              border
              style="width: 100%;"
            >
              <el-table-column prop="采集时间" label="采集时间" align="center" width="560">
              </el-table-column>
              <el-table-column prop="用水信息(吨)" label="用水信息（吨）" align="center" width="600"></el-table-column>
              <el-table-column prop="用水信息(吨/万米)" label="用水信息（吨/万米）" align="center" width="740"></el-table-column>
            </el-table>
          </div>
        </div>
        <!-- AA3 -->
        <div class="mother-shuju-one">
          <p>3.能耗信息（汽）</p>
          <div class="mother-shuju-table1">
            <el-table
              height="900"
              :data="tableDataAA3"
              border
              style="width: 100%;"
            >
              <el-table-column prop="采集时间" label="采集时间" align="center" width="560">
              </el-table-column>
              <el-table-column prop="用汽信息(m³)" label="用汽信息（m³）" align="center" width="600"></el-table-column>
              <el-table-column prop="用汽信息(m³/万米)" label="用汽信息（m³/万米）" align="center" width="740"></el-table-column>
            </el-table>
          </div>
        </div>

        <!-- AA5 -->
        <div class="mother-shuju-one">
          <p >4.辅料用量信息</p>
          <!--//style="visibility: hidden;"-->
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataAA5"
              border
              height="800px"
              style=""
            >
              <el-table-column width="530">
                <el-table-column prop="机台编号" label="机台编号" align="center"width="250" ></el-table-column>
                <el-table-column prop="采集时间" label="采集时间" align="center" width="530">
                  <!--<template slot-scope="scope">-->
                    <!--<span>{{timestampToTime(scope.row.stockTime)}}</span>-->
                  <!--</template>-->
                </el-table-column>
              </el-table-column>

              <el-table-column label="靛蓝" align="center" width="1920">
                <el-table-column prop="靛蓝染料用量" label="靛蓝用量（kg/万米）" align="center" width="250.6‬"></el-table-column>
                <el-table-column prop="靛蓝烧碱用量" label="烧碱用量（kg/万米）" align="center" width="250.6‬"></el-table-column>
                <el-table-column prop="靛蓝保险粉用量" label="保险粉用量（kg/万米）" align="center" width="250.6‬"></el-table-column>
                <el-table-column prop="靛蓝扩散剂用量" label="扩散剂用量（kg/万米）" align="center" width="250.6‬"></el-table-column>
                <!-- <el-table-column prop="stjDosage" label="渗透剂用量（kg/万米）" align="center" width="480"></el-table-column> -->
                <el-table-column prop="靛蓝渗透剂用量" label="渗透剂用量（kg/万米）" align="center" width="463.6‬"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝前打底" align="center" width="1450">
                <el-table-column prop="靛蓝前染料用量" label="染料用量（kg/万米）" align="center" width="482"></el-table-column>
                <el-table-column
                  prop="靛蓝前还原剂用量"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="484"
                ></el-table-column>
                <el-table-column prop="靛蓝前助剂用量" label="助剂用量（kg/万米）" align="center" width="459"></el-table-column>
              </el-table-column>
              <el-table-column label="靛蓝后套面" align="center" width="1900">
                <el-table-column prop="靛蓝后染料用量" label="染料用量（kg/万米）" align="center" width="480"></el-table-column>
                <el-table-column
                  prop="靛蓝后还原剂用量"
                  label="还原剂用量（kg/万米）"
                  align="center"
                  width="470"
                ></el-table-column>
                <el-table-column prop="靛蓝后助剂用量" label="助剂用量（kg/万米）" align="center" width="445"></el-table-column>
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
        <!--<div class="mother-shuju-one">-->
          <!--<p>4.辅料用量信息</p>-->
          <!--<div class="mother-shuju-table1">-->
            <!--<el-table-->
              <!--:data="tableDataAA5"-->
              <!--border-->
              <!--height="800px"-->
              <!--style="width: 100%;"-->
            <!--&gt;-->
              <!--&lt;!&ndash; <el-table-column width="450">-->
                <!--<el-table-column prop="time" label="采集时间" align="center" width="150"></el-table-column>-->
              <!--</el-table-column> &ndash;&gt;-->

            <!--</el-table>-->
          <!--</div>-->

          <!--&lt;!&ndash; <div class="mother-shuju-two4">-->
            <!--<div class="mother-shuju-three4">-->
              <!--<el-pagination-->
                <!--:page-size="pagesize"-->
                <!--:current-page.sync="currentPageAA4"-->
                <!--background-->
                <!--layout="jumper , prev, pager, next"-->
                <!--:total="totalAA4"-->
              <!--&gt;</el-pagination>-->
            <!--</div>-->
          <!--</div>&ndash;&gt;-->
        <!--</div>-->
        <!-- AA6 -->
        <!--<div class="mother-shuju-one">-->
          <!--<p style="visibility: hidden;">6.辅料用量信息</p>-->
          <!--<div class="mother-shuju-table1">-->
            <!--<el-table-->
              <!--:data="tableDataAA5"-->
              <!--border-->
              <!--height="800px"-->
              <!--style="width: 100%;"-->
            <!--&gt;-->
              <!--&lt;!&ndash; <el-table-column width="450">-->
                <!--<el-table-column prop="time" label="采集时间" align="center" width="150"></el-table-column>-->
              <!--</el-table-column> &ndash;&gt;-->


            <!--</el-table>-->
          <!--</div>-->

          <!--&lt;!&ndash; <div class="mother-shuju-two4">-->
            <!--<div class="mother-shuju-three4">-->
              <!--<el-pagination-->
                <!--:page-size="pagesize"-->
                <!--:current-page.sync="currentPageAA6"-->
                <!--background-->
                <!--layout="jumper , prev, pager, next"-->
                <!--:total="totalAA6"-->
              <!--&gt;</el-pagination>-->
            <!--</div>-->
          <!--</div>&ndash;&gt;-->
        <!--</div>-->
        <!-- AA7 -->
        <div class="mother-shuju-one">
          <p>5.过程检测信息</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataAA4"
              border
              height="800px"
              style="width: 100%;"
            >
              <el-table-column prop="机台编号" label="机台编号" align="center" width="200"></el-table-column>
              <el-table-column prop="采集时间" label="采集时间" align="center" width="500">
                <!--<template slot-scope="scope">-->
                  <!--<span>{{timestampToTime(scope.row.stockTime)}}</span>-->
                <!--</template>-->
              </el-table-column>
              <el-table-column prop="采集点" label="采集点" align="center" width="280"></el-table-column>
              <el-table-column
                prop="靛蓝浓度"
                label="靛蓝浓度（g/l）"
                align="center"
                width="260"
              ></el-table-column>
              <el-table-column prop="PH" label="pH" align="center" width="200"></el-table-column>
              <el-table-column prop="ORP" label="ORP（mv）" align="center" width="200"></el-table-column>
              <el-table-column prop="游离保险粉浓度" label="游离保险粉浓度（g/l）" align="center" width="300"></el-table-column>
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
<style>
  .el-table .warningpro :nth-child(3){
    color: red !important;
  }
  .el-table .warningprod :nth-child(7){
    color: red !important;
  }

</style>
<script>
  import shaoguanUrl from "../assets/shaoguanUrl";
import axios from "axios";
import foot from "./foot.vue";
import login from "./login_assembly.vue";
import moment from 'moment'
export default {
  data() {
    return {
      valuA: "A",
      valuB: "B",
      valuC: "C",
      valuD: "D",
      valuE: "E",
      machineNo: "A",
      mm: [],
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

       str:Object,

      tableData3: [
        {
          date: '2019-11-19',
          name: '50',
          address: '30', max: '33', DianLan:'25', ShaoJian:
            '20' , BaoXianFen: '103', KuoSanJi:'15', KuoSanJi1:'15.80', KuoSanJi2:'17.30', KuoSanJi3:'15.80', KuoSanJi4:'13.30'
        },
        {
          date: '2019-11-19',
          name: '50',
          address: '30', max: '33', DianLan:'25', ShaoJian:
            '20' , BaoXianFen: '103', KuoSanJi:'15', KuoSanJi1:'15.30', KuoSanJi2:'17.30', KuoSanJi3:'15.80', KuoSanJi4:'13.30'
        },
        {
          date: '2019-11-19',
          name: '50',
          address: '30', max: '33', DianLan:'25', ShaoJian:
            '20' , BaoXianFen: '103', KuoSanJi:'14', KuoSanJi1:'15.30', KuoSanJi2:'17.30', KuoSanJi3:'15.80', KuoSanJi4:'13.30'
        }],
    };
    time:Date.parse(new Date())
  },

  components: { foot, login },
  mounted() {
    // this.setShuju(0, "A");
    // // 轮播
    // // setInterval(this.sett, 90000);
    // this.xuanran()
    this.str = setInterval(this.xuanran,30000);
    // this.A2();
    // this.strONE = setInterval(this.A2, 30000); //这个计时器

    this.setShuju();
    // this.strBZ = setInterval(this.setShuju, 30000); //这个计时器

  },
  beforeDestroy(){
    clearInterval(this.str)
    //clearInterval(this.strONE)
  },
  // created() {
  //       this.handleUserList();
  //   },

  methods: {
    // tableRowClassName({row, rowIndex}) {
    //   //console.log(row)
    //   //console.log(row.abc5 < 22.68)
    //   if (row.address > 24.33) {
    //     return 'warningpro';
    //   }
    //   if (row.BaoXianFen > 24.30) {
    //     return 'warningprod';
    //   }
    //   return '';
    // },
    timestampToTime(timestamp) {
      // console.log(timestamp)
      var date = new Date();//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
      // console.log(Y)
      return Y+M+D;
    },
    // A2() {
    //   axios
    //     .post("/api/getGongYiZhiXingData", {
    //       params: {
    //         limit: this.pagesize,
    //         page: this.currentPageA1,
    //         lineID: "all",
    //         type: 1
    //       }
    //     })
    //     .then(res => {
    //       console.log(res.data)
    //       console.log(res.data.code)
    //       if (res.data.code==0 ){
    //         console.log( res.data.data);
    //         this.tableDataA1 = res.data.data;
    //         this.totalA1 = res.data.total;
    //       }
    //     });
    // },
    aaa(over, machineNo) {
      this.cur = over;
      console.log(machineNo);
      this.tableDataAA1 = {};
      var usp = new URLSearchParams();
      usp.append("machineNo", machineNo);
      axios
        .post(shaoguanUrl+"/api/getGongYiZhiXingData",usp)
        .then(res => {
          console.log("res", res.data.data);

          if (res.data.data == "") {
            this.tableDataAA1 = {};
            // console.log("tableDataAA1",this.tableDataAA1);
            console.log(123);
            return;
          }
          this.tableDataAA1 = res.data.data;
          console.log(this.tableDataAA1)
        });
      axios
        .post(shaoguanUrl+"/api/getWaterData", usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.tableDataAA2 = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getSteamData", usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.tableDataAA3 = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getGuoChengJianCeData", usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.tableDataAA4 = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getBiaoTiXinXiData", usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.mm = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getFuLiaoYongLiangData", usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.tableDataAA5 = res.data.data;
        });
    },
    xuanran() {
      console.log(this.cur);
      if (this.cur==0) {
        this.machineNo = "A"
      }
      if (this.cur==1) {
        this.machineNo = "B"
      }
      if (this.cur==2) {
        this.machineNo = "C"
      }
      if (this.cur==3) {
        this.machineNo = "D"
      }
      if (this.cur==4) {
        this.machineNo = "E"
      }
      var usp = new URLSearchParams();
      usp.append("machineNo", this.machineNo);
      axios
        .post(shaoguanUrl+"/api/getGongYiZhiXingData",usp)
        .then(res => {
          console.log(res.data.data);
          //console.log(res.data.count);
          if (res.data.data == "") {
            this.tableDataAA1 = {};
            // console.log("tableDataAA1",this.tableDataAA1);
            console.log(123);
            return;
          }
          this.tableDataAA1 = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getWaterData", usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.tableDataAA2 = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getSteamData",usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.tableDataAA3 = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getGuoChengJianCeData",usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.tableDataAA4 = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getBiaoTiXinXiData",usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.mm = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getFuLiaoYongLiangData",usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.tableDataAA5 = res.data.data;
        });
    },
    setShuju() {
      var usp = new URLSearchParams();
      usp.append("machineNo", "A");
      axios
        .post(shaoguanUrl+"/api/getGongYiZhiXingData", usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.tableDataAA1 = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getWaterData", usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.tableDataAA2 = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getSteamData", usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.tableDataAA3 = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getGuoChengJianCeData", usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.tableDataAA4 = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getBiaoTiXinXiData", usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.mm = res.data.data;
        });
      axios
        .post(shaoguanUrl+"/api/getFuLiaoYongLiangData", usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data);
          this.tableDataAA5 = res.data.data;
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

  height: 970px;
  /* border: 1px solid; */
  position: relative;
  margin-top: 40px;
}
.mother-shuju-one:nth-child(5) {

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
  /*color: #e4c072;*/
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
  /*color: #e4c072 !important;*/

  border: rgb(255, 255, 255);
  background-color: transparent !important;
}
</style>

