<template>
    <div class="charts">
        <div class="charts-main">
             <div id='list' :style="{width: '100%', height: '100%', margin: '0 auto', zIndex: '10'}"></div>
        </div>
        <div class="ybp">
             <div id="gauge" :style="{width: '100%', height: '100%', margin: '0 auto', zIndex: '10'}"></div>
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
            lData: this.$route.params.wdata
            // id: this.$route.query.id
        }
    },
   mounted() {
      this.draw();
      this.ybp();
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
    ybp() {
        let options = {
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            radius: '75%',
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {formatter: '{value}%'},
                    data: [{value: 50, name: '完成率'}],
                    axisLine: {            // 坐标轴线  
                     lineStyle: {       // 属性lineStyle控制线条样式  
                        color: [[0.2, '#c23531'], [0.8, '#63869e'], [1, '#c23531']],
                        width: 150
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
                        color: '#ff0'
                    }
                }
            ]
        };
            let myCharts = this.$echarts.init(document.getElementById('gauge'));
            options.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            myCharts.setOption(options, true);
    },
    draw() {
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
    
        legend: {
            data: ['蒸发量', '降水量', '平均温度']
        },
        xAxis: [
            {
                type: 'category',
            
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} ',
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
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} ',
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
                name: '整经长度',
                type: 'bar',
                data: this.changeOptions('sjtrcd')
            },
             {
                name: '出轴长度',
                type: 'bar',
                data: this.changeOptions('jsczzc')
            },
            {
                name: '原纱利用率',
                type: 'line',
                smooth: 0.5,
                yAxisIndex: 1,
                symbolSize: 30, 

                data: this.changeOptions('syl'),
                 lineStyle: {
                     width: 8
                 }
            }
        ],
        }
         let myCharts = this.$echarts.init(document.getElementById('list'));
            myCharts.setOption(options);
            myCharts.on('click', function(params) {
                console.log('14566')
                console.log(params); 
            });
    }
  } 
}
</script>

<style lang="less" scoped>
.charts{
    display: flex;
    height: 100%;
    width: 100%;
    //  background: url(..\assets\Administration\other_bg.png);
    .charts-main, .ybp{
        width: 2500px;
        height: 3500px;
    }
}
</style>