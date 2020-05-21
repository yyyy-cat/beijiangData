<template>
  <!-- 管控中心 -->
  <div class="Administration">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <!-- <img src="..\assets\Administration\gk_logo.png" alt> -->
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
      <p
        style="text-align: center; font-family: 庞门正道标题体; font-size: 180px;color:#00ecfc; letter-spacing:15px;"
      >
        <img
          src="..\assets\Administration\nav_logo.png"
          alt
          style="vertical-align: middle;margin-top: -37px;"
        />
        <span>管控标准</span>
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

    <ul class="mother-ul">
      <li @click="aaa(0,valuA)" :class="{active:cur==0}">A机</li>
      <li @click="aaa(1,valuB)" :class="{active:cur==1}">B机</li>
      <li @click="aaa(2,valuC)" :class="{active:cur==2}">C机</li>
      <li @click="aaa(3,valuD)" :class="{active:cur==3}">D机</li>
      <li @click="aaa(4,valuE)" :class="{active:cur==4}">E机</li>
    </ul>
    <!-- 数据 -->
    <div class="Administration-box">
      <!-- 数据 管控标准 -->
      <div class="Administration-gkbz">
        <p>1.基本资料</p>
        <div class="Admin-gkbz-box">
          <div class="Admin-gkbz-1-1">
            <span>日</span>
            <span>期</span>
          </div>
          <div class="Admin-gkbz-text-1" :data="shuju">
            <!-- <input type="text" placeholder="请选择日期"> -->
            <p>{{shuju.日期}}</p>
          </div>
          <!-- <div class="Admin-gkbz-2">
            <span>请</span>
            <span>选</span>
            <span>择</span>
            <span>生</span>
            <span>产</span>
            <span>线</span>
          </div>
          <div class="Admin-gkbz-text">
            <select name id="lineID" @change="getlineID(lineID)" v-model="lineID">
              <option value="A">A机器</option>
              <option value="B">B机器</option>
              <option value="C">C机器</option>
              <option value="D">D机器</option>
              <option value="E">E机器</option>
            </select>
          </div> -->
          <div class="Admin-gkbz-1-2">
            <span>色</span>
            <span>号</span>
          </div>
          <div class="Admin-gkbz-text-1">
            <p>{{shuju.色号}}</p>
          </div>
          <div class="Admin-gkbz-2-1 adis">
            <span>品</span>
            <span>种</span>
          </div>
          <div class="Admin-gkbz-text adis">
            <p>{{shuju.品种}}</p>
          </div>
          <div class="Admin-gkbz-1-2 adis">
            <span>缸</span>
            <span>号</span>
          </div>
          <div class="Admin-gkbz-text adis">
            <p>{{shuju.缸号}}</p>
          </div>
          <div class="Admin-gkbz-2-1 adis">
            <span>开</span>
            <span>机</span>
            <span>时</span>
            <span>间</span>
          </div>
          <div class="Admin-gkbz-text adis">
            <p>{{shuju.开机时间}}</p>
          </div>
          <div class="Admin-gkbz-1-2 adis">
            <span>整</span>
            <span>经</span>
            <span>长</span>
            <span>度</span>
          </div>
          <div class="Admin-gkbz-text adis">
            <p>{{shuju.整经长度}}</p>
          </div>
        </div>
      </div>
      <!-- 数据 工艺标准 -->
      <div class="Administration-gybz">
        <p>2.工艺标准</p>
        <table border="1" cellspacing="0" cellpadding="0">
          <thead>
            <th></th>
            <th>
              <p>车速</p>
              <p>（m/min）</p>
            </th>
            <th>
              <p>染槽配制</p>
              <p>（个）</p>
            </th>
            <th>
              <p>上染率</p>
              <p>（%）</p>
            </th>
            <th>
              <p>母液追加流量</p>
              <p>（l/min）</p>
            </th>
          </thead>
          <tbody>
            <tr>
              <td>靛蓝前打底</td>
              <td rowspan="3">
                <p class="pType">{{shuju.靛蓝前打底车速}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝前打底染槽配制}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝前打底上染率}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝前打底母液追加流量}}</p>
              </td>
            </tr>
            <tr>
              <td>靛蓝</td>
              <td>
                <p>{{shuju.靛蓝染槽配制}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝上染率}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝母液追加流量}}</p>
              </td>
            </tr>
            <tr>
              <td>靛蓝后套面</td>
              <td>
                <p>{{shuju.靛蓝后套面染槽配制}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝后套面上染率}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝后套面母液追加流量}}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 数据 过程检测标准 -->
      <div class="Administration-gybz">
        <p>3.过程检测标准</p>
        <table border="1" cellspacing="0" cellpadding="0">
          <thead>
            <th></th>
            <th>
              <p>靛蓝浓度</p>
              <p>（g/l）</p>
            </th>
            <th>
              <p>PH</p>
            </th>
            <th>
              <p>ORP（mv）</p>
            </th>
            <th>
              <p>游离保险粉浓度</p>
              <p>（g/l）</p>
            </th>
          </thead>
          <tbody>
            <tr>
              <td>靛蓝前打底</td>
              <td>
                <p>{{shuju.靛蓝前打底靛蓝浓度}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝前打底PH}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝前打底ORP}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝前打底游离保险粉浓度}}</p>
              </td>
            </tr>
            <tr>
              <td>靛蓝</td>
              <td>
                <p>{{shuju.靛蓝靛蓝浓度}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝PH}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝ORP}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝游离保险粉浓度}}</p>
              </td>
            </tr>
            <tr>
              <td>靛蓝后套面</td>
              <td>
                <p>{{shuju.靛蓝后套面靛蓝浓度}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝后套面PH}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝后套面ORP}}</p>
              </td>
              <td>
                <p>{{shuju.靛蓝后套面游离保险粉浓度}}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 数据 母液化料标准 -->
      <div class="Administration-myhlbz">
        <p>
          4.母液化料标准
          <span>浓度单位：g/l</span>
        </p>
        <div class="Administration-myhlbz-left">
          <p>靛蓝前打底配方代码</p>
          <p class="Administration-myhlbz-left-inp">{{shuju.靛蓝前打底配方代码}}</p>
          <table class="Administration-myhlbz-left-table" border="1" cellspacing cellpadding>
            <tr>
              <td>{{shuju.靛蓝前打底标题_0}}</td>
              <td>
                <p>{{shuju.靛蓝前打底数据_0}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝前打底标题_1}}</td>
              <td>
                <p>{{shuju.靛蓝前打底数据_1}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝前打底标题_2}}</td>
              <td>
                <p>{{shuju.靛蓝前打底数据_2}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝前打底标题_3}}</td>
              <td>
                <p>{{shuju.靛蓝前打底数据_3}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝前打底标题_4}}</td>
              <td>
                <p>{{shuju.靛蓝前打底数据_4}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝前打底标题_5}}</td>
              <td>
                <p>{{shuju.靛蓝前打底数据_5}}</p>
              </td>
            </tr>
          </table>
        </div>
        <div class="Administration-myhlbz-left">
          <p>靛蓝配方代码</p>
          <p class="Administration-myhlbz-left-inp">{{shuju.靛蓝配方代码}}</p>
          <table class="Administration-myhlbz-left-table-2" border="1" cellspacing cellpadding >
            <tr>
              <td>{{shuju.靛蓝标题_0}}</td>
              <td>
                <p>{{shuju.靛蓝数据_0}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝标题_1}}</td>
              <td>
                <p>{{shuju.靛蓝数据_1}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝标题_2}}</td>
              <td>
                <p>{{shuju.靛蓝数据_2}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝标题_3}}</td>
              <td>
                <p>{{shuju.靛蓝数据_3}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝标题_4}}</td>
              <td>
                <p>{{shuju.靛蓝数据_4}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝标题_5}}</td>
              <td>
                <p>{{shuju.靛蓝数据_5}}</p>
              </td>
            </tr>
          </table>
        </div>
        <div class="Administration-myhlbz-left">
          <p>靛蓝后套面配方代码</p>
          <p class="Administration-myhlbz-left-inp">{{shuju.靛蓝后套面配方代码}}</p>
          <table class="Administration-myhlbz-left-table" border="1" cellspacing cellpadding>
            <tr>
              <td>{{shuju.靛蓝后套面标题_0}}</td>
              <td>
                <p>{{shuju.靛蓝后套面数据_0}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝后套面标题_1}}</td>
              <td>
                <p>{{shuju.靛蓝后套面数据_1}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝后套面标题_2}}</td>
              <td>
                <p>{{shuju.靛蓝后套面数据_2}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝后套面标题_3}}</td>
              <td>
                <p>{{shuju.靛蓝后套面数据_3}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝后套面标题_4}}</td>
              <td>
                <p>{{shuju.靛蓝后套面数据_4}}</p>
              </td>
            </tr>
            <tr>
              <td>{{shuju.靛蓝后套面标题_5}}</td>
              <td>
                <p>{{shuju.靛蓝后套面数据_5}}</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- 数据 母液用量标准准 -->
      <div class="Administration-gcbz">
        <p class="Administration-gcbz-p">5.母液用量标准</p>
        <p class="Administration-gcbz-gm">缸次母液总用量（l）</p>
        <table class="gcbz-top-table" border="1" cellspacing cellpadding>
          <tr>
            <td>靛蓝前打底</td>
            <td>靛蓝</td>
            <td>靛蓝后套面</td>
          </tr>
          <tr>
            <td>
              <p>{{shuju.靛蓝前打底用量}}</p>
            </td>
            <td>
              <p>{{shuju.靛蓝}}</p>
            </td>
            <td>
              <p>{{shuju.靛蓝后套面}}</p>
            </td>
          </tr>
        </table>
        <div class="gcbz-bottom-l">
          <p class="Administration-gcbz-nh">能耗标准</p>
          <table class="gcbz-bottom-table" border="1" cellspacing cellpadding>
            <tr>
              <td>用水标准（吨/万米）</td>
              <td>
                用汽标准（m
                <sup>3</sup>/万米）
              </td>
            </tr>
            <tr>
              <td>
                <p></p>
              </td>
              <td>
                <p></p>
              </td>
            </tr>
          </table>
        </div>
        <div class="gcbz-bottom-r">
          <p class="Administration-gcbz-yj">预计了机时间</p>
          <p>{{shuju.预计了机时间}}</p>
        </div>
      </div>
      <!-- 数据 母液检测标准 -->
      <div class="Administration-myjcbz">
        <p>
          6.母液检测标准
          <span>浓度单位：g/l</span>
        </p>

        <div class="Administration-myjcbz-left">
          <div class="myjcbz-left-top">
           <p>靛蓝前打底</p>
       <!--       <p class="myjcbz-left-top-inp">{{shuju.dianLanBeforeMuYeNo}}</p> -->
            <div class="myjcbz-left-top-box">
              <div>染料浓度</div>
              <div>
                <p class="nd">{{shuju.靛蓝前打底母液浓度}}</p>
              </div>
            </div>
          </div>
          <div class="myjcbz-left-top myjcbz-left-top-2">
           <p>靛蓝后套面</p>
          <!--    <p class="myjcbz-left-top-inp">{{shuju.dianLanAfterMuYeNo}}</p> -->
            <div class="myjcbz-left-top-box">
              <div>染料浓度</div>
              <div>
                <p class="nd">{{shuju.靛蓝后套面母液浓度}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="Administration-myjcbz-right">
          <div class="myjcbz-right">
            <p>靛蓝</p>
       <!--      <p class="myjcbz-right-inp">{{shuju.dianLanMuYeNo}}</p> -->
            <table class="myjcbz-right-table" border="1" cellspacing cellpadding>
              <tr>
                <td>靛蓝浓度</td>
                <td>
                  <p>{{shuju.靛蓝浓度}}</p>
                </td>
              </tr>
              <tr>
                <td>pH</td>
                <td>
                  <p>{{shuju.pH}}</p>
                </td>
              </tr>
              <tr>
                <td>ORP（mv）</td>
                <td>
                  <p>{{shuju.ORP}}</p>
                </td>
              </tr>
              <tr>
                <td>游离保险粉浓度</td>
                <td>
                  <p>{{shuju.游离保险粉浓度}}</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import shaoguanUrl from "../assets/shaoguanUrl";
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
      cur: 0,
      shuju:[],
      machineNo: "A",
      str:Object
    };
  },
  components: { foot, login },
  mounted() {
    this.setShuju();
    this.str = setInterval(this.xuanran,30000)

  },
  beforeDestroy(){
    clearInterval(this.str)
  },
  methods: {
    esc() {
      this.$router.push("/index");
    },
    pro() {
      this.$router.push("/personal");
    },
    aaa(over, machineNo) {
      this.cur = over;
      console.log(machineNo);

      this.shuju = {};
      var usp = new URLSearchParams();
      usp.append("machineNo", machineNo);
      axios
        .post(shaoguanUrl+"/api/getSjgkData",usp)
        .then(res => {
          console.log("res", res.data.data);

          if (res.data.data == "") {
            this.shuju = {};
            // console.log("shuju",this.shuju);
            console.log(123);

            return;
          }
          this.shuju = res.data.data;
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
        .post(shaoguanUrl+"/api/getSjgkData",usp)
        .then(res => {
          console.log(res.data.data);

          // if (res.data.data == "") {
          //   this.shuju = {};
          //   // console.log("shuju",this.shuju);
          //   console.log(123);
          //
          //   return;
          // }
          this.shuju = res.data.data;
        });



    },
    setShuju() {
      var usp = new URLSearchParams();
      usp.append("machineNo", "A");
      axios
        .post(shaoguanUrl+"/api/getSjgkData", usp)
        .then(res => {
          if ( res.data.code==0 ){}
          console.log(res.data.data);
          this.shuju = res.data.data;
        });
    },
    getlineID(value) {
      console.log(value);

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
/* 生产线 */
#lineID {
  width: 100%;
  height: 100%;
  background: transparent;
  color: #00ecfc;
  font-size: 60px;
  line-height: 120px;
}
#lineID > option {
  background: #000836;
}
/* 数据 */
.Administration-box {
  width: 7600px;
  height: 2290px;
  margin: 103px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.Administration-gkbz,
.Administration-gybz,
.Administration-gcjcbz{
  width: 2500px;
  height: 1040px;
  background: url(..\assets\Administration\gk_bg_1.png);
}
.Administration-myhlbz,
.Administration-myjcbz,
.Administration-gcbz{
   width: 2500px;
  height: 1200px;
  background: url(..\assets\Administration\gk_bg_2.png);
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
/* 管控标准 */
.el-input--suffix .el-input__inner {
  width: 100%;
  height: 100%;
}
.ivu-input-prefix,
.ivu-input-suffix {
  width: 80px;
  line-height: 115px;
  height: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

.Admin-gkbz-box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.Administration-gkbz p {
  padding: 60px 0 0 100px;
  color: white;
  font-size: 94px;
}
.Admin-gkbz-1-1,
.Admin-gkbz-1-2,
.Admin-gkbz-2-1 {
  width: 350px;
  height: 120px;
  color: white;
  /* margin-top: 60px; */
  line-height: 120px;
  font-size: 60px;
  display: flex;
  justify-content: space-between;
}
.Admin-gkbz-1-1{
    margin-top: 60px;
}
.Admin-gkbz-1-2{
    margin-top: 60px;
}

.Admin-gkbz-1 {
  margin-left: 100px;
}
.Admin-gkbz-1-1 {
  margin-left: 100px;
}
.Admin-gkbz-1-2 {
  margin-left: 330px;
}
.Admin-gkbz-2-1 {
  margin-left: 100px;
}
/* 向上的距离 */
.adis{
  margin-top: 170px;
}


.Admin-gkbz-2 {
  margin-left: 300px;
}
.Admin-select {
  width: 100%;
  height: 120px;
  background: transparent;
  border: solid 1px white;
  color: white;
  padding-left: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 60px;
}
.Admin-select option {
  background: #000836;
}
.Admin-gkbz-text-1 {
  width: 600px;
  height: 120px;
  margin-top: 60px;
  margin-left: 50px;
}
.Admin-gkbz-text {
  width: 600px;
  height: 120px;
  margin-top: 170px;
  margin-left: 50px;
}
.Admin-gkbz-text-1 p,
.Admin-gkbz-text p {
  line-height: 120px;

  width: 130%;
  height: 100%;
  background: rgba(0, 0, 0, 0%);
  outline-color: #ec9c45;
  color: #00ecfc;
  padding: 0 40px;
  font-size: 60px;
}
/* .Admin-gkbz-text input::-webkit-input-placeholder {
  color: rgb(199, 199, 199);
  font-size: 60px;
} */
/* 工艺标准 */
.Administration-gybz p {
  padding: 60px 0 0 100px;
  color: white;
  font-size: 94px;
}
.Administration-gybz table {
  border-collapse: collapse;
  border: 1px rgb(0, 0, 0) solid;
  margin: 50px auto 0;
  width: 2300px;
  height: 760px;
}

.Administration-gybz table thead th {
  font-weight: 100;
  height: 158px;
  background: rgba(255, 255, 255, 10%);
}
.Administration-gybz table thead th p {
  padding: 0;
}
.Administration-gybz table thead th p:nth-child(1) {
  /* margin-top: -40px; */
  font-size: 60px;
}
.Administration-gybz table thead th p:nth-child(2) {
  margin-top: -15px;
  font-size: 20px;
}
.Administration-gybz table thead th:nth-child(1) {
  width: 400px;
}
.Administration-gybz table thead th:nth-child(2) {
  width: 390px;
}
.Administration-gybz table thead th:nth-child(3) {
  width: 500px;
}
.Administration-gybz table thead th:nth-child(4) {
  width: 500px;
}
.Administration-gybz table thead th:nth-child(5) {
  width: 500px;
}
.Administration-gybz table tbody tr {
  font-size: 59px;
  color: white;
  height: 200px;
  text-align: center;
  line-height: 200px;
}
.Administration-gybz table tbody td {
  height: 200px;
}
.Administration-gybz table tbody td p {
  /* line-height: none; */
  outline-color: #ec9c45;
  /* outline:solid 1px #ec9c45; */
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0%);
  border: none;
  text-align: center;
  /* line-height: 100%; */
  color: #00ecfc;
  font-size: 100px;
  padding: 0;
}
.pType {
  line-height: 600px;
}

/* 母液化料标准 */
.Administration-myhlbz p {
  padding: 60px 0 0 100px;
  color: white;
  font-size: 94px;
  margin-bottom: 15px;
  /* margin: 40px 0 45px 40px; */
}
.Administration-myhlbz p span {
  float: right;
  font-size: 60px;
  margin-right: 100px;
}
.Administration-myhlbz-left {
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 20px;
  width: 700px;
  height: 930px;
  background: rgba(255, 255, 255, 10%);
  margin-left: 100px;
  float: left;
}
.Administration-myhlbz-left p {
  text-align: center;
  font-size: 60px;
  padding: 0;
  margin: 30px 0 20px;
}
.Administration-myhlbz-left-inp {
  text-align: center;
  font-size: 100px !important;
  color: #00ecfc !important;
  width: 660px;
  height: 120px;
  /*border: solid 1px white;*/
  background: rgba(255, 255, 255, 0%);
  outline-color: #ec9c45;
  line-height: 120px;
}

.Administration-myhlbz-left-table {
  color: white;
  border-collapse: collapse;
  margin-top: 40px;
  width: 660px;
  height: 360px;
  border: rgba(0, 0, 0, 0%);
  font-size: 54px;
}

.Administration-myhlbz-left-table p {
  color: #00ecfc;
  padding: 0 40px;
  font-size: 60px;
  line-height: 120px;
  /* color: white; */
  width: 100%;
  height: 100%;
  text-align: right;
  background: rgba(0, 0, 0, 0%);
  border: none;
  outline-color: #ec9c45;
  margin: 0;
}
.Administration-myhlbz-left-table tr td:nth-child(1) {

  padding-left: 40px;
}
.Administration-myhlbz-left-2 {
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 20px;
  width: 660px;
  height: 800px;
  background: rgba(255, 255, 255, 10%);
  margin-left: 50px;
  float: left;
}
.Administration-myhlbz-left-table-2 {
  color: white;
  border-collapse: collapse;
  margin-top: 40px;
  width: 660px;
  height: 470px;
  border: rgba(0, 0, 0, 0%);
  font-size: 54px;
}
.Administration-myhlbz-left-table-2 tr {
  height: 100px;
}

.Administration-myhlbz-left-table-2 p {
  color: #00ecfc;
  padding: 0 40px;
  font-size: 60px;
  /* color: wheat; */
  width: 100%;
  height: 100%;
  text-align: right;
  background: rgba(0, 0, 0, 0%);
  border: none;
  outline-color: #ec9c45;
  margin: 0;
  line-height: 100px;
}
.Administration-myhlbz-left-table-2 tr td:nth-child(1) {

  padding-left: 40px;
}
/* 母液检测标准 */
.Administration-myjcbz p {
  padding: 60px 0 0 100px;
  color: white;
  font-size: 94px;
  margin-bottom: 15px;
}
.Administration-myjcbz p span {
  float: right;
  font-size: 60px;
  margin-right: 100px;
}
.Administration-myjcbz-left {
  width: 1160px;
  height: 820px;
  float: left;
}
.myjcbz-left-top {
  overflow: hidden;
  width: 1060px;
  height: 440px;
  background: rgba(255, 255, 255, 10%);
  margin-bottom: 10px;
  margin-left: 100px;
}
.myjcbz-left-top-2 {
  margin-top: 40px;
}
.myjcbz-left-top p {
  text-align: center;
  font-size: 60px;
  padding: 0;
  margin: 30px 0 20px;
}
.myjcbz-left-top-inp {
  border: solid 1px white;
  text-align: center;
  width: 1000px;
  height: 120px;
  line-height: 120px;
  font-size: 100px;
  display: block;
  margin: 0 auto 30px !important;
  background: rgba(0, 0, 0, 0%);
  outline-color: #ec9c45;
  padding: 40px;
  color: #00ecfc !important;
}
.nd {
  text-align: center;
  line-height: 120px;
  margin: 0 !important;
  color: #00ecfc !important;
}
.myjcbz-left-top-inp::-webkit-input-placeholder {
  font-size: 40px;
}
.myjcbz-left-top-box {
  /* border: solid 1px red; */
  width: 1000px;
  height: 100px;
  margin:80px auto;
}
.myjcbz-left-top-box div {
  display: block;
  width: 370px;
  height: 120px;
  font-size: 60px;
  color: white;
  border: solid 1px;
  float: left;
  line-height: 120px;
}
.myjcbz-left-top-box div:nth-child(1) {

  padding-left: 40px;
}
.myjcbz-left-top-box div:nth-child(2) {
  width: 640px;
  /* padding-left: 40px; */
}
.myjcbz-left-top-box div input {
  text-align: right;
  width: 100%;
  height: 100%;
  display: block;
  background: rgba(0, 0, 0, 0%);
  border: none;
  outline-color: #ec9c45;
  font-size: 30px;
  color: white;
  padding: 40px;
}
.Administration-myjcbz-right {
  width: 1180px;
  height: 920px;
  background: rgba(255, 255, 255, 10%);
  margin-left: 60px;
  float: left;
}

.myjcbz-right p {
  text-align: center;
  font-size: 60px;
  padding: 0;
  margin: 30px 0 20px;
}
.myjcbz-right-inp {
  border: solid 1px white;
  text-align: center;
  width: 1060px;
  height: 120px;
  font-size: 60px;
  display: block;
  margin: 0 auto 30px !important;
  background: rgba(0, 0, 0, 0%);
  outline-color: #ec9c45;
  /* padding-left: 40px; */
  color: #00ecfc !important;
  line-height: 120px;
}
.myjcbz-left-top-inp::-webkit-input-placeholder {
  font-size: 40px;
}
.myjcbz-right-table {
  border-collapse: collapse;
  border: 1px solid white;
  height: 480px;
  width: 1060px;
  margin: 80px auto;
}
.myjcbz-right-table tr td:nth-child(1) {
  width: 510px;
  height: 120px;
  padding-left: 40px;
  font-size: 60px;
  color: white;
}
.myjcbz-right-table tr td p {
  text-align: right;
  width: 550px;
  height: 120px;
  font-size: 60px;
  line-height: 120px;
  border: none;
  background: rgba(0, 0, 0, 0%);
  outline-color: #ec9c45;
  padding: 0 40px !important;
  color: #00ecfc;
  margin: 0px !important;
}

/* 母液用量标准 */
.Administration-gcbz-p {
  padding: 60px 0 0 100px;
  color: white;
  font-size: 94px;
  margin-bottom: 15px;
  text-align: left;
}

.Administration-gcbz-gm,
.Administration-gcbz-nh,
.Administration-gcbz-yj {
  margin: 20px 0 20px;
  text-align: center;
  color: white;
  font-size: 50px;
}
.gcbz-top-table {
  margin: 0;
  padding: 0;
  width: 2300px;
  height: 300px;
  margin: 0 auto;
  border: solid 1px white;
  border-collapse: collapse;
  text-align: center;
  color: white;
  font-size: 60px;
}
.gcbz-top-table td:nth-child(1) {
  width: 800px;
}
.gcbz-top-table td:nth-child(2) {
  width: 700px;
}
.gcbz-top-table td:nth-child(3) {
  width: 800px;
}
.gcbz-top-table p {
  width: 100%;
  height: 80px;
  text-align: center;
  font-size: 60px;
  border: none;
  background: rgba(0, 0, 0, 0%);
  /* outline-color: #ec9c45; */
  /* padding-left: 40px; */
  color: #00ecfc;
  /* line-height: 120px; */
}
.gcbz-top-table input::-webkit-input-placeholder {
  font-size: 30px;
  line-height: 100%;
}
.gcbz-bottom-l {
  width: 1500px;
  height: 426px;
  /* border: solid 1px; */
  margin-left: 100px;
  float: left;
}
.gcbz-bottom-table {
  width: 1500px;
  height: 300px;
  text-align: center;
  font-size: 60px;
  color: white;
  border: solid 1px white;
  border-collapse: collapse;
}
.gcbz-bottom-table td:nth-child(1) {
  width: 800px;
}
.gcbz-bottom-table p {
  /* width: 100%; */
  /* height: 100%; */
  text-align: center;
  font-size: 60px;
  /* border: none; */
  background: rgba(0, 0, 0, 0%);
  /* outline-color: #ec9c45; */
  /* padding-left: 40px; */
  color: #00ecfc;
}
.gcbz-bottom-table input::-webkit-input-placeholder {
  font-size: 30px;
  line-height: 100%;
}
.gcbz-bottom-r {
  width: 700px;
  float: left;
  margin-left: 100px;
  /* border: solid 1px; */
}
.gcbz-bottom-r p:nth-child(2) {
  width: 700px;
  height: 120px;
  text-align: center;
  font-size: 60px;
  border: solid 1px white;
  background: rgba(0, 0, 0, 0%);
  outline-color: #ec9c45;
  padding-left: 40px;
  color: #00ecfc;
  line-height: 120px;
}
.Administration-gcbz-submit {
  cursor: pointer;
  width: 600px;
  height: 160px;
  margin: 50px auto 0;
  background: url(..\assets\Administration\button.png);
}
.Administration-gcbz-submit p {
  text-align: center;
  font-size: 80px;
  color: white;
  line-height: 160px;
}

/* 头部 */
.Administration {
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
  width: 1052px;
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
/*  */
/*  */
/*  */
/*  */
</style>
<style>
.ivu-input {
  font-size: 60px;
  background: transparent;
  height: 120px !important;
  color: white !important;
}
.ivu-date-picker-focused input,
.ivu-input-with-suffix {
  background: transparent;
}
.ivu-input-with-suffix {
  background: transparent !important;
}
.ivu-input-prefix,
.ivu-input-suffix {
  width: 80px;
  line-height: 115px;
}
.ivu-input-with-suffix {
  background: transparent;
}
.ivu-input-wrapper {
  border: solid 1px white;
  outline-color: #ec9c45 !important;
}
.ivu-date-picker-focused input {
  font-size: 60px;
  color: #00ecfc;
  padding-left: 40px;
}
.ivu-input-with-suffix {
  font-size: 60px;
  color: #00ecfc !important;
  padding-left: 40px;
}
.ivu-input-prefix i,
.ivu-input-suffix i {
  font-size: 60px;
}
.el-dropdown {
  border: solid 1px white;
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 40px;
  width: 400px;
  height: 120px;
  line-height: 120px;
}
.el-dropdown span {
  color: white;
  width: 100%;
}
.el-dropdown-link .el-dropdown-selfdefine {
  color: white;
  width: 100px;
}
.el-dropdown-menu__item {
  padding-left: 40px;
  width: 400px;
  height: 40px;
  font-size: 30px;
}
.el-dropdown-menu__item i {
  display: none;
}


</style>

