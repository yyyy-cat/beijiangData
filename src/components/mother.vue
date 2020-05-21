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
        <!--<td style="color:white;">应执行标准配方</td>-->
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
      <span>异常值</span>/
      <span>实际值</span>/
      <span>标准值</span>
    </p>

    <div class="mother-shuju-all">
      <!-- A机 -->
      <div v-show="cur==0" class="mother-shuju">
        <div class="mother-shuju-one" style="width: 2700px;">
          <p class="mother-shuju-onep">母液化料实时信息--靛蓝</p>
          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataA1"
              border
              height="632"
              :row-class-name="tableRowClassName"
              style="width: 99%;"
            >
              <!-- <el-table-column type="index" label="序号" align="center" width="100"></el-table-column> -->
              <el-table-column prop="jth" label="机台编号" align="center" width="250">
                <!--<template slot-scope="scope">
                  <span>{{timestampToTime(scope.row.stockTime)}}</span>
                </template>-->
              </el-table-column>
              <el-table-column prop="neirong" label="检验项目内容" align="center" >

            </el-table-column>
              <el-table-column prop="caijishijian" label="采集时间" align="center">

              </el-table-column>
              <el-table-column prop="jiancezhi" label="检测值" align="center" width="250">
              </el-table-column>
              <el-table-column prop="biaozhun" label="标准" align="center">

              </el-table-column>
              <el-table-column prop="dujishijian" label="读机" align="center">

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

        <div class="mother-shuju-one" style="width: 4600px">
          <p class="mother-shuju-onep">母液检测信息</p>

          <div class="mother-shuju-table1">
            <el-table
              :data="tableDataA4"
              border
              height="632"
              style="width: 99%;"
            >
              <!--<el-table-column prop="L0" label="序号" align="center">-->

              <!--</el-table-column>-->
              <el-table-column prop="靛蓝母液代码" label="靛蓝母液代码" align="center" width="400px">
              </el-table-column>
              <el-table-column prop="检测时间" label="检测时间" align="center">
                <!--<template slot-scope="scope">-->
                  <!--<span>{{timestampToTime(scope.row.stockTime)}}</span>-->
                <!--</template>-->
              </el-table-column>
              <el-table-column prop="靛蓝浓度" label="靛蓝浓度（g/l）" align="center">
              </el-table-column>
              <el-table-column prop="靛蓝浓度标准" label="靛蓝浓度标准（g/l）" align="center">
              </el-table-column>
              <el-table-column prop="PH" label="PH" align="center" width="200px">
              </el-table-column>
              <el-table-column prop="PH标准" label="PH标准（g/l）" align="center" width="400px">
              </el-table-column>
              <el-table-column prop="ORP" label="ORP（mv）" align="center" width="300px">
              </el-table-column>
              <el-table-column prop="ORP标准" label="ORP标准（g/l）" align="center">
              </el-table-column>
              <el-table-column prop="游离保险粉浓度" label="游离保险粉浓度（g/l）" align="center">
              </el-table-column>
              <el-table-column prop="游离保险粉浓度标准" label="游离保险粉浓度标准（g/l）" align="center">
              </el-table-column>
              <!-- <el-table-column type="index" label="序号" align="center" width="100"></el-table-column> -->
              <!--<el-table-column prop="time" label="检测时间" align="center" width="580">-->
                <!--<template slot-scope="scope">-->
                  <!--<p style="width:580px; line-height: 118px; font-size: 50px;  ">-->
                    <!--<span style="color: white;">{{scope.row.time}}</span>-->
                  <!--</p>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column prop="type" label="类型" align="center" width="400">-->
                <!--<template slot-scope="scope">-->
                  <!--<p style="width:400px; line-height: 118px; font-size: 50px;  ">-->
                    <!--<span style="color: white;">{{scope.row.type}}</span>-->
                  <!--</p>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column prop="colorNo" label="色号" align="center" width="400">-->
                <!--<template slot-scope="scope">-->
                  <!--<p style="width:400px; line-height: 118px; font-size: 50px;  ">-->
                    <!--<span style="color: white;">{{scope.row.colorNo}}</span>-->
                  <!--</p>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column prop="recipeCode" label="配方代码" align="center" width="400">-->
                <!--<template slot-scope="scope">-->
                  <!--<p style="width:400px; line-height: 118px; font-size: 50px;  ">-->
                    <!--<span style="color: white;">{{scope.row.recipeCode}}</span>-->
                  <!--</p>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--prop="indigoConcentration"-->
                <!--label="靛蓝浓度（g/l）"-->
                <!--align="center"-->
                <!--width="400"-->
              <!--&gt;-->
                <!--<template slot-scope="scope">-->
                  <!--<p style="width:400px; line-height: 118px; font-size: 50px; ">-->
                    <!--<span style="color: #00ecfc;">{{scope.row.indigoConcentration}}</span>-->
                    <!--<span>/</span>-->
                    <!--<span style="color: #e4c072;">{{scope.row.indigoConcentrationB}}</span>-->
                  <!--</p>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column prop="ph" label="pH" align="center" width="600">-->
                <!--<template slot-scope="scope">-->
                  <!--<p style="width:600px; line-height: 118px; font-size: 50px; ">-->
                    <!--<span style="color: #00ecfc;">{{scope.row.ph}}</span>-->
                    <!--<span>/</span>-->
                    <!--<span style="color: #e4c072;">{{scope.row.phB}}</span>-->
                  <!--</p>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column prop="orp" label="ORP（mv）" align="center" width="500">-->
                <!--<template slot-scope="scope">-->
                  <!--<p style="width:500px; line-height: 118px; font-size: 50px; ">-->
                    <!--<span style="color: #00ecfc;">{{scope.row.orp}}</span>-->
                    <!--<span>/</span>-->
                    <!--<span style="color: #e4c072;">{{scope.row.orpB}}</span>-->
                  <!--</p>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column prop="powder" label="游离保险粉浓度（g/l）" align="center" width="500">-->
                <!--<template slot-scope="scope">-->
                  <!--<p style="width:500px; line-height: 118px; font-size: 50px; ">-->
                    <!--<span style="color: #00ecfc;">{{scope.row.powder}}</span>-->
                    <!--<span>/</span>-->
                    <!--<span style="color: #e4c072;">{{scope.row.powderB}}</span>-->
                  <!--</p>-->
                <!--</template>-->
              <!--</el-table-column>-->
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
    <div id="TtonT">
      <span class="AcliCk" @click="AcliCk()"></span>
      <span class="TtonTa" v-show="a"><img src="../assets/mother/12.png" alt=""></span>
      <span class="TtonTa_" v-show="a_"><img src="../assets/mother/a-.gif" alt=""></span>
      <span class="BcliCk" @click="BcliCk()"></span>
      <span class="TtonTb" v-show="b"><img src="../assets/mother/b.png" alt=""></span>
      <span class="TtonTb_" v-show="b_"><img src="../assets/mother/b_.gif" alt=""></span>
      <span class="CcliCk" @click="CcliCk()"></span>
      <span class="TtonTc" v-show="c"><img src="../assets/mother/c.png" alt=""></span>
      <span class="TtonTc_" v-show="c_"><img src="../assets/mother/c_.gif" alt=""></span>
      <span class="DcliCk" @click="DcliCk()"></span>
      <span class="TtonTd" v-show="d"><img src="../assets/mother/d.png" alt=""></span>
      <span class="TtonTd_" v-show="d_"><img src="../assets/mother/d_.gif" alt=""></span>
      <span class="EcliCk" @click="EcliCk()"></span>
      <span class="TtonTe" v-show="e"><img src="../assets/mother/e.png" alt=""></span>
      <span class="TtonTe_" v-show="e_"><img src="../assets/mother/e_.gif" alt=""></span>
    </div>
    <div>
      <div style="float: left;position: relative;left:200px;width: 687px" id="GangG" v-for="item in tableDataA5">
        <div style="margin-top: 162px;position: relative;">
          <span style=""><img src="../assets/mother/icon_overproof.png" alt=""><p>{{item.name}}</p></span><i></i>
          <div>
            <div ></div>
          </div>
          <div style="position: absolute;left: 20px;top: 36px;font-size: 50px;color: black;text-align: center;width: 305px;z-index: 99">{{item.shenyuliang}}</div>
          <div style="position: absolute;left: 430px;top: 0px;font-size: 50px;color: white">{{item.tem}}</div>
        </div>
      </div>
      <div ref="topInfo"></div>
    </div>
    <foot></foot>
    <div style="width: 302px;height: 268px;max-height: 268px;position: absolute;left: 4097px;top: 1631px;" id="div0"></div>
    <div style="width: 302px;height: 268px;max-height: 268px;position: absolute;left: 4785px;top: 1631px;" id="div"></div>
    <div style="width: 302px;height: 268px;max-height: 268px;position: absolute;left: 5473px;top: 1631px;" id="div3"></div>
    <div style="width: 302px;height: 268px;max-height: 268px;position: absolute;left: 6161px;top: 1631px;" id="div4"></div>
    <div style="width: 302px;height: 268px;max-height: 268px;position: absolute;left: 6849px;top: 1631px;" id="div5"></div>
    <!--//下-->
    <div style="width: 302px;height: 268px;max-height: 268px;position: absolute;left: 4097px;top: 2220px;" id="div6"></div>
    <div style="width: 302px;height: 268px;max-height: 268px;position: absolute;left: 4785px;top: 2220px;" id="div7"></div>
    <div style="width: 302px;height: 268px;max-height: 268px;position: absolute;left: 5473px;top: 2220px;" id="div8"></div>
    <div style="width: 302px;height: 268px;max-height: 268px;position: absolute;left: 6161px;top: 2220px;" id="div9"></div>
    <div style="width: 302px;height: 268px;max-height: 268px;position: absolute;left: 6849px;top: 2220px;" id="divv"></div>
    <div style="width: 36px;height: 338px;max-height: 338px;position: absolute;left: 4468px;
    top: 1595px;background-color: #fca110" id="tem"></div>
    <div style="width: 36px;height: 338px;max-height: 338px;position: absolute;left: 5155px;
    top: 1595px;background-color: #fca110" id="tem1"></div>
    <div style="width: 36px;height: 338px;max-height: 338px;position: absolute;left: 5842px;
    top: 1595px;background-color: #fca110" id="tem2"></div>
    <div style="width: 36px;height: 338px;max-height: 338px;position: absolute;left: 6529px;
    top: 1595px;background-color: #fca110" id="tem3"></div>
    <div style="width: 36px;height: 338px;max-height: 338px;position: absolute;left: 7216px;
    top: 1595px;background-color: #fca110" id="tem4"></div>
    <div style="width: 36px;height: 338px;max-height: 338px;position: absolute;left: 4468px;
    top: 2192px;background-color: #fca110" id="tem5"></div>
    <div style="width: 36px;height: 338px;max-height: 338px;position: absolute;left: 5155px;
    top: 2192px;background-color: #fca110" id="tem6"></div>
    <div style="width: 36px;height: 338px;max-height: 338px;position: absolute;left: 5842px;
    top: 2192px;background-color: #fca110" id="tem7"></div>
    <div style="width: 36px;height: 338px;max-height: 338px;position: absolute;left: 6529px;
    top: 2192px;background-color: #fca110" id="tem8"></div>
    <div style="width: 36px;height: 338px;max-height: 338px;position: absolute;left: 7216px;
    top: 2192px;background-color: #fca110" id="tem9"></div>
  </div>
