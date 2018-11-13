$(function() {
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },  
        legend: {
            orient: 'horizontal',
            x: 'left',
            data:['在线','离线'],
	        itemWidth: 8,
	        itemHeight: 8,
	        textStyle:{
	            color:'#fff',
	            fontSize:12
	        }
        }, 
        color:['#37a2da','#ffd85c'],  
        series: [
            {
                name:'DTU',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '26',
                            fontWeight: 'bold',
                            color:'#00fcff'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:150, name:'在线'},
                    {value:150, name:'离线'},
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }


    var dom = document.getElementById("container1");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },  
        legend: {
            orient: 'horizontal',
            x: 'left',
            data:['在线','离线'],
	        itemWidth: 8,
	        itemHeight: 8,
	        textStyle:{
	            color:'#fff',
	            fontSize:12
	        }
        }, 
        color:['#37a2da','#ffd85c'],  
        series: [
            {
                name:'PLC',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '26',
                            fontWeight: 'bold',
                            color:'#00fcff'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:10, name:'在线'},
                    {value:10, name:'离线'},
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }


    var dom = document.getElementById("container2");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        legend: {
            x : 'center',
            y : 'bottom',            
	        itemWidth: 8,
	        itemHeight: 8,
	        textStyle:{
	            color:'#fff',
	            fontSize:12
	        },
            data:['上限','上上限','下限','下下限','正跳变','负跳变']
        },        
        calculable : true,
        series : [
            {
                name:'半径模式',
                type:'pie',
                radius : [20, 110],
                center : ['25%', '50%'],
                roseType : 'radius',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },               
            },
            {
                name:'面积模式',
                type:'pie',
                radius : [30, 100],
                center : ['50%', '45%'],
                roseType : 'area',
                data:[
                    {value:25, name:'上限',itemStyle:{normal:{color:'#ff7800'}}},
                    {value:30, name:'上上限',itemStyle:{normal:{color:'#23eb6a'}}},
                    {value:45, name:'下限',itemStyle:{normal:{color:'#7627cb'}}},
                    {value:45, name:'下下限',itemStyle:{normal:{color:'#fffc00'}}},
                    {value:50, name:'正跳变',itemStyle:{normal:{color:'#46afdb'}}},
                    {value:60, name:'负跳变',itemStyle:{normal:{color:'#ff0000'}}}
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

   



    var dom = document.getElementById("container4");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    // Generate data
    var category = [];
    var dottedBase = +new Date();
    var lineData = [];
    var barData = [];

    for (var i = 0; i < 20; i++) {
        var date = new Date(dottedBase += 3600 * 24 * 1000);
        category.push([
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        ].join('-'));
        var b = parseInt(Math.random() * 200);
        var d = parseInt(Math.random() * 200);
        barData.push(b)
        lineData.push(d + b);
    }


// option
    option = {
        backgroundColor: '#0f375f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['报警数', '处理数'],
            textStyle: {
                color: '#ccc'
            }
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            splitLine: {show: false},
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        series: [{
            name: 'line',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            data: lineData
        }, {
            name: '报警数',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#14c8d4'},
                            {offset: 1, color: '#43eec6'}
                        ]
                    )
                }
            },
            data: barData
        }, {
            name: '处理数',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'rgba(20,200,212,0.5)'},
                            {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                            {offset: 1, color: 'rgba(20,200,212,0)'}
                        ]
                    )
                }
            },
            z: -12,
            data: lineData
        }, {
            name: 'dotted',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#0f375f'
                }
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: lineData
        }]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
});