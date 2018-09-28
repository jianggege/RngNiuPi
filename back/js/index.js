$(function(){
    var echarts_1 = echarts.init(document.querySelector('.echarts_1'));
    var echarts_2 = echarts.init(document.querySelector('.echarts_2'));
        // 指定图表的配置项和数据
        var option1 = {
            title: {
                text: '2017年 注册人数',
                textStyle: {
                    color: "red",
                    //fontSize: 30  // 配置大小
                  }
            },
            tooltip: {},
            legend: {
                data:['人数']
            },
            xAxis: {
                data: ["1月","2月","3月","4月","5月","6月"]
            },
            yAxis: { },
            series: [{
                name: '人数',
                type: 'bar',
                data: [1000, 1500, 2500, 1300, 1900, 1400]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        echarts_1.setOption(option1);
        option2 = {
            title : {
                text: '热门品牌销售',
                subtext: '2017年6月',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['涂毒之匕','神圣之剑','弑君','血吼','霜之哀伤']
            },
            series : [
                {
                    name: '品牌销量',
                    type: 'pie',
                    radius : '50%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'涂毒之匕'},
                        {value:310, name:'神圣之剑'},
                        {value:234, name:'弑君'},
                        {value:135, name:'血吼'},
                        {value:1548, name:'霜之哀伤'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 50,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        echarts_2.setOption(option2);
})