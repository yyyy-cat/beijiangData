<template>
  <!-- 管控中心 -->
  <div class="Administration" v-on:dblclick="shuangji()">
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
        <span>浆染辅料分析</span>
      </p>
    </div>
    <!-- 返回主页 -->
    <div class="index-esc">
      <span @click="esc">
        <img src="..\assets\Administration\home.png" alt />
        返回
      </span>
      <!--<span @click="syj">-->
      <!--<img src="..\assets\Administration\home.png" alt />-->
      <!--上级-->
      <!--</span>-->
    </div>
    <!-- 显示用户登陆和退出 -->
    <login></login>

    <div id="bgColor">
      <!-- <h1>数据管控标准</h1> -->

      <div class="ChemicalFindBox">
        <!-- <label>
            色号
        <input id="sh" type="text" v-model="sh" />-->
        <!-- </label> -->
        <label>
          生产单号：
          <input id="scdh" type="text" v-model="scdh" />
        </label>
        <label>
          品种：
          <input id="pz" type="text" v-model="pz" />
        </label>
        <label>
          缸号：
          <input id="gh" type="text" v-model="gh" />
        </label>
        <!-- <label>
            轴号：
            <input id="zh" type="text" v-model="zh" />
        </label>-->
        <label>
          浆纱时间：
          <input id="timeSart" type="text" v-model="timeSart" />
          <input id="timeEnd" type="text" v-model="timeEnd" />
        </label>
        <button id="ChemicalFind" @click="tijiao()">
          <i class="layui-icon">&#xe615;</i> 查询
        </button>
      </div>
      <div class="ChemicalTable">
        <!--<Table :columns="historyColumns" :data="historyData" height="1500"></Table>-->
        <div id="building-top">
          <el-table
            :data="historyData"
            :span-method="arraySpanMethod"
            :header-cell-style="{background:'#040A53'}"
            :row-style="{background: 'none',margin:'200px',height:'200px;',color:'#ffffff'}"
            border
            ref="table"
            height="1774.5"
            style="width: 100%;text-align: center;color: black;background:none">
            <el-table-column
              label="基本资料"
              align="center"
              width="350">
              <el-table-column
                prop="scdh"
                label="生产单号"
                align="center"
                width="450">
              </el-table-column>
              <el-table-column
                prop="pz"
                label="品种"
                align="center"
                width="450">
              </el-table-column>
              <el-table-column
                prop="gh"
                label="缸号"
                align="center"
                width="450">
              </el-table-column>
            </el-table-column>
            <el-table-column
              label="投入纱量"
              align="center"
              width="450">
              <el-table-column
                prop="slm"
                label="m"
                align="center"
                width="300">
              </el-table-column>
              <el-table-column
                prop="slk"
                label="KG"
                align="center"
                width="300">
              </el-table-column>
            </el-table-column>
            <el-table-column
              label="染色辅助投入分析"
              align="center"
              width="450">
              <el-table-column
                label="每万米/投入染化料量"
                align="center"
                width="300">
                <el-table-column
                  label="靛蓝"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="rswdl"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="烧碱"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="rswsj"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="保险粉"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="rswbxf"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="渗透剂"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="rswstj"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="扩散粉"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="rswksj"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
              </el-table-column>
              <el-table-column
                prop="pz"
                label="每100kg纱/投入染化料量"
                align="center"
                width="300">
                <el-table-column
                  label="靛蓝"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="rskdl"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="烧碱"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="rsksj"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="保险粉"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="rskbxf"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="渗透剂"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="rskstj"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="扩散粉"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="rskksj"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
              </el-table-column>
            </el-table-column>
            <!--<el-table-column-->
              <!--label="上浆化料实绩"-->
              <!--align="center"-->
              <!--width="450">-->
              <!--<el-table-column-->
                <!--prop="jssj"-->
                <!--label="浆纱时间"-->
                <!--align="center"-->
                <!--width="450">-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--prop="hlxh"-->
                <!--label="化料序号"-->
                <!--align="center"-->
                <!--width="450">-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--label="化料量"-->
                <!--align="center"-->
                <!--width="450">-->
                <!--<el-table-column-->
                  <!--prop="hlhll"-->
                  <!--label="L"-->
                  <!--align="center"-->
                  <!--width="450">-->
                <!--</el-table-column>-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--label="变性淀粉(高粘)"-->
                <!--align="center"-->
                <!--width="450">-->
                <!--<el-table-column-->
                  <!--label="标准用量"-->
                  <!--align="center"-->
                  <!--width="450">-->
                  <!--<el-table-column-->
                    <!--prop="hlbxdfgbz"-->
                    <!--label="KG"-->
                    <!--align="center"-->
                    <!--width="450">-->
                  <!--</el-table-column>-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                  <!--label="实际用量"-->
                  <!--align="center"-->
                  <!--width="450">-->
                  <!--<el-table-column-->
                    <!--prop="hlbxdfgsj"-->
                    <!--label="KG"-->
                    <!--align="center"-->
                    <!--width="450">-->
                  <!--</el-table-column>-->
                <!--</el-table-column>-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--label="变性淀粉(低粘)"-->
                <!--align="center"-->
                <!--width="450">-->
                <!--<el-table-column-->
                  <!--label="标准用量"-->
                  <!--align="center"-->
                  <!--width="450">-->
                  <!--<el-table-column-->
                    <!--prop="hlbxdfdbz"-->
                    <!--label="KG"-->
                    <!--align="center"-->
                    <!--width="450">-->
                  <!--</el-table-column>-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                  <!--label="实际用量"-->
                  <!--align="center"-->
                  <!--width="450">-->
                  <!--<el-table-column-->
                    <!--prop="hlbxdfdsj"-->
                    <!--label="KG"-->
                    <!--align="center"-->
                    <!--width="450">-->
                  <!--</el-table-column>-->
                <!--</el-table-column>-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--label="SS浆料"-->
                <!--align="center"-->
                <!--width="450">-->
                <!--<el-table-column-->
                  <!--label="标准用量"-->
                  <!--align="center"-->
                  <!--width="450">-->
                  <!--<el-table-column-->
                    <!--prop="hlssbz"-->
                    <!--label="KG"-->
                    <!--align="center"-->
                    <!--width="450">-->
                  <!--</el-table-column>-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                  <!--label="实际用量"-->
                  <!--align="center"-->
                  <!--width="450">-->
                  <!--<el-table-column-->
                    <!--prop="hlsssj"-->
                    <!--label="KG"-->
                    <!--align="center"-->
                    <!--width="450">-->
                  <!--</el-table-column>-->
                <!--</el-table-column>-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--label="PVA"-->
                <!--align="center"-->
                <!--width="450">-->
                <!--<el-table-column-->
                  <!--label="标准用量"-->
                  <!--align="center"-->
                  <!--width="450">-->
                  <!--<el-table-column-->
                    <!--prop="hlpvabz"-->
                    <!--label="KG"-->
                    <!--align="center"-->
                    <!--width="450">-->
                  <!--</el-table-column>-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                  <!--label="实际用量"-->
                  <!--align="center"-->
                  <!--width="450">-->
                  <!--<el-table-column-->
                    <!--prop="hlpvasj"-->
                    <!--label="KG"-->
                    <!--align="center"-->
                    <!--width="450">-->
                  <!--</el-table-column>-->
                <!--</el-table-column>-->
              <!--</el-table-column>-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
              <!--label="上浆辅料使用实绩"-->
              <!--align="center"-->
              <!--width="450">-->
              <!--<el-table-column-->
                <!--prop="rssj"-->
                <!--label="上浆投入纱量"-->
                <!--align="center"-->
                <!--width="450">-->
                <!--<el-table-column-->
                  <!--prop="flslm"-->
                  <!--label="m"-->
                  <!--align="center"-->
                  <!--width="450">-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                  <!--prop="flslk"-->
                  <!--label="KG"-->
                  <!--align="center"-->
                  <!--width="450">-->
                <!--</el-table-column>-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--label="浆液标准用量"-->
                <!--align="center"-->
                <!--width="450">-->
                <!--<el-table-column-->
                  <!--prop="fljybzl"-->
                  <!--label="L"-->
                  <!--align="center"-->
                  <!--width="450">-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                  <!--prop="fljybzsjl"-->
                  <!--label="上浆率"-->
                  <!--align="center"-->
                  <!--width="450">-->
                <!--</el-table-column>-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--label="浆液实际用量"-->
                <!--align="center"-->
                <!--width="450">-->
                <!--<el-table-column-->
                  <!--prop="fljysjl"-->
                  <!--label="L"-->
                  <!--align="center"-->
                  <!--width="450">-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                  <!--prop="fljysjsjl"-->
                  <!--label="上浆率"-->
                  <!--align="center"-->
                  <!--width="450">-->
                <!--</el-table-column>-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--label="标准偏差"-->
                <!--align="center"-->
                <!--width="450">-->
                <!--<el-table-column-->
                  <!--prop="flbzpc"-->
                  <!--label="%"-->
                  <!--align="center"-->
                  <!--width="450">-->
                <!--</el-table-column>-->
              <!--</el-table-column>-->
            <!--</el-table-column>-->
            <el-table-column
              label="上浆辅料分析"
              align="center"
              width="450">
              <el-table-column
                label="每万米/投入浆料量"
                align="center"
                width="450">
                <el-table-column
                  label="变性淀粉(高粘)"
                  align="center"
                  width="450">
                  <el-table-column
                    prop="flwbxdfg"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="变性淀粉(低粘)"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="flwbxdfd"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="PVA"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="flwpva"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="SS浆料"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="flwss"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
              </el-table-column>
              <el-table-column
                label="每100kg纱/投入浆料量"
                align="center"
                width="300">
                <el-table-column
                  label="变性淀粉(高粘)"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="flkbxdfg"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="变性淀粉(低粘)"
                  align="center"
                  width="300">
                  <el-table-column
                    prop="flkbxdfd"
                    label="KG"
                    align="center"
                    width="300">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="PVA"
                  align="center"
                  width="280">
                  <el-table-column
                    prop="flkpva"
                    label="KG"
                    align="center"
                    width="280">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                  label="SS浆料"
                  align="center"
                  width="380">
                  <el-table-column
                    prop="flkss"
                    label="KG"
                    align="center"
                    width="380">
                  </el-table-column>
                </el-table-column>
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>
        <div style="margin: 70px;overflow: hidden">
          <div style="float: right;">
            <!--<Page :total="pageAll" :current="1" @on-change="xuanran" page-size="20"></Page>-->
          </div>
        </div>
      </div>
    </div>
    <div v-show="None">
      <el-upload
        class="upload-demo"
        style="float: left"
        ref="upload"
        :action="updataUrl+'/api/UploadFilesFlfx'"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary" style="width: 240px;height: 80px;float: left">选取文件</el-button>
        <el-button style="margin-left: 10px;width: 240px;height: 80px;float: left" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip" style="clear: both">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
    <!-- <foot></foot> -->
    <yuenanjiangranfoot></yuenanjiangranfoot>
  </div>
