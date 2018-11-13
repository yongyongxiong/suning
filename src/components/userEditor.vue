<template>
  <div>
    <div class="shodawB-tab shodawB-ta" id="shodawB-tab">
      <div class="shodawB-tab-title" style="cursor: move;">
        <p>添加用户信息</p>
      </div>
      <form class="f-ad">
        <span>*</span>用户编号：<input type="text" class="userNmberC userEditInput"/>
        <span>*</span>用户名称：<input type="text" class="userCom userEditInput"></br>
        <span>*</span>联系电话：<input type="text"  class="userPhone userEditInput"/>
        <span>*</span>邮箱地址：<input  type="text" class="userMail userEditInput"/></br>
        <span>*</span>融资规模：<input type="text" class="userAdds userEditInput"/>
        <span>*</span>创建时间：<input type="date" class="userTime userEditInput"/></br>
        <span>*</span>融资状态：<input type="text"  class="userState userEditInput"  value="已完成"/></br></br>
        <span>*</span>产品经理：<input  type="text"  class="userChan userEditInput"  value="李玲"/>
        <span>*</span>所在部门：<input  type="text" class="userMarge userEditInput" value="在线金融"/></br>
        <span>*</span>联系电话：<input type="text" class="userConmuni userEditInput" value="13324589929"/>
        <span>*</span>邮箱地址：<input type="text" class="userAdds userEditInput" value="linda@mail.com"/></br>
        <router-link to="/userList"><input class="subBtn deleSub" type="botton" value="返回"></router-link><input id="Add" class="subBtn addSub" type="botton" value="提交">
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "userEditor",
      data(){
          return {
            userVals:[]
          }
      },
      mounted(){
          $(function () {
            var  vals=[];
            $(".userEditInput").each(function () {
              let userEachVal=$(this).val();
              vals.push(userEachVal);
              console.log("e1",userEachVal)
            })
            this.userVals = vals;
            console.log("e2",this.userVals);


          //-------------

        $("#Add").click(function(){
          var ord=new Date().getTime();
          var newUser={
            "id":ord,
            "number": vals[0],
            "userName": vals[1],
            "phone": vals[3],
            "mailAddress": vals[4],
            "scales":  vals[5],
            "createTime":  vals[6],
            "states":  vals[7],
            "manager":  vals[8],
            "department": vals[8],
            "movie": vals[9],
            "email": vals[10]
          };
          $.ajax({
            type:"POST",
            url:"http://localhost:3000/userListDbs",
            data:newUser,
            success:function(data){
              console.log("添加成功");
            },
            error:function(err){
              console.error(err)
            }
          })
        });
      });
      }

    }
</script>

<style scoped>
  .shodawB-tab{
    width: 600px;
    height:800px;
    margin:50px auto;
    background: #fff;
    text-align: left;
  }
  .shodawB-tab-title{
    width: 100%;
    font-size: 14px;
    color: #333;
    height: 42px;
    border-bottom: 1px solid #eee;
    background: #F8F8F8;
    border-radius: 2px 2px 0 0;
    overflow: hidden;
  }

  .shodawB-tab-title p{
    float: left;
    margin-left: 20px;
    font-weight: 600;
  }
  .f-ad{
    width: 100%;
    padding-top: 20px;
    padding-left: 18px;
  }

  .f-ad span{
    color:#af545d;
  }
  .f-ad input{
    height: 36px;
    width:188px;
    border:1px solid #e0e0e0;
    margin-top: 15px;

  }
  .f-ad .subBtn{
    float:right;
    height: 30px;
    line-height: 30px;
    width:70px;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    font-size: 12px;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    opacity: .9;
    margin-right: 20px;
    outline: none;
  }
  .deleSub{
    background: #96a2be;
  }
  .addSub{
    background: #5b8bff;
  }
  .f-ad .subBtn:hover{
    opacity: .4;
  }
</style>
