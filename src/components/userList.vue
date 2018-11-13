<template>
  <div class="m-body">
    <div class="m-row">
      <form class="m-form">
        <input class="m-input inputB reInPut" placeholder="开始日" name="start" id="start" lay-key="1">
        <input class="m-input reInPut" placeholder="截止日" name="end" id="end" lay-key="2">
        <input type="text" name="username" placeholder="请输入用户名" autocomplete="off" class="m-input  reInPut">
        <button class="right-btn sreach-btn S-reInPut" lay-submit="" lay-filter="sreach">
          <i class="iconfont icon-icon-search"></i>
        </button>
      </form>
    </div>
    <div class="delateBtn">
      <button class="m-input btn-d btn-dd  btnFuc">
        <i class="iconfont icon-shanchu1"></i>批量删除
      </button>
      <router-link to="/userEditor">
        <button class="m-input btn-d btn-aa">
          <i class="iconfont icon-icon"></i>添加
        </button>
      </router-link>
      <div class="x-right" style="line-height:40px">共有数据：&nbsp;&nbsp;<span id="dataIdOne"></span>条&nbsp;&nbsp;&nbsp;&nbsp;当前显示的是：&nbsp;&nbsp;第<span id="dataIdT"></span>页 &nbsp;&nbsp;共：<span id="dataIdTwo"></span>页</div>
    </div>
    <table class="table tabone">
      <tr>
        <th>
          <input class="allB" id="allBtn" type="checkbox" name="">
        </th>
        <th>用户编号</th>
        <th>用户名称</th>
        <th>联系电话</th>
        <th>邮箱地址</th>
        <th>融资规模</th>
        <th>创建时间</th>
        <th>融资状态</th>
        <th>产品经理</th>
        <th>所在部门</th>
        <th>联系电话</th>
        <th>邮箱地址</th>
        <th>操作</th>
      </tr>
    </table>
    <table class="table tableTd"  id="listDt">
      <tr v-for="d in userDbs">
        <td>
          <input class="allB allC" type="checkbox" name="inputPer">
        </td>
        <td>{{d.number}}</td>
        <td>{{d.userName}}</td>
        <td>{{d.phone}}</td>
        <td>{{d.mailAddress}}</td>
        <td><span>{{d.scales}}</span><br/>万美元</td>
        <td>{{d.createTime}}</td>
        <td class="td-status">
          <span class="actionBtn">{{d.states}}</span>
        </td>
        <td>{{d.manager}}</td>
        <td>{{d.department}}</td>
        <td>{{d.movie}}</td>
        <td>{{d.email}}</td>
        <td class="td-manage">
          <div>
            <i class="iconfont icon-bianji1"></i>
              <span>编辑</span>
          </div>
          <div>
            <i class="iconfont icon-del"></i>
            <span class="spans">删除</span>
          </div>
        </td>
      </tr>
    </table>
    <div class="page">
      <div id="barcon" name="barcon">
        <!--<a class="firstPage">首页</a>-->
        <!--<a class="prevPage">上一页</a>-->
        <!--<a class="nextPage">下一页</a>-->
        <!--<a class="lastPage">尾页</a>-->
      </div>
    </div>
  </div>
</template>

<script>
    import laydate from '../../static/laydate/laydate.js'
    export default {
      name: "userList",
      data() {
        return {
          userDbs: [],
        }
      },
      mounted(){
        $(".icon-del").click(function(){
          var delUserId=416;
          $.ajax({
            type:"DELETE",
            url:"http://localhost:3000/userListDbs/"+delUserId,
            dataType:"json",
            success:function(data){
              console.log(data)
            },
            error:function(err){
              console.error(err)
            }
          })
        })
      },

      created() {
        fetch('http://localhost:3000/userListDbs').then(res => {
          res.json().then(datas => {
            this.userDbs = datas;
            console.log("1", this.userDbs);
          })
        });
      },
      updated() {
        // 全选、多选及反选
        var all = document.getElementById("allBtn");
        var allInputs = document.getElementsByName("inputPer");
        var count = 0;
        all.onclick = function () {
          console.log(allInputs.length);
          for (let i = 0; i < allInputs.length; i++) {
            allInputs[i].checked = all.checked;
          }
        }
        for (let i = 0; i < allInputs.length; i++) {
          allInputs[i].onclick = function () {
            var oneCheck = allInputs[i];
            if (oneCheck.checked == true) {
              count++;
              console.log(count)
            } else {
              count--;
            }
            console.log(allInputs.length);
            if (count == allInputs.length) {
              all.checked = true;
            } else {
              all.checked = false;
            }
          }
          //删除功能实现
          $(function () {
            $(".icon-del").click(function () {
              // alert("确定要删除吗？")
              $(this).parent().parent().parent().remove()
            })
            $(".btnFuc").click(function () {
              $("#listDt").find("input").filter(":checked").parent().parent().remove()
            })
          })
        }
        // 日历插件
        laydate.render({
          elem: '#start' //指定元素
        });
        laydate.render({
          elem: '#end' //指定元素
        });

      }
    }