</template>
<script>
  import Vue from 'vue';
  import {Upload,Button}from 'element-ui';
  import axios from "axios";
  import foot from "./foot.vue";
  import yuenanjiangranfoot from "./yuenanjiangranfoot.vue";
  import login from "./login_assembly.vue";
  import {mapState,mapGetters} from 'vuex'
import yuenanUrl from "../assets/url";
import shaoguanUrl from '../assets/s_url';
  Vue.use(Upload);
  Vue.use(Button);
  export default {
    data() {
      return {
        fileList: [],
        None:false,
        pageToal:1,
        // 总页数
        pageAll: 0,
        // 初始化信息总条数
        dataCount: 0,
        // 每页显示多少条
        pageSize: 10,
        pageNum:1,
        xia: 0, //下一页或者上一页的第一项索引值
        historyData: [],
        str: Object,

        scdh: "",
        pz: "",
        gh: "",
        // zh: "",
        // sh: "",
        timeSart: "",
        timeEnd: "",
        showShaoguan: false,
        updataUrl: yuenanUrl + '/ErpYn'
      };
    },
    components: { foot, login, yuenanjiangranfoot },
    computed: {
      ...mapGetters([
    'changeShaoguan'
  ])
   },
    watch:{
    showShaoguan: function(newdata,olddata){

      if(newdata != 'false'){
        this.updataUrl = shaoguanUrl + '/ErpSg'
      }else{
        this.updataUrl = yuenanUrl+'/ErpYn'
      }
    }
  },
  created() {
    this.showShaoguan = this.changeShaoguan;
     if(this.changeShaoguan != 'false'){
        this.updataUrl = shaoguanUrl + '/ErpSg'
      }else{
        this.updataUrl = yuenanUrl+'/ErpYn'
      }
  },
    mounted() {
      this.xuanran(1);
      layui.use("laydate", function() {
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
          elem: "#timeSart", //指定元素
          type: "date",
          format: "yyyy-MM-dd"
        });

        //执行一个laydate实例
        laydate.render({
          elem: "#timeEnd", //指定元素
          type: "date",
          format: "yyyy-MM-dd"
        });
      });
    },
    beforeDestroy() {

      clearInterval(this.str);
    },
    methods: {
      arraySpanMethod({row, column, rowIndex, columnIndex}) {

      },
      shuangji(){
        this.None=!this.None;
      },
      submitUpload() {
        this.$refs.upload.submit();
        // var usp = new URLSearchParams();
        // usp.append("upload", this.fileList);
        // //console.log( this.$refs.upload.submit())
        // axios.post(yuenanUrl + "/ErpYn/api/UploadFilesGhb", usp).then(res => {
        //   console.log("res", res.data);
        //
        // });
      },
      handleRemove(file, fileList) {
      },
      handlePreview(file) {
      },
      tijiao() {
        this.timeSart = $("#timeSart").val();
        this.timeEnd = $("#timeEnd").val();

        if (this.timeSart == "" && this.timeEnd != "") {
          // alert("开始时间和结束时间必须都填写")
          layer.msg("开始时间和结束时间必须都填写", {
            area: ["1500px", "200px"]
          });

          return;
        }
        if (this.timeSart != "" && this.timeEnd == "") {
          // alert("开始时间和结束时间必须都填写")
          layer.msg("开始时间和结束时间必须都填写", {
            area: ["1500px", "200px"]
          });

          return;
        }

        var usp = new URLSearchParams();
        // // 当前页面所需条数
        // usp.append("pageNum", 20);
        // // 当前页数
        // usp.append("pageSize", 1);

        usp.append("scdh", this.scdh);
        usp.append("pz", this.pz);
        usp.append("gh", this.gh);
        usp.append("timeSart", this.timeSart);
        usp.append("timeEnd", this.timeEnd);
        

        axios.post(this.updataUrl + "/api/getFzclFlfxData", usp).then(res => {
          
          this.historyData = res.data.data;
          this.pageAll = res.data.pageTotle;
        });
      },
      xuanran(page) {
        let params = new URLSearchParams();
        // 当前页面所需条数
        // params.append("pageNum", 20);
        // // 当前页数
        // params.append("pageSize", page);
        if (
          this.scdh != "" ||
          this.pz != "" ||
          this.gh != "" ||
          this.timeSart != "" ||
          this.timeEnd != ""
        ) {
          params.append("scdh", this.scdh);
          params.append("pz", this.pz);
          params.append("gh", this.gh);
          params.append("timeSart", this.timeSart);
          params.append("timeEnd", this.timeEnd);
          axios
            .post(this.updataUrl + "/api/getFzclFlfxData", params)
            .then(res => {
              this.historyData = res.data.data;
              this.pageAll = res.data.pageTotle;
              this.dom = this.$refs.table.bodyWrapper;
              this.dom.addEventListener('scroll', () => {
                let scrollTop = this.dom.scrollTop;
                // 变量windowHeight是可视区的高度
                let windowHeight = this.dom.clientHeight || this.dom.clientHeight;
                // 变量scrollHeight是滚动条的总高度
                let scrollHeight = this.dom.scrollHeight || this.dom.scrollHeight;
                const scrollDistance =this.dom.scrollHeight - this.dom.scrollTop - this.dom.clientHeight;
                params.delete("pageNum")
                if(scrollDistance <=1){//等于0证明已经到底，可以请求接口
                  if(this.pageNum < this.pageAll){//当前页数小于总页数就请求
                    this.pageNum++;//当前页数自增
                    params.append("pageNum",this.pageNum)
                    //请求接口的代码
                    axios.post(this.updataUrl + "/api/getFzclFlfxData", params).then(res => {

                      this.historyData = this.historyData.concat(res.data.data)//将请求回来的数据和当前展示的数据合并在一起
                    })

                  }
                }
              })
            });
        } else {
          axios
            .post(this.updataUrl + "/api/getFzclFlfxData", params)
            .then(res => {
              this.historyData = res.data.data;
              this.pageAll = res.data.pageTotle;
              this.dom = this.$refs.table.bodyWrapper;
              this.dom.addEventListener('scroll', () => {
                let scrollTop = this.dom.scrollTop;
                // 变量windowHeight是可视区的高度
                let windowHeight = this.dom.clientHeight || this.dom.clientHeight;
                // 变量scrollHeight是滚动条的总高度
                let scrollHeight = this.dom.scrollHeight || this.dom.scrollHeight;
                const scrollDistance =this.dom.scrollHeight - this.dom.scrollTop - this.dom.clientHeight;
                params.delete("pageNum")
                if(scrollDistance <=1){//等于0证明已经到底，可以请求接口
                  if(this.pageNum < this.pageAll){//当前页数小于总页数就请求
                    this.pageNum++;//当前页数自增
                    params.append("pageNum",this.pageNum)
                    //请求接口的代码
                    axios.post(this.updataUrl + "/api/getFzclFlfxData", params).then(res => {

                      this.historyData = this.historyData.concat(res.data.data)//将请求回来的数据和当前展示的数据合并在一起
                    })

                  }
                }
              })
            });
        }
      },
    esc() {
      var editType = 0;
      if(this.changeShaoguan != 'false'){
        editType = 0
      }else{
        editType = 1
      }
      this.$router.push({
        path: '/index',
        query: {
          editType: editType,
        }
      })
    },
      syj() {
        this.$router.push("/yuenanfuzhucailiao");
      },

      pro() {
        this.$router.push("/personal");
      }
    }
  };
