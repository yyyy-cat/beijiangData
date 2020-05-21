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
        <span>北江数据中心</span>
      </p>
    </div>

    <!-- 数据渲染 -->
    <div id="login">
      <p id="txt">欢&nbsp;&nbsp;迎&nbsp;&nbsp;登&nbsp;&nbsp;录</p>
      <div class="box">
        <div class="input">
          <img src="..\assets\index\login_name.png" alt />
        </div>
        <input type="text" class="inp" id="name" placeholder="请输入账号" v-model="name"/>
      </div>
      <div class="box">
        <div class="input">
          <img src="..\assets\index\login_password.png" alt />
        </div>
        <input type="password" class="inp" id="password" placeholder="请输入密码" v-model="password"/>
      </div>
      <div class="box">
        <div class="input">
          <img src="..\assets\index\login_language.png" alt />
        </div>
        <!-- <input type="text" class="inp"> -->
        <select name class="inp1" id = "language">
          <option value="中文" selected>中文</option>
          <option value="英文">English</option>
          <option value="越南文">Việt Nam</option>
        </select>
      </div>
      <div id="button" @click="submit()">登&nbsp;&nbsp;录</div>
      <p id="p1">{{bocuo}}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import foot from "./foot.vue";
import login from "./login_assembly.vue";
export default {
  data() {
    return {
     name:"",
     password:"",
     bocuo:""
    };
  },
  components: { foot, login },
  mounted() {
    this.s()
    

  },
  methods: {
    s(){
      var a =["版本号：1.0.4","修改时间：2019.7.15","修改内容：历史数据能耗分析模块"]
      for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
        
      }
    },
    submit(){
      console.log(this.name,this.password);
      var usp = new URLSearchParams();
      usp.append("accountNumber", this.name);
      usp.append("password", this.password);
      console.log(usp);


      axios
        .post("/api/getLogon",usp)
        .then(res => {
          console.log("res",res);
          if (res.data.code == "INCORRECT"&&res.data.msg == "无此账号") {
            this.bocuo = "账号不存在"
          }
          if (res.data.code == "INCORRECT"&&res.data.msg == "密码不正确") {
            this.bocuo = "密码不正确"
          }
          if (res.data.code == "SUC") {
            this.bocuo = ""
            var idd = this.name
            console.log(idd);
            
            localStorage.id = idd
            this.$router.push("/index");
          }
         
        }).catch(res=>{
          console.log("res",res);
          // console.log("11",res.indexOf(500));
          this.bocuo = "*服务器访问失败"
          // if (res.indexOf(500)) {
          //   
          // }
        })
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
  width: 1550px;
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

/* 登陆 */
#login {
  margin: 590px auto 0;
  width: 2174px;
  height: 1508px;
  background: url(../assets/index/login_bg2.png);
  overflow: hidden;
}

#txt {
  /* margin: 72px auto 206px; */
  margin-top: 72px;
  margin-bottom: 206px;
  width: 100%;
  text-align: center;
  font-size: 99px;
  color: white;
}
.box {
  box-sizing: border-box;
  padding: 38px;
  width: 1150px;
  height: 160px;
  border: solid 1px #3175c2;
  /* margin-bottom: 96px; */
  margin: 0 auto 96px;
}
.box:last-child{
  margin: 0 auto !important;
}
#button {
  width: 1140px;
  height: 140px;
  background: url(..\assets\index\login_button.png);
  color: white;
  font-size: 65px;
  line-height: 140px;
  text-align: center;
  margin: 182px auto 0;
}
.input {
  width: 82px;
  height: 82px;
  float: left;
}
.input img {
  width: 100%;
  height: 100%;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
/* WebKit browsers */ 
color:#009bff; 
} 
.inp {
  color: #fff;
  font-size: 60px;
  float: left;
  margin-left: 28px;
  padding-left: 64px;
  width: 88%;
  height: 100%;
  background: transparent;
  border-left: #006db7 solid 2px;
  border-top: none;
  border-bottom: none;
  border-right: none;
}
.inp1 {
  color: #009bff;
  font-size: 60px;
  float: left;
  margin-left: 28px;
  padding-left: 64px;
  width: 88%;
  height: 100%;
  background: transparent;
  border-left: #006db7 solid 2px;
  border-top: none;
  border-bottom: none;
  border-right: none;
}
option{
  background: #12318e;
}
#p1{
  /* margin: 0 auto; */
  text-align: center;
  color: red;
  font-size: 65px;
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
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 480px;
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
  width: 1000px;
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
.el-picker-panel {
  width: 1000px;

  border: solid 1px black;
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
  font-size: 25px;
}
.el-input.is-disabled .el-input__inner {
  background: #000836;
}
.el-date-table td.in-range div,
.el-date-table td.in-range div:hover,
.el-date-table.is-week-mode .el-date-table__row.current div,
.el-date-table.is-week-mode .el-date-table__row:hover div {
  background: #011375;
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


