<template>
  <!-- 机台运行效率 -->
  <div class="efficiency">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <!-- <img src="..\assets\efficiency\jt_logo.png" alt> -->
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
      <p
        style="text-align: center; font-family: 庞门正道标题体; font-size: 180px;color:#00ecfc; letter-spacing:15px;"
      >
        <img
          src="..\assets\Administration\nav_logo.png"
          alt
          style="vertical-align: middle;margin-top: -37px;"
        />
        <span>机台运行效率</span>
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
    <!-- 时间选择 -->
    <div class="efficiency-content">
      <div class="efficiency-content-data">
        <span class="content-data-span">选择时间</span>
        <el-date-picker
      v-model="value1"
      disabled
      type="datetime"
      placeholder="选择开始时间">
    </el-date-picker>
    <span class="content-data-span1">&nbsp;-</span>
    <el-date-picker
      v-model="value2"
      disabled
      type="datetime"
      placeholder="选择结束时间">
    </el-date-picker>
      </div>

      <!-- 数据渲染 -->
      <table class="efficiency-content-table" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <th>机位</th>
          <th>运行时间（h）</th>
          <th>效率（%）</th>
          <th>生产数量（米）</th>
        </thead>
        <tbody>
          <tr>
            <td ref="td">A机</td>
            <td>{{saA.运行时间}}</td>
            <td>{{saA.效率}}</td>
            <td>{{saA.生产米数}}</td>
          </tr>
          <tr>
            <td ref="td">B机</td>
            <td>{{saB.运行时间}}</td>
            <td>{{saB.效率}}</td>
            <td>{{saB.生产米数}}</td>
          </tr>
          <tr>
            <td ref="td">C机</td>
            <td>{{saC.运行时间}}</td>
            <td>{{saC.效率}}</td>
            <td>{{saC.生产米数}}</td>
          </tr>
          <tr>
            <td ref="td">D机</td>
            <td>{{saD.运行时间}}</td>
            <td>{{saD.效率}}</td>
            <td>{{saD.生产米数}}</td>
          </tr>
          <tr>
            <td ref="td">E机</td>
            <td>{{saE.运行时间}}</td>
            <td>{{saE.效率}}</td>
            <td>{{saE.生产米数}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <foot />
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
      saA: "",
      saB: "",
      saC: "",
      saD: "",
      saE: "",
      value1: "",
      value2: "",
      value4:"",
      value5:"",
    };
  },
  components: { foot , login},
  mounted() {
    this.setShuju();
    this.str = setInterval(this.setShuju, 30000); //这个计时器
    this.dangqianshijian();
    this.strBZ = setInterval(this.dangqianshijian, 30000); //这个计时器
    var usp = new URLSearchParams();
    usp.append("timeSatrt", this.value4);
    usp.append("timeEnd", this.value5);
    axios.post(shaoguanUrl+"/api/getYxxlData",usp).then(res => {
      console.log("res", res.data.data);
      var sa = res.data.data;
      console.log(sa);
      for (let i = 0; i < sa.length; i++) {
        if (sa[i].机位 == "A") {
          this.saA = sa[i];
          console.log(this.saA.运行时间);
        } else if (sa[i].机位 == "B") {
          this.saB = sa[i];
          console.log(this.saB);
        } else if (sa[i].机位 == "C") {
          this.saC = sa[i];
          console.log(this.saC);
        } else if (sa[i].机位 == "D") {
          this.saD = sa[i];
          console.log(this.saD);
        } else if (sa[i].机位 == "E") {
          this.saE = sa[i];
          console.log(this.saE);
        }
      }
    });
  },
  beforeDestroy() {

    clearInterval(this.strBZ);
    clearInterval(this.str);
  },
  methods: {
    p(s) {
      return s < 10 ? '0' + s : s
    },
    dangqianshijian() {
      //当前时间
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth();
      var strDate = date.getDate();
      var h=date.getHours();
      var m=date.getMinutes();
      var s=date.getSeconds();
      //console.log(h,m,s)

      const resDate = date.getFullYear() + '-' + this.p((date.getMonth() + 1)) + '-' + this.p(date.getDate())+" "+this.p(date.getHours()) + ':' + this.p(date.getMinutes()) + ':' + this.p(date.getSeconds())

      this.value4=resDate
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate + seperator1 + h  +":"+ m ;
      //console.log(seperator1);
      //console.log(seperator1);
      //console.log(strDate);

      //当前三天前时间
      var time = (new Date).getTime() - 3*24 * 60 * 60 * 1000;
      var date2 = new Date(time);
      var seperator1 = "-";
      var year2 = date2.getFullYear();
      var month2 = date2.getMonth();
      var strDate2 = date2.getDate();
      var h=date.getHours();
      var m=date.getMinutes();
      var s=date.getSeconds();
      if (month2 >= 1 && month2 <= 9) {
        month2 = "0" + month2;
      }
      if (strDate2 >= 0 && strDate2 <= 9) {
        strDate2 = "0" + strDate2;
      }
      const resDat = date2.getFullYear() + '-' + this.p((date2.getMonth() + 1)) + '-' + this.p(date2.getDate())+" "+this.p(date2.getHours()) + ':' + this.p(date2.getMinutes()) + ':' + this.p(date2.getSeconds())
      //console.log(resDat)
      this.value5=resDat
      var currentdate2 = year2 + seperator1 + month2 + seperator1 + strDate2 + h  +":"+ m;
        //console.log(currentdate2);
      // this.value1.push(currentdate2)
      // this.value1.push(currentdate)
      this.value1 = new Date(year2, month2, strDate2,h, m)
      this.value2 =  new Date(year, month, strDate,h, m)

      //console.log(this.value2)

    },

    // 获取机台运行效率
    change() {
      // console.log(this.value1[0], this.value1[1]);

      // var usp = new URLSearchParams();
      // usp.append("startTime", this.value1[0]);
      // usp.append("endTime", this.value1[1]);
      //console.log(this.value1);
      //console.log(this.value1[0]);
      //console.log(this.value1[1]);

      // console.log(usp);
      var usp = new URLSearchParams();
      usp.append("machineNo", this.value1);
      usp.append("machineNo", this.value2);
      axios
        .post(shaoguanUrl+"/api/getYxxlData",usp )
        .then(res => {
          console.log("res", res.data.data);
          var sa = res.data.data;
          console.log(sa);

          for (let i = 0; i < sa.length; i++) {
            if (sa[i].机位 == "A") {
              this.saA = sa[i];
              console.log(this.saA);
            } else if (sa[i].boardName == "B") {
              this.saB = sa[i];
              console.log(this.saB);
            } else if (sa[i].boardName == "C") {
              this.saC = sa[i];
              console.log(this.saC);
            } else if (sa[i].boardName == "D") {
              this.saD = sa[i];
              console.log(this.saD);
            } else if (sa[i].boardName == "E") {
              this.saE = sa[i];
              console.log(this.saE);
            }
          }
        });
    },
    setShuju() {
      var usp = new URLSearchParams();
      usp.append("timeSatrt", this.value4);
      usp.append("timeEnd", this.value5);
      axios.post(shaoguanUrl+"/api/getYxxlData",usp).then(res => {
        console.log("res", res.data.data);
        var sa = res.data.data;
        console.log(sa);

        for (let i = 0; i < sa.length; i++) {
          if (sa[i].机位 == "A") {
            this.saA = sa[i];
            console.log(this.saA);
          } else if (sa[i].机位 == "B") {
            this.saB = sa[i];
            console.log(this.saB);
          } else if (sa[i].机位 == "C") {
            this.saC = sa[i];
            console.log(this.saC);
          } else if (sa[i].机位 == "D") {
            this.saD = sa[i];
            console.log(this.saD);
          } else if (sa[i].机位 == "E") {
            this.saE = sa[i];
            console.log(this.saE);
          }
        }
      });
    },
    aa() {
      console.log(this.$refs.td.innerHTML);

      if (this.$refs.td.innerHTML == "") {
        this.$refs.td.innerHTML = "-";
      }
    },
    esc() {
      this.$router.push("/index");
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
.efficiency-content {
  background: url(..\assets\efficiency\jt_bg.png);
  overflow: hidden;
  width: 3840px;
  height: 1820px;
  margin: 320px auto 0;
  /* border: solid 5px; */
}

.efficiency-content-data {
  /* border: solid 1px red; */
  margin: 250px auto;
  width: 2600px;
  height: 120px;

  font-size: 80px;
  color: white;
}
.efficiency-content-data span {
  padding-right: 50px;
  /* line-height: 120px; */
}
.efficiency-content-data input {
  margin-top: -20px;
  width: 480px;
  height: 120px;
  /* font-size: 40px; */
  border: 1px solid white;
  background: rgba(0, 0, 0, 0%);
  outline-color: #ec9c45;
  padding-left: 40px;
  color: #cccccc;
}
.efficiency-content-data input::-webkit-input-placeholder {
  font-size: 30px;
}

.efficiency-content-hr2 {
  width: 1880px;
  height: 4px;
  margin: 35px auto 200px;
}
/* 数据渲染 */
.efficiency-content-table {
  color: white;
  margin: 0 auto;
  width: 3400px;
  height: 810px;
  border: none;
  border-collapse: collapse;
  text-align: center;
  font-size: 80px;
}
.efficiency-content-table thead th {
  height: 160px;
}
.efficiency-content-table tr {
  padding: 0;
}
.efficiency-content-table td,
.efficiency-content-table th {
  padding: 0;
  height: 160px;
  width: 850px;
  /* border: solid 1px red; */
}
.efficiency-content-table tr {
  /* border-radius:10px;  */
  background: url(..\assets\efficiency\jt_list_nor.png);
}
/* .efficiency-content-table tr:hover{
    background: url(..\assets\efficiency\jt_list_abnor.png);
} */

/* 头部 */
.efficiency {
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
  width: 1328px;
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
</style>
<style>
.efficiency-content-data .el-input--prefix .el-input__inner {
  background: transparent;
}
.efficiency-content-data .el-input__inner {
  height: 120px;
  font-size: 80px;
}
.efficiency-content-data .el-input__prefix {
  display: none;
}
.content-data-span {
  float: left;
}
.content-data-span1 {
  float: left;
  padding-right: 0 !important;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 800px;
}
.time-select-item {
  font-size: 30px;
  line-height: 30px;
}
/*
{ margin-top: -20px;
  width: 480px;
  height: 120px;
  font-size: 40px;
  border: 1px solid white;
  background: rgba(0, 0, 0, 0%);
  outline-color: #ec9c45;
  padding-left: 40px;
  color: #cccccc;} */

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  /* width: 1000px; */
  display: block;
  float: left;
  margin-left: 40px;
  background: #000836;
}
.el-date-editor .el-range-input {
  font-size: 60px;
  background: #000836;
}
.el-date-editor .el-range__icon {
  display: none;
}
.el-range-separator {
  width: 1000px;
  text-align: center;
}
.el-date-editor .el-range-separator {
  font-size: 30px;
  width: 10%;
  color: gray;
}
.el-date-picker{
   width: 800px;
}
.el-date-picker table{
  width: 750px;
}
.el-input--small .el-input__inner{
   height: 50px;
  line-height: 50px;
  font-size: 40px;
}
.el-picker-panel {
  /* width: 1000px; */

  border: solid 1px black;
}
.el-date-picker__header{
  height: 50px;
  line-height: 50px;
  font-size: 40px;
}
.el-date-picker__header-label{
  font-size: 40px;
}
.el-date-table th{
  height: 50px;
  line-height: 50px;
  font-size: 40px;
}
.el-date-table td div{
  height: 50px;
  line-height: 50px;
}
.el-date-table td span{
  height: 50px;
  line-height: 50px;
  font-size: 40px;

}
.el-date-range-picker__time-picker-wrap {
  width: 250px;
  padding: 5px 5px;
}
.el-input--small .el-input__inner {
  text-align: center;
  background: #000836;
  border: solid 1px black;
  color: white;
  /* font-size: 25px; */
  height: 50px;
  line-height: 50px;
  font-size: 40px;
}
.el-time-panel__content::after{
  height: 60px;
}
.current{
  height: 60px;
  width: 60px !important;

}
.el-time-spinner__item{
  height: 50px;
  line-height: 50px;
  font-size: 40px;
}
.el-time-panel{
  width: 400px;
}
.el-input.is-disabled .el-input__inner {
  background: #000836;
}
.el-date-table td.in-range div,
.el-date-table td.in-range div:hover,
.el-date-table.is-week-mode .el-date-table__row.current div,
.el-date-table.is-week-mode .el-date-table__row:hover div {
  background: #011375;
  /* width: 60px; */
}
.el-date-range-picker table tr td {
  font-size: 20px;
  color: white;
}
.el-date-table td.next-month,
.el-date-table td.prev-month {
  color: gray;
}
.el-picker-panel {
  background: #000836;
}
.el-time-panel {
  background: #000836;
}
.el-time-spinner__item {
  color: white;
}
.el-time-spinner__item.active:not(.disabled) {
  color: gray;
}
.el-picker-panel__footer {
  background: #000836;
}
</style>


