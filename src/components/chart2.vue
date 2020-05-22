<template>
    <div class="charts">
        <div class="charts-main">
            <!-- <div id="list" :style="{width: '300px', height: '300px'}"></div> -->
        </div>
        <el-calendar>
            <template
            slot="dateCell"
            class="name"
            slot-scope="{date, data}">
             <div class="calendar-day" >{{ data.day.split('-').slice(2).join('-') }}

                  <div id="list" :style="{width: '300px', height: '300px'}"></div>
             </div>
                
        </template>
        </el-calendar>
    </div>
</template>

<script>
export default {
    name: 'Charts',
    data() {
        return{
            myCharts: null
        
        }
    },
   mounted() {
       this.myCharts = this.$echarts.init(
        document.getElementById("list")
      );
      this.draw();
  },
   methods: {
    draw() {
        this.myCharts.setOption({
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
            yAxisIndex: 1,
            showSymbol: true,
            symbol: 'circle', 
            symbolSize: 50, 
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ],
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
    .el-calendar-table .el-calendar-day{
    height: 500px !important;
}
}

 /deep/.el-calendar-day{
    height: 500px !important;
    background: pink;
}

</style>