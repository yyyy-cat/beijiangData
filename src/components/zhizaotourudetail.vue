<template>
    <div class="charts">
        <span class="title-name">{{name}}</span>
        <div class="right" @click="toTable"> 查看日历图</div>
        <div class="left">
            <div class="charts-main">
                <div id='list' :style="{width: '3500px', height: '3500px', margin: '0 auto', zIndex: '10'}"></div>
            </div>
            <div class="ybp" v-show='JSON.stringify(this.rsylcurrent) !== "{}"'>
                <div class="info">
                    <div class="data">基本信息</div>
                    <table border="1">
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
                <div id="sjsrl" :style="{width: '3500px', height: '3500px', margin: '0 auto', zIndex: '10'}"></div>
            </div>

            <div class="ybp" v-show='JSON.stringify(this.rsylcurrent2) !== "{}"'>
                <div class="info">
                    <div class="data">基本信息</div>
                    <table border="1">
                        <tr>
                            <th>缸号</th>
                            <th>{{rsylcurrent2.gh}}</th>
                        </tr>
                        <tr>
                            <td>品种</td>
                            <td>{{rsylcurrent2.pz}}</td>
                        </tr>
                    </table>
                </div>
                <div id="sjsrl2" :style="{width: '3500px', height: '3500px', margin: '0 auto', zIndex: '10'}"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Varible from '../utils/varible'
export default {
    name: 'Charts',
    data() {
        return{
            lData: this.$route.params.wdata,
            type: null,
            rsylcurrent: {}, //染色用料的当前数据
            rsylcurrent2: {}, //第二个实例
            optionsdata: {},
            name: ''
        }
    },
    watch: {
    },
    created() {
        this.type = this.$route.params.type;
        this.optionsdata = Varible.OPTIONS;
    },
   mounted() {
    if(Number(this.type) == 0) {
            this.name = '浆染投入产出数据';
            this.draw('sjtrcd', 'jsczzc');
        }
   else if(Number(this.type) == 1) {
        this.name = '织造投入产出数据';
        this.draw('baimiyongweibiaozhun','zhichenglvbiaozhun');
    }else{
        this.name = '后整投入产出数据'
        this.draw('bzzcl');
    }
      
     
  },
   methods: {
    toTable() {
        this.$router.go(-1);
    },
    changeOptions(name) {
        let data = JSON.parse(this.lData);
        let arr = []
        data.forEach((item, idx) => {
            arr.push(item[name])
        });

        return arr
    },
    //仪表盘数据
    ybpOptions(value, showName) {
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
                    data: [{value: Number(value), name: showName}],
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
    ybp(value, name, title) {
        let _this = this;
        if(name == 'sjsrl'){
            let sjsrl = this.$echarts.init(document.getElementById('sjsrl'))
            sjsrl.setOption(_this.ybpOptions(value, title), true);
        }else if(name == 'sjsrl2'){
            let sjsrl = this.$echarts.init(document.getElementById('sjsrl2'))
            sjsrl.setOption(_this.ybpOptions(value, title), true);
        }
    }, 
    setBaseOptions() {
        let _this = this;
         let seriesData = [];
         let opt = this.optionsdata
         if(Number(_this.type) == 0) {
          seriesData =  [
                { 
                    name: '整经长度',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ql
                    }
                },
                { 
                    name: '出轴长度',
                    type: 'bar',
                    itemStyle: {
                        color: opt.ls
                    }
                },
                {
                    name: '原纱利用率',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 40, 
                    data: _this.changeOptions('syl'),
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
                name: '百米用纬标准',
                type: 'bar',
                itemStyle: {
                    color: opt.ql
                }
            },
             { 
                name: '织成率标准',
                type: 'bar',
                itemStyle: {
                    color: opt.ls
                }
            },
            {
                name: '织成率',
                type: 'line',
                smooth: 0.5,
                yAxisIndex: 1,
                symbolSize: 40, 

                data: this.changeOptions('zhichenglv'),
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
                symbolSize: 40, 

                data: this.changeOptions('baimiyongwei'),
                lineStyle: {
                    width: 8,
                    color: opt.qlx
                }
            }
        ]
        }else{
            seriesData = [
            { 
                name: '标准制成率',
                type: 'bar',
                itemStyle: {
                    color: opt.ql
                }
            },
            {
                name: '制成率',
                type: 'line',
                smooth: 0.5,
                yAxisIndex: 1,
                symbolSize: 40, 

                data: this.changeOptions('sjzcl'),
                lineStyle: {
                    width: 8,
                    color: opt.qlx
                }
            }
        ]
        }
            return seriesData
    },
     initOptions(seriesData, xData, source) {
         let opt = this.optionsdata;
        let options = {
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
                }
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
                xData.push(idx)
                data.push(idx,item[str1], item[str2])
                source.push(data)
            });
            //放大的图 xData横坐标数据
         let myCharts = this.$echarts.init(document.getElementById('list'));
            myCharts.setOption(this.initOptions(setBaseOptions, xData, source));

             myCharts.on('click', function(params) {
                if(_this.type == 0 && params.seriesType == 'line' && params.seriesName == "原纱利用率"){
                    _this.ybp(params.data, 'sjsrl', params.seriesName);
                    _this.rsylcurrent = data[params.dataIndex];
                }
                if(_this.type == 1 && params.seriesType == 'line' && params.seriesName == "百米用纬"){
                    _this.ybp(params.data, 'sjsrl2', params.seriesName);
                    _this.rsylcurrent2 = data[params.dataIndex];
                }else if(_this.type == 1 && params.seriesType == 'line' && params.seriesName == "织成率"){
                    _this.ybp(params.data, 'sjsrl', params.seriesName);
                    _this.rsylcurrent = data[params.dataIndex];
                }else if(_this.type == 2 && params.seriesType == 'line' && params.seriesName == "制成率") {
                    _this.ybp(params.data, 'sjsrl', params.seriesName);
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