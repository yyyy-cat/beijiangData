<template>
  <!-- 历史数据分析 -->
  <div class="history">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <!-- <img src="..\assets\history\logo_history.png" alt> -->
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
      <p
        style="text-align: center; font-family: 庞门正道标题体; font-size: 180px;color:#11aedc; letter-spacing:15px;"
      >
        <img
          src="..\assets\Administration\nav_logo.png"
          alt
          style="vertical-align: middle; margin-top: -37px;"
        >
        <span>历史数据分析</span>
      </p>
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
    <div class="history-top">
      <div class="history-topbox">
        <span>请选择生产线:</span>
        <select v-model="select1" name id class="history-select">
          <option value selected>请选择</option>
          <option value="A机">A机</option>
          <option value="B机">B机</option>
          <option value="C机">C机</option>
          <option value="D机">D机</option>
          <option value="E机">E机</option>
        </select>
        <span>选择时间:</span>
        <el-time-select
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
        ></el-time-select>

        <span>请选择类别:</span>
        <select v-model="select2" name id class="history-select">
          <option value selected>请选择</option>
          <option value="缸号">缸号</option>
          <option value="色号">色号</option>
          <option value="品种">品种</option>
        </select>
        <input type="text" v-model="plac" placeholder="请输入...">
        <button @click="tijiao">提&nbsp;&nbsp;&nbsp;交</button>
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

    <ul>
      <li @click="cur=0" :class="{active:cur==5}">母液用料分析</li>
      <li @click="cur=0" :class="{active:cur==0}">母液用料分析</li>
      <li @click="cur=1" :class="{active:cur==1}">能耗分析</li>
      <li @click="cur=2" :class="{active:cur==2}">母液检测分析</li>
      <li @click="cur=3" :class="{active:cur==3}">底水检测</li>
      <!-- <li @click="cur=4" :class="{active:cur==4}">E机</li> -->
    </ul>

    <div class="history-content">
      <!-- <table id="demo" lay-filter="test"></table> -->
      <div v-show="cur==5">
        <table id="dem4" lay-filter="test"></table>
      </div>
      <div v-show="cur==0">
        <table id="demo" lay-filter="test"></table>
      </div>
      <div v-show="cur==1">
        <table id="demo1" lay-filter="test"></table>
        <!-- ccccccccc -->
      </div>
      <div v-show="cur==2">
        <table id="demo2" lay-filter="test"></table>
      </div>
      <div v-show="cur==3">
        <table id="demo3" lay-filter="test"></table>
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
export default {
  data() {
    return {
      pagesize3: 20,
      currentPage: 1,
      startTime: "",
      endTime: "",
      select1: "",
      select2: "",
      plac: "",
      isshow: "flase",
      bol: [true, true, true, true],
      cur: 0,
      myArr: [
        { align: "center", title: "母液用料分析", colspan: 33 }, //colspan即横跨的单元格数，这种情况下不用设置field和width
        { align: "center", title: "能耗分析", colspan: 6 }, //colspan即横跨的单元格数，这种情况下不用设置field和width
        { align: "center", title: "母液检测分析", colspan: 16 }, //colspan即横跨的单元格数，这种情况下不用设置field和width
        { align: "center", title: "底水检测", colspan: 16 } //colspan即横跨的单元格数，这种情况下不用设置field和width
      ]
    };
  },
  computed: {},
  mounted() {
    //tableObj ->testTable 表格对象 var testTable=table.render({});
    //colName ->username 要隐藏的列名{field: 'username', title: '用户名'}
    //toggle 显示false|隐藏true,切换不写。
    //  function toggleCol(tableObj,{title:"母液用料分析"},toggle){
    //       layui.each(tableObj.config.cols[0],function(i,v){//一级表头
    //           if(colName==v.field){
    //             if(toggle==null)toggle=!v.hide;
    //             v.hide=toggle//切换隐藏显示状态
    //             return false;//结束遍历
    //            }
    //        });
    //       tableObj.reload();//重载
    //   }
    // this.getUrl();
    var _this = this;
    layui.use("table", function() {
      var table = layui.table;

      console.log("tag", "");
      //第一个实例
      table.render({
        elem: "#demo",
        // height: 312,
        // url: "/demo/table/user/", //数据接口
        // page: true, //开启分页
        // toolbar: "#toolbarDemo",
        limit: 14,
        cols: [
          [
            //标题栏
            {
              field: "username",
              align: "center",
              fixed: "left",
              title: "缸号",
              width: 300,
              rowspan: 3
            }, //rowspan即纵向跨越的单元格数
            {
              field: "username",
              align: "center",
              fixed: "left",
              title: "品种",
              width: 300,
              rowspan: 3
            },
            {
              field: "username",
              align: "center",
              fixed: "left",
              title: "色号",
              width: 300,
              rowspan: 3
            },
            { align: "center", title: "母液用料分析", colspan: 33 }, //colspan即横跨的单元格数，这种情况下不用设置field和width
            { align: "center", title: "能耗分析", colspan: 6 }, //colspan即横跨的单元格数，这种情况下不用设置field和width
            { align: "center", title: "母液检测分析", colspan: 16 }, //colspan即横跨的单元格数，这种情况下不用设置field和width
            { align: "center", title: "底水检测", colspan: 16 } //colspan即横跨的单元格数，这种情况下不用设置field和width
          ],
          [
            { align: "center", title: "上染率%(靛蓝前打底)", colspan: 3 },
            { align: "center", title: "上染率%(靛蓝) ", colspan: 3 },
            { align: "center", title: "上染率%(靛蓝后套面)", colspan: 3 },
            { align: "center", title: "用料总量(L/万米)", colspan: 3 },
            { align: "center", title: "烧碱用量(Kg/万米)", colspan: 3 },
            { align: "center", title: "靛蓝用量(Kg/万米)", colspan: 3 },
            { align: "center", title: "保险粉用量(Kg/万米)", colspan: 3 },
            { align: "center", title: "扩散剂用量(Kg/万米)", colspan: 3 },
            { align: "center", title: "渗透剂用量(Kg/万米)", colspan: 3 },
            { align: "center", title: "靛蓝前打底(Kg/万米)", colspan: 3 },
            { align: "center", title: "靛蓝后套面(Kg/万米)", colspan: 3 },

            { align: "center", title: "用水数据(吨/万米)", colspan: 3 },
            { align: "center", title: "用蒸汽数据(m³/万米)", colspan: 3 },

            { align: "center", title: "靛蓝浓度(g/L)", colspan: 4 },
            { align: "center", title: "pH", colspan: 4 },
            { align: "center", title: "ORP", colspan: 4 },
            { align: "center", title: "游离保险粉浓度(g/L)", colspan: 4 },

            { align: "center", title: "靛蓝浓度(g/L)", colspan: 4 },
            { align: "center", title: "pH", colspan: 4 },
            { align: "center", title: "ORP", colspan: 4 },
            { align: "center", title: "游离保险粉浓度(g/L)", colspan: 4 }
          ],
          [
            { field: "username", align: "center", title: "实际值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "偏差", width: 300 },
            { field: "username", align: "center", title: "实际值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "偏差", width: 300 },
            { field: "username", align: "center", title: "实际值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "偏差", width: 300 },
            { field: "username", align: "center", title: "实际值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "偏差", width: 300 },
            { field: "username", align: "center", title: "实际值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "偏差", width: 300 },
            { field: "username", align: "center", title: "实际值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "偏差", width: 300 },
            { field: "username", align: "center", title: "实际值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "偏差", width: 300 },
            { field: "username", align: "center", title: "实际值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "偏差", width: 300 },
            { field: "username", align: "center", title: "实际值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "偏差", width: 300 },
            {
              field: "username",
              align: "center",
              title: "染料用量",
              width: 300
            },
            {
              field: "username",
              align: "center",
              title: "还原剂用量",
              width: 300
            },
            {
              field: "username",
              align: "center",
              title: "助剂用量",
              width: 300
            },
            {
              field: "username",
              align: "center",
              title: "染料用量",
              width: 300
            },
            {
              field: "username",
              align: "center",
              title: "还原剂用量",
              width: 300
            },
            {
              field: "username",
              align: "center",
              title: "助剂用量",
              width: 300
            },

            { field: "username", align: "center", title: "实际值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "偏差", width: 300 },
            { field: "username", align: "center", title: "实际值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "偏差", width: 300 },

            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "平均值", width: 300 },
            { field: "username", align: "center", title: "最大值", width: 300 },
            { field: "username", align: "center", title: "最小值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "平均值", width: 300 },
            { field: "username", align: "center", title: "最大值", width: 300 },
            { field: "username", align: "center", title: "最小值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "平均值", width: 300 },
            { field: "username", align: "center", title: "最大值", width: 300 },
            { field: "username", align: "center", title: "最小值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "平均值", width: 300 },
            { field: "username", align: "center", title: "最大值", width: 300 },
            { field: "username", align: "center", title: "最小值", width: 300 },

            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "平均值", width: 300 },
            { field: "username", align: "center", title: "最大值", width: 300 },
            { field: "username", align: "center", title: "最小值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "平均值", width: 300 },
            { field: "username", align: "center", title: "最大值", width: 300 },
            { field: "username", align: "center", title: "最小值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "平均值", width: 300 },
            { field: "username", align: "center", title: "最大值", width: 300 },
            { field: "username", align: "center", title: "最小值", width: 300 },
            { field: "username", align: "center", title: "标准值", width: 300 },
            { field: "username", align: "center", title: "平均值", width: 300 },
            { field: "username", align: "center", title: "最大值", width: 300 },
            { field: "username", align: "center", title: "最小值", width: 300 }
          ]
        ],
        data: [
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 },
          { index: 1, username: 2 }
        ]
      });

     
      table.on("row(test)", function(obj) {
        console.log(obj.tr); //得到当前行元素对象
        console.log(obj.data); //得到当前行数据
        this.$router.push("history2");
        // location.href = "/dist/index.html#/history2"
        //obj.del(); //删除当前行
        obj.update(fields); //修改当前行数据
      });
      console.log(_this.$refs.a);
      // _this.$refs.a.onclick=function(){
      //   _this.isshow = "true";
      //   console.log(table)
      //   table.reload('test',{

      //   })
      // }
      // table.init("test", {
      //   toolbar: true,
      //   defaultToolbar: ["filter"]
      // });
      table.on("edit(demo)", function(obj) {
        obj.update(obj.data); //修改当前行数
      });
    });
  },
  components: { foot },
  methods: {
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
      console.log(
        this.select1,
        this.startTime,
        this.endTime,
        this.select2,
        this.plac
      );
      var usp = new URLSearchParams();
      usp.append("select1", this.select1);
      usp.append("startTime", this.startTime);
      usp.append("endTime", this.endTime);
      usp.append("select2", this.select2);
      usp.append("plac", this.plac);
      console.log(usp);

      axios.post("http://localhost:3000/getAllGanghao", usp).then(res => {
        console.log("res", res.data);
      });
    },
    // getUrl() {
    //   axios.get("http://localhost:8088/api/weaveTechnics?pageIndex=1&pageSize=15&bbh=250").then(res => {
    //     console.log("res", res.data);
    //   });
    // },
    openDetails(row) {
      //具体操作
      console.log(row);
      this.$router.push("./history2");
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
}
ul li {
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
  width: 4950px;
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

