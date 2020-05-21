<template>
  <!-- 母液化料 -->
  <div class="mother">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <!-- <img src="..\assets\mother\my_logo.png" alt> -->
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
      <p
        style="text-align: center; font-family: 庞门正道标题体; font-size: 180px;color:#00ecfc; letter-spacing:15px;"
      >
        <img
          src="..\assets\Administration\nav_logo.png"
          alt
          style="vertical-align: middle;margin-top: -37px;"
        />
        <span>母液化料</span>
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

    <!-- <ul class="mother-ul">
      <li @click="cur=0" :class="{active:cur==0}">A机</li>
      <li @click="cur=1" :class="{active:cur==1}">B机</li>
      <li @click="cur=2" :class="{active:cur==2}">C机</li>
      <li @click="cur=3" :class="{active:cur==3}">D机</li>
      <li @click="cur=4" :class="{active:cur==4}">E机</li>
    </ul>-->
    <table
      id="tab"
      border="0"
      style="height:300px;margin: 50px auto;"
      cellspacing="0"
      cellpadding="0"
    >
      <tr>
        <td style="color:white;">应执行标准配方</td>
        <td>{{biaozhun[0]}}</td>
        <td>{{biaozhun[1]}}</td>
      </tr>
      <tr>
        <td></td>
        <td>{{biaozhun[2]}}</td>
        <td>{{biaozhun[3]}}</td>
      </tr>
      <tr>
        <td></td>
        <td>{{biaozhun[4]}}</td>
        <td></td>
      </tr>
    </table>
    <p id="p1">
      <span>实际值</span>/
      <span>标准值</span>
    </p>

    <div class="mother-shuju-all">
      <!-- A机 -->
      <div v-show="cur==0" class="mother-shuju">
        <div class="mother-shuju-one">
          <p class="mother-shuju-onep">1.母液化料实时信息--靛蓝</p>

          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataA1.slice((currentPageA1-1)*pagesize,currentPageA1*pagesize)"
              border
              style="width: 100%;"
            >
              <!-- <el-table-column type="index" label="序号" align="center" width="100"></el-table-column> -->
              <el-table-column prop="time" label="时间" align="center" width="580">
                <template slot-scope="scope">
                  <p style="width:580px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: white;">{{scope.row.time}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="dianLanMuYeNo" label="配方代码" align="center" width="500">
                <template slot-scope="scope">
                  <p style="width:500px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: #00ecfc;">{{scope.row.dianLanMuYeNo}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="colorNo" label="色号" align="center" width="400">
                <template slot-scope="scope">
                  <p style="width:400px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: #00ecfc;">{{scope.row.colorNo}}</span>
                  </p>
                </template>
              </el-table-column>
              <!-- <el-table-column prop="bucketNum" label="化料桶号" align="center" width="300">
                <template slot-scope="scope">
                  <p style="width:300px; line-height: 118px; font-size: 50px;  "><span style="color: #00ecfc;"> {{scope.row.bucketNum}}</span></p>
               </template>
              </el-table-column>-->
              <el-table-column prop="hlTotal" label="化料总量（l）" align="center" width="400">
                <template slot-scope="scope">
                  <p style="width:400px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: #00ecfc;">{{scope.row.hlTotal}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="dlDosage" label="靛蓝用量（kg）" align="center" width="380">
                <template slot-scope="scope">
                  <p style="width:380px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.dlDosage}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.dlDosageB}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="sjDosage" label="烧碱用量（kg）" align="center" width="380">
                <template slot-scope="scope">
                  <p style="width:380px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.sjDosage}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.sjDosageB}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="bxfDosage" label="保险粉用量（kg）" align="center" width="380">
                <template slot-scope="scope">
                  <p style="width:380px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.bxfDosage}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.bxfDosageB}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="ksjDosage" label="扩散剂用量（kg）" align="center" width="380">
                <template slot-scope="scope">
                  <p style="width:380px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.ksjDosage}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.ksjDosageB}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="stjDosage" label="渗透剂用量（kg）" align="center" width="380">
                <template slot-scope="scope">
                  <p style="width:380px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.stjDosage}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.stjDosageB}}</span>
                  </p>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <!-- <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageA2"
                background
                layout="jumper , prev, pager, next"
                :total="totalA2"
              ></el-pagination>
            </div>
          </div>-->
        </div>
        <div class="mother-shuju-one">
          <p class="mother-shuju-onep">2.母液化料实时信息--靛蓝前打底</p>

          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataA2.slice((currentPageA2-1)*pagesize,currentPageA2*pagesize)"
              border
              style="width: 100%;"
            >
              <!-- <el-table-column type="index" label="序号" align="center" width="100"></el-table-column> -->
              <el-table-column prop="time" label="时间" align="center" width="580">
                <template slot-scope="scope">
                  <p style="width:580px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: white;">{{scope.row.time}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="dianLanBeforeMuYeNo" label="配方代码" align="center" width="500">
                <template slot-scope="scope">
                  <p style="width:500px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: #00ecfc;">{{scope.row.dianLanBeforeMuYeNo}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="colorNo" label="色号" align="center" width="500">
                <template slot-scope="scope">
                  <p style="width:500px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: #00ecfc;">{{scope.row.colorNo}}</span>
                  </p>
                </template>
              </el-table-column>
              <!-- <el-table-column prop="bucketNum" label="化料桶号" align="center" width="375">
                <template slot-scope="scope">
                  <p style="width:375px; line-height: 118px; font-size: 50px;  "><span style="color: #00ecfc;"> {{scope.row.bucketNum}}</span></p>
               </template>
              </el-table-column>-->
              <el-table-column prop="hlTotal" label="化料总量（l）" align="center" width="500">
                <template slot-scope="scope">
                  <p style="width:400px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: #00ecfc;">{{scope.row.hlTotal}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="dlDosage" label="染料用量（kg）" align="center" width="600">
                <template slot-scope="scope">
                  <p style="width:600px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.dlDosage}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.dyeDosageBRDB}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="bxfDosage" label="还原剂用量（kg）" align="center" width="500">
                <template slot-scope="scope">
                  <p style="width:500px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.bxfDosage}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.lhjDosageBRDB}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="zjDosage" label="助剂用量（kg）" align="center" width="600">
                <template slot-scope="scope">
                  <p style="width:600px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.zjDosage}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.zjDosageBRDB}}</span>
                  </p>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <!-- <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageA3"
                background
                layout="jumper , prev, pager, next"
                :total="totalA3"
              ></el-pagination>
            </div>
          </div>-->
        </div>
        <div class="mother-shuju-one">
          <p class="mother-shuju-onep">3.母液化料实时信息--靛蓝后套面</p>

          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataA3.slice((currentPageA3-1)*pagesize,currentPageA3*pagesize)"
              border
              style="width: 100%;"
            >
              <!-- <el-table-column type="index" label="序号" align="center" width="100"></el-table-column> -->
              <el-table-column prop="time" label="时间" align="center" width="580">
                <template slot-scope="scope">
                  <p style="width:580px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: white;">{{scope.row.time}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="dianLanAfterMuYeNo" label="配方代码" align="center" width="500">
                <template slot-scope="scope">
                  <p style="width:500px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: #00ecfc;">{{scope.row.dianLanAfterMuYeNo}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="colorNo" label="色号" align="center" width="500">
                <template slot-scope="scope">
                  <p style="width:500px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: #00ecfc;">{{scope.row.colorNo}}</span>
                  </p>
                </template>
              </el-table-column>
              <!-- <el-table-column prop="bucketNum" label="化料桶号" align="center" width="375">
                <template slot-scope="scope">
                  <p style="width:375px; line-height: 118px; font-size: 50px;  "><span style="color: #00ecfc;"> {{scope.row.bucketNum}}</span></p>
               </template>
              </el-table-column>-->
              <el-table-column prop="hlTotal" label="化料总量（l）" align="center" width="500">
                <template slot-scope="scope">
                  <p style="width:500px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: #00ecfc;">{{scope.row.hlTotal}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="dlDosage" label="染料用量（kg）" align="center" width="600">
                <template slot-scope="scope">
                  <p style="width:600px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.dlDosage}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.dyeDosageBCDB}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="bxfDosage" label="还原剂用量（kg）" align="center" width="500">
                <template slot-scope="scope">
                  <p style="width:500px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.bxfDosage}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.lhjDosageBCDB}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="zjDosage" label="助剂用量（kg）" align="center" width="600">
                <template slot-scope="scope">
                  <p style="width:600px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.zjDosage}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.zjDosageBCDB}}</span>
                  </p>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <!-- <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                :page-size="pagesize"
                :current-page.sync="currentPageA3"
                background
                layout="jumper , prev, pager, next"
                :total="totalA3"
              ></el-pagination>
            </div>
          </div>-->
        </div>

        <div class="mother-shuju-one">
          <p class="mother-shuju-onep">4.母液检测信息</p>

          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataA4.slice((currentPageA4-1)*pagesize,currentPageA4*pagesize)"
              border
              style="width: 100%;"
            >
              <!-- <el-table-column type="index" label="序号" align="center" width="100"></el-table-column> -->
              <el-table-column prop="time" label="检测时间" align="center" width="580">
                <template slot-scope="scope">
                  <p style="width:580px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: white;">{{scope.row.time}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="type" label="类型" align="center" width="400">
                <template slot-scope="scope">
                  <p style="width:400px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: white;">{{scope.row.type}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="colorNo" label="色号" align="center" width="400">
                <template slot-scope="scope">
                  <p style="width:400px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: white;">{{scope.row.colorNo}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="recipeCode" label="配方代码" align="center" width="400">
                <template slot-scope="scope">
                  <p style="width:400px; line-height: 118px; font-size: 50px;  ">
                    <span style="color: white;">{{scope.row.recipeCode}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column
                prop="indigoConcentration"
                label="靛蓝浓度（g/l）"
                align="center"
                width="400"
              >
                <template slot-scope="scope">
                  <p style="width:400px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.indigoConcentration}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.indigoConcentrationB}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="ph" label="pH" align="center" width="600">
                <template slot-scope="scope">
                  <p style="width:600px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.ph}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.phB}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="orp" label="ORP（mv）" align="center" width="500">
                <template slot-scope="scope">
                  <p style="width:500px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.orp}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.orpB}}</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="powder" label="游离保险粉浓度（g/l）" align="center" width="500">
                <template slot-scope="scope">
                  <p style="width:500px; line-height: 118px; font-size: 50px; ">
                    <span style="color: #00ecfc;">{{scope.row.powder}}</span>
                    <span>/</span>
                    <span style="color: #e4c072;">{{scope.row.powderB}}</span>
                  </p>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <!-- <div class="mother-shuju-two">
            <div class="mother-shuju-three">
              <el-pagination
                @current-change="handleCurrentChangeA4"
                :page-size="pagesize1"
                :current-page.sync="currentPageA4"
                background
                layout="jumper , prev, pager, next"
                :total="totalA4"
              ></el-pagination>
              <el-pagination
                background
                layout="sizes,prev, pager, next,total,jumper"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="pageSizes"
                :page-size="pageSize"
                :total="info.length"
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
      biaozhun: [],
      cur: 0,
      pagesize: 8,

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
      str: Object,
      strBZ: Object
    };
  },
  components: { foot, login },

  mounted() {
    // setInterval(this.setdata, 60000);
    //母液化料实时信息接口 靛蓝前打底
    // this.A1();
    // setInterval(this.A1, 30000);

    //母液化料实时信息接口 靛蓝
    this.A2();
    this.str = setInterval(this.A2, 30000); //这个计时器

    //母液化料实时信息接口 靛蓝后套面
    // this.A3();
    // setInterval(this.A3, 30000);

    //母液检测信息
    this.A4();
    // setInterval(this.A4, 30000);

    //机器轮播
    // setInterval(this.sett,90000)

    this.setShuju();
    this.strBZ = setInterval(this.setShuju, 30000); //这个计时器
  },
  beforeDestroy() {
    console.log(1111);

    clearInterval(this.str);
    clearInterval(this.strBZ);
  },
  methods: {
    A2() {
      axios
        .get('http://125.89.236.222:8006'+"/api/getMuYeHuaLiao", {
          params: {
            limit: this.pagesize,
            page: this.currentPageA1,
            lineID: "all",
            type: 1
          }
        })
        .then(res => {
          console.log("靛蓝", res.data);
          var data = res.data.data;
          var standard = res.data.standard;

          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < standard.length; j++) {
              if (data[i].colorNo == standard[j].colorNo) {
                Object.assign(data[i], data[i], standard[j]);
              }
            }
          }
          console.log("data", data);

          this.tableDataA1 = res.data.data;
          this.totalA1 = res.data.total;

          axios
            .get('http://125.89.236.222:8006'+"/api/getMuYeHuaLiao", {
              params: {
                limit: this.pagesize, //16
                page: this.currentPageA2, //1
                lineID: "all",
                type: 2
              }
            })
            .then(res => {
              console.log("靛蓝前", res.data);
              var data = res.data.data;
              var standard = res.data.standard;

              for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < standard.length; j++) {
                  if (data[i].colorNo == standard[j].colorNo) {
                    Object.assign(data[i], data[i], standard[j]);
                  }
                }
              }
              console.log("data", data);
              this.tableDataA2 = res.data.data;

              this.totalA2 = res.data.total;

              axios
                .get('http://125.89.236.222:8006'+"/api/getMuYeHuaLiao", {
                  params: {
                    limit: this.pagesize,
                    page: this.currentPageA3,
                    lineID: "all",
                    type: 3
                  }
                })
                .then(res => {
                  console.log("靛蓝后", res.data);
                  var data = res.data.data;
                  var standard = res.data.standard;

                  for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < standard.length; j++) {
                      if (data[i].colorNo == standard[j].colorNo) {
                        Object.assign(data[i], data[i], standard[j]);
                      }
                    }
                  }
                  console.log("data", data);
                  this.tableDataA3 = res.data.data;
                  this.totalA3 = res.data.total;
                });
            });
        });
    },

    A4() {
      axios
        .get('http://125.89.236.222:8006'+"/api/getMuYeTestInfo", {
          params: {
            limit: this.pagesize,
            page: this.currentPageA4,
            type: 4
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
          var data = res.data.data;
          var standard = res.data.standard;

          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < standard.length; j++) {
              if (data[i].colorNo == standard[j].colorNo) {
                Object.assign(data[i], data[i], standard[j]);
              }
            }
          }
          console.log("data", data);
          for (let i = 0; i < data.length; i++) {

              if (data[i].indigoConcentration == "") {
               data[i].indigoConcentrationB = ""
              }
              if (data[i].orp == "") {
               data[i].orpB = ""
              }
              if (data[i].ph == "") {
               data[i].phB = ""
              }
              if (data[i].powder == "") {
               data[i].powderB = ""
              }
            }


          this.tableDataA4 = res.data.data;
          // var obj1 = {
          //   colorNo: "1",
          //   id: "958039BD-F8D5-4B8E-B5B5-1E78EDA67872",
          //   indigoConcentration: "500",
          //   kind: "片染",
          //   materialCode: "2019051601",
          //   orp: "130.0",
          //   ph: "28.3",
          //   powder: "150.6",
          //   recipeCode: "010",
          //   time: "标准值",
          //   totalCount: 28,
          //   type: "靛蓝后"
          // };
          // this.tableDataA4.unshift(obj1);
          this.totalA4 = res.data.total;
        });
    },

    handleCurrentChangeA4(val) {
      console.log(`当前页: ${val}`);
      this.currentPageA4 = val;
      axios
        .get('http://125.89.236.222:8006'+"/api/getMuYeTestInfo", {
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
      console.log("数据", this.currentPageA4);
    },

    esc() {
      this.$router.push("/index");
    },
    pro() {
      this.$router.push("/personal");
    },
    // sett() {
    //   console.log(this.cur);
    //   this.cur++;
    //   if (this.cur > 4) {
    //     this.cur = 0;
    //   }
    // },
    // setdata() {
    //   axios.get("http://localhost:3000/getAllGanghao", usp).then(res => {
    //     console.log("res", res.data);
    //   });
    // },

    setShuju() {
      axios
        .get('http://125.89.236.222:8006'+"/api/getControlStandardDaping", {
          params: {
            lineID: "all",
            type: 1
          }
        })
        .then(res => {
          console.log("ressetShuju", res.data.data);
          var array = [];
          var arr = res.data.data;
          for (let i = 0; i < arr.length; i++) {
            if (array.indexOf(arr[i].colorNo) == -1) {
              array.push(arr[i]);
            }
          }
          console.log("array", array);
          for (let i = 0; i < array.length; i++) {
            array[
              i
            ] = `色号：${array[i].colorNo}; 配方代码：靛蓝前打底：${array[i].dianLanBeforeMuYeNo}； 靛蓝： ${array[i].dianLanMuYeNo}； 靛蓝后套面： ${array[i].dianLanAfterMuYeNo}；`;
          }
          this.biaozhun = array;
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
/* #p1{
  position: fixed;
    right: 1000px;
    margin-top: 100px;
    width: 380px;
    height: 70px;
    border: solid 1px white;
    font-size: 70px;
    float: right;

} */
#p1 {
  float: right;
  width: 420px;
  height: 70px;
  /* border: solid 1px white; */
  font-size: 70px;
  margin-right: 500px;
  margin-top: -150px;
}
#p1 span {
  font-size: 60px;
}
#p1 span:nth-child(1) {
  /* color: #e4c072; */
  color: #00ecfc;
}
#p1 span:nth-child(2) {
  color: #e4c072;
}
#tab{
  width: 6800px;
}
#tab tr {
  height: 100px;
  text-align: left;
  color: #e4c072;
  font-size: 70px;
}
#tab td:nth-child(1) {
  width: 600px;
}
#tab td:nth-child(2) {
  width: 3100px;
}
#tab td:nth-child(3) {
  width: 3100px;
}
.mother-shuju-all {
  margin-top: 150px;
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
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.mother-shuju-one {
  width: 3780px;
  height: 1004px;
  /* border: 1px solid; */
  position: relative;
  margin-top: -100px;
}
.mother-shuju-one:nth-child(3),
.mother-shuju-one:nth-child(4) {
  width: 3780px;
  height: 1004px;
  /* border: 1px solid; */
  position: relative;
  margin-top: 128px;
}
.mother-shuju-onep {
  /* margin-bottom: 100px; */
}
.mother-shuju-one p {
  height: 110px;
  width: 3780px;
  /* border: solid 1px; */
  text-align: center;
  font-size: 90px;
  /* padding-bottom:100px;  */
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
