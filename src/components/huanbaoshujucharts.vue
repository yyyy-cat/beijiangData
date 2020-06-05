<template>
    <div class="charts">
         <span class="title-name">环保数据</span>
        <div class="left">
        <div class="charts-main">
             <div id='list' :style="{width: '6731px', height: '1000px', margin: '0 auto', zIndex: '10'}"></div>
        </div>
         <div class="charts-main">
             <div id='list1' :style="{width: '6731px', height: '1000px', margin: '0 auto', zIndex: '10'}"></div>
        </div>
         <div class="charts-main">
             <div id='list2' :style="{width: '6731px', height: '1000px', margin: '0 auto', zIndex: '10'}"></div>
        </div>

        <div class="ybp">
             <div id="gauge" :style="{width: '2000px', height: '1000px', margin: '0 auto', zIndex: '10'}"></div>
             <div id="cod" :style="{width: '2000px', height: '1000px', margin: '0 auto', zIndex: '10'}"></div>
             <div id="lhw" :style="{width: '2000px', height: '1000px', margin: '0 auto', zIndex: '10'}"></div>
        </div>
        </div>
        <div class="right" @click="toTable">返回表格</div>
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
            showShaoguan: false,
            updataUrl: yuenanUrl + '/ErpYn',
            type: 0,
            hbsj: [],
            ph: {},
            optionsdata: {}
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
        hbsj: function(newData,oldData){
            this.draw('ysm','wpm', this.hbsj)
        },
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
       this.getGHBTuBiaoData();
  },
   methods: {
       toTable() {
        this.$router.go(-1);
       },
    initOptions(seriesData, source, nameList) {
        // console.log(source,"这是原来的数据")
        let opt = this.optionsdata

        let options =  {
            // dataset: {
            //    source: source
            // },
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
                    data: nameList,
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
    getGHBTuBiaoData() {
        //环保数据
        axios.post(this.updataUrl + '/api/getGHBTuBiaoData').then((res => {
            let arr =res.data.data
             arr.map((v, idx) => {
                 let name = v.zjsj.slice(8,10)
                v.zjsj = name;
                return arr
              })
            this.hbsj = res.data.data
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
     ybpOptions(value, showName,max, min) {
         let minx = Number(min).toFixed(2);
         let maxx = Number(max).toFixed(2);
         let mindata = [];
         if(min == '0') {
             mindata = [[0.99,'#63869e'], [1, '#c23531']]
         }else{
             mindata = [[0.01, '#c23531'], [0.99,'#63869e'], [1, '#c23531']]
         }
            let options = {
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            radius: '85%',
            series: [
                   
                {
                    fontSize: 70,
                    type: 'gauge',
                    min: Number(minx),   
                    max: Number(maxx),
                    detail: {
                        formatter: '{value}',
                        textStyle: {
                            fontSize: 70,
                        },
                    },
                    data: [{value: Number(value).toFixed(2), name: showName}],
                    axisLine: {             
                     lineStyle: { 
                        color: mindata,
                        width: 150
                        }  
                    },  
                     title : {               
                        textStyle: {   
                            fontWeight: 'bolder',
                            fontSize: 50,
                            color: '#00ecfc'
                        }
                    },
                    axisTick: {
                        length: 50,
                         lineStyle: {
                             width: 8
                         }
                    },
                    axisLabel: {
                        show: true,
                        color: '#00ecfc',
                        fontSize: 50,
                    }
                }
            ]
        };
        return options
    },
    ybp(value, name, max, min) {
        let _this = this;
        let showName = ''
        if(name == 'gauge'){
            let gauge = this.$echarts.init(document.getElementById('gauge'))
            this.ybpOptions().series[0].data[0].value = value;
            showName = 'PH';
            gauge.setOption(this.ybpOptions(value, showName, max, min), true);
        }
         if(name == 'cod'){
            let gauge = this.$echarts.init(document.getElementById('cod'))
            this.ybpOptions().series[0].data[0].value = value;
            showName = 'cod';
            gauge.setOption(this.ybpOptions(value, showName, max, min), true);
        }
         if(name == 'lhw'){
            let gauge = this.$echarts.init(document.getElementById('lhw'))
            this.ybpOptions().series[0].data[0].value = value;
            showName = 's';
            gauge.setOption(this.ybpOptions(value, showName, max, min), true);
        }
    }, 

    setBaseOptions() {
        let _this = this;
        let opt = this.optionsdata
        let seriesData = [
                {
                    name: '万码原水量',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ql
                    },
                    data: _this.toChangeData('ysm', _this.hbsj)
                },
                {
                    name: '外排水量',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ls,
                    },
                    data: _this.toChangeData('wpm', _this.hbsj)
                },
                {
                    name: 'PH',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.qlx,
                        width: 8
                        
                    },
                    data: _this.toChangeData('ph', _this.hbsj)
                },
                 {
                    name: 'PH最小值',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.ql,
                        width: 8,
                        type:'dotted' 
                    },
                    data: _this.toChangeData('phbzmin', _this.hbsj)
                },
                  {
                    name: 'PH最大值',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.ls,
                        width: 8,
                        type:'dotted' 
                    },
                    data: _this.toChangeData('phbzmax', _this.hbsj)
                }
        ]
        
        return seriesData
   
   },
    setBaseOptions1() {
        let _this = this;
        let opt = this.optionsdata
        let seriesData = [
                {
                    name: '万码原水量',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ql,
                    },
                    data: _this.toChangeData('ysm', _this.hbsj)
                },
                {
                    name: '外排水量',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ls
                    },
                    data: _this.toChangeData('wpm', _this.hbsj)
                },
                {
                    name: '外排水cod值',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.qlx,
                        width: 8
                    },
                    data: _this.toChangeData('cod', _this.hbsj)
                },{
                    name: '外排水cod值最大值',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.ls,
                        width: 8,
                         type:'dotted' 
                    },
                    data: _this.toChangeData('codbzmax', _this.hbsj)
                }
        ]
        
        return seriesData
   
   },
    setBaseOptions2() {
        let _this = this;
        let opt = this.optionsdata;
        let seriesData = [
                {
                    name: '万码原水量',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ql
                    },
                    data: _this.toChangeData('ysm', _this.hbsj)
                },
                {
                    name: '外排水量',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ls
                    },
                    data: _this.toChangeData('wpm', _this.hbsj)
                },
                {
                    name: '外排水硫化物',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.qlx,
                        width: 8
                       
                    },
                    data: _this.toChangeData('lhw', _this.hbsj)
                },
                  {
                    name: '外排水硫化物最大值',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: opt.ls,
                        width: 8,
                        type:'dotted' 
                    },
                    data: _this.toChangeData('bzmax', _this.hbsj)
                }
        ]
        
        return seriesData
   
   },
    draw(str1,str2,data) {
        let _this = this;
        let nameList = [];
        let source = [];
        let nameData =[]
        data.forEach((v, idx) => {
             let zjsj = v.zjsj;
              v.name = zjsj + '-' + idx
             nameData.push(v.list)
             v.list.map((k, index) =>{
                 let dayData = []
                 k.name = zjsj + '-' + index
                //  nameList.push(k.name)
                 dayData.push(k.name, k[str1], k[str2])
                source.push(dayData)
                 return v.list
             })  
             nameList.push(v.name)
        })

        let seriesData = _this.setBaseOptions()
        let seriesData1 = _this.setBaseOptions1()
        let seriesData2 = _this.setBaseOptions2()
        
        
        let myCharts = this.$echarts.init(document.getElementById('list'));
        myCharts.setOption(_this.initOptions(seriesData, source, nameList));

        myCharts.on('click', function(params) {
            this.ph = nameData[params.dataIndex][0];
            let phbzmin = nameData[params.dataIndex][0].phbzmin;
            let phbzmax = nameData[params.dataIndex][0].phbzmax;
                if(params.seriesType == 'line' && params.seriesName == "PH") {
                    _this.ybp(params.data, 'gauge', phbzmax, phbzmin);
                }
            });

        let myCharts1 = this.$echarts.init(document.getElementById('list1'));
        myCharts1.setOption(_this.initOptions(seriesData1, source, nameList));

         myCharts1.on('click', function(params) {
            this.ph = nameData[params.dataIndex][0];
            let phbzmax = nameData[params.dataIndex][0].codbzmax;
                if(params.seriesType == 'line' && params.seriesName == "外排水cod值") {
                    _this.ybp(params.data, 'cod', phbzmax,'0');
                }
            });

        let myCharts2 = this.$echarts.init(document.getElementById('list2'));
        myCharts2.setOption(_this.initOptions(seriesData2, source, nameList));
         myCharts2.on('click', function(params) {
            this.ph = nameData[params.dataIndex][0];
            let phbzmax = nameData[params.dataIndex][0].codbzmax;
                if(params.seriesType == 'line' && params.seriesName == "外排水硫化物") {
                    _this.ybp(params.data, 'lhw', phbzmax,'0');
                }
            });
    }
  } 
}
</script>

<style lang="less" scoped>
.charts{
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 200px;
    background: url(..\assets\Administration\other_bg.png);
    .title-name{
        display: block;
        font-size: 120px;
        color: #00ecfc;
        margin-top: 100px;
        margin: 0 auto;
    }
    .left{
        display: flex;
        flex-direction: column;
        .charts-main{
        width: 2500px;
        height: 1000px;
        margin-top: 10px;
    }

    .ybp{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    }
    .right{
        position: absolute;
        left: 6700px;
        font-size: 120px;
        color: #00ecfc;
    }
 
}
</style>