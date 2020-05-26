<template>
    <div class="charts">
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
export default {
    name: 'Charts',
    data() {
        return{
            xrData: [],
            jrgchn: [],
            zzkthn: [],
            showShaoguan: false,
            updataUrl: yuenanUrl + '/ErpYn',
            type: 0
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
            this.draw('zylzlstonwm','zylzqtonwm', 'zyltrqmwm', this.xrData)
        },
        jrgchn: function(newdata, olddata) {
            this.draw('ystonbz','ysmbz', 'jsmbz', this.jrgchn)
        },
        zzkthn: function(newdata, olddata) {
            this.draw('tonhbz','tonwmbz', '', this.zzkthn)
        }
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
       let _this = this
       if(Number(_this.type) == 0) {
           this.getGCNHJrgcTuBiaoData();
       }else if(Number(_this.type) == 1){
           this.getGCNHZbktTuBiaoData()
       }else{
           this.getGCNHHzgcTuBiaoData();
       }
       //this.getGCNHHzgcTuBiaoData();
      // this.getGCNHJrgcTuBiaoData();
      this.getGCNHZbktTuBiaoData()
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
        //String ystonbz; //染色自来水标准用量String ysmbz; //染色蒸汽标准用量String jsmbz; //浆纱蒸汽标准用量String ystonwm; //染色自来水用量String ysmwm; //染色蒸汽用量String jsmwm; //浆纱蒸汽用量
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
       // String rq;//日期String tonhbz; //自来水每小时用水标准String tonh; //自来水实际每小时用水String tonwmbz; //自来水没万米用水标准String tonwm; //自来水实际没万米用水
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
        if(Number(_this.type) == 0){
            //江染过程耗能
                seriesData = [
                {
                    name: '染色自来水标准用量',
                    type: 'bar',
                    itemStyle: {
                        color: '#1e4d7a'
                    }
                },
                {
                    name: '染色蒸汽标准用量',
                    type: 'bar',
                    itemStyle: {
                        color: '#9bc4e7'
                    }
                },
                 {
                    name: '浆纱蒸汽标准用量',
                    type: 'bar',
                    itemStyle: {
                         color: '#9bc4a6'
                    }
                },
                {
                    name: '染色自来水用量',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: '#1e4d7a',
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
                        color: '#9bc4e7',
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
                        color: '#9bc4a6',
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
                        color: '#1e4d7a'
                    }
                },
                {
                    name: '自来水每万米用水标准',
                    type: 'bar',
                    itemStyle: {
                        color: '#9bc4e7'
                    }
                },
                {
                    name: '自来水实际每小时用水',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 20, 
                    lineStyle: {
                        color: '#1e4d7a',
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
                        color: '#9bc4e7',
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