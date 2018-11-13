<template>
  <div>
    <div class="roleEditorB-tab roleEditorB-ta" id="roleEditorB-tab">
      <div class="roleEditorB-tab-title" style="cursor: move;">
        <p>添加角色信息</p>
      </div>
      <form class="role-f-ad">
        <span>*</span>角色编号：<input type="text" class="roleNmberC roleEditInput"/><br>
        <span>*</span>角色名称：<input type="text" class="roleCom roleEditInput"/><br>
        <span>*</span>角色描述：<input type="text"  class="rolePhone roleEditInput"/><br>
        <span>*</span>添加时间：<input  type="datetime-local" class="roleMail roleEditInput"/><br>
        <span>*</span>最后修改时间：<input type="datetime-local" class="roleTime roleEditInput"/><br>
        <span>*</span>角色状态：
        <span>*</span>
        <select class="roleOption roleEditInput">
            <option>有效</option>
            <option>无效</option>
        </select>
        <br><br><br>
        <router-link to="/roleList"><input class="roleSubBtn roleDeleSub" type="botton" value="返回"></router-link>
        <input id="roleAdd" class="roleSubBtn roleAddSub" type="botton" value="提交">
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "userEditor",
      data(){
          return {
            roleVals:[]
          }
      },
      mounted(){

        $("#roleAdd").click(function(){
          // var ord=new Date().getTime();
          var newRole={
            "id": $(".roleNmberC").val(),
            "role": $(".roleCom").val(),
            "sayWords":  $(".rolePhone").val(),
            "roleTime":  $(".roleMail").val(),
            "roleEndTime":   $(".roleTime").val(),
            "states":  $(".roleOption").val(),
          };
          $.ajax({
            type:"POST",
            url:"http://localhost:3000/roleListDbs",
            data:newRole,
            success:function(data){
              console.log("添加成功");
              console.log("re1",newRole);
              console.log("re2", $(".roleNmberC").val())
            },
            error:function(err){
              console.error(err)
            }
          })
       });
      // });
      }

    }
</script>

<style scoped>
  .roleEditorB-tab{
    width: 600px;
    height:800px;
    margin:50px auto;
    background: #fff;
    text-align: left;
  }
  .roleEditorB-tab-title{
    width: 100%;
    font-size: 14px;
    color: #333;
    height: 42px;
    border-bottom: 1px solid #eee;
    background: #F8F8F8;
    border-radius: 2px 2px 0 0;
    overflow: hidden;
  }

  .roleEditorB-tab-title p{
    float: left;
    margin-left: 20px;
    font-weight: 600;
  }
  .role-f-ad{
    width: 100%;
    padding-top: 20px;
    padding-left: 18px;
  }

  .role-f-ad span{
    color:#af545d;
  }
  .role-f-ad input,select{
    height: 36px;
    width:188px;
    border:1px solid #e0e0e0;
    margin-top: 15px;

  }
  .role-f-ad .roleSubBtn{
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
  .roleDeleSub{
    background: #96a2be;
  }
  .roleAddSub{
    background: #5b8bff;
  }
  .role-f-ad .roleSubBtn:hover{
    opacity: .4;
  }
</style>