</template>
<style>
  .el-table .warning- :nth-child(10){
  color: red !important;
  }
  .el-table .warning :nth-child(9){
    color: red !important;
  }
  .el-table .warning3 :nth-child(8){
    color: red !important;
  }
</style>
<script>
  import shaoguanUrl from "../assets/shaoguanUrl";
  import $ from 'jquery'
import axios from "axios";
import foot from "./foot.vue";
import login from "./login_assembly.vue";
export default {
  data() {
    return {
      a:false,
      a_:false,
      b:false,
      b_:false,
      c:false,
      c_:false,
      d:false,
      d_:false,
      e:false,
      e_:false,
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
      tableDataA5: [],
      currentPageA4: 1,
      totalA4: 0,
      str: Object,
      strBZ: Object,
    };
  },
  components: { foot, login },

  mounted() {
    //图标点击
    //this.timer = setInterval(this.AcliCk, 1000);
    // setInterval(this.setdata, 60000);
    //母液化料实时信息接口 靛蓝前打底
    this.A1();
    this.strA1 =setInterval(this.A1, 20000);

    //母液化料实时信息接口 靛蓝
    this.A2();
    // this.str = setInterval(this.A2, 30000); //这个计时器

    //母液化料实时信息接口 靛蓝后套面
    // this.A3();
    // setInterval(this.A3, 30000);

    //母液检测信息
    this.A4();
    // this.strA4 = setInterval(this.A4, 30000); //这个计时器

    //机器轮播
    // setInterval(this.sett,90000)

    this.setShuju();
    this.strBZ = setInterval(this.setShuju, 30000); //这个计时器
  },
  beforeDestroy() {
    clearInterval(this.strA1);
    clearInterval(this.str);
    clearInterval(this.strBZ);
    clearInterval(this.strA4);
    clearInterval(this.timer);
  },
  methods: {
    //点击A
    AcliCk(){
      this.A2()
      this.A4()
      this.a=true
      this.b_=false
      this.c_=false
      this.d_=false
      this.e_=false
      setTimeout(() =>{
        this.a=false;
        this.a_=true;
        this.b=false
        this.b_=false
        this.c=false
        this.c_=false
        this.d=false
        this.d_=false
        this.e=false
        this.e_=false
      },500);
    },
    BcliCk(){
      this.A5()
      this.A6()
      this.a_=false
      this.b=true
      this.c_=false
      this.d_=false
      this.e_=false
      setTimeout(() =>{
        this.b=false;
        this.b_=true
        this.a=false;
        this.a_=false;
        this.c=false
        this.c_=false
        this.d=false
        this.d_=false
        this.e=false
        this.e_=false
      },500);
    },
    CcliCk(){
      this.A7()
      this.A8()
      setTimeout(() =>{
        this.c=false;
        this.c_=true
        this.a=false;
        this.a_=false;
        this.b=false
        this.b_=false
        this.d=false
        this.d_=false
        this.e=false
        this.e_=false
      },500);
      this.a_=false
      this.b_=false
      this.c=true
      this.d_=false
      this.e_=false
    },
    DcliCk(){
      this.A9()
      this.A10()
      setTimeout(() =>{
        this.d=false;
        this.d_=true
        this.a=false;
        this.a_=false;
        this.b=false
        this.b_=false
        this.c=false
        this.c_=false
        this.e=false
        this.e_=false
      },500);
      this.a_=false
      this.b_=false
      this.c_=false
      this.d=true
      this.e_=false
    },
    EcliCk(){
      this.A11()
      this.A12()
      setTimeout(() =>{
        this.e=false;
        this.e_=true
        this.a=false;
        this.a_=false;
        this.b=false
        this.b_=false
        this.c=false
        this.c_=false
        this.d=false
        this.d_=false
      },500);
      this.a_=false
      this.b_=false
      this.c_=false
      this.d_=false
      this.e=true
    },
    // close(){
    //   this.a=false,
    //     this.a_=true
    // },
    tableRowClassName({row, rowIndex}) {
      if (row.abc5 > 20.68) {
        return 'warning-';
      }
      if (row.abc4 > 18.26) {
        return 'warning';
      }
      if (row.ZhuJi <25.10) {
        return 'warning3';
      }
      return '';
    },
    timestampToTime(timestamp) {
      //console.log(timestamp)
      var date = new Date();//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
      //console.log(Y)
      return Y+M+D;
    },
    A1(){

      axios
        .post(shaoguanUrl+"/api/getWenduShengyuliang", {
        })
        .then(res => {
          //console.log(res.data)
          //console.log(res.data.code)
          if (res.data.code==0 ){
            //console.log( res.data.data);
            this.tableDataA5 = res.data.data;
            //0
            if (this.tableDataA5[0].shenyuliang==0){
              $("#div0").css({"background-color":"#e4fd0e","height":"0px","top":"1861px",});
            }else if (this.tableDataA5[0].shenyuliang>0 &&this.tableDataA5[0].shenyuliang<=150){
              $("#div0").css({"background-color":"#e4fd0e","height":"30","top":"1868px",});
            }else if (this.tableDataA5[0].shenyuliang>150 &&this.tableDataA5[0].shenyuliang<=300){
              $("#div0").css({"background-color":"#e4fd0e","height":"50px","top":"1850px",});
            }else if (this.tableDataA5[0].shenyuliang>300 &&this.tableDataA5[0].shenyuliang<=450){
              $("#div0").css({"background-color":"#e4fd0e","height":"70px","top":"1831px",});
            }else if (this.tableDataA5[0].shenyuliang>450 &&this.tableDataA5[0].shenyuliang<=600){
              $("#div0").css({"background-color":"#e4fd0e","height":"100px","top":"1799px",});
            }else if (this.tableDataA5[0].shenyuliang>600 &&this.tableDataA5[0].shenyuliang<=800){
              $("#div0").css({"background-color":"#e4fd0e","height":"120px","top":"1779px",});
            }else if (this.tableDataA5[0].shenyuliang>800 &&this.tableDataA5[0].shenyuliang<=1000){
              $("#div0").css({"background-color":"#e4fd0e","height":"140px","top":"1759px",});
            }else if (this.tableDataA5[0].shenyuliang>1000 &&this.tableDataA5[0].shenyuliang<=1200){
              $("#div0").css({"background-color":"#e4fd0e","height":"160px","top":"1739px",});
            }else if (this.tableDataA5[0].shenyuliang>1200 &&this.tableDataA5[0].shenyuliang<=1400){
              $("#div0").css({"background-color":"#e4fd0e","height":"180px","top":"1719px",});
            }else if (this.tableDataA5[0].shenyuliang>1400 &&this.tableDataA5[0].shenyuliang<=1500){
              $("#div0").css({"background-color":"#e4fd0e","height":"199px","top":"1700px",});
            }else if (this.tableDataA5[0].shenyuliang>1500 &&this.tableDataA5[0].shenyuliang<=1700){
              $("#div0").css({"background-color":"#e4fd0e","height":"209px","top":"1690px",});
            }else if (this.tableDataA5[0].shenyuliang>1700 &&this.tableDataA5[0].shenyuliang<=1900){
              $("#div0").css({"background-color":"#e4fd0e","height":"229px","top":"1670px",});
            }else if (this.tableDataA5[0].shenyuliang>1700 &&this.tableDataA5[0].shenyuliang<=1900){
              $("#div0").css({"background-color":"#e4fd0e","height":"248px","top":"1651px",});
            }else if (this.tableDataA5[0].shenyuliang>1900){
              $("#div0").css({"background-color":"#e4fd0e","height":"268px","top":"1631px",});
            }
            //1
            if (this.tableDataA5[1].shenyuliang==0){
              $("#div").css({"background-color":"#e4fd0e","height":"0px","top":"1861px",});
            }else if (this.tableDataA5[1].shenyuliang>0 &&this.tableDataA5[1].shenyuliang<=150){
              $("#div").css({"background-color":"#e4fd0e","height":"30","top":"1868px",});  //gao  30
            }else if (this.tableDataA5[1].shenyuliang>150 &&this.tableDataA5[1].shenyuliang<=300){
              $("#div").css({"background-color":"#e4fd0e","height":"50px","top":"1850px",});
            }else if (this.tableDataA5[1].shenyuliang>300 &&this.tableDataA5[1].shenyuliang<=450){
              $("#div").css({"background-color":"#e4fd0e","height":"70px","top":"1831px",});
            }else if (this.tableDataA5[1].shenyuliang>450 &&this.tableDataA5[1].shenyuliang<=600){
              $("#div").css({"background-color":"#e4fd0e","height":"100px","top":"1799px",});
            }else if (this.tableDataA5[1].shenyuliang>600 &&this.tableDataA5[1].shenyuliang<=800){
              $("#div").css({"background-color":"#e4fd0e","height":"120px","top":"1779px",});
            }else if (this.tableDataA5[1].shenyuliang>800 &&this.tableDataA5[1].shenyuliang<=1000){
              $("#div").css({"background-color":"#e4fd0e","height":"140px","top":"1759px",});
            }else if (this.tableDataA5[1].shenyuliang>1000 &&this.tableDataA5[1].shenyuliang<=1200){
              $("#div").css({"background-color":"#e4fd0e","height":"160px","top":"1739px",});
            }else if (this.tableDataA5[1].shenyuliang>1200 &&this.tableDataA5[1].shenyuliang<=1400){
              $("#div").css({"background-color":"#e4fd0e","height":"180px","top":"1719px",});
            }else if (this.tableDataA5[1].shenyuliang>1400 &&this.tableDataA5[1].shenyuliang<=1500){
              $("#div").css({"background-color":"#e4fd0e","height":"199px","top":"1700px",});
            }else if (this.tableDataA5[1].shenyuliang>1500 &&this.tableDataA5[1].shenyuliang<=1700){
              $("#div").css({"background-color":"#e4fd0e","height":"209px","top":"1690px",});
            }else if (this.tableDataA5[1].shenyuliang>1700 &&this.tableDataA5[1].shenyuliang<=1900){
              $("#div").css({"background-color":"#e4fd0e","height":"229px","top":"1670px",});
            }else if (this.tableDataA5[1].shenyuliang>1700 &&this.tableDataA5[1].shenyuliang<=1900){
              $("#div").css({"background-color":"#e4fd0e","height":"248px","top":"1651px",});
            }else if (this.tableDataA5[1].shenyuliang>1900){
              $("#div").css({"background-color":"#e4fd0e","height":"268px","top":"1631px",});
            }
            //3
            if (this.tableDataA5[2].shenyuliang==0){
              $("#div3").css({"background-color":"#e4fd0e","height":"0px","top":"1861px",});
            }else if (this.tableDataA5[2].shenyuliang>0 &&this.tableDataA5[2].shenyuliang<=150){
              $("#div3").css({"background-color":"#e4fd0e","height":"30","top":"1868px",});  //gao  30
            }else if (this.tableDataA5[2].shenyuliang>150 &&this.tableDataA5[2].shenyuliang<=300){
              $("#div3").css({"background-color":"#e4fd0e","height":"50px","top":"1850px",});
            }else if (this.tableDataA5[2].shenyuliang>300 &&this.tableDataA5[2].shenyuliang<=450){
              $("#div3").css({"background-color":"#e4fd0e","height":"70px","top":"1831px",});
            }else if (this.tableDataA5[2].shenyuliang>450 &&this.tableDataA5[2].shenyuliang<=600){
              $("#div3").css({"background-color":"#e4fd0e","height":"100px","top":"1799px",});
            }else if (this.tableDataA5[2].shenyuliang>600 &&this.tableDataA5[2].shenyuliang<=800){
              $("#div3").css({"background-color":"#e4fd0e","height":"120px","top":"1779px",});
            }else if (this.tableDataA5[2].shenyuliang>800 &&this.tableDataA5[2].shenyuliang<=1000){
              $("#div3").css({"background-color":"#e4fd0e","height":"140px","top":"1759px",});
            }else if (this.tableDataA5[2].shenyuliang>1000 &&this.tableDataA5[2].shenyuliang<=1200){
              $("#div3").css({"background-color":"#e4fd0e","height":"160px","top":"1739px",});
            }else if (this.tableDataA5[2].shenyuliang>1200 &&this.tableDataA5[2].shenyuliang<=1400){
              $("#div3").css({"background-color":"#e4fd0e","height":"180px","top":"1719px",});
            }else if (this.tableDataA5[2].shenyuliang>1400 &&this.tableDataA5[2].shenyuliang<=1500){
              $("#div3").css({"background-color":"#e4fd0e","height":"199px","top":"1700px",});
            }else if (this.tableDataA5[2].shenyuliang>1500 &&this.tableDataA5[2].shenyuliang<=1700){
              $("#div3").css({"background-color":"#e4fd0e","height":"209px","top":"1690px",});
            }else if (this.tableDataA5[2].shenyuliang>1700 &&this.tableDataA5[2].shenyuliang<=1900){
              $("#div3").css({"background-color":"#e4fd0e","height":"229px","top":"1670px",});
            }else if (this.tableDataA5[2].shenyuliang>1700 &&this.tableDataA5[2].shenyuliang<=1900){
              $("#div3").css({"background-color":"#e4fd0e","height":"248px","top":"1651px",});
            }else if (this.tableDataA5[2].shenyuliang>1900){
              $("#div3").css({"background-color":"#e4fd0e","height":"268px","top":"1631px",});
            }
//4
            if (this.tableDataA5[3].shenyuliang==0){
              $("#div4").css({"background-color":"#e4fd0e","height":"0px","top":"1861px",});
            }else if (this.tableDataA5[3].shenyuliang>0 &&this.tableDataA5[3].shenyuliang<=150){
              $("#div4").css({"background-color":"#e4fd0e","height":"30","top":"1868px",});  //gao  30
            }else if (this.tableDataA5[3].shenyuliang>150 &&this.tableDataA5[3].shenyuliang<=300){
              $("#div4").css({"background-color":"#e4fd0e","height":"50px","top":"1850px",});
            }else if (this.tableDataA5[3].shenyuliang>300 &&this.tableDataA5[3].shenyuliang<=450){
              $("#div4").css({"background-color":"#e4fd0e","height":"70px","top":"1831px",});
            }else if (this.tableDataA5[3].shenyuliang>450 &&this.tableDataA5[3].shenyuliang<=600){
              $("#div4").css({"background-color":"#e4fd0e","height":"100px","top":"1799px",});
            }else if (this.tableDataA5[3].shenyuliang>600 &&this.tableDataA5[3].shenyuliang<=800){
              $("#div4").css({"background-color":"#e4fd0e","height":"120px","top":"1779px",});
            }else if (this.tableDataA5[3].shenyuliang>800 &&this.tableDataA5[3].shenyuliang<=1000){
              $("#div4").css({"background-color":"#e4fd0e","height":"140px","top":"1759px",});
            }else if (this.tableDataA5[3].shenyuliang>1000 &&this.tableDataA5[3].shenyuliang<=1200){
              $("#div4").css({"background-color":"#e4fd0e","height":"160px","top":"1739px",});
            }else if (this.tableDataA5[3].shenyuliang>1200 &&this.tableDataA5[3].shenyuliang<=1400){
              $("#div4").css({"background-color":"#e4fd0e","height":"180px","top":"1719px",});
            }else if (this.tableDataA5[3].shenyuliang>1400 &&this.tableDataA5[3].shenyuliang<=1500){
              $("#div4").css({"background-color":"#e4fd0e","height":"199px","top":"1700px",});
            }else if (this.tableDataA5[3].shenyuliang>1500 &&this.tableDataA5[3].shenyuliang<=1700){
              $("#div4").css({"background-color":"#e4fd0e","height":"209px","top":"1690px",});
            }else if (this.tableDataA5[3].shenyuliang>1700 &&this.tableDataA5[3].shenyuliang<=1900){
              $("#div4").css({"background-color":"#e4fd0e","height":"229px","top":"1670px",});
            }else if (this.tableDataA5[3].shenyuliang>1700 &&this.tableDataA5[3].shenyuliang<=1900){
              $("#div4").css({"background-color":"#e4fd0e","height":"248px","top":"1651px",});
            }else if (this.tableDataA5[3].shenyuliang>1900){
              $("#div4").css({"background-color":"#e4fd0e","height":"268px","top":"1631px",});
            }
            //5
            if (this.tableDataA5[4].shenyuliang==0){
              $("#div5").css({"background-color":"#e4fd0e","height":"0px","top":"1861px",});
            }else if (this.tableDataA5[4].shenyuliang>0 &&this.tableDataA5[4].shenyuliang<=150){
              $("#div5").css({"background-color":"#e4fd0e","height":"30","top":"1868px",});  //gao  30
            }else if (this.tableDataA5[4].shenyuliang>150 &&this.tableDataA5[4].shenyuliang<=300){
              $("#div5").css({"background-color":"#e4fd0e","height":"50px","top":"1850px",});
            }else if (this.tableDataA5[4].shenyuliang>300 &&this.tableDataA5[4].shenyuliang<=450){
              $("#div5").css({"background-color":"#e4fd0e","height":"70px","top":"1831px",});
            }else if (this.tableDataA5[4].shenyuliang>450 &&this.tableDataA5[4].shenyuliang<=600){
              $("#div5").css({"background-color":"#e4fd0e","height":"100px","top":"1799px",});
            }else if (this.tableDataA5[4].shenyuliang>600 &&this.tableDataA5[4].shenyuliang<=800){
              $("#div5").css({"background-color":"#e4fd0e","height":"120px","top":"1779px",});
            }else if (this.tableDataA5[4].shenyuliang>800 &&this.tableDataA5[4].shenyuliang<=1000){
              $("#div5").css({"background-color":"#e4fd0e","height":"140px","top":"1759px",});
            }else if (this.tableDataA5[4].shenyuliang>1000 &&this.tableDataA5[4].shenyuliang<=1200){
              $("#div5").css({"background-color":"#e4fd0e","height":"160px","top":"1739px",});
            }else if (this.tableDataA5[4].shenyuliang>1200 &&this.tableDataA5[4].shenyuliang<=1400){
              $("#div5").css({"background-color":"#e4fd0e","height":"180px","top":"1719px",});
            }else if (this.tableDataA5[4].shenyuliang>1400 &&this.tableDataA5[4].shenyuliang<=1500){
              $("#div5").css({"background-color":"#e4fd0e","height":"199px","top":"1700px",});
            }else if (this.tableDataA5[4].shenyuliang>1500 &&this.tableDataA5[4].shenyuliang<=1700){
              $("#div5").css({"background-color":"#e4fd0e","height":"209px","top":"1690px",});
            }else if (this.tableDataA5[4].shenyuliang>1700 &&this.tableDataA5[4].shenyuliang<=1900){
              $("#div5").css({"background-color":"#e4fd0e","height":"229px","top":"1670px",});
            }else if (this.tableDataA5[4].shenyuliang>1700 &&this.tableDataA5[4].shenyuliang<=1900){
              $("#div5").css({"background-color":"#e4fd0e","height":"248px","top":"1651px",});
            }else if (this.tableDataA5[4].shenyuliang>1900){
              $("#div5").css({"background-color":"#e4fd0e","height":"268px","top":"1631px",});
            }
            //6
            if (this.tableDataA5[5].shenyuliang==0){
              $("#div6").css({"background-color":"#e4fd0e","height":"0px","top":"2450px",});
            }else if (this.tableDataA5[5].shenyuliang>0 &&this.tableDataA5[5].shenyuliang<=150){
              $("#div6").css({"background-color":"#e4fd0e","height":"30px","top":"2464px",});  //gao  30
            }else if (this.tableDataA5[5].shenyuliang>150 &&this.tableDataA5[5].shenyuliang<=300){
              $("#div6").css({"background-color":"#e4fd0e","height":"50px","top":"2444px",});
            }else if (this.tableDataA5[5].shenyuliang>300 &&this.tableDataA5[5].shenyuliang<=450){
              $("#div6").css({"background-color":"#e4fd0e","height":"70px","top":"2424px",});
            }else if (this.tableDataA5[5].shenyuliang>450 &&this.tableDataA5[5].shenyuliang<=600){
              $("#div6").css({"background-color":"#e4fd0e","height":"100px","top":"2394px",});
            }else if (this.tableDataA5[5].shenyuliang>600 &&this.tableDataA5[5].shenyuliang<=800){
              $("#div6").css({"background-color":"#e4fd0e","height":"120px","top":"2374px",});
            }else if (this.tableDataA5[5].shenyuliang>800 &&this.tableDataA5[5].shenyuliang<=1000){
              $("#div6").css({"background-color":"#e4fd0e","height":"140px","top":"2354px",});
            }else if (this.tableDataA5[5].shenyuliang>1000 &&this.tableDataA5[5].shenyuliang<=1200){
              $("#div6").css({"background-color":"#e4fd0e","height":"160px","top":"2334px",});
            }else if (this.tableDataA5[5].shenyuliang>1200 &&this.tableDataA5[5].shenyuliang<=1400){
              $("#div6").css({"background-color":"#e4fd0e","height":"180px","top":"2314px",});
            }else if (this.tableDataA5[5].shenyuliang>1400 &&this.tableDataA5[5].shenyuliang<=1500){
              $("#div6").css({"background-color":"#e4fd0e","height":"199px","top":"2295px",});
            }else if (this.tableDataA5[5].shenyuliang>1500 &&this.tableDataA5[5].shenyuliang<=1700){
              $("#div6").css({"background-color":"#e4fd0e","height":"209px","top":"2285px",});
            }else if (this.tableDataA5[5].shenyuliang>1700 &&this.tableDataA5[5].shenyuliang<=1900){
              $("#div6").css({"background-color":"#e4fd0e","height":"229px","top":"2265px",});
            }else if (this.tableDataA5[5].shenyuliang>1700 &&this.tableDataA5[5].shenyuliang<=1900){
              $("#div6").css({"background-color":"#e4fd0e","height":"248px","top":"2247px",});
            }else if (this.tableDataA5[5].shenyuliang>1900){
              $("#div6").css({"background-color":"#e4fd0e","height":"268px","top":"2223px",});
            }
            //7
            if (this.tableDataA5[6].shenyuliang==0){
              $("#div7").css({"background-color":"#e4fd0e","height":"0px","top":"2450px",});
            }else if (this.tableDataA5[6].shenyuliang>0 &&this.tableDataA5[6].shenyuliang<=150){
              $("#div7").css({"background-color":"#e4fd0e","height":"30px","top":"2464px",});  //gao  30
            }else if (this.tableDataA5[6].shenyuliang>150 &&this.tableDataA5[6].shenyuliang<=300){
              $("#div7").css({"background-color":"#e4fd0e","height":"50px","top":"2444px",});
            }else if (this.tableDataA5[6].shenyuliang>300 &&this.tableDataA5[6].shenyuliang<=450){
              $("#div7").css({"background-color":"#e4fd0e","height":"70px","top":"2424px",});
            }else if (this.tableDataA5[6].shenyuliang>450 &&this.tableDataA5[6].shenyuliang<=600){
              $("#div7").css({"background-color":"#e4fd0e","height":"100px","top":"2394px",});
            }else if (this.tableDataA5[6].shenyuliang>600 &&this.tableDataA5[6].shenyuliang<=800){
              $("#div7").css({"background-color":"#e4fd0e","height":"120px","top":"2374px",});
            }else if (this.tableDataA5[6].shenyuliang>800 &&this.tableDataA5[6].shenyuliang<=1000){
              $("#div7").css({"background-color":"#e4fd0e","height":"140px","top":"2354px",});
            }else if (this.tableDataA5[6].shenyuliang>1000 &&this.tableDataA5[6].shenyuliang<=1200){
              $("#div7").css({"background-color":"#e4fd0e","height":"160px","top":"2334px",});
            }else if (this.tableDataA5[6].shenyuliang>1200 &&this.tableDataA5[6].shenyuliang<=1400){
              $("#div7").css({"background-color":"#e4fd0e","height":"180px","top":"2314px",});
            }else if (this.tableDataA5[6].shenyuliang>1400 &&this.tableDataA5[6].shenyuliang<=1500){
              $("#div7").css({"background-color":"#e4fd0e","height":"199px","top":"2295px",});
            }else if (this.tableDataA5[6].shenyuliang>1500 &&this.tableDataA5[6].shenyuliang<=1700){
              $("#div7").css({"background-color":"#e4fd0e","height":"209px","top":"2285px",});
            }else if (this.tableDataA5[6].shenyuliang>1700 &&this.tableDataA5[6].shenyuliang<=1900){
              $("#div7").css({"background-color":"#e4fd0e","height":"229px","top":"2265px",});
            }else if (this.tableDataA5[6].shenyuliang>1700 &&this.tableDataA5[6].shenyuliang<=1900){
              $("#div7").css({"background-color":"#e4fd0e","height":"248px","top":"2247px",});
            }else if (this.tableDataA5[6].shenyuliang>1900){
              $("#div7").css({"background-color":"#e4fd0e","height":"268px","top":"2223px",});
            }
            //8
            if (this.tableDataA5[7].shenyuliang==0){
              $("#div8").css({"background-color":"#e4fd0e","height":"0px","top":"2450px",});
            }else if (this.tableDataA5[7].shenyuliang>0 &&this.tableDataA5[7].shenyuliang<=150){
              $("#div8").css({"background-color":"#e4fd0e","height":"30px","top":"2464px",});  //gao  30
            }else if (this.tableDataA5[7].shenyuliang>150 &&this.tableDataA5[7].shenyuliang<=300){
              $("#div8").css({"background-color":"#e4fd0e","height":"50px","top":"2444px",});
            }else if (this.tableDataA5[7].shenyuliang>300 &&this.tableDataA5[7].shenyuliang<=450){
              $("#div8").css({"background-color":"#e4fd0e","height":"70px","top":"2424px",});
            }else if (this.tableDataA5[7].shenyuliang>450 &&this.tableDataA5[7].shenyuliang<=600){
              $("#div8").css({"background-color":"#e4fd0e","height":"100px","top":"2394px",});
            }else if (this.tableDataA5[7].shenyuliang>600 &&this.tableDataA5[7].shenyuliang<=800){
              $("#div8").css({"background-color":"#e4fd0e","height":"120px","top":"2374px",});
            }else if (this.tableDataA5[7].shenyuliang>800 &&this.tableDataA5[7].shenyuliang<=1000){
              $("#div8").css({"background-color":"#e4fd0e","height":"140px","top":"2354px",});
            }else if (this.tableDataA5[7].shenyuliang>1000 &&this.tableDataA5[7].shenyuliang<=1200){
              $("#div8").css({"background-color":"#e4fd0e","height":"160px","top":"2334px",});
            }else if (this.tableDataA5[7].shenyuliang>1200 &&this.tableDataA5[7].shenyuliang<=1400){
              $("#div8").css({"background-color":"#e4fd0e","height":"180px","top":"2314px",});
            }else if (this.tableDataA5[7].shenyuliang>1400 &&this.tableDataA5[7].shenyuliang<=1500){
              $("#div8").css({"background-color":"#e4fd0e","height":"199px","top":"2295px",});
            }else if (this.tableDataA5[7].shenyuliang>1500 &&this.tableDataA5[7].shenyuliang<=1700){
              $("#div8").css({"background-color":"#e4fd0e","height":"209px","top":"2285px",});
            }else if (this.tableDataA5[7].shenyuliang>1700 &&this.tableDataA5[7].shenyuliang<=1900){
              $("#div8").css({"background-color":"#e4fd0e","height":"229px","top":"2265px",});
            }else if (this.tableDataA5[7].shenyuliang>1700 &&this.tableDataA5[7].shenyuliang<=1900){
              $("#div8").css({"background-color":"#e4fd0e","height":"248px","top":"2247px",});
            }else if (this.tableDataA5[7].shenyuliang>1900){
              $("#div8").css({"background-color":"#e4fd0e","height":"268px","top":"2223px",});
            }
            //9
            if (this.tableDataA5[8].shenyuliang==0){
              $("#div9").css({"background-color":"#e4fd0e","height":"0px","top":"2450px",});
            }else if (this.tableDataA5[8].shenyuliang>0 &&this.tableDataA5[8].shenyuliang<=150){
              $("#div9").css({"background-color":"#e4fd0e","height":"30px","top":"2464px",});  //gao  30
            }else if (this.tableDataA5[8].shenyuliang>150 &&this.tableDataA5[8].shenyuliang<=300){
              $("#div9").css({"background-color":"#e4fd0e","height":"50px","top":"2444px",});
            }else if (this.tableDataA5[8].shenyuliang>300 &&this.tableDataA5[8].shenyuliang<=450){
              $("#div9").css({"background-color":"#e4fd0e","height":"70px","top":"2424px",});
            }else if (this.tableDataA5[8].shenyuliang>450 &&this.tableDataA5[8].shenyuliang<=600){
              $("#div9").css({"background-color":"#e4fd0e","height":"100px","top":"2394px",});
            }else if (this.tableDataA5[8].shenyuliang>600 &&this.tableDataA5[8].shenyuliang<=800){
              $("#div9").css({"background-color":"#e4fd0e","height":"120px","top":"2374px",});
            }else if (this.tableDataA5[8].shenyuliang>800 &&this.tableDataA5[8].shenyuliang<=1000){
              $("#div9").css({"background-color":"#e4fd0e","height":"140px","top":"2354px",});
            }else if (this.tableDataA5[8].shenyuliang>1000 &&this.tableDataA5[8].shenyuliang<=1200){
              $("#div9").css({"background-color":"#e4fd0e","height":"160px","top":"2334px",});
            }else if (this.tableDataA5[8].shenyuliang>1200 &&this.tableDataA5[8].shenyuliang<=1400){
              $("#div9").css({"background-color":"#e4fd0e","height":"180px","top":"2314px",});
            }else if (this.tableDataA5[8].shenyuliang>1400 &&this.tableDataA5[8].shenyuliang<=1500){
              $("#div9").css({"background-color":"#e4fd0e","height":"199px","top":"2295px",});
            }else if (this.tableDataA5[8].shenyuliang>1500 &&this.tableDataA5[8].shenyuliang<=1700){
              $("#div9").css({"background-color":"#e4fd0e","height":"209px","top":"2285px",});
            }else if (this.tableDataA5[8].shenyuliang>1700 &&this.tableDataA5[8].shenyuliang<=1900){
              $("#div9").css({"background-color":"#e4fd0e","height":"229px","top":"2265px",});
            }else if (this.tableDataA5[8].shenyuliang>1700 &&this.tableDataA5[8].shenyuliang<=1900){
              $("#div9").css({"background-color":"#e4fd0e","height":"248px","top":"2247px",});
            }else if (this.tableDataA5[8].shenyuliang>1900){
              $("#div9").css({"background-color":"#e4fd0e","height":"268px","top":"2223px",});
            }
            //10
            if (this.tableDataA5[9].shenyuliang==0){
              $("#divv").css({"background-color":"#e4fd0e","height":"0px","top":"2450px",});
            }else if (this.tableDataA5[9].shenyuliang>0 &&this.tableDataA5[9].shenyuliang<=150){
              $("#divv").css({"background-color":"#e4fd0e","height":"30px","top":"2464px",});  //gao  30
            }else if (this.tableDataA5[9].shenyuliang>150 &&this.tableDataA5[9].shenyuliang<=300){
              $("#divv").css({"background-color":"#e4fd0e","height":"50px","top":"2444px",});
            }else if (this.tableDataA5[9].shenyuliang>300 &&this.tableDataA5[9].shenyuliang<=450){
              $("#divv").css({"background-color":"#e4fd0e","height":"70px","top":"2424px",});
            }else if (this.tableDataA5[9].shenyuliang>450 &&this.tableDataA5[9].shenyuliang<=600){
              $("#divv").css({"background-color":"#e4fd0e","height":"100px","top":"2394px",});
            }else if (this.tableDataA5[9].shenyuliang>600 &&this.tableDataA5[9].shenyuliang<=800){
              $("#divv").css({"background-color":"#e4fd0e","height":"120px","top":"2374px",});
            }else if (this.tableDataA5[9].shenyuliang>800 &&this.tableDataA5[9].shenyuliang<=1000){
              $("#divv").css({"background-color":"#e4fd0e","height":"140px","top":"2354px",});
            }else if (this.tableDataA5[9].shenyuliang>1000 &&this.tableDataA5[9].shenyuliang<=1200){
              $("#divv").css({"background-color":"#e4fd0e","height":"160px","top":"2334px",});
            }else if (this.tableDataA5[9].shenyuliang>1200 &&this.tableDataA5[9].shenyuliang<=1400){
              $("#divv").css({"background-color":"#e4fd0e","height":"180px","top":"2314px",});
            }else if (this.tableDataA5[9].shenyuliang>1400 &&this.tableDataA5[9].shenyuliang<=1500){
              $("#divv").css({"background-color":"#e4fd0e","height":"199px","top":"2295px",});
            }else if (this.tableDataA5[9].shenyuliang>1500 &&this.tableDataA5[9].shenyuliang<=1700){
              $("#divv").css({"background-color":"#e4fd0e","height":"209px","top":"2285px",});
            }else if (this.tableDataA5[9].shenyuliang>1700 &&this.tableDataA5[9].shenyuliang<=1900){
              $("#divv").css({"background-color":"#e4fd0e","height":"229px","top":"2265px",});
            }else if (this.tableDataA5[9].shenyuliang>1700 &&this.tableDataA5[9].shenyuliang<=1900){
              $("#divv").css({"background-color":"#e4fd0e","height":"248px","top":"2247px",});
            }else if (this.tableDataA5[9].shenyuliang>1900){
              $("#divv").css({"background-color":"#e4fd0e","height":"268px","top":"2223px",});
            }
            //tem
            if (this.tableDataA5[0].tem==0){
              $("#tem").css({"background-color":"#fca110","height":"0px","top":"0px",});
            }else if (this.tableDataA5[0].tem>0 &&this.tableDataA5[0].tem<=10){
              $("#tem").css({"background-color":"#fca110","height":"10px","top":"1898px",});  //gao  30
            }else if (this.tableDataA5[0].tem>10 &&this.tableDataA5[0].tem<=20){
              $("#tem").css({"background-color":"#fca110","height":"40px","top":"1894px",}); // 40   1893
            }else if (this.tableDataA5[0].tem>20 &&this.tableDataA5[0].tem<=30){
              $("#tem").css({"background-color":"#fca110","height":"60px","top":"1874px",});
            }else if (this.tableDataA5[0].tem>30 &&this.tableDataA5[0].tem<=40){
              $("#tem").css({"background-color":"#fca110","height":"100px","top":"1834px",});
            }else if (this.tableDataA5[0].tem>40 &&this.tableDataA5[0].tem<=50){
              $("#tem").css({"background-color":"#fca110","height":"140px","top":"1794px",});
            }else if (this.tableDataA5[0].tem>50 &&this.tableDataA5[0].tem<=60){
              $("#tem").css({"background-color":"#fca110","height":"180px","top":"1754px",});
            }else if (this.tableDataA5[0].tem>60 &&this.tableDataA5[0].tem<=70){
              $("#tem").css({"background-color":"#fca110","height":"220px","top":"1714px",});
            }else if (this.tableDataA5[0].tem>70 &&this.tableDataA5[0].tem<=80){
              $("#tem").css({"background-color":"#fca110","height":"260px","top":"1674px",});
            }else if (this.tableDataA5[0].tem>80 &&this.tableDataA5[0].tem<=90){
              $("#tem").css({"background-color":"#fca110","height":"300px","top":"1634px",});
            }else if (this.tableDataA5[0].tem>90){
              $("#tem").css({"background-color":"#fca110","height":"332px","top":"1601px",});
            }
            //tem2
            if (this.tableDataA5[1].tem==0){
              $("#tem1").css({"background-color":"#fca110","height":"0px","top":"0px",});
            }else if (this.tableDataA5[1].tem>0 &&this.tableDataA5[1].tem<=10){
              $("#tem1").css({"background-color":"#fca110","height":"10px","top":"1898px",});  //gao  30
            }else if (this.tableDataA5[1].tem>10 &&this.tableDataA5[1].tem<=20){
              $("#tem1").css({"background-color":"#fca110","height":"40px","top":"1894px",});
            }else if (this.tableDataA5[1].tem>20 &&this.tableDataA5[1].tem<=30){
              $("#tem1").css({"background-color":"#fca110","height":"60px","top":"1874px",});
            }else if (this.tableDataA5[1].tem>30 &&this.tableDataA5[1].tem<=40){
              $("#tem1").css({"background-color":"#fca110","height":"100px","top":"1834px",});
            }else if (this.tableDataA5[1].tem>40 &&this.tableDataA5[1].tem<=50){
              $("#tem1").css({"background-color":"#fca110","height":"140px","top":"1794px",});
            }else if (this.tableDataA5[1].tem>50 &&this.tableDataA5[1].tem<=60){
              $("#tem1").css({"background-color":"#fca110","height":"180px","top":"1754px",});
            }else if (this.tableDataA5[1].tem>60 &&this.tableDataA5[1].tem<=70){
              $("#tem1").css({"background-color":"#fca110","height":"220px","top":"1714px",});
            }else if (this.tableDataA5[1].tem>70 &&this.tableDataA5[1].tem<=80){
              $("#tem1").css({"background-color":"#fca110","height":"260px","top":"1674px",});
            }else if (this.tableDataA5[1].tem>80 &&this.tableDataA5[1].tem<=90){
              $("#tem1").css({"background-color":"#fca110","height":"300px","top":"1634px",});
            }else if (this.tableDataA5[1].tem>90){
              $("#tem1").css({"background-color":"#fca110","height":"332px","top":"1601px",});
            }
            //tem3
            if (this.tableDataA5[2].tem==0){
              $("#tem2").css({"background-color":"#fca110","height":"0px","top":"0px",});
            }else if (this.tableDataA5[2].tem>0 &&this.tableDataA5[2].tem<=10){
              $("#tem2").css({"background-color":"#fca110","height":"10px","top":"1898px",});  //gao  30
            }else if (this.tableDataA5[2].tem>10 &&this.tableDataA5[2].tem<=20){
              $("#tem2").css({"background-color":"#fca110","height":"40px","top":"1894px",});
            }else if (this.tableDataA5[2].tem>20 &&this.tableDataA5[2].tem<=30){
              $("#tem2").css({"background-color":"#fca110","height":"60px","top":"1874px",});
            }else if (this.tableDataA5[2].tem>30 &&this.tableDataA5[2].tem<=40){
              $("#tem2").css({"background-color":"#fca110","height":"100px","top":"1834px",});
            }else if (this.tableDataA5[2].tem>40 &&this.tableDataA5[2].tem<=50){
              $("#tem2").css({"background-color":"#fca110","height":"140px","top":"1794px",});
            }else if (this.tableDataA5[2].tem>50 &&this.tableDataA5[2].tem<=60){
              $("#tem2").css({"background-color":"#fca110","height":"180px","top":"1754px",});
            }else if (this.tableDataA5[2].tem>60 &&this.tableDataA5[2].tem<=70){
              $("#tem2").css({"background-color":"#fca110","height":"220px","top":"1714px",});
            }else if (this.tableDataA5[2].tem>70 &&this.tableDataA5[2].tem<=80){
              $("#tem2").css({"background-color":"#fca110","height":"260px","top":"1674px",});
            }else if (this.tableDataA5[2].tem>80 &&this.tableDataA5[2].tem<=90){
              $("#tem2").css({"background-color":"#fca110","height":"300px","top":"1634px",});
            }else if (this.tableDataA5[2].tem>90){
              $("#tem2").css({"background-color":"#fca110","height":"332px","top":"1601px",});
            }
            //tem4
            if (this.tableDataA5[3].tem==0){
              $("#tem3").css({"background-color":"#fca110","height":"0px","top":"0px",});
            }else if (this.tableDataA5[3].tem>0 &&this.tableDataA5[3].tem<=10){
              $("#tem3").css({"background-color":"#fca110","height":"10px","top":"1898px",});  //gao  30
            }else if (this.tableDataA5[3].tem>10 &&this.tableDataA5[3].tem<=20){
              $("#tem3").css({"background-color":"#fca110","height":"40px","top":"1894px",});
            }else if (this.tableDataA5[3].tem>20 &&this.tableDataA5[3].tem<=30){
              $("#tem3").css({"background-color":"#fca110","height":"60px","top":"1874px",});
            }else if (this.tableDataA5[3].tem>30 &&this.tableDataA5[3].tem<=40){
              $("#tem3").css({"background-color":"#fca110","height":"100px","top":"1834px",});
            }else if (this.tableDataA5[3].tem>40 &&this.tableDataA5[3].tem<=50){
              $("#tem3").css({"background-color":"#fca110","height":"140px","top":"1794px",});
            }else if (this.tableDataA5[3].tem>50 &&this.tableDataA5[3].tem<=60){
              $("#tem3").css({"background-color":"#fca110","height":"180px","top":"1754px",});
            }else if (this.tableDataA5[3].tem>60 &&this.tableDataA5[3].tem<=70){
              $("#tem3").css({"background-color":"#fca110","height":"220px","top":"1714px",});
            }else if (this.tableDataA5[3].tem>70 &&this.tableDataA5[3].tem<=80){
              $("#tem3").css({"background-color":"#fca110","height":"260px","top":"1674px",});
            }else if (this.tableDataA5[3].tem>80 &&this.tableDataA5[3].tem<=90){
              $("#tem3").css({"background-color":"#fca110","height":"300px","top":"1634px",});
            }else if (this.tableDataA5[3].tem>90){
              $("#tem3").css({"background-color":"#fca110","height":"332px","top":"1601px",});
            }
            //tem5
            if (this.tableDataA5[4].tem==0){
              $("#tem4").css({"background-color":"#fca110","height":"0px","top":"0px",});
            }else if (this.tableDataA5[4].tem>0 &&this.tableDataA5[4].tem<=10){
              $("#tem4").css({"background-color":"#fca110","height":"10px","top":"1898px",});  //gao  30
            }else if (this.tableDataA5[4].tem>10 &&this.tableDataA5[4].tem<=20){
              $("#tem4").css({"background-color":"#fca110","height":"40px","top":"1894px",});
            }else if (this.tableDataA5[4].tem>20 &&this.tableDataA5[4].tem<=30){
              $("#tem4").css({"background-color":"#fca110","height":"60px","top":"1874px",});
            }else if (this.tableDataA5[4].tem>30 &&this.tableDataA5[4].tem<=40){
              $("#tem4").css({"background-color":"#fca110","height":"100px","top":"1834px",});
            }else if (this.tableDataA5[4].tem>40 &&this.tableDataA5[4].tem<=50){
              $("#tem4").css({"background-color":"#fca110","height":"140px","top":"1794px",});
            }else if (this.tableDataA5[4].tem>50 &&this.tableDataA5[4].tem<=60){
              $("#tem4").css({"background-color":"#fca110","height":"180px","top":"1754px",});
            }else if (this.tableDataA5[4].tem>60 &&this.tableDataA5[4].tem<=70){
              $("#tem4").css({"background-color":"#fca110","height":"220px","top":"1714px",});
            }else if (this.tableDataA5[4].tem>70 &&this.tableDataA5[4].tem<=80){
              $("#tem4").css({"background-color":"#fca110","height":"260px","top":"1674px",});
            }else if (this.tableDataA5[4].tem>80 &&this.tableDataA5[4].tem<=90){
              $("#tem4").css({"background-color":"#fca110","height":"300px","top":"1634px",});
            }else if (this.tableDataA5[4].tem>90){
              $("#tem4").css({"background-color":"#fca110","height":"332px","top":"1601px",});
            }
            //tem6
            if (this.tableDataA5[5].tem==0){
              $("#tem5").css({"background-color":"#fca110","height":"0px","top":"0px",});
            }else if (this.tableDataA5[5].tem>0 &&this.tableDataA5[5].tem<=10){
              $("#tem5").css({"background-color":"#fca110","height":"10px","top":"2518px",});
            }else if (this.tableDataA5[5].tem>10 &&this.tableDataA5[5].tem<=20){
              $("#tem5").css({"background-color":"#fca110","height":"40px","top":"2488px",});
            }else if (this.tableDataA5[5].tem>20 &&this.tableDataA5[5].tem<=30){
              $("#tem5").css({"background-color":"#fca110","height":"60px","top":"2468px",});  //  60   2460
            }else if (this.tableDataA5[5].tem>30 &&this.tableDataA5[5].tem<=40){
              $("#tem5").css({"background-color":"#fca110","height":"100px","top":"2428px",});
            }else if (this.tableDataA5[5].tem>40 &&this.tableDataA5[5].tem<=50){
              $("#tem5").css({"background-color":"#fca110","height":"140px","top":"2388px",});
            }else if (this.tableDataA5[5].tem>50 &&this.tableDataA5[5].tem<=60){
              $("#tem5").css({"background-color":"#fca110","height":"180px","top":"2348px",});
            }else if (this.tableDataA5[5].tem>60 &&this.tableDataA5[5].tem<=70){
              $("#tem5").css({"background-color":"#fca110","height":"220px","top":"2308px",});
            }else if (this.tableDataA5[5].tem>70 &&this.tableDataA5[5].tem<=80){
              $("#tem5").css({"background-color":"#fca110","height":"260px","top":"2268px",});
            }else if (this.tableDataA5[5].tem>80 &&this.tableDataA5[5].tem<=90){
              $("#tem5").css({"background-color":"#fca110","height":"300px","top":"2228px",});
            }else if (this.tableDataA5[5].tem>90){
              $("#tem5").css({"background-color":"#fca110","height":"332px","top":"2192px",});
            }
            //tem7
            if (this.tableDataA5[6].tem==0){
              $("#tem6").css({"background-color":"#fca110","height":"0px","top":"0px",});
            }else if (this.tableDataA5[6].tem>0 &&this.tableDataA5[6].tem<=10){
              $("#tem6").css({"background-color":"#fca110","height":"10px","top":"2518px",});
            }else if (this.tableDataA5[6].tem>10 &&this.tableDataA5[6].tem<=20){
              $("#tem6").css({"background-color":"#fca110","height":"40px","top":"2488px",});
            }else if (this.tableDataA5[6].tem>20 &&this.tableDataA5[6].tem<=30){
              $("#tem6").css({"background-color":"#fca110","height":"60px","top":"2468px",});  //  60   2460
            }else if (this.tableDataA5[6].tem>30 &&this.tableDataA5[6].tem<=40){
              $("#tem6").css({"background-color":"#fca110","height":"100px","top":"2428px",});
            }else if (this.tableDataA5[6].tem>40 &&this.tableDataA5[6].tem<=50){
              $("#tem6").css({"background-color":"#fca110","height":"140px","top":"2388px",});
            }else if (this.tableDataA5[6].tem>50 &&this.tableDataA5[6].tem<=60){
              $("#tem6").css({"background-color":"#fca110","height":"180px","top":"2348px",});
            }else if (this.tableDataA5[6].tem>60 &&this.tableDataA5[6].tem<=70){
              $("#tem6").css({"background-color":"#fca110","height":"220px","top":"2308px",});
            }else if (this.tableDataA5[6].tem>70 &&this.tableDataA5[6].tem<=80){
              $("#tem6").css({"background-color":"#fca110","height":"260px","top":"2268px",});
            }else if (this.tableDataA5[6].tem>80 &&this.tableDataA5[6].tem<=90){
              $("#tem6").css({"background-color":"#fca110","height":"300px","top":"2228px",});
            }else if (this.tableDataA5[6].tem>90){
              $("#tem6").css({"background-color":"#fca110","height":"332px","top":"2192px",});
            }
            //tem8
            if (this.tableDataA5[7].tem==0){
              $("#tem7").css({"background-color":"#fca110","height":"0px","top":"0px",});
            }else if (this.tableDataA5[7].tem>0 &&this.tableDataA5[7].tem<=10){
              $("#tem7").css({"background-color":"#fca110","height":"10px","top":"2518px",});
            }else if (this.tableDataA5[7].tem>10 &&this.tableDataA5[7].tem<=20){
              $("#tem7").css({"background-color":"#fca110","height":"40px","top":"2488px",});
            }else if (this.tableDataA5[7].tem>20 &&this.tableDataA5[7].tem<=30){
              $("#tem7").css({"background-color":"#fca110","height":"60px","top":"2468px",});  //  60   2460
            }else if (this.tableDataA5[7].tem>30 &&this.tableDataA5[7].tem<=40){
              $("#tem7").css({"background-color":"#fca110","height":"100px","top":"2428px",});
            }else if (this.tableDataA5[7].tem>40 &&this.tableDataA5[7].tem<=50){
              $("#tem7").css({"background-color":"#fca110","height":"140px","top":"2388px",});
            }else if (this.tableDataA5[7].tem>50 &&this.tableDataA5[7].tem<=60){
              $("#tem7").css({"background-color":"#fca110","height":"180px","top":"2348px",});
            }else if (this.tableDataA5[7].tem>60 &&this.tableDataA5[7].tem<=70){
              $("#tem7").css({"background-color":"#fca110","height":"220px","top":"2308px",});
            }else if (this.tableDataA5[7].tem>70 &&this.tableDataA5[7].tem<=80){
              $("#tem7").css({"background-color":"#fca110","height":"260px","top":"2268px",});
            }else if (this.tableDataA5[7].tem>80 &&this.tableDataA5[7].tem<=90){
              $("#tem7").css({"background-color":"#fca110","height":"300px","top":"2228px",});
            }else if (this.tableDataA5[7].tem>90){
              $("#tem7").css({"background-color":"#fca110","height":"332px","top":"2192px",});
            }
            //tem9
            if (this.tableDataA5[8].tem==0){
              $("#tem8").css({"background-color":"#fca110","height":"0px","top":"0px",});
            }else if (this.tableDataA5[8].tem>0 &&this.tableDataA5[8].tem<=10){
              $("#tem8").css({"background-color":"#fca110","height":"10px","top":"2518px",});
            }else if (this.tableDataA5[8].tem>10 &&this.tableDataA5[8].tem<=20){
              $("#tem8").css({"background-color":"#fca110","height":"40px","top":"2488px",});
            }else if (this.tableDataA5[8].tem>20 &&this.tableDataA5[8].tem<=30){
              $("#tem8").css({"background-color":"#fca110","height":"60px","top":"2468px",});  //  60   2460
            }else if (this.tableDataA5[8].tem>30 &&this.tableDataA5[8].tem<=40){
              $("#tem8").css({"background-color":"#fca110","height":"100px","top":"2428px",});
            }else if (this.tableDataA5[8].tem>40 &&this.tableDataA5[8].tem<=50){
              $("#tem8").css({"background-color":"#fca110","height":"140px","top":"2388px",});
            }else if (this.tableDataA5[8].tem>50 &&this.tableDataA5[8].tem<=60){
              $("#tem8").css({"background-color":"#fca110","height":"180px","top":"2348px",});
            }else if (this.tableDataA5[8].tem>60 &&this.tableDataA5[8].tem<=70){
              $("#tem8").css({"background-color":"#fca110","height":"220px","top":"2308px",});
            }else if (this.tableDataA5[8].tem>70 &&this.tableDataA5[8].tem<=80){
              $("#tem8").css({"background-color":"#fca110","height":"260px","top":"2268px",});
            }else if (this.tableDataA5[8].tem>80 &&this.tableDataA5[8].tem<=90){
              $("#tem8").css({"background-color":"#fca110","height":"300px","top":"2228px",});
            }else if (this.tableDataA5[8].tem>90){
              $("#tem8").css({"background-color":"#fca110","height":"332px","top":"2192px",});
            }
            //tem10
            if (this.tableDataA5[9].tem==0){
              $("#tem9").css({"background-color":"#fca110","height":"0px","top":"0px",});
            }else if (this.tableDataA5[9].tem>0 &&this.tableDataA5[9].tem<=10){
              $("#tem9").css({"background-color":"#fca110","height":"10px","top":"2518px",});
            }else if (this.tableDataA5[9].tem>10 &&this.tableDataA5[9].tem<=20){
              $("#tem9").css({"background-color":"#fca110","height":"40px","top":"2488px",});
            }else if (this.tableDataA5[9].tem>20 &&this.tableDataA5[9].tem<=30){
              $("#tem9").css({"background-color":"#fca110","height":"60px","top":"2468px",});  //  60   2460
            }else if (this.tableDataA5[9].tem>30 &&this.tableDataA5[9].tem<=40){
              $("#tem9").css({"background-color":"#fca110","height":"100px","top":"2428px",});
            }else if (this.tableDataA5[9].tem>40 &&this.tableDataA5[9].tem<=50){
              $("#tem9").css({"background-color":"#fca110","height":"140px","top":"2388px",});
            }else if (this.tableDataA5[9].tem>50 &&this.tableDataA5[9].tem<=60){
              $("#tem9").css({"background-color":"#fca110","height":"180px","top":"2348px",});
            }else if (this.tableDataA5[9].tem>60 &&this.tableDataA5[9].tem<=70){
              $("#tem9").css({"background-color":"#fca110","height":"220px","top":"2308px",});
            }else if (this.tableDataA5[9].tem>70 &&this.tableDataA5[9].tem<=80){
              $("#tem9").css({"background-color":"#fca110","height":"260px","top":"2268px",});
            }else if (this.tableDataA5[9].tem>80 &&this.tableDataA5[9].tem<=90){
              $("#tem9").css({"background-color":"#fca110","height":"300px","top":"2228px",});
            }else if (this.tableDataA5[9].tem>90){
              $("#tem9").css({"background-color":"#fca110","height":"332px","top":"2192px",});
            }
            // for ( var i=0;i<=this.tableDataA5.length;i++ ){
            //   console.log(this.tableDataA5[i].shenyuliang)
            //
            // }
          }
        });
      // let eWidth = this.$refs.echartsWrapper.style.height
      // console.log(eWidth)

    },
    A2() {
      var usp = new URLSearchParams();
      usp.append("machineNo", "A");
      axios
        .post(shaoguanUrl+"/api/getDianLanMuyeData", usp)
        .then(res => {
          //console.log(res.data)
          //console.log(res.data.code)
          if (res.data.code==0 ){
            //console.log( res.data.data);
            this.tableDataA1 = res.data.data;
            this.totalA1 = res.data.total;
          }
        });
    },
    A4() {
      var usp = new URLSearchParams();
      usp.append("machineNo", "A");
      axios
        .post(shaoguanUrl+"/api/getMuYeJianceData",usp)
        .then(res => {
            //console.log(res.data)
            //console.log(res.data.code)
            if (res.data.code==0 ){
              //console.log( res.data.data);
              this.tableDataA4 = res.data.data;
            }
        });
    },
    A5() {
      var usp = new URLSearchParams();
      usp.append("machineNo", "B");
      axios
        .post(shaoguanUrl+"/api/getDianLanMuyeData", usp)
        .then(res => {
          //console.log(res.data)
          //console.log(res.data.code)
          if (res.data.code==0 ){
            //console.log( res.data.data);
            this.tableDataA1 = res.data.data;
            this.totalA1 = res.data.total;
          }
        });
    },
    A6() {
      var usp = new URLSearchParams();
      usp.append("machineNo", "B");
      axios
        .post(shaoguanUrl+"/api/getMuYeJianceData",usp)
        .then(res => {
          console.log(res.data)
          console.log(res.data.code)
          if (res.data.code==0 ){
            console.log( res.data.data);
            this.tableDataA4 = res.data.data;
          }
        });
    },
    A7() {
      var usp = new URLSearchParams();
      usp.append("machineNo", "C");
      axios
        .post(shaoguanUrl+"/api/getDianLanMuyeData", usp)
        .then(res => {
          console.log(res.data)
          console.log(res.data.code)
          if (res.data.code==0 ){
            console.log( res.data.data);
            this.tableDataA1 = res.data.data;
            this.totalA1 = res.data.total;
          }
        });
    },
    A8() {
      var usp = new URLSearchParams();
      usp.append("machineNo", "C");
      axios
        .post(shaoguanUrl+"/api/getMuYeJianceData",usp)
        .then(res => {
          console.log(res.data)
          console.log(res.data.code)
          if (res.data.code==0 ){
            console.log( res.data.data);
            this.tableDataA4 = res.data.data;
          }
        });
    },
    A9() {
      var usp = new URLSearchParams();
      usp.append("machineNo", "D");
      axios
        .post(shaoguanUrl+"/api/getDianLanMuyeData", usp)
        .then(res => {
          console.log(res.data)
          console.log(res.data.code)
          if (res.data.code==0 ){
            console.log( res.data.data);
            this.tableDataA1 = res.data.data;
            this.totalA1 = res.data.total;
          }
        });
    },
    A10() {
      var usp = new URLSearchParams();
      usp.append("machineNo", "D");
      axios
        .post(shaoguanUrl+"/api/getMuYeJianceData",usp)
        .then(res => {
          console.log(res.data)
          console.log(res.data.code)
          if (res.data.code==0 ){
            console.log( res.data.data);
            this.tableDataA4 = res.data.data;
          }
        });
    },
    A11() {
      var usp = new URLSearchParams();
      usp.append("machineNo", "E");
      axios
        .post(shaoguanUrl+"/api/getDianLanMuyeData", usp)
        .then(res => {
          console.log(res.data)
          console.log(res.data.code)
          if (res.data.code==0 ){
            console.log( res.data.data);
            this.tableDataA1 = res.data.data;
            this.totalA1 = res.data.total;
          }
        });
    },
    A12() {
      var usp = new URLSearchParams();
      usp.append("machineNo", "E");
      axios
        .post(shaoguanUrl+"/api/getMuYeJianceData",usp)
        .then(res => {
          console.log(res.data)
          console.log(res.data.code)
          if (res.data.code==0 ){
            console.log( res.data.data);
            this.tableDataA4 = res.data.data;
          }
        });
    },
    handleCurrentChangeA4(val) {
      console.log(`当前页: ${val}`);
      this.currentPageA4 = val;
      axios
        .post(shaoguanUrl+"/api/getMuYeTestInfo", {
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

    setShuju() {/*
      axios
        .get("/api/getControlStandardDaping", {
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
        });*/
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
  width: 640px;
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
  color: red;
}
#p1 span:nth-child(2) {

  color: #00ecfc;
}
#p1 span:nth-child(3) {
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



/*.el-table .success-row {*/
  /*background: #f0f9eb;*/
/*}*/

  .red{

    color: red;
  }
#TtonT{
    width: 3460px;
    position: relative;
    height: 1780px;
    margin-left: 420px;
    margin-top: 56px;
    background: url(../assets/mother/tton.png);
  float: left
  }
#TtonT .TtonTa{
  position: absolute;
  top: -95px;
  left: 76px;
}
#TtonT .TtonTa_{
  position: absolute;
  top: -95px;
  left: 76px;
}
#TtonT .AcliCk{
  display: inline-block;
  width: 160px;
  height: 160px;
  /*background-color: red;*/
  position: absolute;
  top: 566px;
  left: 29px;
  z-index: 99;
  cursor: pointer;
}

