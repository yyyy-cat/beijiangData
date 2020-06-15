<template>
    <div class="charts">
        <div class="left">
            <div class="charts-main">
                <div id='list' :style="{width: '6049px', height: '1600px',margin: '0 auto', zIndex: '10', paddingTop: '78px'}"></div>
            </div>
            <div class="ybp" >
                
                <div id="sjsrl" :style="{width: '1400px', height: '1200px', zIndex: '10', marginLeft: '1200px'}"></div>
                <div class="info" :style="{marginLeft: '2000px'}">
                    <!-- <div class="data">基本信息</div> -->
                    <table border="1" class="main">
                        <tr>
                            <th>缸号</th>
                            <th>{{rsylcurrent.gh}}</th>
                        </tr>
                        <tr>
                            <td>品种</td>
                            <td>{{rsylcurrent.pz}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// :style="{width: '600px', marginLeft: '1550px'}"
import axios from 'axios'
import Varible from '../utils/varible'
export default {
    name: 'Charts',
     props:{
        detailList: String,
        type: String
        
    },
    data() {
        return{
            lData: '',
            rsylcurrent: {}, //染色用料的当前数据
            optionsdata: {},
            name: ''
        }
    },
     watch: {
        detailList: function(newdata, olddata){
            this.lData = newdata
             if(Number(this.type) == 0) {
            this.name = '染色用料数据';
            this.draw('mybzsr');
                    }
            else if(Number(this.type) == 1) {
                    this.name = '上浆辅料数据';
                    this.draw('fljybzsjl');
                }
        }
    },
    created() {
        this.lData = this.$props.detailList
        this.type = this.$props.type
        this.optionsdata = Varible.OPTIONS;
    },
   mounted() {
    this.ybp(0, 'sjsrl', 0);
    if(Number(this.type) == 0) {
            this.name = '染色用料数据';
            this.draw('mybzsr');
        }
   else if(Number(this.type) == 1) {
        this.name = '上浆辅料数据';
        this.draw('fljybzsjl');
    }
      
     
  },
   methods: {
    changeOptions(name) {
        let data = JSON.parse(this.lData);
        let arr = []
        data.forEach((item, idx) => {
            arr.push(item[name])
        });

        return arr
    },
    //仪表盘数据
    ybpOptions(value, showName, name) {
         let minx = (Number(value)-2).toFixed(2);
         let maxx = (Number(value)+2).toFixed(2);
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
                    data: [{value: Number(name), name: showName}],
                    axisLine: {             
                     lineStyle: { 
                        color: [[0.01, '#c23531'], [0.99,'#63869e'], [1, '#c23531']],
                        width: 150
                        }  
                    },  
                     title : {               
                        textStyle: {   
                            fontWeight: 'bolder',
                            fontSize: 50,
                            color: '#00ecfc',
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
    ybp(value, name, xj) {
        let _this = this;
        let showName = ''
        if(name == 'sjsrl'){
            let sjsrl = this.$echarts.init(document.getElementById('sjsrl'))
            showName = '实际上浆率';
            sjsrl.setOption(_this.ybpOptions(value, showName, xj), true);
        }
    }, 
    setBaseOptions() {
        let _this = this;
         let seriesData = [];
         let opt = this.optionsdata
         if(Number(_this.type) == 0) {
          seriesData =  [
                { 
                    name: '标准上染率',
                    type: 'bar',
                    barWidth : 150,
                    itemStyle: {
                        color: opt.ql
                    }
                },
                {
                    name: '实际上染率',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 40, 
                    data: _this.changeOptions('mysjsr'),
                    lineStyle: {
                        width: 8,
                        color: opt.qlx
                    }
                }
            ]
        }
        else if(Number(_this.type) == 1) {
            seriesData = [
            { 
                name: '标准上浆率',
                type: 'bar',
                barWidth : 150,
                itemStyle: {
                    color: opt.ql
                }
            },
            {
                name: '上浆率',
                type: 'line',
                smooth: 0.5,
                yAxisIndex: 1,
                symbolSize: 40, 

                data: this.changeOptions('fljysjsjl'),
                lineStyle: {
                    width: 8,
                    color: opt.qlx
                }
            }
        ]
        }
            return seriesData
    },
     setDw() {
        let name = 'OWF %'
        if(Number(this.type) == 0){
            name = 'OWF %'
        }else if(Number(this.type) == 1){
            name = '上浆率'
        }
        return name
    },
     initOptions(seriesData, xData, source) {
         
        let options = {
            dataset: {
               source: source
            },
             grid: {
                left: '1%',
                right: '1%',  //距离右侧边距
                bottom: '1%',
                show:true,
                containLabel: true
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
            xAxis:  {
                    type: 'category',
                    axisPointer: {
                        type: 'shadow'
                    },
                    data: xData,
                    axisLabel: {
                        textStyle: { 
                            fontSize : 30,
                            color: '#00ecfc'   
                            }
                    },
            },
            yAxis: [
                {
                    type: 'value',
                     name: this.setDw(),
                     nameTextStyle: {
                        color: '#00ecfc',
                        fontSize: 40,
                        lineHeight: 50
                    },
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: { 
                            fontSize : 30,
                            color: '#00ecfc'   
                            }
                    }
                },
                {
                    type: 'value',
                   
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: { 
                            fontSize : 30 ,
                            color: 'none'  
                            }
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
                }
            ],
            series: seriesData,
        }
        return options
    },
    draw(str1, str2) {
        let _this = this;
        let setBaseOptions = _this.setBaseOptions();
         let data = JSON.parse(this.lData);
          let xData = [];//横坐标显示数据
          let source = []//柱状图数据
            data.map((item, idx) => {
                let data = []
                 let a = '第'+ Number(idx+1) + '条数据'
                xData.push(a)
                data.push(idx,item[str1], item[str2])
                source.push(data)
            });
            //放大的图 xData横坐标数据
         let myCharts = this.$echarts.init(document.getElementById('list'));
            myCharts.setOption(this.initOptions(setBaseOptions, xData, source));

             myCharts.on('click', function(params) {
                if(_this.type == 0 && params.seriesType == 'line' && params.seriesName == "实际上染率") {
                    _this.ybp(source[params['dataIndex']]['1'], 'sjsrl', params.data);
                    _this.rsylcurrent = data[params.dataIndex];
                }else if(_this.type == 1 && params.seriesType == 'line' && params.seriesName == "上浆率"){
                    _this.ybp(source[params['dataIndex']]['1'], 'sjsrl', params.data);
                    _this.rsylcurrent = data[params.dataIndex];
                }
                
            });
            
    }
  } 
}
</script>

<style lang="less" scoped>
@import '../style/rlback.less';
</style>