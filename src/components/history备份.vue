<template>
  <!-- 历史数据分析 -->
  <div class="history">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <img src="..\assets\history\logo_history.png" alt>
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
    <div class="history-content" id="aaa">
      <el-table
        @row-click="openDetails"
        id="tableHistory"
        show-summary
        :data="tableData"
        border
        height="2000"
        style="width: 100%;"
      >
        <el-table-column fixed type="index" label="缸号" f align="center" width="450"></el-table-column>
        <el-table-column fixed prop="name" label="品种" align="center" width="450"></el-table-column>
        <el-table-column fixed prop="name" label="色号" align="center" width="450"></el-table-column>

        <el-table-column label="母液用料分析" align="center" width="1000">
          <el-table-column type="index" label="上染率%(靛蓝前打底) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="实际值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="偏差 " align="center" width="300"></el-table-column>
          </el-table-column>

          <el-table-column type="index" label="上染率%(靛蓝) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="实际值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="偏差 " align="center" width="300"></el-table-column>
          </el-table-column>

          <el-table-column type="index" label="上染率%(靛蓝后套面) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="实际值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="偏差 " align="center" width="300"></el-table-column>
          </el-table-column>

          <el-table-column type="index" label="用料总量(L/万米) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="实际值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="偏差 " align="center" width="300"></el-table-column>
          </el-table-column>

          <el-table-column type="index" label="烧碱用量(Kg/万米) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="实际值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="偏差 " align="center" width="300"></el-table-column>
          </el-table-column>

          <el-table-column type="index" label="靛蓝用量(Kg/万米) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="实际值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="偏差 " align="center" width="300"></el-table-column>
          </el-table-column>

          <el-table-column type="index" label="保险粉用量(Kg/万米) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="实际值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="偏差 " align="center" width="300"></el-table-column>
          </el-table-column>

          <el-table-column type="index" label="扩散剂用量(Kg/万米) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="实际值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="偏差 " align="center" width="300"></el-table-column>
          </el-table-column>

          <el-table-column type="index" label="渗透剂用量(Kg/万米) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="实际值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="偏差 " align="center" width="300"></el-table-column>
          </el-table-column>

          <el-table-column type="index" label="靛蓝前打底(Kg/万米) " align="center" width="300">
            <el-table-column type="index" label="染料用量 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="还原剂用量 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="助剂用量 " align="center" width="300"></el-table-column>
          </el-table-column>
          <el-table-column type="index" label="靛蓝后套面(Kg/万米) " align="center" width="300">
            <el-table-column type="index" label="染料用量 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="还原剂用量 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="助剂用量 " align="center" width="300"></el-table-column>
          </el-table-column>
        </el-table-column>
        <!-- 能耗分析 -->
        <el-table-column type="name" label="能耗分析" align="center" width="300">
          <el-table-column type="index" label="用水数据(吨/万米) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="实际值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="偏差 " align="center" width="300"></el-table-column>
          </el-table-column>
          <el-table-column type="index" label="用蒸汽数据(m³/万米) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="实际值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="偏差 " align="center" width="300"></el-table-column>
          </el-table-column>
        </el-table-column>
        <!-- 母液检测分析 -->
        <el-table-column type="name" label="母液检测分析" align="center" width="300">
          <el-table-column type="index" label="靛蓝浓度(g/L) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="平均值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最大值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最小值 " align="center" width="300"></el-table-column>
          </el-table-column>
          <el-table-column type="index" label="pH" align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="平均值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最大值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最小值 " align="center" width="300"></el-table-column>
          </el-table-column>
          <el-table-column type="index" label="ORP" align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="平均值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最大值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最小值 " align="center" width="300"></el-table-column>
          </el-table-column>
          <el-table-column type="index" label="游离保险粉浓度(g/L) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="平均值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最大值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最小值 " align="center" width="300"></el-table-column>
          </el-table-column>
        </el-table-column>
        <!-- 底水检测 -->
        <el-table-column type="name" label="底水检测" align="center" width="300">
          <el-table-column type="index" label="靛蓝浓度(g/L) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="平均值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最大值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最小值 " align="center" width="300"></el-table-column>
          </el-table-column>
          <el-table-column type="index" label="pH" align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="平均值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最大值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最小值 " align="center" width="300"></el-table-column>
          </el-table-column>
          <el-table-column type="index" label="ORP" align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="平均值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最大值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最小值 " align="center" width="300"></el-table-column>
          </el-table-column>
          <el-table-column type="index" label="游离保险粉浓度(g/L) " align="center" width="300">
            <el-table-column type="index" label="标准值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="平均值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最大值 " align="center" width="300"></el-table-column>
            <el-table-column type="index" label="最小值 " align="center" width="300"></el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import foot from "./foot.vue";
import axios from "axios";
export default {
  data() {
    return {
      tableData: [
        {
          date: "i+1",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },

        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      pagesize3: 20,
      currentPage: 1,
      startTime: "",
      endTime: "",
      select1:"",
      select2:"",
      plac:""
    };
  },
  mounted() {
    // this.getUrl();
  },
  components: { foot },
  methods: {
    // 获取数据渲染页面
    tijiao() {
      console.log(this.select1,this.startTime, this.endTime,this.select2,this.plac);
      var usp = new URLSearchParams()
      usp.append("select1",this.select1)
      usp.append("startTime",this.startTime)
      usp.append("endTime",this.endTime)
      usp.append("select2",this.select2)
      usp.append("plac",this.plac)
      console.log(usp);
      
      axios.post("http://localhost:3000/getAllGanghao",usp).then(res=>{
        console.log("res", res.data);
      })
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
.index-top_nav img {
  display: block;
  margin: 45px auto;
  width: 1366px;
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
.span--{
  margin: 80px ;
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
.history-topbox .el-input--prefix .el-input__inner{
  background: transparent;
}
.history-topbox .el-input__inner{
  height: 120px;
}
.history-topbox .el-input__prefix{
  display: none;
}
.el-table .el-table__body tr:hover > td {
  background-color: transparent !important; 
   background: #000836; 
}
#aaa>>>.el-table__body-wrapper{
  overflow: auto;
}
#aaa>>>.el-table__body-wrapper::-webkit-scrollbar {/*滚动条整体样式*/
        width: 50px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 50px;
    }
#aaa>>>.el-table__body-wrapper::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #3343ad;
    }
#aaa>>>.el-table__body-wrapper::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        /* background: #EDEDED; */
        background: #0c1968
    }
</style>
<style>
.history-topbox .el-input--prefix .el-input__inner{
  background: transparent;
}
.history-topbox .el-input__inner{
  height: 120px;
}
.history-topbox .el-input__prefix{
  display: none;
}
</style>

