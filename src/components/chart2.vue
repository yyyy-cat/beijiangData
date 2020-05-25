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
export default {
    name: 'Charts',
    data() {
        return{
            myCharts: null,
            xrData: [],
            zData: [],
            bzzcl: [],
            zcl: [],
            wData: [],
            sjtrcd: [],//整经
            jsczzc: [],//出轴
            syl: []//原纱
        
        }
    },
    watch: {
        xrData: function(nelData, oldData) {
        this.draw();
    }
    },
   mounted() {
      this.UploadFilesGhb();
  },
   methods: {
       toNextPage(id) {
           let arr = []
            this.xrData.forEach((n, idx) => {
                if(n.zjsj.slice(8,10) == id) {
                     arr.push(n.list)
                }
        })
          this.$router.push({
              name: 'charts',
              params: {
                  wdata: JSON.stringify(arr[0])
              }
          })
       },
    UploadFilesGhb() {
        axios.post('http://120.78.186.60:8082/ErpYn/api/getYCLJrTuBiaoData').then(res => {
          this.xrData = res.data.data;
        });
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
                name: '整经长度',
                type: 'bar',
                data: this.sjtrcd
            },
            {
                name: '出轴长度',
                type: 'bar',
                data: this.jsczzc
            },
            {
                name: '原纱利用率',
                type: 'line',
                smooth: 0.5,
                yAxisIndex: 1,
                symbolSize: 10, 

                data: this.syl,
                 lineStyle: {
                     width: 8
                 }
            }
        ],
        }
        return options
    },
    toChangeData(arr) {
        arr.forEach((key, idx) => {
            let brr =[];
            let crr = [];
            let drr = [];
            for(let k in key) {
                brr.push(key[k].sjtrcd);
                crr.push(key[k].jsczzc);
                drr.push(key[k].syl)
            }
            this.sjtrcd = brr
            this.jsczzc = crr
            this.syl = drr
        })
    },
    draw() {
        let _this = this;

        this.xrData.forEach((v, index) => {
            let zjsj = '05-'+v.zjsj.slice(8,10);
            let myCharts = this.$echarts.init(document.getElementById(`step${zjsj}`));
            let arr =[]
            arr.push(v.list)
            this.toChangeData(arr)
            if(v.list.length > 0) {
                myCharts.setOption(this.initOptions());
            }
            
            // myCharts.on('click', function(params) {
            //     console.log(params); 
            //     if(params.seriesType == 'line'){
            //         _this.$router.push('/charts')
            //     }
            // });
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