#TtonT .TtonTb{
  position: absolute;
  top: -95px;
  left: 76px;
}
#TtonT .TtonTb_{
  position: absolute;
  top: -95px;
  left: 76px;
}
#TtonT .BcliCk{
  display: inline-block;
  width: 160px;
  height: 160px;
  /*background-color: red;*/
  position: absolute;
  top: 761px;
  left: 90px;
  z-index: 100;
  cursor: pointer;
}

#TtonT .TtonTc{
  position: absolute;
  top: -95px;
  left: 76px;
}
#TtonT .TtonTc_{
  position: absolute;
  top: -95px;
  left: 76px;
}
#TtonT .CcliCk{
  display: inline-block;
  width: 160px;
  height: 160px;
  /*background-color: red;*/
  position: absolute;
  top: 950px;
  left: 133px;
  z-index: 100;
  cursor: pointer;
}

#TtonT .TtonTd{
  position: absolute;
  top: -95px;
  left: 76px;
}
#TtonT .TtonTd_{
  position: absolute;
  top: -95px;
  left: 76px;
}
#TtonT .DcliCk{
  display: inline-block;
  width: 160px;
  height: 160px;
  /*background-color: red;*/
  position: absolute;
  top: 1190px;
  left: 222px;
  z-index: 100;
  cursor: pointer;
}
#TtonT .TtonTe{
  position: absolute;
  top: -95px;
  left: 76px;
}
#TtonT .TtonTe_{
  position: absolute;
  top: -95px;
  left: 76px;
}
#TtonT .EcliCk{
  display: inline-block;
  width: 160px;
  height: 160px;
  /*background-color: red;*/
  position: absolute;
  top: 1517px;
  left: 338px;
  z-index: 100;
  cursor: pointer;
}
  #GangG span{
    margin-right: 50px;
    float: left;
  }
#GangG i{
  width: 36px;
  border: 1px solid  #fca110;
  height: 338px;
  margin-right: 200px;
  display: block;
  float: left;
}
#GangG p{
  font-size: 50px;
  color: white;
  text-align: center;
  padding-top: 20px;
}
</style>
