<template>
    <div class="charts">
        <div class="charts-main">
             <div id='list' :style="{width: '6731px', height: '1000px', margin: '0 auto', zIndex: '10'}"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Charts',
    data() {
        return{
            xrData: [],
        }
    },
    watch: {
        xrData: function(newData,oldData){
            this.draw('zylzlstonwm','zylzqtonwm', 'zyltrqmwm')
        }
    },
   mounted() {
       this.getGCNHJrgcTuBiaoData();
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
                    min: -100,
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
    getGCNHJrgcTuBiaoData() {
        axios.post('http://120.78.186.60:8082/ErpYn/api/getGCNHHzgcTuBiaoData').then((res => {
            let arr =res.data.data
             arr.map((v, idx) => {
                 let name = v.zjsj.slice(8,10)
                v.zjsj = name;
                return arr
              })
            this.xrData = res.data.data
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
    
    draw(str1,str2,str3) {
        let _this = this;
        let nameList = [];
        let source = []
        this.xrData.forEach((v, idx) => {
             let zjsj = v.zjsj;
             
            //  String bzwmzls; //标准万米用量自来水用量String bzwmzq; //标准万米用量蒸汽用量String bzwmtrq; //标准万米用量天然气用量
             v.list.map((k, index) =>{
                 let dayData = []
                 k.name = zjsj + '-' + index
                 nameList.push(k.name)
                //  dayData.push(k.name, k.bzwmzls, k.bzwmzq, k.bzwmtrq)
                dayData.push(k.name, k[str1], k[str2], k[str3])
                source.push(dayData)
                
                // _this.toChangeData(k)
                 return v.list
             })  
        })
        let seriesData = [
                {
                    name: '总用量自来水用量',
                    type: 'bar',
                    itemStyle: {
                        color: '#1e4d7a'
                    }
                },
                {
                    name: '总用量蒸汽用量',
                    type: 'bar',
                    itemStyle: {
                        color: '#9bc4e7'
                    }
                },
                 {
                    name: '总用量天然气用量',
                    type: 'bar',
                    itemStyle: {
                         color: '#9bc4a6'
                    }
                },
                {
                    name: '总用量自来水用量',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: '#1e4d7a',
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
                        color: '#9bc4e7',
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
                        color: '#9bc4a6',
                        width: 8
                    },
                    data: _this.toChangeData('zyltrqmwm', _this.xrData)
                },
            ]
        
        
        let myCharts = this.$echarts.init(document.getElementById('list'));
        myCharts.setOption(_this.initOptions(seriesData, source, nameList));
    }
  } 
}
</script>

<style lang="less" scoped>
.charts{
    display: flex;
    height: 100%;
    width: 100%;
    margin-top: 200px;
    //  background: url(..\assets\Administration\other_bg.png);
    .charts-main{
        width: 2500px;
        height: 3500px;
    }
}
</style>