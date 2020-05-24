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
            // id: this.$route.query.id
        }
    },
   mounted() {
    //    console.log( this.$route.query,"这是一个生死攸关")
      this.draw();
      this.ybp();
       this.UploadFilesGhb();
  },
   methods: {
    UploadFilesGhb() {
        axios.post('http://120.78.186.60:8082/ErpYn/api/getYCLHzTuBiaoData').then(res => {
          console.log("res", res.data);
        });
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
                        color: [[0.2, '#c23531'], [0.8, '#63869e'], [1, '#c23531']]
                            }  
                        },  
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
                name: '水量',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} ml',
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
                name: '水量',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} ml',
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
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name: '出轴长度',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name: '原纱利用率',
                type: 'line',
                smooth: 0.5,
                yAxisIndex: 1,
                symbolSize: 30, 

                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
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

    //  background: url(..\assets\Administration\other_bg.png);
    .charts-main, .ybp{
        width: 2500px;
        height: 2500px;
        background: pink;
    }
}
</style>