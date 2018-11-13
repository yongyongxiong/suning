<template>
  <header>
    物联网平台数据统计
    <span id=localtime style=" font-size:14px; position: absolute; right: 30px; top:-20px; ">

        </span>
  </header>
  <div id="content">
    <div class="content_left">
      <div class="dtuplc">
        <div class="dtu">
          <div id="container" style="height: 100%;" ></div>
        </div>
        <div class="plc">
          <div id="container1" style="height: 100%"></div>
        </div>
      </div>
      <!--
          DTU和PLC完x
      -->
      <div class="online">
        <div class="title"><img src="../../static/images/icon01.png" /> 设备在线情况</div>
        <div class="online_con" id="container2">

        </div>
      </div>
      <div class="industry">
        <div class="title"><img src="../../static/images/icon02.png" /> 接入工厂类型</div>
        <div class="industry_con" id="container3"></div>
      </div>
    </div>
    <div class="content_center">
      <div class="center_top">
        <div class="title"><img src="../../static/images/icon03.png" /> 平台数据分布</div>
        <div class="center_top_con" id="c_map">
        </div>
      </div>
      <div class="center_bot">
        <table class="panel-table"bordercolor="#0d48e0" border="1">
          <thead bgcolor="#0e4ae0" align="center" >
          <tr height="40">
            <th colspan="6"><img src="../../static/images/icon04.png" /> 监控列表</th>
          </tr>
          </thead>
          <tbody>
          <tr align="center" class="aaa">
            <td style="color: rgb(0, 252, 255); font-size: 18px; padding: 5px 0px;">
              单位名
            </td>
            <td style="color: rgb(0, 252, 255); font-size: 18px; padding: 5px 0px;">网关数
            </td>
            <td style="color: rgb(0, 252, 255); font-size: 18px; padding: 5px 0px;">设备数
            </td>
            <td style="color: rgb(0, 252, 255); font-size: 18px; padding: 5px 0px;">数据点
            </td>
            <td style="color: rgb(0, 252, 255); font-size: 18px; padding: 5px 0px;">报警
            </td>
            <td style="color: rgb(0, 252, 255); font-size: 18px; padding: 5px 0px;">操作
            </td>
          </tr>
          <tr align="center" class="aaa" style="font-size: 16px;">
            <td>宝钢</td>
            <td>200</td>
            <td>400</td>
            <td>5000</td>
            <td>无</td>
            <td width="250">
              <button class="b1 click_pop">报警记录</button>
              <button class="b2 click_pop2">历史数据</button>
              <button class="b3 click_pop3">组态应用</button>
            </td>
          </tr>
          <tr align="center" class="aaa" style="font-size: 16px;">
            <td>造纸厂</td>
            <td>3000</td>
            <td>2000</td>
            <td>1000</td>
            <td>无</td>
            <td width="250">
              <button class="b1 click_pop">报警记录</button>
              <button class="b2 click_pop2">历史数据</button>
              <button class="b3 click_pop3">组态应用</button>
            </td>
          </tr>
          <tr align="center" class="aaa" style="font-size: 16px;">
            <td>锅炉厂</td>
            <td>1500</td>
            <td>1000</td>
            <td>500</td>
            <td>无</td>
            <td width="250">
              <button class="b1 click_pop">报警记录</button>
              <button class="b2 click_pop2">历史数据</button>
              <button class="b3 click_pop3">组态应用</button>
            </td>
          </tr>
          <tr align="center" class="aaa" style="font-size: 16px;">
            <td>锅炉二厂</td>
            <td>1500</td>
            <td>300</td>
            <td>1200</td>
            <td>温度上限报警&gt;120</td>
            <td width="250">
              <button class="b1 click_pop">报警记录</button>
              <button class="b2 click_pop2">历史数据</button>
              <button class="b3 click_pop3">组态应用</button>
            </td>
          </tr>
          <tr align="center" class="aaa" style="font-size: 16px;">
            <td>锅炉三厂</td>
            <td>1000</td>
            <td>800</td>
            <td>200</td>
            <td>无</td>
            <td width="250">
              <button class="b1 click_pop">报警记录</button>
              <button class="b2 click_pop2">历史数据</button>
              <button class="b3 click_pop3">组态应用</button>
            </td>
          </tr>
          <tr align="center" class="aaa" style="font-size: 16px;">
            <td>锅炉三厂</td>
            <td>1000</td>
            <td>800</td>
            <td>200</td>
            <td>无</td>
            <td width="250">
              <button class="b1 click_pop">报警记录</button>
              <button class="b2 click_pop2">历史数据</button>
              <button class="b3 click_pop3">组态应用</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="content_right">
      <div class="report">
        <div class="report1">
          <p>告警信息</p>
          <span>10条</span>
        </div>
        <div class="report2">
          <p>故障信息</p>
          <span>10条</span>
        </div>
      </div>
      <div class="news_report">
        <div class="title">
          <img src="../../static/images/icon05.png" />
          报警记录
        </div>
        <div class="news_list">
          <ul>
            <li class="li02">
              2017年5月4日市A区12#机器气压过高报警
            </li>
            <li class="li02">
              上海市A区12#机器气压过高报警
            </li>
            <li class="li02">
              江苏省12#机器气压过高报警
            </li>
          </ul>
        </div>
      </div>
      <div class="data_box">
        <div class="title"><img src="../../static/images/icon06.png" /> 数据记录</div>
        <div class="data_con" id="container4">
        </div>
      </div>
    </div>
  </div>
  <!--遮罩层-->
  <div class="bgPop"></div>
  <!--弹出框-->
  <div class="pop">
    <div class="pop-top">
      报警记录
      <span class="pop-close">Ｘ</span>
    </div>
    <div class="pop-content">
      <table class="panel-table" bordercolor="#deefff" border="1">
        <thead bgcolor="#971212" align="center" >
        <tr height="38">
          <th>字段</th>
          <th>字段</th>
          <th>字段</th>
          <th>字段</th>
          <th>字段</th>
        </tr>
        </thead>
        <tbody>
        <tr class="aaa" style="font-size: 16px;" align="center" >
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr class="aaa" style="font-size: 16px;" align="center" >
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr class="aaa" style="font-size: 16px;" align="center" >
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>

        <tr class="aaa" style="font-size: 16px;" align="center" >
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="pop-foot">
      <input type="button" value="确定" class="pop-cancel pop-close">
    </div>
  </div>
  <!--遮罩层-->
  <div class="bgPop2"></div>
  <!--弹出框-->
  <div class="pop2">
    <div class="pop-top">
      历史记录
      <span class="pop-close">Ｘ</span>
    </div>
    <div class="pop-content">
      <table class="panel-table" bordercolor="#deefff" border="1">
        <thead bgcolor="#10aaa5" align="center" >
        <tr height="38">
          <th>字段</th>
          <th>字段</th>
          <th>字段</th>
          <th>字段</th>
          <th>字段</th>
        </tr>
        </thead>
        <tbody>
        <tr class="aaa" style="font-size: 16px;" align="center" >
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr class="aaa" style="font-size: 16px;" align="center" >
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr class="aaa" style="font-size: 16px;" align="center" >
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>

        <tr class="aaa" style="font-size: 16px;" align="center" >
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="pop-foot">
      <input type="button" value="确定" class="pop-cancel pop-close">
    </div>
  </div>
  <!--遮罩层-->
  <div class="bgPop3"></div>
  <!--弹出框-->
  <div class="pop3">
    <div class="pop-top">
      组态应用
      <span class="pop-close">Ｘ</span>
    </div>
    <div class="pop-content">
      组态应用
    </div>
    <div class="pop-foot">
      <input type="button" value="确定" class="pop-cancel pop-close">
    </div>
  </div>
