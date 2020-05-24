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
                <div :id="'step' + data.day.split('-').slice(1).join('-')" :style="{width: '900px', height: '800px', margin: '0 auto', zIndex: '10'}" @click="toNextPage('step' + data.day.split('-').slice(1).join('-'))"></div>
              
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
            dayData: this.createMonthDay(),
            xrData: [],
            zData: [],
            bzzcl: [],
            zcl: []
        
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
           //this.$router.push('/charts?id='+ id)
           console.log(this.xrData,"返回的数据")
        //    console.log(this.bzzcl,this.zcl,"生成的数组")
       },
       createMonthDay() {
        let daysOfMonth = [];
        let fullYear = new Date().getFullYear();
        let month = new Date().getMonth() + 1;
        let lastDayOfMonth = new Date(fullYear, month, 0).getDate();
        for (var i = 1; i <= lastDayOfMonth; i++) {
          let a =  i<10 ? '0' + i : i;
           let months =  month<10 ? '0' + month : month
            daysOfMonth.push(months + '-' + a);
        };
        return daysOfMonth;
    },
    UploadFilesGhb() {
        axios.post('http://120.78.186.60:8082/ErpYn/api/getYCLHzTuBiaoData').then(res => {
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
    
        legend: {
            data: ['蒸发量', '降水量', '平均温度']
        },
        xAxis: [
            {
                type: 'category',
            
                axisPointer: {
                    type: 'shadow'
                },
                data:[0,10,20,30,40,50,60,70,80,90,100]
            }
        ],
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 100,
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
                min: 0,
                max: 100,
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
                data: this.bzzcl
            },
            {
                name: '原纱利用率',
                type: 'line',
                smooth: 0.5,
                yAxisIndex: 1,
                symbolSize: 10, 

                data: this.zcl,
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
            for(let k in key) {
                brr.push(key[k].bzzcl);
                crr.push(key[k].sjzcl)
            }
            this.bzzcl = brr
            this.zcl = crr
        })
    },
    draw() {
        let _this = this;
        this.dayData.forEach((v, index) => {
            let myCharts = this.$echarts.init(document.getElementById(`step${v}`));
            let arr =[]
            arr.push(this.xrData[index].list)
            console.log(arr,"我的全部数据")
            this.zData = arr;
            this.toChangeData(arr)
            myCharts.setOption(this.initOptions());
            myCharts.on('click', function(params) {
                console.log(params); 
                if(params.seriesType == 'line'){
                    _this.$router.push('/charts')
                }
            });
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