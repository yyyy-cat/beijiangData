<template>
  <div class="index">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <!-- <img src="../assets/index/home_logo.png" alt> -->
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
      <p
        style="text-align: center; font-family: 庞门正道标题体; font-size: 180px;color:#00ecfc; letter-spacing:15px;"
      >
        <img
          src="..\assets\Administration\nav_logo.png"
          alt
          style="vertical-align: middle; margin-top: -37px;"
        />
        <span>北江数据中心</span>
      </p>
    </div>
    <div class="index-esc" @click="esc">
      <!-- 切换图标 -->
      <span>
        <img src="..\assets\Administration\home.png" alt />
        主页
      </span>
    </div>
    <!-- 显示用户登陆和退出 -->
    <login></login>

    <!-- 地图 -->
    <div class="index-map">
      <img class="index-img-home_map" src="..\assets\index\home_map.png" alt />
      <div class="index-map-rotate">
        <img class="index-img-home_gif2" src="..\assets\index\home_gif2.png" alt />
        <img class="index-img-home_gif1" src="..\assets\index\home_gif1.png" alt />
      </div>
      <div class="city">
        <h1>浆染工厂</h1>
        <h3>韶关</h3>
      </div>

      <!-- <div class="city" @click="adds">
        <span :style="fontCol1">韶关</span>
        <img :src="sximg1">
      </div>
      <div class="citys" @click="addss()">
        <span :style="fontCol2">香港</span>
        <img :src="sximg2">
      </div>
      <div class="cityss" @click="addsss()">
        <span :style="fontCol3">越南</span>
        <img :src="sximg3">
      </div>-->
    </div>
    <!-- 右侧导航 -->
    <div class="index-nuv">
      <!-- <div class="index-nuv-for" ref="inf" v-for="(items,index) in shuju" :key="index">
        <div :class="{'indexNuv':index==hoverIndex,'indexLink':index==-1}" @mouseenter="hoverIndex = index" @mouseleave="hoverIndex = -1">
          <router-link to="/i111">{{items}}</router-link>
        </div>
      </div>-->

      <router-link class="indexLink" :to="shuju[0].alt">{{shuju[0].name}}</router-link>
      <router-link class="indexLink" :to="shuju[1].alt">{{shuju[1].name}}</router-link>
      <router-link class="indexLink" :to="shuju[2].alt">{{shuju[2].name}}</router-link>
      <router-link class="indexLink" :to="shuju[3].alt">{{shuju[3].name}}</router-link>
      <router-link class="indexLink" :to="shuju[4].alt">{{shuju[4].name}}</router-link>

      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import login from "./login_assembly.vue";
