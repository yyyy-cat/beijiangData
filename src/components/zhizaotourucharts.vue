<template>
    <div class="charts">
        <div class="charts-main">
        </div>
        <el-calendar>
            <template
            slot="dateCell"
            class="name"
            slot-scope="{date, data}">
             <div class="calendar-day">{{ data.day.split('-').slice(1).join('-') }}</div>
                <div :id="'step' + data.day.split('-').slice(1).join('-')" :style="{width: '800px', height: '700px', margin: '0 auto', zIndex: '10'}" @click="toNextPage(data.day.split('-').slice(2).join('-'))"></div>
              
        </template>
        </el-calendar>
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
            xrData: [],
            wData: [],//传入下一个页面的数据
            jrtrcc: [],
            type: null,//上个页面判断渲染哪个图表的值
            hztrcc: []
        
        }
    },
    computed: {
      ...mapGetters([
        'changeShaoguan'
        ])
    },
    watch: {
        xrData: function(nelData, oldData) {
            this.draw(this.xrData);
        },
        jrtrcc: function(nelData, oldData) {
            this.draw(this.jrtrcc);
        },
        hztrcc: function(nelData, oldData) {
            this.draw(this.hztrcc);
        },
     showShaoguan: function(newdata,olddata){

      if(newdata != 'false'){
        this.updataUrl = shaoguanUrl + '/ErpSg'
      }else{
        this.updataUrl = yuenanUrl+'/ErpYn'
      }
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
       
       if(Number(this.type) == 0) {
           this.getYCLJrTuBiaoData()
       }else if(Number(this.type) == 1){
           this.getYCLZbTuBiaoData();
       }else{
           this.getYCLHzTuBiaoData();
       }
  },
   methods: {
       toNextPage(id) {
           let _this = this
           let arr = []
           let data = null;
           if(Number(_this.type) == 0){
               data = _this.jrtrcc
           }else if(Number(_this.type) == 1){
               data = this.xrData
           }else{
               data = this.hztrcc
           }
            data.forEach((n, idx) => {
                if(n.zjsj.slice(8,10) == id) {
                     arr.push(n.list)
                }
        })
          this.$router.push({
              name: 'zhizaotourudetail',
              params: {
                  wdata: JSON.stringify(arr[0]),
                  type: _this.type
              }
          })
       },
    getYCLZbTuBiaoData() {
        axios.post(this.updataUrl+'/api/getYCLZbTuBiaoData').then(res => {
            //原材料数据织造投入产出
          this.xrData = res.data.data;
        });
    },
     getYCLJrTuBiaoData() {
        axios.post(this.updataUrl+'/api/getYCLJrTuBiaoData').then(res => {
            //原材料浆染投入产出
          this.jrtrcc = res.data.data;
        });
    },
    getYCLHzTuBiaoData() {
        axios.post(this.updataUrl+'/api/getYCLHzTuBiaoData').then(res => {
            //原材料后整投入产出数据
          this.hztrcc = res.data.data;
        });
    },
    setBaseOptions() {
        let _this = this;
        let seriesData = [];
        if(Number(_this.type) == 0){
            //原材料浆染投入产出
            seriesData =  [
                { 
                    name: '整经长度',
                    type: 'bar',
                    itemStyle: {
                        color: '#1e4d7a'
                    },
                    data: _this.toSetData('sjtrcd', _this.jrtrcc)
                },
                {
                    name: '出轴长度',
                    type: 'bar',
                    itemStyle: {
                        color: '#9bc4e7'
                    },
                    data: _this.toSetData('jsczzc', _this.jrtrcc)
                },
                {
                    name: '原纱利用率',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 10, 
                    data: _this.toSetData('syl', _this.jrtrcc),
                    lineStyle: {
                        width: 8,
                        color: '#1e4d7a'
                    }
                }
            ]
        }else if(_this.type == 1) {
            seriesData =  [
                { 
                    name: '百米用纬标准',
                    type: 'bar',
                    itemStyle: {
                        color: '#1e4d7a'
                    },
                    data: _this.toSetData('baimiyongweibiaozhun', _this.xrData)
                },
                {
                    name: '织成率标准',
                    type: 'bar',
                    itemStyle: {
                        color: '#9bc4e7'
                    },
                    data: _this.toSetData('zhichenglvbiaozhun', _this.xrData)
                },
                {
                    name: '织成率',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 10, 
                    data: _this.toSetData('zhichenglv', _this.xrData),
                    lineStyle: {
                        width: 8,
                        color: '#1e4d7a'
                    }
                },
                {
                    name: '百米用纬',
                    type: 'line',
                    smooth: 0.5,
                    yAxisIndex: 1,
                    symbolSize: 10, 

                    data: _this.toSetData('baimiyongwei', _this.xrData),
                    lineStyle: {
                        width: 8,
                        color: '#9bc4e7'
                    }
                }
            ]
        }else{
          seriesData =  [
            { 
                name: '标准制成率',
                type: 'bar',
                itemStyle: {
                    color: '#1e4d7a'
                },
                data: _this.toSetData('bzzcl', _this.hztrcc)
            },
            {
                name: '制成率',
                type: 'line',
                smooth: 0.5,
                yAxisIndex: 1,
                symbolSize: 10, 
                data: _this.toSetData('sjzcl', _this.hztrcc),
                lineStyle: {
                    width: 8,
                    color: '#1e4d7a'
                }
            }
         ]
        }
            return seriesData
    },
    initOptions(setBaseOptions, source) {
        let _this = this;
        let options = {
            xAxis:  {
                    type: 'category',
                    axisPointer: {
                        type: 'shadow'
                    },
                    data: source,
                    axisLabel: {
                        textStyle: { 
                            fontSize : 30   
                            }
                    },
            },
            yAxis: [
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
                    end: 10,
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
            series: setBaseOptions,
        }
        return options
    },
    toSetData(name, data) {
        let _this = this;
        let day = [];
        data.forEach((v, idx) => {
            v.list.map((k, index) => {
                day.push(k[name])
            })
        })
        return day
    },
    draw(data) {
        let _this = this;
        let setBaseOptions = _this.setBaseOptions()
        data.forEach((v, index) => {
            let source = []
            let zjsj = '05-'+v.zjsj.slice(8,10);
            v.list.map((k, idx) => {
                let name = v.zjsj.slice(8,10)+ '-' + idx
                source.push(name)
            })
            let myCharts = this.$echarts.init(document.getElementById(`step${zjsj}`));
            if(v.list.length > 0) {
                myCharts.setOption(this.initOptions(setBaseOptions,source));
            }
        }) 
    }
  } 
}
</script>

<style lang="less" scoped>
.charts{
    //  background: url(..\assets\Administration\other_bg.png);
    .charts-main{
        padding-left: 500px ;
    }
}

/deep/.el-calendar{
    width: 8200px;
}

 /deep/.el-calendar-day{
    height: 800px !important;
}
</style>