$(function(){
    var worldMapC1 = document.getElementById('c_map');
    var myChart = echarts.init(worldMapC1);
    var app = {};
    option = null;
    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom',
            data: [
                '已安装设备'
            ],
            textStyle: {
                color: '#ccc'
            }
        },
        visualMap: {
            min: 0,
            max: 2500,
            left: 'right',
            top: 'bottom',
            text: ['高', '低'], 
            calculable: true,
            //		color: ['#26cfe4', '#f2b600', '#ec5845'],
            textStyle: {
                color: '#fff'
            }
        },
        // data:[{"name":"辽宁","value":"50"}，{"name":"山东","value":"20"}，{"name":"江苏","value":"50"}，{"name":"浙江","value":"40"}]
        series: [{
                name: '已安装设备',
                type: 'map',
                aspectScale: 0.75,
                zoom: 1.2,
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: true,
                        textStyle:{color:"#c71585"}
                    },    
                    emphasis: {
                        show: true,
                        textStyle:{color:"#800080"}
                    } 
                },                
                itemStyle: {
                    normal: {
                        borderWidth: .5,
                        borderColor: '#009fe8',
                        areaColor:"#ffffff",
                    },
                    emphasis: {
                        borderWidth: .5,
                        borderColor: '#4b0082',
                        areaColor:"#ffdead",
                    }
                },
                data: function() {
                    var serie = [];
                    for(var i = 0; i < map.length; i++) {
                        var item = {
                            name: map[i].area,
                            value: map[i].cnt
                        };
                        serie.push(item);
                    }
                    return serie;
                }

            }
        ]
    };

    myChart.setOption(option);
    myChart.on('click', function (params) {
        if (params.componentType === 'series') {

        }
    });
});