</template>
<script>
  import echarts from '../../static/js/echarts.js'
  import datac1 from '../../static/js/datac1.js'
  import china from '../../static/js/china.js'
  import industry from '../../static/js/industry.js'
  import map from '../../static/js/map.js'
  export default {
    name: "roleList",

    mounted(){

      $(document).ready(function () {
        $('.pop-close').click(function () {
          $('.bgPop,.pop').hide();
        });
        $('.click_pop').click(function () {
          $('.bgPop,.pop').show();
        });
      })
      $(document).ready(function () {
        $('.pop-close').click(function () {
          $('.bgPop2,.pop2').hide();
        });
        $('.click_pop2').click(function () {
          $('.bgPop2,.pop2').show();
        });
      })
      $(document).ready(function () {
        $('.pop-close').click(function () {
          $('.bgPop3,.pop3').hide();
        });
        $('.click_pop3').click(function () {
          $('.bgPop3,.pop3').show();
        });
      })

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .clearfix:before, .clearfix:after {
    content: "";
    display: table;
  }

  .clearfix:after {
    clear: both;
    overflow: hidden;
  }

  .clearfix {
    *zoom: 1;
  }
  header{
    width:100%;
    height: 90px;
    background: url(../../static/images/bg_top.png) center no-repeat ;
    text-align: center;
    font-size: 36px;
    color: #00f6ff;
    line-height: 90px;
    margin: 0 auto;
  }
  #content{
    width: 100%;
    height: 100%;
    margin: 20px auto 0 auto;
  }
  #content .content_left{
    width: 385px;
    height: 100%;
    float: left;
  }
  .content_left .dtuplc{
    width: 355px;
    height: 180px;
    padding: 15px 15px 0 15px;
    background: url(../../static/images/zuoyi.png) top no-repeat;
  }
  .dtu{
    width: 177px;
    height: 180px;
    float: left;
    overflow: hidden;
  }
  .plc{
    width: 177px;
    height: 180px;
    float: left;
  }



  .content_left .online{
    width: 385px;
    height: 330px;
    float: left;
    background: url(../../static/images/zuo2.png) no-repeat;
  }
  .content_left .title{
    width: 385px;
    height: 70px;
    float: left;
    color: #00f6ff;
    font-size: 20px;
    line-height: 70px;
    background:url(../../static/images/bottom_line.png) bottom no-repeat;
    text-align: center;
  }
  .content_left .title img{
    vertical-align: middle;
  }
  .online .online_con{
    width: 365px;
    height: 240px;
    padding: 10px;
    float: left;
  }
  .content_left .industry{
    width: 385px;
    height: 425px;
    float: left;
    background: url(../../static/images/hangye.png) no-repeat;
    margin-top: 20px;
  }
  .industry .industry_con{
    width: 365px;
    height: 335px;
    padding: 10px;
    float: left;
  }
  #content .content_center{
    width: 1050px;
    height: 100%;
    float: left;
    margin-left: 20px;
  }
  .content_center .center_top{
    width: 1050px;
    height: 650px;
    float: left;
    background: url(../../static/images/center01.png) no-repeat;
  }
  .content_center .title{
    width: 1050px;
    height: 70px;
    float: left;
    color: #00f6ff;
    font-size: 20px;
    line-height: 70px;
    background:url(../../static/images/bottom_line.png) bottom center no-repeat;
    text-align: center;
  }
  .content_center .title img{
    vertical-align: middle;
  }
  .content_center .center_top_con{
    height: 550px;
    width: 1000px;
    padding: 10px;
    float: left;
  }
  .panel-table {
    text-align: left;
    color: #ccc;
    margin: 0 auto !important;
    width: 96%;
    margin-top: 20px !important;
    padding: 0.5rem 0 !important;
    font-size: 1.2rem;
  }
  .content_center .center_bot{
    width: 990px;
    height: 280px;
    float: left;
    background: url(../../static/images/center02.png) no-repeat;
    margin-top: 20px;
    padding: 10px 30px;
  }
  tr.aaa:hover{
    background: #1d3152;
    cursor: pointer;
  }
  .b1{
    width: 70px;
    height: 25px;
    background: #FF0000;
    cursor: pointer;
    color: #FFFFFF;
    border: none;
    border-radius:3px ;
  }
  .b2{
    width: 70px;
    height: 25px;
    background: #2897c4;
    cursor: pointer;
    color: #FFFFFF;
    border: none;
    border-radius:3px ;
  }
  .b3{
    width: 70px;
    height: 25px;
    background: #36791a;
    cursor: pointer;
    color: #FFFFFF;
    border: none;
    border-radius:3px ;
  }
  #content .content_right{
    width: 385px;
    height: 100%;
    float: right;
  }
  .content_right .report{
    width: 325px;
    height: 145px;
    line-height: 20px;
    float: left;
    background:url(../../static/images/zuoyi.png) top no-repeat;
    padding: 35px 30px 0 30px;
  }
  .report1{
    width: 134px;
    height: 110px;
    background: url(../../static/images/report01.png) center no-repeat;
    float: left;
    text-align: center;
    padding-top: 24px;
  }
  .report2{
    width: 134px;
    height: 110px;
    background: url(../../static/images/report02.png) center no-repeat;
    float: right;
    text-align: center;
    padding-top: 24px;
  }
  .report p{
    font-weight: bold;
    font-size: 18px;
    color: #ff0000;
  }

  .report span{
    display: block;
    font-size: 24px;
  }
  .content_right .news_report{
    width: 385px;
    height: 330px;
    margin-top: 20px;
    float: left;
    background: url(../../static/images/bg_report.png) no-repeat;
  }
  .content_right .title{
    width: 385px;
    height: 70px;
    float: left;
    color: #00f6ff;
    font-size: 20px;
    line-height: 70px;
    background:url(../../static/images/bottom_line.png) bottom no-repeat;
    text-align: center;
  }
  .content_right .title img{
    vertical-align: middle;
  }
  .news_list{
    width: 350px;
    height: 240px;
    padding: 10px;
    font-size: 16px;
    float: left;
    overflow: hidden;
  }
  .news_list ul{
    list-style: none;
  }
  .news_list ul li{
    width:100%;
    height: 38px;
    float: left;
    line-height: 38px;
    padding-left: 15px;
  }
  .li01{
    background: url(../../static/images/new_list01.png) left center no-repeat;
  }
  .li02{
    background: url(../../static/images/new_list02.png) left center no-repeat;
    color: #FF0000;
  }
  .content_right .data_box{
    width: 385px;
    height: 420px;
    margin-top: 20px;
    float: left;
    background: url(../../static/images/bg_data.png) no-repeat;
  }
  .data_con{
    width: 365px;
    height: 330px;
    float: left;
    padding: 10px;}
  /*弹窗*/
  .pop,.pop2,.pop3 {
    display: none;
    width: 800px;
    min-height: 570px;
    max-height: 750px;
    height:570px;
    position: absolute;
    left: 0;  right: 0;
    margin:auto;
    padding: 25px;
    z-index: 130;
    border-radius: 3px;
    background-color: #23509a;
    border: #fff solid 1px;
    box-shadow: 0 5px 18px rgba(100, 0, 0, .5);
  }
  .pop-top{
    text-align: center;
    font-size: 20px;
    font-weight:bold;
    color: #ff6f05;
    height:40px;
    width:100%;
    background: url(../../static/images/line.png) no-repeat bottom center;
  }
  .pop-top span{
    float: right;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    display:black;
  }
  .pop-foot{
    height:50px;
    line-height:50px;
    width:100%;
    border-top: 1px #5682dc solid;
    text-align: right;
  }
  .pop-cancel{
    padding:8px 15px;
    margin:15px 5px;
    border: none;
    border-radius: 5px;
    background-color: #ff6f05;
    color: #fff;
    cursor:pointer;
  }
  .pop-content{
    height: 480px;
  }
  .bgPop,.bgPop2,.bgPop3{
    display: none;
    position: absolute;
    z-index: 129;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2);
  }
</style>
