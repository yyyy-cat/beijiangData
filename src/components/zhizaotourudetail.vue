<template>
    <div class="charts">
        <div class="charts-main">
             <div id='list' :style="{width: '3500px', height: '3500px', margin: '0 auto', zIndex: '10'}"></div>
        </div>
        <div class="ybp" >
            <div class="info">
                <div class="data">基本信息</div>
                <table border="1">
                    <tr>
                        <th>缸号</th>
                        <th>{{zclcurrent.gh}}</th>
                    </tr>
                    <tr>
                        <td>品种</td>
                        <td>{{zclcurrent.pz}}</td>
                    </tr>
                </table>
            </div>
             <div id="gauge" :style="{width: '100%', height: '100%', margin: '0 auto', zIndex: '10'}"></div>
        </div>
        <div class="ybp">
            <div class="info">
                <div class="data">基本信息</div>
                <table border="1">
                    <tr>
                        <th>缸号</th>
                        <th>{{bmywcurrent.gh}}</th>
                    </tr>
                    <tr>
                        <td>品种</td>
                        <td>{{bmywcurrent.pz}}</td>
                    </tr>
                </table>
            </div>
             <div id="gauge1" :style="{width: '100%', height: '100%', margin: '0 auto', zIndex: '10'}"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Charts',
    data() {
        return{
            myCharts: null,
            lData: this.$route.params.wdata,
            zclvalue: null,
            bmywvalue: null,
            zclcurrent: {},
            bmywcurrent: {},
        }
    },
    watch: {
        zclvalue: function(nelData, oldData) {
            this.ybp('gauge');
        },
        bmywvalue: function(nelData, oldData) {
            this.ybp('gauge1');
        },
        zclcurrent: function(newData, oldData) {
            this.zclcurrent = newData
        },
        bmywcurrent: function(newData, oldData) {
            this.bmywcurrent = newData
        }
    },
   mounted() {
      this.draw();
     
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
       ybpOptions(valueName, showName, biaozhun) {
            let options = {
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            radius: '75%',
            series: [
                   
                {
                    name: '业务指标',
                    fontSize: 70,
                    type: 'gauge',
                    //  min: biaozhun * -0.95,   
                    //  max: biaozhun * 1.05,
                    min: 0,   
                    max: 100,
                    detail: {
                        formatter: '{value}',
                        textStyle: {
                            fontSize: 70,
                        },
                    },
                    data: [{value: valueName, name: showName}],
                    axisLine: {             
                     lineStyle: {     
                        color: [[0.05, '#c23531'], [valueName, '#63869e'], [1, '#c23531']],
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
    ybp(name) {
        let _this = this;
        let myCharts = this.$echarts.init(document.getElementById(name));
        let valueName = null;
        let showName = ''
        let biaozhun = null;
        if(name == 'gauge'){
            this.ybpOptions().series[0].data[0].value = this.zclvalue;
            valueName = this.zclvalue;
            showName = '织成率';
            biaozhun = _this.zclcurrent.zhichenglvbiaozhun
        }else{
            this.ybpOptions().series[0].data[0].value = this.bmywvalue;
            valueName = this.bmywvalue;
            showName = '百米用纬';
            biaozhun = _this.zclcurrent.baimiyongweibiaozhun
        }
        
        myCharts.setOption(this.ybpOptions(valueName, showName, biaozhun), true);
    }, 
     initOptions() {
        let options = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            xAxis:  {
                    type: 'category',
                
                    axisPointer: {
                        type: 'shadow'
                    },
                    data:[0,4,8,12,14,16,22,24],
                    axisLabel: {
                        textStyle: { 
                            fontSize : 30   
                            }
                    },
            },
            yAxis: [
                {
                    type: 'value',
                    min: 0,
                    max: 100,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: { 
                            fontSize : 30   
                            }
                    },
                    nameTextStyle: {
                        fontSize: 30,
                    },
                },
                {
                    type: 'value',
                    min: 0,
                    max: 100,
                    interval: 50,
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
            series: [
                { 
                    name: '百米用纬标准',
                    type: 'bar',
                    data: this.changeOptions('baimiyongweibiaozhun')
                },
                {
                    name: '制成率标准',
                    type: 'bar',
                    data: this.changeOptions('zhichenglvbiaozhun')
                },
                {
                    name: '织成率',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 40, 

                    data: this.changeOptions('zhichenglv'),
                    lineStyle: {
                        width: 8
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
                        width: 8
                    }
                }
            ],
        }
        return options
    },
    draw() {
        let _this = this;
         let myCharts = this.$echarts.init(document.getElementById('list'));
            myCharts.setOption(this.initOptions());
            myCharts.on('click', function(params) {
                if(params.seriesType == 'line' && params.seriesName == "织成率") {
                    _this.zclvalue = params.data
                    let data = JSON.parse(_this.lData);
                    _this.zclcurrent = data[params.dataIndex]
                }
                if(params.seriesType == 'line' && params.seriesName == "百米用纬") {
                    _this.bmywvalue = params.data
                    let data = JSON.parse(_this.lData);
                    _this.bmywcurrent = data[params.dataIndex]
                    console.log(data[params.dataIndex].baimiyongweibiaozhun,'百米用纬')
                }
            });
    }
  } 
}
</script>

<style lang="less" scoped>
.charts{
    display: flex;
    //  background: url(..\assets\Administration\other_bg.png);
    .charts-main, .ybp{
        width: 3500px;
        height: 3500px;
        position: relative;
    }

    .info{
       position: absolute;
       top: 500px;
       left: 700px;
    }
}
</style>