</script>

<style scoped>
  @import "../../static/iconfont/iconfont.css";
  @import "../../static/laydate/theme/default/laydate.css";
  a{
    text-decoration:none;
  }
  .m-body{
    padding: 20px;
  }
  .m-form{
    margin-bottom: 20px;
    text-align: center;
  }
  .m-input{
    display: inline-block;
    padding-left: 10px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #e6e6e6;
    background-color: #fff;
    border-radius: 4px;
  }
  .inputB{
    width: 190px;

  }
  .m-form .sreach-btn{
    display: inline-block;
    padding: 0 18px;
    height: 38px;
    border: none;
    border-radius: 4px;
    background: #b4d8f8;
  }
  .m-form .sreach-btn .iconfont{
    display: inline-block;
    font-size: 24px;
    line-height: 38px;
    color:#7292e2;
  }
  .delateBtn{
    margin-bottom: 10px;
    padding: 5px;
    line-height: 22px;
    border-radius: 0 2px 2px 0;
    background-color: #f4f8fa;
  }
  .btn-d{
    display: inline-block;
    color: #000;
    margin-left: 4px;
    padding:0 18px;
  }
  .btn-dd{
    background-color: #96a2be;
  }
  .btn-dd .iconfont{
    display: inline-block;
    color: #4d597b;
    margin-right: 3px;
  }
  .btn-aa{
    background-color: #b4d8f8;
  }
  .btn-aa .iconfont{
    display: inline-block;
    color: #0837ae;
    margin-right: 3px;
  }
  .x-right{
    float: right;
    font-size: 12px;
  }


  .table{
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 12px;
    border-color:grey;
    text-align: left;
    line-height: 39px;
    margin-bottom: 10px;
  }
  .tabone tr th{
    padding:0px;
  }
  .tableTd tr{
    box-sizing: border-box;
    width: 100%;
  }
  .tableTd tr,td{
    padding:0 17px;
    white-space: nowrap;
    /*border: 1px solid #e2e2e2;*/
    /*text-align: center;*/
  }

  .tableTd tr{
    width: 100%;
  }
  .tableTd tr td:nth-child(1){
    padding: 0px!important;
  }
  .tableTd tr td:nth-child(7){
    white-space: nowrap!important;
  }
  .table th{
    background: #eaeef9;
  }
  .table tr:nth-child(2n){
    background: #f8f8f8;
  }
  .tableTd tr:hover{
    background:#eeb2b2;
  }
  .table tr:hover{
    background:#eaeef9;
  }

  .allB{
    display: block;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #d2d2d2;
    font-size: 12px;
    border-radius: 2px;
    background-color: #fff;
  }

  .actionBtn{
    display: inline-block;
    font-size: 12px;
    height: 22px;
    line-height: 22px;
    /*padding: 0 5px;*/
    /* background-color: #5b8bff; */
    /* opacity: .8; */
    border-radius: 2px;
    color: #000;
    cursor: pointer;
    overflow: hidden;
  }
  .actionBtn:hover{
    opacity: .6;
  }

  .td-manage div .iconfont{
    display: inline-block;
    color: #333;
    font-size: 16px;
  }
  .td-manage div .iconfont:hover{
    opacity: .8;
  }

  .page{
    margin-top: 20px;
    text-align: center;
  }
  .page a{
    display: inline-block;
    background: #fff;
    color: #888;
    padding: 10px;
    min-width: 15px;
    border: 1px solid #E2E2E2;
  }
  .num{
    display: inline-block;
    background: #fff;
    color: #888;
    padding: 10px;
    min-width: 15px;
    border: 1px solid #E2E2E2;
  }

  .current{
    display: inline-block;
    background: #4876e7 !important;
    color: #fff !important;
    padding: 10px;
    min-width: 15px;
    border: 1px solid #4876e7 !important;
  }
</style>