</script>
<style scoped>

  .ChemicalTable {
    margin: 200px auto 0;
    width: 7405px;
    /* width: 1751px; */
  }
  .ChemicalFindBox {
    height: 60px;
    line-height: 60px;
    color: white;
    font-size: 60px;
    width: 3500px;
    margin: 0 auto 0;
  }
  .ChemicalFindBox input {
    width: 400px;
    background: #000836;
    height: 80px;
    line-height: 80px;
    color: white;
    font-size: 60px;
  }
  #ChemicalFind {
    width: 250px;
    height: 80px;
    line-height: 80px;
    border: white 1px solid;
    background: #000836;
    color: white;
  }

  #bgColor {
    background: transparent;
    margin: 200px 40px 0;
    padding: 16px;
  }

  .layui-table-body {
    text-align: center;
    background: white;
  }

  h1,
  h2 {
    padding: 10px 0;
  }

  .layui-row {
    padding: 10px 50px;
    text-align: center;
  }

  .layui-row p {
    display: inline-block;
  }

  .ChemicalFindBox {
    /* font-size: 20px; */
    height: 30px;
    padding: 18px 0;
    /* display: none; */
  }

  .findA1,
  .findA2,
  .findA4,
  .findA3 {
    height: 24px;
    display: inline-block;
    font-size: 14px;
    padding-left: 10px;
  }

  .ChemicalFind {
    height: 30px;
    display: inline-block;
    border: solid 1px #009688;
  }

  /* 编辑 */
  .chemicalTypeBg {
    /* display: none; */
    background: rgba(158, 158, 158, 0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  .chemicalTypeBgContent {
    overflow: hidden;
    position: absolute;
    /* padding: 10px 37px; */
    background: white;
    /* width: 310px; */
    /* height: 660px; */
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .chemicalTypeBgContent h2 {
    /* width: 100%; */
    height: 40px;
    /* font-size: 26px; */
    line-height: 40px;
    padding-left: 20px;
    background: #f3f3f3;
  }

  .chemicalTypeBgContent input {
    font-size: 14px;
    width: 150px;
    height: 28px;
    margin: 10px 0;
    padding-left: 10px;
    border-radius: 5px;
    border: solid 1px #b3b3b3;
  }

  #date1,
  #date2 {
    width: 148px;
    height: 28px !important;
    display: inline-block;
    border: solid 1px #b3b3b3;
  }

  #date3 {
    width: 162px;
    height: 28px !important;
    display: inline-block;
    border: solid 1px #b3b3b3;
  }

  .TypeBgContent {
    padding: 20px 10px 20px 20px;
  }

  #submitInt {
    width: 66px;
    float: right;
    /* margin-right: 18px; */
    margin: 10px 24px 10px 0;
    border-radius: 5px;
    /* padding: 10px 0; */
  }

  #escInt {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
  }

  #escInt i {
    color: gray;
  }

  #dianLanMuYeNo,
  #dianLanAfterMuYeNo,
  #dianLanBeforeMuYeNo {
    width: 15px;
    vertical-align: -9px;
    /* padding: 0 10px; */
    margin-right: 5px;
  }

  #colorNo {
    font-size: 14px;
    width: 164px;
    height: 28px;
    margin: 10px 0;
    padding-left: 10px;
    border-radius: 5px;
    border: solid 1px #b3b3b3;
  }

  .layui-table-page {
    overflow: hidden;
  }

  .layui-laypage {
    width: 40%;
    float: right;
  }

  .TableContent {
    width: 615px;
  }

  .add {
    position: relative;
    top: -45px;
    left: 20px;
  }

  /* label {
              margin-left: 24px;
          } */
