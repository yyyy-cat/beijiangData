<template>
    <div class="charts">
        <div class="charts-main">
            <div id="list" :style="{width: '3500px', height: '3000px'}"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Charts',
    data() {
        return{
        cellSize:[500, 500],
        pieRadius:30,
        mydata:[
            [10, 2, 0, 12],
            [0, 1, 0, 23],
            [0, 2, 0, 22],
            [0, 2, 1.5, 20.5],
            [0, 3, 1.5, 19.5],
            [10, 1, 1.5, 11.5],
            [0, 2, 1.5, 20.5],
            [10, 2, 0, 12],
            [0, 1, 0, 23],
            [0, 4, 0, 20],
            [0, 2, 1.5, 20.5],
            [0, 1, 1.5, 21.5],
            [9, 2, 1.5, 11.5],
            [0, 5, 1.5, 17.5],
            [10, 1, 0, 13],
            [0, 5, 0, 19],
            [0, 1, 0, 23],
            [0, 1, 1.5, 21.5],
            [0, 5, 1.5, 17.5],
            [9, 2, 1.5, 11.5],
            [0, 1, 1.5, 21.5],
            [9, 1, 0, 14],
            [0, 1, 0, 23],
            [0, 3, 0, 21],
            [0, 1, 1.5, 21.5],
            [0, 4, 1.5, 18.5],
            [10, 2, 1.5, 10.5],
            [0, 4, 1.5, 18.5],
            [10, 1, 0, 11],
            [0, 4, 0, 20],
            [0, 12, 0, 12]
        ],
        }
    },
   mounted() {
    this.handleCharts();
    // var scatterData = this.getVirtulData();
    // this.getVirtulData();
  },
   methods: {
    getVirtulData() {
        var date = +this.$echarts.number.parseDate('2017-02-01');
        var end = +this.$echarts.number.parseDate('2017-03-01');
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time < end; time += dayTime) {
            data.push([
                this.$echarts.format.formatTime('yyyy-MM-dd', time),
                Math.floor(Math.random() * 10000)
            ]);
        }
        return data;
    },
    getPieSeries(scatterData, chart) {
        var _this = this
        return this.$echarts.util.map(scatterData, function (item, index) {
            var center = chart.convertToPixel('calendar', item);
            return {
                id: index + 'pie',
                type: 'pie',
                center: center,
                label: {
                    normal: {
                        formatter: '{c}',
                        position: 'inside'
                    }
                },
                radius: _this.pieRadius,
                data: [
                    {name: '工作', value: Math.round(Math.random() * 24)},
                    {name: '娱乐', value: Math.round(Math.random() * 24)},
                    {name: '睡觉', value: Math.round(Math.random() * 24)}
                ]
            };
        });
    },
    getPieSeriesUpdate(scatterData, chart) {
        return this.$echarts.util.map(scatterData, function (item, index) {
            var center = chart.convertToPixel('calendar', item);
            return {
                id: index + 'pie',
                center: center
            };
        });
    },
    handleCharts() {
    //   var scatterData = this.getVirtulData();
      var _this = this
      var myChart = this.$echarts.init(document.getElementById("list"));
      var scatterData = this.getVirtulData();
      let option = {
        tooltip : {},
        legend: {
            data: ['工作', '娱乐', '睡觉'],
            bottom: 20
        },
        calendar: {
            // width: '3000px',
            top: 'middle',
            left: 'center', 
            orient: 'vertical', //设置坐标的方向，既可以横着也可以竖着
            cellSize: _this.cellSize, //设置日历格大小
            yearLabel: { 
                show: false,
                textStyle: {
                    fontSize: 30
                }
            },
            dayLabel: {
                margin: 20,
                fontSize: 50,
                firstDay: 1,
                nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
                show: true
            },
            monthLabel: {
                show: false
            },
            range: ['2017-02']
        },
        series: [{
            id: 'label',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        return _this.$echarts.format.formatTime('dd', params.value[0]);
                    },
                    offset: [-_this.cellSize[0] / 2 + 10, -_this.cellSize[1] / 2 + 10],
                    textStyle: {
                        color: '#000',
                        fontSize: 14
                    }
                }
            },
            data: scatterData
        }]
    };
    if (!myChart.inNode) {
        var _this = this;
        var pieInitialized;
        setTimeout(function () {
            pieInitialized = true;
            myChart.setOption({
                series: _this.getPieSeries(scatterData, myChart)
            });
        }, 10);
 
        myChart.onresize = function () {
            if (pieInitialized) {
                myChart.setOption({
                    series: _this.getPieSeriesUpdate(scatterData, myChart)
                });
            }
        };
 
    };
     myChart.setOption(option)
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
    #list{
        margin-top: 300px;
    }
}
</style>