export default {
  name: "index",
  data() {
    return {
      // 假数据
      toshowhk: false,
      shuju: [
        {
          name: "机台运行效率",
          alt: "/efficiency"
        },
        {
          name: "管控标准",
          alt: "/Administration"
        },
        {
          name: "母液化料",
          alt: "/mother"
        },
        {
          name: "生产运行",
          alt: "/production"
        },
        {
          name: "历史数据分析",
          alt: "/history"
        }
      ],
      shujuAll: {
        aaa: [
          "管控标准",
          "机台运行效率",
          "母液化料",
          "生产运行",
          "历史数据分析"
        ]
      },
      // sximg1: require("../assets/index/home_zb_green.png"),
      sximg1: require("../assets/index/home_zb.png"),
      sximg2: require("../assets/index/home_zb_green.png"),
      sximg3: require("../assets/index/home_zb_green.png"),
      hoverIndex: -1,
      hoverIndex: -1,
      // fontCol1: "color:#00ecfc;",
      fontCol1: "color:#ffcc46",
      fontCol2: "color:#00ecfc;",
      fontCol3: "color:#00ecfc;",
      oldimg: require("../assets/index/home_zb_green.png"),
      oldfont: "color:#00ecfc;"
    };
  },
  components: { login },
  created() {
    this.toshowhk = this.$route.query.hk
  },
  methods: {
    // 默认
    // moren() {
    //   this.fontCol1 = this.oldfont;
    //   this.sximg1 = this.oldimg;
    // },

    esc() {
      var editType;
      if(this.toshowhk){
        editType = 3
      }else{
        editType = 0
      }
     this.$router.push({
        path: '/index',
        query: {
          editType: editType,
        }
      })
    },
    adds() {
      this.$router.push("/index.vue");
      // this.fontCol2 = this.oldfont;
      // this.sximg2 = this.oldimg;
      // this.fontCol3 = this.oldfont;
      // this.sximg3 = this.oldimg;
      // this.fontCol1 = "color:#ffcc46";
      // this.sximg1 = require("../assets/index/home_zb.png");
      // this.shuju = [
      //   {
      //     name: "管控标准",
      //     alt: "/Administration"
      //   },
      //   {
      //     name: "机台运行效率",
      //     alt: "/efficiency"
      //   },
      //   {
      //     name: "母液化料",
      //     alt: "/mother"
      //   },
      //   {
      //     name: "生产运行",
      //     alt: "/production"
      //   },
      //   {
      //     name: "历史数据分析",
      //     alt: "/history"
      //   }
      // ];
    },
    addss() {
      this.$router.push("/index.vue");
      // this.fontCol1 = this.oldfont;
      // this.sximg1 = this.oldimg;
      // this.fontCol3 = this.oldfont;
      // this.sximg3 = this.oldimg;
      // this.fontCol2 = "color:#ffcc46";
      // this.sximg2 = require("../assets/index/home_zb.png");
      // this.shuju = [
      //   {
      //     name: "机台运行效率",
      //     alt: "/i8"
      //   },
      //   {
      //     name: "母液化料",
      //     alt: "/i2"
      //   },
      //   {
      //     name: "生产运行",
      //     alt: "/i3"
      //   },
      //   {
      //     name: "生产运行",
      //     alt: "/i4"
      //   },
      //   {
      //     name: "历史数据分析",
      //     alt: "/i5"
      //   }
      // ];
    },
    addsss() {
      this.$router.push("/index.vue");
      // this.fontCol1 = this.oldfont;
      // this.sximg1 = this.oldimg;
      // this.fontCol2 = this.oldfont;
      // this.sximg2 = this.oldimg;
      // this.fontCol3 = "color:#ffcc46";
      // this.sximg3 = require("../assets/index/home_zb.png");
      // this.shuju = [
      //   {
      //     name: "管控标准",
      //     alt: "/i6"
      //   },
      //   {
      //     name: "机台运行效率",
      //     alt: "/i2"
      //   },
      //   {
      //     name: "母液化料",
      //     alt: "/i3"
      //   },
      //   {
      //     name: "生产运行",
      //     alt: "/i4"
      //   },
      //   {
      //     name: "历史数据分析",
      //     alt: "/i5"
      //   }
      // ];
    },
    enter() {
      console.log(this.$refs.inf);
      this.$refs.inf.className = "enter";
    },
    leave() {
      this.$refs.inf.className = "leave";
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
/* 韶关 */
.city {
  font-size: 100px;
  position: absolute;
  left: 1150px;
  bottom: 960px;
  cursor: pointer;
  color: #00ecfc;
}
/* 香港 */
.citys {
  font-size: 100px;
  position: absolute;
  left: 1310px;
  bottom: 770px;
  cursor: pointer;
}
/* 越南 */
.cityss {
  font-size: 100px;
  position: absolute;
  left: 1050px;
  bottom: 560px;
  cursor: pointer;
}
.city img,
.citys img,
.cityss img {
  /* width: 60px;
  height: 60px; */

  padding-left: 60px;
  padding-top: 10px;
  cursor: pointer;
}

.index {
  position: relative;
  width: 7680px;
  height: 3240px;
  background: url(../assets/index/home_bg.png);
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
  width: 1400px;
  height: 168px;
} */
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
.index-map {
  width: 2558px;
  height: 2478px;
  position: relative;
  float: left;
  margin-left: 630px;
  margin-top: 100px;
}
.index-map-rotate {
  position: relative;
  width: 2026px;
  height: 2026px;
}
.index-map img {
  display: block;
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
}
.index-img-home_map {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* .index-img-home_map1 {
  top: 60%;
  left: 60%;
  transform: translate(-50%, -50%);
} */
/* 虚线圈 */
.index-img-home_gif2 {
  top: 13.5%;
  left: 15.5%;
  /* transform: translate(-50%, -50%); */
  animation: myaime 10s linear infinite;
}
@keyframes myaime {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
/* 外围圈 */
.index-img-home_gif1 {
  width: 2540px;
  height: 2478px;
  animation: myaim 6s linear infinite;
}
@keyframes myaim {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.index-nuv {
  float: left;
  margin-top: 100px;
  margin-left: 910px;
  width: 1940px;
  height: 2504px;
  /* border: 1px wheat solid; */
}
/* .index-nuv-for {
  margin-bottom: 36px;
  width: 1370px;
  height: 472px;
  color: #00ecfc;
  background: url(..\assets\index\home_border_nor.png);
  text-align: center;
  font-size: 120px;
  color: #00ecfc;
  line-height: 472px;
} */

/* .indexNuv {
  width: 1940px;
  height: 472px;
  background: url(..\assets\index\home_border_selected.png);
  color: #ffcc46;
} */
.indexLink {
  display: block;
  margin-bottom: 36px;
  width: 1370px;
  height: 472px;
  background: url(..\assets\index\home_border_nor.png);
  text-align: center;
  font-size: 120px;
  color: #00ecfc;
  line-height: 472px;
}
.indexLink:hover {
  display: block;
  margin-bottom: 36px;
  width: 1940px;
  height: 472px;
  background: url(..\assets\index\home_border_selected.png);
  text-align: center;
  font-size: 120px;
  color: #ffcc46;
  line-height: 472px;
}
</style>
<style>
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
  /* background-color: transparent; */
  border: rgb(255, 255, 255);
}

.el-table th,
.el-table tr {
  color: white;
  border: rgb(255, 255, 255);

  /* background-color: transparent; */
}
.el-table--border td,
.el-table--border th,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border: 1px rgb(255, 255, 255) solid;
}

.el-table__body tr {
  height: 88px;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  /* background-color: rgb(255, 255, 255); */
}
.el-table td,
.el-table th.is-leaf {
  border: 1px solid rgb(255, 255, 255);
}

.el-table th > .cell {
  font-size: 60px;
  line-height: 60px;
}
.el-table .cell {
  font-size: 60px;
  line-height: 60px;
}
.mother-shuju-table1 .el-table--enable-row-hover .el-table__body tr:hover > td,
.mother-shuju-table2 .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: transparent;
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
/* 表格 */
.mother-shuju-table1 .el-table,
.mother-shuju-table1 .el-table__expanded-cell,
.mother-shuju-table2 .el-table,
.mother-shuju-table2 .el-table__expanded-cell {
  background-color: transparent !important;
  border: rgb(255, 255, 255);
}

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
  color: #00ecfc;
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
/* 表格 生产运行图表 */
.protab-sc_bg1-box .el-table,
.protab-sc_bg1-box .el-table__expanded-cell {
  background-color: transparent !important;
  border: rgb(255, 255, 255);
}

.protab-sc_bg1-box .el-table th,
.protab-sc_bg1-box .el-table tr {
  color: white;
  border: rgb(255, 255, 255);

  background-color: transparent !important;
}
.protab-sc_bg1-box > .el-table,
.protab-sc_bg1-box > .el-table__expanded-cell,
.protab-sc_bg1-box > .el-table th,
.protab-sc_bg1-box > .el-table tr {
  background: transparent !important;
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

.mother-shuju-three
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background: #ffffff;
  color: gray;
}
.mother-shuju-three1
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background: #ffffff;
  color: gray;
}
.mother-shuju-three2
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background: #ffffff;
  color: gray;
}
.mother-shuju-three3
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background: #ffffff;
  color: gray;
}
.mother-shuju-three4
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background: #ffffff;
  color: gray;
}

