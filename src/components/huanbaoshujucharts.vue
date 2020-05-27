<template>
    <div class="charts">
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
             <div class="info">
                <div class="data">基本信息</div>
                    <table border="1">
                        <tr>
                            <th>缸号</th>
                            <th>123455</th>
                        </tr>
                        <tr>
                            <td>品种</td>
                            <td>pppppp</td>
                        </tr>
                    </table>
            </div>
             <div id="gauge" :style="{width: '3500px', height: '1000px', margin: '0 auto', zIndex: '10'}"></div>
             <div id="cod" :style="{width: '3500px', height: '1000px', margin: '0 auto', zIndex: '10'}"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapGetters} from 'vuex'
import yuenanUrl from "../assets/url";
import shaoguanUrl from '../assets/s_url';
export default {
    name: 'Charts',
    data() {
        return{
            showShaoguan: false,
            updataUrl: yuenanUrl + '/ErpYn',
            type: 0,
            hbsj: [],
            ph: {}
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
            this.draw('ysmwm','wpmwm', this.hbsj)
        },
    },
     created() {
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
    initOptions(seriesData, source, nameList) {
        let options =  {
            dataset: {
               source: source
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
                            fontSize : 60   
                            }
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: { 
                            fontSize : 40   
                        }
                    }
                },
                {
                    type: 'value',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: { 
                            fontSize : 40   
                        }
                    }
                }
            ],
             dataZoom : [
                {
                    type: 'slider',
                    show: true,
                    start: 0,
                    end: 50,
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
            let options = {
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            radius: '85%',
            series: [
                   
                {
                    fontSize: 70,
                    type: 'gauge',
                    min: 0.01,   
                    max: 1,
                    detail: {
                        formatter: '{value}',
                        textStyle: {
                            fontSize: 70,
                        },
                    },
                    data: [{value: value, name: showName}],
                    axisLine: {             
                     lineStyle: {     
                        color: [[Number(min)*0.01, '#c23531'], [1,'#63869e'], [Number(max)*0.01, '#c23531']],
                        width: 150
                            }  
                    },  
                     title : {               
                        textStyle: {   
                            fontWeight: 'bolder',
                            fontSize: 50,
                            color: "#63869e"
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
                        color: '#000',
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
    }, 

    setBaseOptions() {
        let _this = this;
        let seriesData = [
                {
                    name: '万码原水量',
                    type: 'bar',
                    itemStyle: {
                        color: '#1e4d7a'
                    }
                },
                {
                    name: '外排水量',
                    type: 'bar',
                    itemStyle: {
                        color: '#9bc4e7'
                    }
                },
                {
                    name: 'PH',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: '#1e4d7a',
                        width: 8
                    },
                    data: _this.toChangeData('ph', _this.hbsj)
                }
        ]
        
        return seriesData
   
   },
    setBaseOptions1() {
        let _this = this;
        let seriesData = [
                {
                    name: '万码原水量',
                    type: 'bar',
                    itemStyle: {
                        color: '#1e4d7a'
                    }
                },
                {
                    name: '外排水量',
                    type: 'bar',
                    itemStyle: {
                        color: '#9bc4e7'
                    }
                },
                {
                    name: '外排水cod值',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: '#1e4d7a',
                        width: 8
                    },
                    data: _this.toChangeData('cod', _this.hbsj)
                }
        ]
        
        return seriesData
   
   },
    setBaseOptions2() {
        let _this = this;
        let seriesData = [
                {
                    name: '万码原水量',
                    type: 'bar',
                    itemStyle: {
                        color: '#1e4d7a'
                    }
                },
                {
                    name: '外排水量',
                    type: 'bar',
                    itemStyle: {
                        color: '#9bc4e7'
                    }
                },
                {
                    name: '外排水硫化物',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: '#1e4d7a',
                        width: 8
                    },
                    data: _this.toChangeData('lhw', _this.hbsj)
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
             nameData.push(v.list)
             v.list.map((k, index) =>{
                 let dayData = []
                 k.name = zjsj + '-' + index
                 nameList.push(k.name)
                 dayData.push(k.name, k[str1], k[str2])
                source.push(dayData)
                 return v.list
             })  
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
                    _this.ybp(params.data, 'cod', phbzmax,'');
                }
            });

        let myCharts2 = this.$echarts.init(document.getElementById('list2'));
        myCharts2.setOption(_this.initOptions(seriesData2, source, nameList));
    }
  } 
}
</script>

<style lang="less" scoped>
.charts{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin-top: 200px;
    //  background: url(..\assets\Administration\other_bg.png);
    .charts-main{
        width: 2500px;
        height: 1000px;
        margin-top: 10px;
    }

    .ybp{
        display: flex;
        flex-direction: column;
        width: 3500px;
        justify-content: center;
        align-items: center;
    }
}
</style>