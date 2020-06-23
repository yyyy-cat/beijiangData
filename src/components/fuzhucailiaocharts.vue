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
                    slot-scope="{date, data}">
                    <div class="calendar-day">{{ data.day.split('-').slice(1).join('-') }}</div>
                    <div :id="'step' + data.day.split('-').slice(1).join('-')" :style="{width: '600px', height: '470px', margin: '0 auto', zIndex: '10'}" @click="toNextPage(data.day.split('-').slice(2).join('-'))"></div>
                </template>
            </el-calendar>
             </el-scrollbar>
        </div>
        <div class="main">
            <Detail :detailList='detailList' :type='type' />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapGetters} from 'vuex'
import yuenanUrl from "../assets/url";
import shaoguanUrl from '../assets/s_url';
import Varible from '../utils/varible';
import Detail from './fuzhucailiaodetail'
export default {
    name: 'Charts',
    data() {
        return{
            showShaoguan: false,
            updataUrl: yuenanUrl + '/ErpYn',
            wData: [],//传入下一个页面的数据
            type: null,//上个页面判断渲染哪个图表的
            rsyl: [],
            sjfl: [],
            optionsdata: {},
            type: 0,
            name: '',
            detailList: JSON.stringify([{"scdh":"GZ1912-384","pz":"S2R","gh":"2005333/2005334E","rssj":"2020-06-01","mybzsr":"2.15","mysjsr":"2.15632"},{"scdh":"GZ1912-384","pz":"S2R","gh":"2005333/2005334E","rssj":"2020-06-01","mybzsr":"2.15","mysjsr":"2.22"},{"scdh":"GZ2001-098","pz":"A3479E-1R","gh":"2005312/2005313D","rssj":"2020-06-01","mybzsr":"2.75","mysjsr":"2.90032"},{"scdh":"GZ2001-098","pz":"A3479E-1R","gh":"2005314/2005315D","rssj":"2020-06-01","mybzsr":"2.75","mysjsr":"2.88"}]),
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
                this.detailList = JSON.stringify([{"scdh":"GZ1912-384","pz":"S2R","gh":"2005333/2005334E","rssj":"2020-06-01","mybzsr":"0","mysjsr":"0"},{"scdh":"GZ1912-384","pz":"S2R","gh":"2005333/2005334E","rssj":"2020-06-01","mybzsr":"2.15","mysjsr":"2.22"},{"scdh":"GZ2001-098","pz":"A3479E-1R","gh":"2005312/2005313D","rssj":"2020-06-01","mybzsr":"2.75","mysjsr":"2.90032"},{"scdh":"GZ2001-098","pz":"A3479E-1R","gh":"2005314/2005315D","rssj":"2020-06-01","mybzsr":"2.75","mysjsr":"2.88"}])
            }else if(Number(this.type) == 1){
                this.detailList = JSON.stringify([{"scdh":"GZ2001-004","pz":"RA3479-9E3","gh":"2005351D","jssj":"2020-06-01","fljybzsjl":"8.06572","fljysjsjl":"8.06572"},{"scdh":"GZ2001-004","pz":"RA3479-9E3","gh":"2005352D","jssj":"2020-06-01","fljybzsjl":"9.78836","fljysjsjl":"9.78836"},{"scdh":"GZ2001-004","pz":"RA3479-9E3","gh":"2005353D","jssj":"2020-06-01","fljybzsjl":"7.2964","fljysjsjl":"7.2964"},{"scdh":"GZ2001-004","pz":"RA3479-9E3","gh":"2005354D","jssj":"2020-06-01","fljybzsjl":"6.35474","fljysjsjl":"6.35474"},{"scdh":"GZ2001-004","pz":"RA3479-9E3","gh":"2005355D","jssj":"2020-06-01","fljybzsjl":"9.0748","fljysjsjl":"9.0748"}])
            }
        },
        rsyl: function(nelData, oldData) {
            this.name = '染色用料数据';
            this.draw(this.rsyl);
        },
        sjfl: function(nelData, oldData) {
            this.name = '上浆辅料数据';
            this.draw(this.sjfl);
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
           this.getFZCLRsylTuBiaoData()
       }else if(Number(this.type) == 1){
           this.getFZCLSjflTuBiaoData();
       }
  },
   methods: {
        toTable() {
            this.$router.go(-1);
        },
       toNextPage(id, data) {
           let _this = this
           let arr = []
           if(Number(_this.type) == 0){
               data = _this.rsyl
           }else if(Number(_this.type) == 1){
               data = this.sjfl
           }
           
            data.forEach((n, idx) => {
                if(n.zjsj.slice(8,10) == id) {
                     arr.push(n.list)
                }
         })
        this.showDetail = true;
        this.detailList = JSON.stringify(arr[0])
       },
    getFZCLRsylTuBiaoData() {
        axios.post(this.updataUrl+'/api/getFZCLRsylTuBiaoData').then(res => {
            //原材料数据织造投入产出
          this.rsyl = res.data.data;
        });
    },
     getFZCLSjflTuBiaoData() {
        axios.post(this.updataUrl+'/api/getFZCLSjflTuBiaoData').then(res => {
            //原材料浆染投入产出
          this.sjfl = res.data.data;
        });
    },
    setBaseOptions() {
        let _this = this;
        let seriesData = [];
        let opt = this.optionsdata;
        if(Number(_this.type) == 0){
            //原材料浆染投入产出
            seriesData =  [
                { 
                    name: '标准上染率',
                    // type: 'bar',由柱状图转变成了折线图
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 10, 
                    // itemStyle: {
                    //     color: opt.ql
                    // },
                     lineStyle: {
                        width: 8,
                        color: opt.ql
                    },
                    data: _this.toSetData('mybzsr', _this.rsyl)
                },
                {
                    name: '实际上染率',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 10, 
                    data: _this.toSetData('mysjsr', _this.rsyl),
                    lineStyle: {
                        width: 8,
                        color: opt.qlx
                    }
                }
            ]
        }else if(_this.type == 1) {
            seriesData =  [
                // { 
                //     name: '标准上浆率',
                //     type: 'bar',
                //     itemStyle: {
                //         color: opt.ql
                //     },
                //     data: _this.toSetData('fljybzsjl', _this.sjfl)
                // },
                {
                    name: '实际上浆率',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 10, 
                    data: _this.toSetData('fljysjsjl', _this.sjfl),
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
        let opt = this.optionsdata
        let options = {
            xAxis:  {
                    type: 'category',
                    axisPointer: {
                        type: 'shadow'
                    },
                    data: source,
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
                    end: 100,
                    handleSize: 8
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
            source = []
            let zjsj = v.zjsj.slice(5,10);
            v.list.map((k, idx) => {
                //  let name = v.zjsj.slice(8,10)+ '-' + idx
                let name =  idx
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