.mother-shuju-three .el-pagination.is-background .btn-next,
.mother-shuju-three .el-pagination.is-background .btn-prev,
.mother-shuju-three .el-pagination.is-background .el-pager li {
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
/* 历史数据分析 */
.el-table__footer-wrapper tbody td,
.el-table__header-wrapper tbody td {
  background: #000836;
}

.layui-table td,
.layui-table th {
  position: relative;
  /* padding: 9px 15px; */
  min-height: 20px;
  line-height: 60px;
  font-size: 60px;
  background: #000836;
  color: #ffffff;
}
.layui-table-cell {
  padding: 15px 0;
  height: 90px;
  line-height: 60px;
}
.layui-table-page {
  position: relative;
  width: 100%;
  padding: 7px 7px 0;
  height: 100px;
  font-size: 12px;
  white-space: nowrap;
}
.layui-table-page .layui-laypage a,
.layui-table-page .layui-laypage span {
  font-size: 60px;
  text-align: center;
  width: 80px;
  height: 80px;
  line-height: 80px;
  margin-bottom: 10px;
  border: none;
  /* margin-left: 132px; */
  background: 0 0;
}
.layui-icon {
  font-size: 60px;
}
.layui-table-page select {
  margin-left: 168px;
  width: 269px;
  height: 73px;
}
.layui-laypage span {
  margin-left: 400px;
}
.layui-table-page .layui-laypage input {
  width: 80px;
  height: 80px;
}
.layui-table-page .layui-laypage button,
.layui-table-page .layui-laypage input {
  height: 80px;
  line-height: 30px;
}
::-webkit-scrollbar {
  background: #000836;
}
::-webkit-scrollbar-track {
  background: #000836;
}
::-webkit-scrollbar-thumb {
  background: #00137e;
}
.el-table th > .cell {
  font-size: 50px !important;
  line-height: 50px;
  padding: 0;
  margin: 0;
}

.el-table .cell {
  font-size: 50px !important;
  line-height: 50px;
  padding: 0;
  margin: 0;
}
</style>
