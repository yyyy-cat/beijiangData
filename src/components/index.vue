<template>
  <div class="index" @dblclick="jiazai">
    <!-- 顶部logo -->
    <div class="index-top_qiehuan">
      <select name id="qiehuan">
        <option value="中文" selected>中文</option>
        <option value="英文">English</option>
        <option value="越南文">Việt Nam</option>
      </select>
    </div>
    <div class="index-top_nav">
      <p style="text-align: center; font-family: 庞门正道标题体; font-size: 180px;color:#00ecfc; letter-spacing:15px;">
        <img src="..\assets\Administration\nav_logo.png" style="vertical-align: middle; margin-top: -37px;"/>
        <span>北江数据中心</span>
      </p>
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
      <div class="city" @click="adds">
        <span :style="fontCol1">韶关</span>
        <img :src="sximg1" />
      </div>
      <!-- <div class="citys" @click="addss()">
        <span :style="fontCol2">香港</span>
        <img :src="sximg2" />
      </div> -->
      <div class="cityss" @click="addsss()">
        <span :style="fontCol3">越南</span>
        <img :src="sximg3" />
      </div>
    </div>
    <!-- 右侧导航 -->
    <div :class="toShowShaoguan ? 'index-nav-shaoguan' : 'index-nuv'">
      <div class="indexLink" v-for="(item,idx) in shuju" :key="idx" @click="tonav(item.alt)">{{item.name}}</div>
      <router-view></router-view>
    </div>
    <div class="index-position-file">
      <!-- <el-upload
        class="upload-file"
        drag
        action="doUpload"
        :before-upload="beforeUpload"
        ref="newupload"
        :auto-upload="false"
        multiple
      >-->
      <el-upload class="upload-file" drag action="http://120.78.186.60:8082/ErpYn/api/UploadFiles" :data="upLoadData" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
      </el-upload>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import login from "./login_assembly.vue";
