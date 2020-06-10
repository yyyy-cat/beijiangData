<template>
    <div class="charts">
        <span class="title-name">{{name}}</span>
        <div class="right" @click="toTable">返回</div>
        <div class="left">
            <el-scrollbar style="height: 900px">
           <el-calendar>
                <template
                    slot="dateCell"
                    class="name"
                    slot-scope="{date, data}"
                    >
                    <div class="calendar-day">{{ data.day.split('-').slice(1).join('-') }}</div>
                        <div :id="'step' + data.day.split('-').slice(1).join('-')" :style="{width: '600px', height: '470px', margin: '0 auto', zIndex: '10'}" @click="toNextPage(data.day.split('-').slice(2).join('-'))"></div>
                </template>
            </el-calendar>
            </el-scrollbar>
        </div>
        <div class="main">
            <Detail :detailList='detailList' :type='type'/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapGetters} from 'vuex'
import yuenanUrl from "../assets/url";
import shaoguanUrl from '../assets/s_url';
import Varible from '../utils/varible';
import Detail from './zhizaotourudetail'
export default {
    name: 'Charts',
    data() {
        return{
            showShaoguan: false,
            updataUrl: yuenanUrl + '/ErpYn',
            xrData: [],
            wData: [],//传入下一个页面的数据
            jrtrcc: [],
            type: 0,//上个页面判断渲染哪个图表的值
            hztrcc: [],
            optionsdata: {},
            name: '',
            detailList: JSON.stringify([{"zjsj":"2020-06-01","scdh":"GZ2002-324","pz":"S1","gh":"2005348A","sjtrcd":"11600","syl":95,"jsczzc":"11600"},{"zjsj":"2020-06-01","scdh":"GZ2002-324","pz":"S1","gh":"2005348A","sjtrcd":"11600","syl":95,"jsczzc":"11600"},{"zjsj":"2020-06-01","scdh":"GZ2002-324","pz":"S1","gh":"2005349A","sjtrcd":"11600","syl":95,"jsczzc":"11525"},{"zjsj":"2020-06-01","scdh":"GZ2002-324","pz":"S1","gh":"2005349A","sjtrcd":"11600","syl":95,"jsczzc":"11525"},{"zjsj":"2020-06-01","scdh":"GZ2004-010","pz":"S2R","gh":"2005274C","sjtrcd":"12600","syl":95,"jsczzc":"12535"},{"zjsj":"2020-06-01","scdh":"GZ2004-010","pz":"S2R","gh":"2005275C","sjtrcd":"12600","syl":95,"jsczzc":"12530"}]),
            showDetail: false
        
        }
    },
    components: {
        Detail
    },
    computed: {
      ...mapGetters([
        'changeShaoguan'
        ])
    },
    watch: {
        type: function() {
              if(Number(this.type) == 0) {
              this.detailList = JSON.stringify([{"zjsj":"2020-06-01","scdh":"GZ2002-324","pz":"S1","gh":"2005348A","sjtrcd":"11600","syl":95,"jsczzc":"11600"},{"zjsj":"2020-06-01","scdh":"GZ2002-324","pz":"S1","gh":"2005348A","sjtrcd":"11600","syl":95,"jsczzc":"11600"},{"zjsj":"2020-06-01","scdh":"GZ2002-324","pz":"S1","gh":"2005349A","sjtrcd":"11600","syl":95,"jsczzc":"11525"},{"zjsj":"2020-06-01","scdh":"GZ2002-324","pz":"S1","gh":"2005349A","sjtrcd":"11600","syl":95,"jsczzc":"11525"},{"zjsj":"2020-06-01","scdh":"GZ2004-010","pz":"S2R","gh":"2005274C","sjtrcd":"12600","syl":95,"jsczzc":"12535"},{"zjsj":"2020-06-01","scdh":"GZ2004-010","pz":"S2R","gh":"2005275C","sjtrcd":"12600","syl":95,"jsczzc":"12530"}])
       }else if(Number(this.type) == 1){
           this.detailList = JSON.stringify([{"sjrq":"2020-06-01","scdh":"GZ2003-010","pz":"S1A","gh":"2005351C","baimiyongwei":"6.2441","baimiyongweibiaozhun":"5","zhichenglv":"5","zhichenglvbiaozhun":"5"},{"sjrq":"2020-06-01","scdh":"GZ2003-010","pz":"S1A","gh":"2005352C","baimiyongwei":"6.40369","baimiyongweibiaozhun":"6.29","zhichenglv":"95.2091","zhichenglvbiaozhun":"94"},{"sjrq":"2020-06-01","scdh":"GZ2003-029","pz":"A3428","gh":"2005345D","baimiyongwei":"11.2739","baimiyongweibiaozhun":"10.41","zhichenglv":"93.9925","zhichenglvbiaozhun":"92"},{"sjrq":"2020-06-01","scdh":"GZ2003-170","pz":"S1B","gh":"2005353C","baimiyongwei":"13.1236","baimiyongweibiaozhun":"12.92","zhichenglv":"95.0442","zhichenglvbiaozhun":"94"},{"sjrq":"2020-06-01","scdh":"NH2002-054","pz":"BS0624A00","gh":"2005326W","baimiyongwei":"12.2404","baimiyongweibiaozhun":"12.71","zhichenglv":"94.8637","zhichenglvbiaozhun":"92"},{"sjrq":"2020-06-01","scdh":"NH2003-012","pz":"BS0624B43","gh":"2005328W","baimiyongwei":"12.0897","baimiyongweibiaozhun":"12.44","zhichenglv":"93.6073","zhichenglvbiaozhun":"92"},{"sjrq":"2020-06-01","scdh":"NH2003-013/\nNH2003-014","pz":"BS0624B43","gh":"2005327W","baimiyongwei":"12.6281","baimiyongweibiaozhun":"12.71","zhichenglv":"93.4994","zhichenglvbiaozhun":"92"}])
       }else{
          this.detailList = JSON.stringify([{"scdh":"GZ1906-086 ","pz":"RA3479-9E3","gh":"2005352D","hzrq":"2020-06-01","bzzcl":0,"sjzcl":0},{"scdh":"GZ1906-124","pz":"RA3479-9E3","gh":"2005353D","hzrq":"2020-06-01","bzzcl":0,"sjzcl":84.89},{"scdh":"GZ1906-189 ","pz":"RA3479-9E3","gh":"2005351D","hzrq":"2020-06-01","bzzcl":84.5,"sjzcl":83.33},{"scdh":"GZ1907-105","pz":"RA3479-9E3","gh":"2005355D","hzrq":"2020-06-01","bzzcl":84,"sjzcl":85.2},{"scdh":"GZ1907-149 ","pz":"A3428","gh":"2005345D","hzrq":"2020-06-01","bzzcl":84,"sjzcl":84.79},{"scdh":"GZ1907-149 ","pz":"RA3479-9E3","gh":"2005354D","hzrq":"2020-06-01","bzzcl":84,"sjzcl":85.55}])
       }
        },
        xrData: function(nelData, oldData) {
            this.name = '织造投入产出数据';
            this.draw(this.xrData);
        },
        jrtrcc: function(nelData, oldData) {
            this.name = '浆染投入产出数据';
            this.draw(this.jrtrcc);
        },
        hztrcc: function(nelData, oldData) {
            this.name = '后整投入产出数据'
            this.draw(this.hztrcc);
        },
     showShaoguan: function(newdata,olddata){

      if(newdata != 'false'){
        this.updataUrl = shaoguanUrl + '/ErpSg'
      }else{
        this.updataUrl = yuenanUrl+'/ErpYn'
      }
    }
    },
    created() {
        this.optionsdata = Varible.OPTIONS;
        this.type = this.$route.query.type
        this.showShaoguan = this.changeShaoguan;
        if(this.changeShaoguan != 'false'){
            this.updataUrl = shaoguanUrl + '/ErpSg'
        }else{
            this.updataUrl = yuenanUrl+'/ErpYn'
        }
    },
   mounted() {
       
       if(Number(this.type) == 0) {
           this.getYCLJrTuBiaoData()
       }else if(Number(this.type) == 1){
           this.getYCLZbTuBiaoData();
       }else{
           this.getYCLHzTuBiaoData();
       }
  },
   methods: {
    toTable() {
        this.$router.go(-1);
    },
       toNextPage(id) {
           let _this = this
           let arr = []
           let data = null;
           if(Number(_this.type) == 0){
               data = _this.jrtrcc
           }else if(Number(_this.type) == 1){
               data = this.xrData
           }else{
               data = this.hztrcc
           }
            data.forEach((n, idx) => {
                if(n.zjsj.slice(8,10) == id) {
                     arr.push(n.list)
                }
        })
        this.showDetail = true;
        this.detailList = JSON.stringify(arr[0])
       },
    getYCLZbTuBiaoData() {
        axios.post(this.updataUrl+'/api/getYCLZbTuBiaoData').then(res => {
            //原材料数据织造投入产出
          this.xrData = res.data.data;
        });
    },
     getYCLJrTuBiaoData() {
        axios.post(this.updataUrl+'/api/getYCLJrTuBiaoData').then(res => {
            //原材料浆染投入产出
          this.jrtrcc = res.data.data;
          
        });
    },
    getYCLHzTuBiaoData() {
        axios.post(this.updataUrl+'/api/getYCLHzTuBiaoData').then(res => {
            //原材料后整投入产出数据
          this.hztrcc = res.data.data;
        });
    },
    setBaseOptions() {
        let _this = this;
        let seriesData = [];
        let opt = this.optionsdata
        if(Number(_this.type) == 0){
            //原材料浆染投入产出
            seriesData =  [
                { 
                    name: '整经长度',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ql
                    },
                    data: _this.toSetData('sjtrcd', _this.jrtrcc)
                },
                {
                    name: '出轴长度',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ls
                    },
                    data: _this.toSetData('jsczzc', _this.jrtrcc)
                },
                {
                    name: '原纱利用率',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 10, 
                    data: _this.toSetData('syl', _this.jrtrcc),
                    lineStyle: {
                        width: 8,
                        color: opt.qlx
                    }
                }
            ]
        }else if(_this.type == 1) {
            seriesData =  [
                { 
                    name: '百米用纬标准',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ql
                    },
                    data: _this.toSetData('baimiyongweibiaozhun', _this.xrData)
                },
                {
                    name: '织成率标准',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ls
                    },
                    data: _this.toSetData('zhichenglvbiaozhun', _this.xrData)
                },
                {
                    name: '织成率',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 10, 
                    data: _this.toSetData('zhichenglv', _this.xrData),
                    lineStyle: {
                        width: 8,
                        color: opt.lsx
                    }
                },
                {
                    name: '百米用纬',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 10, 

                    data: _this.toSetData('baimiyongwei', _this.xrData),
                    lineStyle: {
                        width: 8,
                        color: opt.qlx
                    }
                }
            ]
        }else{
          seriesData =  [
            { 
                name: '标准制成率',
                type: 'bar',
                itemStyle: {
                    color: opt.ql
                },
                data: _this.toSetData('bzzcl', _this.hztrcc)
            },
            {
                name: '制成率',
                type: 'line',
                smooth: 0.5,
                yAxisIndex: 1,
                symbolSize: 10, 
                data: _this.toSetData('sjzcl', _this.hztrcc),
                lineStyle: {
                    width: 8,
                    color: opt.qlx
                }
            }
         ]
        }
            return seriesData
    },
    initOptions(setBaseOptions, source) {
        let _this = this;
         let opt = this.optionsdata;
        let options = {
            xAxis:  {
                    type: 'category',
                    axisPointer: {
                        type: 'shadow'
                    },
                    data:  source,
                    axisLabel: {
                        textStyle: { 
                            fontSize : 30,
                            color: opt.zts    
                            }
                    },
            },
              yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: { 
                            fontSize : 30,
                            color: opt.zts   
                            }
                    },
                    nameTextStyle: {
                        fontSize: 30,
                    },
                },
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: { 
                            fontSize : 30   
                            }
                    },
                    nameTextStyle: {
                        fontSize: 30,
                    },
                }
            ],
             dataZoom : [
                {
                    type: 'slider',
                    show: true,
                    start: 0,
                    end: 95,
                    handleSize: 2
                },
                {
                    type: 'inside',
                    start: 0,
                    end: 100
                },
                {
                    type: 'slider',
                    show: true,
                    yAxisIndex: 0,
                    filterMode: 'empty',
                    width: 12,
                    height: '70%',
                    handleSize: 8,
                    showDataShadow: false,
                    left: '93%'
                }
            ],
            series: setBaseOptions,
        }
        return options
    },
    toSetData(name, data) {
        let _this = this;
        let day = [];
        data.forEach((v, idx) => {
            v.list.map((k, index) => {
                day.push(k[name])
            })
        })
        return day
    },
    draw(data) {
        let _this = this;
        let setBaseOptions = _this.setBaseOptions()
        let source = []
        data.forEach((v, index) => {
            source=[]
            let zjsj = v.zjsj.slice(5,10);
            v.list.map((k, idx) => {
                // v.zjsj.slice(8,10)+ '-' + 
                let name = idx
                source.push(name)
            })
            let myCharts = this.$echarts.init(document.getElementById(`step${zjsj}`));
            if(v.list.length > 0) {
                myCharts.setOption(this.initOptions(setBaseOptions,source));
            }
        }) 
    }
  } 
}
</script>

<style lang="less" scoped>
@import '../style/hasrl.less';


</style>