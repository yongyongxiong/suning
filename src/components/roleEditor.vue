<template>
  <div>
    <div class="roleEditorB-tab roleEditorB-ta" id="roleEditorB-tab">
      <div class="roleEditorB-tab-title" style="cursor: move;">
        <p>修改角色信息</p>
      </div>
      <form class="role-f-ad">
        <span>*</span>角色编号：<input type="text" class="roleNmberC roleEditInput" :value="dad.id"/><br>
        <span>*</span>角色名称：<input type="text" class="roleCom roleEditInput" :value="dad.role"/><br>
        <span>*</span>角色描述：<input type="text"  class="rolePhone roleEditInput" :value="dad.sayWords"/><br>
        <span>*</span>添加时间：<input  type="text" class="roleMail roleEditInput" :value="dad.roleTime"/> <br>
        <span>*</span>最后修改时间：<input type="date" class="roleTime roleEditInput" :value="dad.roleEndTime"/><br>
        <span>*</span>角色状态：
        <span>*</span>
        <select class="roleOption roleEditInput"  :value="dad.states">
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
            roleVals:[],
            dad:null,
            dad1:null,
            dad2:null,
            dad3:null,
            dad4:null,
            dad5:null,
            dad6:null
          }
      },
      created(){
        this.dad1=this.$route.query.id1,
        this.dad2=this.$route.query.id2,
        this.dad3=this.$route.query.id3,
        this.dad4=this.$route.query.id4,
        this.dad5=this.$route.query.id5,
        this.dad6=this.$route.query.id6,
        console.log(typeof(this.dad1))
        console.log(this.dad1)
        console.log(this.dad2)
        console.log(typeof(this.dad2))
        console.log(this.dad3)
        console.log(this.dad4)
        console.log(this.dad5)
        console.log(this.dad6)
        this.dad = $.extend({}, this.dad1, this.dad2, this.dad3, this.dad4, this.dad5, this.dad6)
        //this.dad = Object.assign(this.dad1, this.dad2, this.dad3);此情况适合有效的对象，同时不断改变this.dad1（与this.dad内容相同）
        console.log(this.dad);
        console.log(this.dad1);
        // $(".roleNmberC").val =this.dad.id;
        // $(".roleCom").val = this.dad.role;
        // $(".rolePhone").val = this.dad.sayWords;
        // $(".roleMail").val = this.dad.roleTime;
        // $(".roleTime").val = this.dad.roleEndTime;
        // $(".roleOption").val = this.dad.states;
      },
      mounted(){
          // $(function () {
          //
          // })
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
          console.log("re1",$(".roleNmberC").val());
          console.log("re2",newRole.id);
          $.ajax({
            type:"put",
            url:"http://localhost:3000/roleListDbs/"+newRole.id,
            data:newRole,
            success:function(data){
              console.log("修改成功");
              console.log("re1",newRole);
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