import {mapState,mapMutations} from 'vuex'
export default {
  name: "index",
  data() {
    return {
      showhk: true,
      editType: 0,
      flag:'true',
      upLoadData: {
        // email: "1766569644@qq.com",
        
      },
      toShowShaoguan: false,
      shuju: [
        {
          name: "染色管理系统",
          alt: "/index2"
        },
         {
          name: "数据管控标准",
          alt: "/yuenanAdministration"
        },
        {
          name: "原材料数据",
          alt: "/yuenanjiangrantouru"
        },
        {
          name: "辅助材料数据",
          alt: "/yuenanransehualiao"
        },
        {
          name: "过程耗能数据",
          alt: "/yuenanjiangranguocheng"
        },
        {
          name: "环保数据",
          alt: "/shaoguanhuanbaoshuju"
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
  computed: mapState([
    'changeShaoguan'
  ]),
  created(){
    this.toShowShaoguan = true;
     
    let editType = this.$route.query.editType
    this.editType = editType;
    if(editType==1){
      $(".index-position-file").css("display", "block");
      this.fontCol1 = this.oldfont;
      this.sximg1 = this.oldimg;
      this.fontCol2 = this.oldfont;
      this.sximg2 = this.oldimg;
      this.fontCol3 = "color:#ffcc46";
      this.sximg3 = require("../assets/index/home_zb.png");
      this.toShowShaoguan = false
      this.shuju = [
        {
          name: "数据管控标准",
          alt: "/yuenanAdministration"
        },
        {
          name: "原材料数据",
          alt: "/yuenanjiangrantouru"
        },
        {
          name: "辅助材料数据",
          alt: "/yuenanransehualiao"
        },
        {
          name: "过程耗能数据",
          alt: "/yuenanjiangranguocheng"
        },
        {
          name: "环保数据",
          alt: "/yuenanhuanbaoshuju"
        }
      ];
    }
    if(editType == 3){
      this.toShowShaoguan = false;
      $(".index-position-file").css("display", "block");
      this.fontCol1 = this.oldfont;
      this.sximg1 = this.oldimg;
      this.fontCol3 = this.oldfont;
      this.sximg3 = this.oldimg;
      this.fontCol2 = "color:#ffcc46";
      this.sximg2 = require("../assets/index/home_zb.png");
    }
  },
  components: { login },
  methods: {

    // 默认
    // moren() {
    //   this.fontCol1 = this.oldfont;
    //   this.sximg1 = this.oldimg;
    // },
     tonav(url) {
      if(this.toShowShaoguan){
        this.$router.push(`${url}?showShaoguan=`+this.toShowShaoguan)
      }else{
        this.$router.push(url)
      }
    },
    jiazai(){

      var flag = this.flag
      
      if (flag=='flase') {
        $(".upload-file").css("display","none")
        this.flag='true'
        return
      }
      if (flag=='true') {
        $(".upload-file").css("display","block")
        this.flag='flase'
        return
      }
    },
    adds() {
      $(".index-position-file").css("display", "none");
      this.fontCol2 = this.oldfont;
      this.sximg2 = this.oldimg;
      this.fontCol3 = this.oldfont;
      this.sximg3 = this.oldimg;
      this.fontCol1 = "color:#ffcc46";
      this.sximg1 = require("../assets/index/home_zb.png");
      this.toShowShaoguan = true;
       window.sessionStorage.setItem('shaoguan', true)
      this.$store.commit('CHANGESHAOGUAN', true)
      this.shuju = [
      {
          name: "染色管理系统",
          alt: "/index2"
        },
         {
          name: "数据管控标准",
          alt: "/yuenanAdministration"
        },
        {
          name: "原材料数据",
          alt: "/yuenanjiangrantouru"
        },
        {
          name: "辅助材料数据",
          alt: "/yuenanransehualiao"
        },
        {
          name: "过程耗能数据",
          alt: "/yuenanjiangranguocheng"
        },
        {
          name: "环保数据",
          alt: "/shaoguanhuanbaoshuju"
        }
      ];
    },
    addss() {
      $(".index-position-file").css("display", "none");
      this.fontCol1 = this.oldfont;
      this.sximg1 = this.oldimg;
      this.fontCol3 = this.oldfont;
      this.sximg3 = this.oldimg;
      this.fontCol2 = "color:#ffcc46";
      this.sximg2 = require("../assets/index/home_zb.png");
      this.toShowShaoguan = false;
      var toshowhk = this.showhk;
      this.shuju = [
        {
          name: "浆染工厂",
          alt: `/index2?hk=${toshowhk}`
        },
        {
          name: "织布工厂",
          alt: `/index2?hk=${toshowhk}`
        },
        {
          name: "后整工厂",
          alt: `/index2?hk=${toshowhk}`
        },
        {
          name: "制衣研发工厂",
          alt: `/index2?hk=${toshowhk}`
        },
        {
          name: "污水处理工厂",
          alt: `/index2?hk=${toshowhk}`
        }
      ];
    },
    addsss() {
      $(".index-position-file").css("display", "block");
      this.fontCol1 = this.oldfont;
      this.sximg1 = this.oldimg;
      this.fontCol2 = this.oldfont;
      this.sximg2 = this.oldimg;
      this.fontCol3 = "color:#ffcc46";
      this.sximg3 = require("../assets/index/home_zb.png");
      this.toShowShaoguan = false;
       this.$store.commit('CHANGESHAOGUAN', false)
       window.sessionStorage.setItem('shaoguan', false)
      this.shuju = [
        {
          name: "数据管控标准",
          alt: "/yuenanAdministration"
        },
        {
          name: "原材料数据",
          alt: "/yuenanjiangrantouru"
        },
        {
          name: "辅助材料数据",
          alt: "/yuenanransehualiao"
        },
        {
          name: "过程耗能数据",
          alt: "/yuenanjiangranguocheng"
        },
        {
          name: "环保数据",
          alt: "/yuenanhuanbaoshuju"
        }
      ];
    },
    enter() {
      this.$refs.inf.className = "enter";
    },
    leave() {
      this.$refs.inf.className = "leave";
    },
    pro() {
      this.$router.push("/personal");
    },
    beforeUpload(file) {
      let fd = new FormData();
      fd.append("file", file); //传文件
      // fd.append("email", "113225234@qq.com"); //传其他参数
      axios
        .post("http://120.78.186.60:8082/ErpYn/api/UploadFiles", fd)
        .then(function(res) {
          alert("成功");
        });
      return true;
    },
    newSubmitForm() {
      //确定上传
      this.$refs.newupload.submit();
    }
  },
  // mounted(){
  //   let routerParams = this.$route.params
  //   console.log(routerParams)
  // },

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
/* 韶关 */
.city {
  font-size: 100px;
  position: absolute;
  left: 1150px;
  bottom: 960px;
  cursor: pointer;
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
  /* height: 3240px; */
  height: 3712px; 
  background: url(../assets/index/home_bg.png);
  background-size: cover;
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

.index-nav-shaoguan {
    margin-top: 100px;
    margin-left: 910px;
    height: 2000px;
    width: 3500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.index-nuv {
  float: left;
  margin-top: 100px;
  margin-left: 910px;
  height: 2000px;
  /* width: 1940px;
  height: 2504px; */
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
.index-top_qiehuan {
  widows: 300px;
  height: 100px;
  position: fixed;
  top: 200px;
  left: 200px;
}
#qiehuan {
  width: 300px;
  height: 100px;
  border: white solid 2px;
  border-radius: 15px;
  background: transparent;
  color: white;
  padding-left: 60px;
  font-size: 50px;
}
#qiehuan option {
  width: 300px;
  height: 100px;
  border: white solid 2px;
  border-radius: 15px;
  background: #000811;
  color: white;
  border: white solid 2px;
  border-radius: 15px;
  font-size: 50px;
}
.index-position-file {
  float: left;
  width: 1000px;
  margin: 200px 0 0 100px;
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

.ivu-page-item,
.ivu-page-prev,
.ivu-page-next {
  height: 110px;
  width: 110px;
  font-size: 60px;
  line-height: 110px;
  background: transparent;
  border: solid 1px white;
}
.ivu-icon {
  font-size: 60px;
  line-height: 110px;
  vertical-align: baseline;
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
  background: transparent;
  color: #ffffff;
}
.layui-table-cell {
  /* padding: 15px 0; */
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
<style>
.layui-table-cell {
  height: 60px;
  line-height: 60px;
}
.layui-table th,
.layui-table td {
  font-size: 60px;
  height: 110px;
}
#layui-chemicalType-table1 {
  background: transparent !important;
  color: white;
}
.layui-table-body .layui-none {
  font-size: 60px;
}
.layui-none {
  margin: 20px auto;
}
.layui-table-header {
  background: transparent !important;
}
.layui-table thead tr {
  background: transparent !important;
}
.layui-table {
  background: transparent !important;
}
</style>
<style>
.ivu-table {
  background: #000836;
}
.ivu-table td,
.ivu-table th {
  border: #ffffff 1px solid;
  color: rgb(255, 255, 255);
  background: #000836;
  height: 110px;
  font-size: 60px;
}
.ivu-table-wrapper {
  position: none;
  border: none !important;
  border-bottom-color: none;
}
.ivu-table {
  background: transparent;
}
.ivu-table table {
  margin: 0 auto;
}
.layui-laydate-content td,
.layui-laydate-content th {
  color: #ffffff !important;
}
.layui-laydate,
.layui-laydate-hint {
  background-color: #000836 !important;
  color: white !important;
}
.laydate-footer-btns span {
  background-color: #000836 !important;
}
.layui-laydate-list {
  background: #000836 !important;
}
.layui-laydate .layui-this{
  background: #00137e;
  border: solid 1px white;
}
.layui-layer-hui .layui-layer-content {
  font-size: 60px !important;
  line-height: 170px !important;
  color: white !important;
}
.index-position-file {
  float: left;
  width: 1000px;
  display: none;
}
.el-upload {
  width: 100%;
  padding: 32px 0px;
  border: solid 1px white;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  outline: 0;
  border-radius: 25px;
}
.el-upload-dragger {
  color: white;
  font-size: 60px;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 211px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.el-upload-dragger .el-icon-upload {
  /* background: transparent; */
  font-size: 118px;
  color: #ffffff;
  margin: 40px 0 16px;
  line-height: 50px;
}
.el-upload-dragger .el-upload__text {
  /* padding-bottom: 50px; */
  color: white;
  font-size: 60px;
  /* color: #606266; */
  /* font-size: 14px; */
  text-align: center;
}
.el-upload-list {
  border-radius: 25px;
  color: white;
  margin-top: 10px;
  border: solid 1px white;
  /* margin-left: 80px; */
  /* margin: 0; */
  padding: 0;
  list-style: none;
}
.el-upload-list__item-name {
  font-size: 60px;
  color: #ffffff;
  display: block;
  margin-right: 40px;
  overflow: hidden;
  padding-left: 4px;
  text-overflow: ellipsis;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  white-space: nowrap;
}
element.style {
}
.ivu-table {
    border: solid 1px white;
    background: transparent;
}
.upload-file{
  display: none;
}
.ivu-table-row-hover{
  background: #00137e;
}
tr.ivu-table-row-hover td{
  background: #00137e;
}
.index-esc{
    position: absolute;
    top: 100px;
    left: 640px;
    width: 1060px !important;
    height: 100px;
}
</style>
