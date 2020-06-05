<template>
    <div class="charts">
         <!-- <span class="title-name">{{name}}</span> -->
        <!-- <div class="right" @click="toTable">查看图表</div> -->
        <div class="charts-main">
             <div id='list' :style="{width: '6731px', height: '1000px', margin: '0 auto', zIndex: '10'}"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapGetters} from 'vuex'
import yuenanUrl from "../assets/url";
import shaoguanUrl from '../assets/s_url';
import Varible from '../utils/varible'
export default {
    name: 'Charts',
    data() {
        return{
            xrData: [],
            jrgchn: [],
            zzkthn: [],
            showShaoguan: false,
            updataUrl: yuenanUrl + '/ErpYn',
            type: 0,
            optionsdata: {},
            name: ''
        }
    },
     computed: {
        ...mapGetters([
        'changeShaoguan'
    ])},
    watch: {
        showShaoguan: function(newdata,olddata){

            if(newdata != 'false'){
                this.updataUrl = shaoguanUrl + '/ErpSg'
            }else{
                this.updataUrl = yuenanUrl+'/ErpYn'
            }
        },
        xrData: function(newData,oldData){
            this.name = '后整过程耗能';
            this.draw('zylzlstonwm','zylzqtonwm', 'zyltrqmwm', this.xrData)
        },
        jrgchn: function(newdata, olddata) {
             this.name = '浆染过程耗能';
            this.draw('ystonbz','ysmbz', 'jsmbz', this.jrgchn)
        },
        zzkthn: function(newdata, olddata) {
             this.name = '织布空调耗能';
            this.draw('tonhbz','tonwmbz', '', this.zzkthn)
        }
    },
     created() {
         this.type = this.$route.query.type || 0
          this.optionsdata = Varible.OPTIONS;
    this.showShaoguan = this.changeShaoguan;
     if(this.changeShaoguan != 'false'){
        this.updataUrl = shaoguanUrl + '/ErpSg'
      }else{
        this.updataUrl = yuenanUrl+'/ErpYn'
      }
  },
   mounted() {
       let _this = this
       if(Number(_this.type) == 0) {
           this.getGCNHJrgcTuBiaoData();
       }else if(Number(_this.type) == 1){
           this.getGCNHZbktTuBiaoData()
       }else{
           this.getGCNHHzgcTuBiaoData();
       }
    //   this.getGCNHZbktTuBiaoData()
  },
   methods: {
    toTable() {
        this.$router.go(-1);
    },
    initOptions(seriesData, source, nameList) {
        let opt = this.optionsdata;
        let options =  {
            dataset: {
               source: source
            },
             tooltip: {
                trigger: 'axis', 
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999',
                    }
                },
                
                extraCssText: 'font-size: 100px; line-height: 100px',
            },
            grid: {
                left: '3%',
                right: '4%',  //距离右侧边距
                bottom: '9%',
                show:true,
                containLabel: true
                },
            xAxis: [
                {
                    type: 'category',
                    // data: nameList,
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: { 
                            fontSize : 60,
                            color: opt.zts   
                            }
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: { 
                            fontSize : 40,
                            color: opt.zts    
                        }
                    }
                },
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: { 
                            fontSize : 40,
                            color: opt.zts    
                        }
                    }
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
            series: seriesData
        };

        return options
    },
    getGCNHHzgcTuBiaoData() {
        axios.post(this.updataUrl + '/api/getGCNHHzgcTuBiaoData').then((res => {
            let arr =res.data.data
             arr.map((v, idx) => {
                 let name = v.zjsj.slice(8,10)
                v.zjsj = name;
                return arr
              })
            this.xrData = res.data.data
        }))
    },
    getGCNHJrgcTuBiaoData() {
        axios.post(this.updataUrl + '/api/getGCNHJrgcTuBiaoData').then((res => {
            let arr =res.data.data
             arr.map((v, idx) => {
                 let name = v.zjsj.slice(8,10)
                v.zjsj = name;
                return arr
              })
            this.jrgchn = res.data.data
        }))
    },
     getGCNHZbktTuBiaoData() {
        axios.post(this.updataUrl + '/api/getGCNHZbktTuBiaoData').then((res => {
            let arr =res.data.data
             arr.map((v, idx) => {
                 let name = v.zjsj.slice(8,10)
                v.zjsj = name;
                return arr
              })
            this.zzkthn = res.data.data
        }))
    },
    toChangeData(name, data) {
        let _this = this;
        let day =[]
        data.forEach((v, idx) => {
             v.list.map((k, index) =>{
                day.push(k[name])
             })  
        })
        return day
    },

    setBaseOptions() {
        let _this = this;
        let seriesData = [];
        let opt = this.optionsdata;
        if(Number(_this.type) == 0){
            //江染过程耗能
                seriesData = [
                {
                    name: '染色自来水标准用量',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ql
                    }
                },
                {
                    name: '染色蒸汽标准用量',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ls
                    }
                },
                 {
                    name: '浆纱蒸汽标准用量',
                    type: 'bar',
                    itemStyle: {
                         color: opt.xj
                    }
                },
                {
                    name: '染色自来水用量',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.qlx,
                        width: 8
                    },
                    data: _this.toChangeData('ystonwm', _this.jrgchn)
                },
                  {
                    name: '染色蒸汽用量',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.lsx,
                        width: 8
                    },
                    data: _this.toChangeData('zylzqtonwm', _this.jrgchn)
                },
                 {
                    name: '浆纱蒸汽用量',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.xjx,
                        width: 8
                    },
                    data: _this.toChangeData('jsmwm', _this.jrgchn)
                },
        ] 
         
        }else if(Number(_this.type) == 1) {
            //织造
                seriesData = [
                {
                    name: '自来水每小时用水标准',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ql
                    }
                },
                {
                    name: '自来水每万米用水标准',
                    type: 'bar',
                    itemStyle: {
                       color: opt.ls
                    }
                },
                {
                    name: '自来水实际每小时用水',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.qlx,
                        width: 8
                    },
                    data: _this.toChangeData('tonh', _this.zzkthn)
                },
                  {
                    name: '自来水实际每万米用水',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.lsx,
                        width: 8
                    },
                    data: _this.toChangeData('tonwm', _this.zzkthn)
                }
        ]
        }else{
            //后整数据
          seriesData = [
                {
                    name: '总用量自来水用量',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ql
                    }
                },
                {
                    name: '总用量蒸汽用量',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ls
                    }
                },
                 {
                    name: '总用量天然气用量',
                    type: 'bar',
                    itemStyle: {
                         color: opt.xj
                    }
                },
                {
                    name: '总用量自来水用量',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.qlx,
                        width: 8
                    },
                    data: _this.toChangeData('zyltrqmwm', _this.xrData)
                },
                  {
                    name: '总用量蒸汽用量',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.lsx,
                        width: 8
                    },
                    data: _this.toChangeData('zylzqtonwm', _this.xrData)
                },
                 {
                    name: '总用量天然气用量',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.xjx,
                        width: 8
                    },
                    data: _this.toChangeData('zyltrqmwm', _this.xrData)
                },
        ]
        }
        
        return seriesData
   
   },
    
    draw(str1,str2,str3, data) {
        let _this = this;
        let nameList = [];
        let source = []
        data.forEach((v, idx) => {
             let zjsj = v.zjsj;
             
            //  String bzwmzls; //标准万米用量自来水用量String bzwmzq; //标准万米用量蒸汽用量String bzwmtrq; //标准万米用量天然气用量
             v.list.map((k, index) =>{
                 
                 let dayData = []
                 k.name = zjsj + '-' + index
                 nameList.push(k.name)
                //  dayData.push(k.name, k.bzwmzls, k.bzwmzq, k.bzwmtrq)
                if(str3 == '') {
                    dayData.push(k.name, k[str1], k[str2])
                }else{
                    dayData.push(k.name, k[str1], k[str2], k[str3])
                }
                source.push(dayData)
                // _this.toChangeData(k)
                 return v.list
             })  
        })
       
        let seriesData = _this.setBaseOptions()
        
        let myCharts = this.$echarts.init(document.getElementById('list'));
        myCharts.setOption(_this.initOptions(seriesData, source, nameList));
    }
  } 
}
</script>

<style lang="less" scoped>
.charts{
    display: flex;
    flex-direction: column;
    height: 1000px;
    // height: 100%;
    // width: 100%;
//    padding-top: 200px;
//     background: url(..\assets\Administration\other_bg.png);
    position: relative;
    .title-name{
        display: block;
        font-size: 120px;
        color: #00ecfc;
        margin-top: 100px;
        margin: 0 auto;
    }
    .charts-main{
        width: 2500px;
        height: 3500px;
        margin-left: 500px; 
    }
    .right{
        font-size: 120px;
        color: #00ecfc;
        position: absolute;
        left: 6700px;
    }
}
</style>