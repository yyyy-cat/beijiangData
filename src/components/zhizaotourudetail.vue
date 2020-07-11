<template>
    <div class="charts">
        <!-- <span class="title-name">{{name}}</span>
        <div class="right" @click="toTable"> 查看日历图</div> -->
        <div class="left">    
            <div class="charts-main" >
                <div id='list' :style="{width: w, height: '1600px', zIndex: '10',paddingTop: '78px'}"></div>
            </div>
            <div class="ybp" >
              <!-- v-show='JSON.stringify(this.rsylcurrent) !== "{}"' -->
                <div id="sjsrl" :style="{width: '1400px', height: '1200px',  zIndex: '10',marginLeft: x}"></div>
                  <div id="sjsrl" class="info" :style="{marginLeft: p}">
                    <!-- <div class="data">基本信息</div> -->
                    <table border="1"  class="main">
                        <tr>
                            <td>缸号</td>
                            <th>{{rsylcurrent.gh}}</th>
                        </tr>
                        <tr>
                            <td>品种</td>
                            <td>{{rsylcurrent.pz}}</td>
                        </tr>
                    </table>
                </div>
            </div>
                <!-- v-if="type == '1'" -->
            <div class="ybp" v-show="type == '1'">
                <div id="sjsrl2" :style="{width: '1400px', height: '1200px',  zIndex: '10'}"></div>
             <div class="info" :style="{marginLeft: p}">
                    <!-- <div class="data">基本信息</div> -->
                    <table border="1" class="main">
                        <tr>
                            <td>缸号</td>
                            <th>{{rsylcurrent2.gh}}</th>
                        </tr>
                        <tr>
                            <td>品种</td>
                            <td>{{rsylcurrent2.pz}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
            rsylcurrent2: {}, //第二个实例
            optionsdata: {},
            name: '',
            w: '6049px',
            p: '2000px',
            x: '1200px'
            
        }
    },
    watch: {
        detailList: function(newdata, olddata){
            this.lData = newdata;
               if(Number(this.type) == 0) {
            this.name = '浆染投入产出数据';
            this.draw('sjtrcd', 'jsczzc');
        }
        else if(Number(this.type) == 1) {
                this.name = '织造投入产出数据';
                this.draw('jingzhouchangdu','peibuchangdu');
            }else{
                this.name = '后整投入产出数据'
                this.draw('shoupeichangdu', 'chengpinzongchang');
            }
        }
    },
    created() {
        this.lData = this.$props.detailList
        console.log(this.$props.detailList,"我的数据")
        this.type = this.$props.type;
        this.optionsdata = Varible.OPTIONS;
        if(this.type == '1') {
            this.w = '4750px';
            this.p = '750px';
            this.x = ''
        }
    },
   mounted() {
       this.ybp(0,0, 'sjsrl', 0);
       this.ybp(0,0, 'sjsrl2', 0);
                    
     this.rsylcurrent = [0,1,2];
    if(Number(this.type) == 0) {
            this.name = '浆染投入产出数据';
            this.draw('sjtrcd', 'jsczzc');
        }
   else if(Number(this.type) == 1) {
        this.name = '织造投入产出数据';
        this.draw('jingzhouchangdu','peibuchangdu');
    }else{
        this.name = '后整投入产出数据'
        this.draw('shoupeichangdu', 'chengpinzongchang');
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
    ybpOptions(sj, value, showName) {
         let minx = (Number(value)-2).toFixed(2);
         let maxx = (Number(value)+2).toFixed(2);
            let options = {
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            radius: '100%',
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
                    data: [{value: Number(sj), name: showName}],
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
    ybp(sj,value, name, title) {
        console.log('testing')
        console.log(value)
        let _this = this;
        if(name == 'sjsrl'){
            let sjsrl = this.$echarts.init(document.getElementById('sjsrl'))
            sjsrl.setOption(_this.ybpOptions(sj,value, title), true);
        }else if(name == 'sjsrl2'){
            let sjsrl = this.$echarts.init(document.getElementById('sjsrl2'))
            sjsrl.setOption(_this.ybpOptions(sj, value, title), true);
        }
    }, 
    setBaseOptions() {
        let _this = this;
         let seriesData = [];
         let opt = this.optionsdata
         //             String jingzhouchangdu;经轴长度baimiyongweibiaozhun
// String peibuchangdu;胚布长度zhichenglvbiaozhun
         if(Number(_this.type) == 0) {
          seriesData =  [
                { 
                    name: '整经长度',
                    type: 'bar',
                    barWidth : 100,
                    itemStyle: {
                        color: opt.ql
                    }
                },
                { 
                    name: '出轴长度',
                    barWidth : 100,
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
                name: '经轴长度',
                type: 'bar',
                barWidth : 100,
                itemStyle: {
                    color: opt.ql
                }
            },
             { 
                name: '胚布长度',
                type: 'bar',
                barWidth : 100,
                itemStyle: {
                    color: opt.ls
                }
            },
                                    {
                name: '织成率标准',
                type: 'line',
                smooth: 0.5,
                yAxisIndex: 1,
                symbolSize: 40, 

                data: this.changeOptions('zhichenglvbiaozhun'),
                lineStyle: {
                    width: 8,
                    color: opt.qll
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
                    color: opt.qlxx
                }
            },
                        {
                name: '百米用纬标准',
                type: 'line',
                smooth: 0.5,
                yAxisIndex: 1,
                symbolSize: 40, 

                data: this.changeOptions('baimiyongweibiaozhun'),
                lineStyle: {
                    width: 8,
                    color: opt.qll
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
                    color: opt.qlxx
                }
            }


        ]
        }else{
            seriesData = [
            // { 
            //     name: '标准制成率',
            //     type: 'bar',
            //     barWidth : 100,
            //     itemStyle: {
            //         color: opt.ql
            //     }
            // },
            { 
                name: '收胚长度',
                type: 'bar',
                barWidth : 100,
                itemStyle: {
                    color: opt.ql
                }
            },
             { 
                name: '成品总长',
                type: 'bar',
                barWidth : 100,
                itemStyle: {
                    color: opt.ls
                }
            },

            {
                name: '标准制成率',
                type: 'line',
                smooth: 0.5,
                yAxisIndex: 1,
                symbolSize: 40, 

                data: this.changeOptions('bzzcl'),
                lineStyle: {
                    width: 8,
                    color: opt.qll
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
                    color: opt.qlxx
                }
            }
        ]
        }
            return seriesData
    },
    setDw() {
        let name = '米'
        if(Number(this.type) == 0){
            name = '米'
        }else if(Number(this.type) == 1){
            name = 'KG'
        }else{
            name = ''
        }
        return name
    },
     initOptions(seriesData, xData, source) {
         let opt = this.optionsdata;
        let options = {
            dataset: {
               source: source
            },
             grid: {
                left: '1%',
                right: '0%',  //距离右侧边距
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
                            color: opt.zts     
                            }
                    },
            },
            yAxis: [
                {
                    type: 'value',
                    name: this.setDw(),
                     nameTextStyle: {
                        color: opt.zts,
                        fontSize: 40,
                        lineHeight: 50
                    },
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: { 
                            fontSize : 30,
                            color: opt.zts     
                            }
                    },
                },
                {
                    show : false,
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
          console.log(data,'shuju ')
            data.map((item, idx) => {
                let data = []
                let a = '第'+ Number(idx+1) + '条数据'
                xData.push(a)
                data.push(idx,item[str1], item[str2],item['zhichenglvbiaozhun'],item['baimiyongweibiaozhun'],item['bzzcl'])
                source.push(data)
            });
            //放大的图 xData横坐标数据
         let myCharts = this.$echarts.init(document.getElementById('list'));
            myCharts.setOption(this.initOptions(setBaseOptions, xData, source));
               
             myCharts.on('click', function(params) {
                 let a = params['dataIndex']
                if(_this.type == 0 && params.seriesType == 'line' && params.seriesName == "原纱利用率"){
                    _this.ybp(params.data,params.data, 'sjsrl', params.seriesName);
                    
                    _this.rsylcurrent = data[params.dataIndex];
                }
                if(_this.type == 1 && params.seriesType == 'line' && params.seriesName == "百米用纬"){
                    _this.ybp(params.data,source[a]['4'], 'sjsrl2', params.seriesName);
                    _this.rsylcurrent2 = data[params.dataIndex];
                }else if(_this.type == 1 && params.seriesType == 'line' && params.seriesName == "织成率"){
                    _this.ybp(params.data,source[a]['3'], 'sjsrl', params.seriesName);
                    _this.rsylcurrent = data[params.dataIndex];
                }else if(_this.type == 2 && params.seriesType == 'line' && params.seriesName == "制成率") {
                    console.log(source,"参数数据5555")
                    // _this.ybp(params.data,source[params['dataIndex']]['1'], 'sjsrl', params.seriesName);
                    _this.ybp(params.data,source[a]['5'], 'sjsrl', params.seriesName);
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