</style>
<style>
  .layui-table-cell {
    height: 60px;
    line-height: 60px;
  }
  .layui-table th {
    font-size: 60px;
    height: 110px;
  }
  #layui-chemicalType-table1 {
    background: transparent;
    color: white;
  }
  .layui-table-body .layui-none {
    font-size: 60px;
  }
  .layui-none {
    margin: 20px auto;
  }
  .layui-table-header {
    background: transparent;
  }
</style>
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
  .Administration-gcjcbz {
    width: 2500px;
    height: 1040px;
    background: url(..\assets\Administration\gk_bg_1.png);
  }
  .Administration-myhlbz,
  .Administration-myjcbz,
  .Administration-gcbz {
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
  .Admin-gkbz-1-1 {
    margin-top: 60px;
  }
  .Admin-gkbz-1-2 {
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
  .adis {
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
    border: solid 1px white;
    width: 100%;
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
    height: 860px;
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
    border: solid 1px white;
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
    border: white;
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
    width: 320px;
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
    border: white;
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
    width: 320px;
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
    margin: 80px auto;
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
    width: 360px;
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
    height: 3067px;
    /* height: 3240px; */
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
  #building-top .el-table__empty-block{
    background: #01AAED;
  }
  #building-top .el-table__empty-text{
    color:#c00050;
  }
  #building-top .is-group {
    background: #01AAED;
  }
  .el-table__body tr:hover>td {
    background-color: #134087 !important;
  }
  .cell{
    padding: 20px !important;
  }
    .el-table th.gutter{
    display: table-cell !important;
  }
  /*::-webkit-scrollbar {display:none}*/
</style>

