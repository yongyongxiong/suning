<template>
  <div class="roleBody">
    <form class="roleForm">
      角色编号：<input class="roleInput roleN"/>&nbsp;&nbsp;&nbsp;&nbsp;
      角色名称：<input class="roleInput roleM"/>&nbsp;&nbsp;&nbsp;&nbsp;
      添加时间：<input class="roleInput roleT"  id="roleInput"/>&nbsp;&nbsp;&nbsp;&nbsp;
      状态：
      <select id="roleStatus" name="roleStatus" class="roleControl">
        <option value="">请选择</option>
        <option value="1">有效</option>
        <option value="0">无效</option>
      </select>
    </form>
    <div class="toolsParts">
      <ul class="toolsPartsLeft">
        <router-link to="/roleAdd">
        <li>
          <i class="iconfont icon-icon"></i>
          <span>添加角色</span>
        </li>
        </router-link>
        <!--<li>-->
          <!--<i class="iconfont icon-xiugai1"></i>-->
          <!--<span>修改角色</span>-->
        <!--</li>-->
        <li class="roleDeleteRole">
          <i class="iconfont icon-shanchu1"></i>
          <span>删除角色</span>
        </li>
      </ul>
      <ul class="toolsPartsRight">
        <li id="checkThese">
          <span>查询</span>
        </li>
        <li>
          <span>重置</span>
        </li>
      </ul>
    </div>
    <table class="roletable">
      <thead>
        <tr>
          <th>
              <input  type="checkbox" class="roleAllBtn" id="roleAll"/>
          </th>
          <th>角色编号</th>
          <th>角色名称</th>
          <th>角色描述</th>
          <th>添加时间</th>
          <th>最后修改时间</th>
          <th>角色状态</th>
          <th>操&nbsp;&nbsp;&nbsp;&nbsp;作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共计：<span id="trs"></span>&nbsp;&nbsp;条&nbsp;&nbsp;&nbsp;&nbsp;<span id="trsNum"></span>&nbsp;&nbsp;&nbsp;页&nbsp;&nbsp;&nbsp;当前为：第&nbsp;&nbsp;<span id="trsIndex"></span>&nbsp;&nbsp;页</th>
        </tr>
      </thead>
      <tbody id="roleBodyBtn">
        <tr v-for="(r,index) in roleDbsOne" v-show="rr==0">
          <td>
            <input class="roleCheck" type="checkbox" name="roleInputPer">
          </td>
          <td>{{r.id}}</td>
          <td>{{r.role}}</td>
          <td>{{r.sayWords}}</td>
          <td>{{r.roleTime}}</td>
          <td>{{r.roleEndTime}}</td>
          <td>有效</td>
          <td class="role-manage">
              <div class="observDiv">角色：管理员； 年资：5年；</div>
              <div class="lookBtn">
                <i class="iconfont icon-icon-search"></i>
                <span>查看</span>
              </div>
            <!--<router-link to="/roleEditor" @click="goRoleEditorPage">-->
              <div class="setBtn"  @click="goRoleEditorPage1(index)">
                <i class="iconfont icon-xiugai1"></i>
                <span>修改</span>
              </div>
           <!--</router-link>-->
              <div class="stopBtn">
                <i class="iconfont icon-qiyong1"></i>
                <span>停用</span>
              </div>
              <div class="unstopBtn">
                <i class="iconfont icon-qiyong1"></i>
                <span>取消</span>
              </div>
            </td>
      </tr>
        <tr v-for="(r,index) in roleDbsTwo" v-show="rr==1">
          <td>
            <input class="roleCheck" type="checkbox" name="roleInputPer">
          </td>
          <td>{{r.id}}</td>
          <td>{{r.role}}</td>
          <td>{{r.sayWords}}</td>
          <td>{{r.roleTime}}</td>
          <td>{{r.roleEndTime}}</td>
          <td>有效</td>
          <td class="role-manage">
            <div class="observDiv">角色：管理员； 年资：5年；</div>
            <div class="lookBtn">
              <i class="iconfont icon-icon-search"></i>
              <span>查看</span>
            </div>
            <!--<router-link to="/roleEditor">-->
              <div class="setBtn"  @click="goRoleEditorPage2(index)">
                <i class="iconfont icon-xiugai1"></i>
                <span>修改</span>
              </div>
            <!--</router-link>-->
            <div class="stopBtn">
              <i class="iconfont icon-qiyong1"></i>
              <span>停用</span>
            </div>
            <div class="unstopBtn">
              <i class="iconfont icon-qiyong1"></i>
              <span>取消</span>
            </div>
          </td>
        </tr>
        <tr v-for="(r,index) in roleDbsThree" v-show="rr==2">
          <td>
            <input class="roleCheck" type="checkbox" name="roleInputPer">
          </td>
          <td>{{r.id}}</td>
          <td>{{r.role}}</td>
          <td>{{r.sayWords}}</td>
          <td>{{r.roleTime}}</td>
          <td>{{r.roleEndTime}}</td>
          <td>有效</td>
          <td class="role-manage">
            <div class="observDiv">角色：管理员； 年资：5年；</div>
            <div class="lookBtn">
              <i class="iconfont icon-icon-search"></i>
              <span>查看</span>
            </div>
            <div class="setBtn"  @click="goRoleEditorPage3(index)">
              <i class="iconfont icon-xiugai1"></i>
              <span>修改</span>
            </div>
            <div class="stopBtn">
              <i class="iconfont icon-qiyong1"></i>
              <span>停用</span>
            </div>
            <div class="unstopBtn">
              <i class="iconfont icon-qiyong1"></i>
              <span>取消</span>
            </div>
          </td>
        </tr>
        <tr v-for="(r,index) in roleDbsFour" v-show="rr==3">
          <td>
            <input class="roleCheck" type="checkbox" name="roleInputPer">
          </td>
          <td>{{r.id}}</td>
          <td>{{r.role}}</td>
          <td>{{r.sayWords}}</td>
          <td>{{r.roleTime}}</td>
          <td>{{r.roleEndTime}}</td>
          <td>有效</td>
          <td class="role-manage">
            <div class="observDiv">角色：管理员； 年资：5年；</div>
            <div class="lookBtn">
              <i class="iconfont icon-icon-search"></i>
              <span>查看</span>
            </div>
            <div class="setBtn"  @click="goRoleEditorPage4(index)">
              <i class="iconfont icon-xiugai1"></i>
              <span>修改</span>
            </div>
            <div class="stopBtn">
              <i class="iconfont icon-qiyong1"></i>
              <span>停用</span>
            </div>
            <div class="unstopBtn">
              <i class="iconfont icon-qiyong1"></i>
              <span>取消</span>
            </div>
          </td>
        </tr>
        <tr v-for="(r,index) in roleDbsFive" v-show="rr==4">
          <td>
            <input class="roleCheck" type="checkbox" name="roleInputPer">
          </td>
          <td>{{r.id}}</td>
          <td>{{r.role}}</td>
          <td>{{r.sayWords}}</td>
          <td>{{r.roleTime}}</td>
          <td>{{r.roleEndTime}}</td>
          <td>有效</td>
          <td class="role-manage">
            <div class="observDiv">角色：管理员； 年资：5年；</div>
            <div class="lookBtn">
              <i class="iconfont icon-icon-search"></i>
              <span>查看</span>
            </div>
            <div class="setBtn"  @click="goRoleEditorPage5(index)">
              <i class="iconfont icon-xiugai1"></i>
              <span>修改</span>
            </div>
            <div class="stopBtn">
              <i class="iconfont icon-qiyong1"></i>
              <span>停用</span>
            </div>
            <div class="unstopBtn">
              <i class="iconfont icon-qiyong1"></i>
              <span>取消</span>
            </div>
          </td>
        </tr>
        <tr v-for="(r,index) in roleDbsSix" v-show="rr==5">
          <td>
            <input class="roleCheck" type="checkbox" name="roleInputPer">
          </td>
          <td>{{r.id}}</td>
          <td>{{r.role}}</td>
          <td>{{r.sayWords}}</td>
          <td>{{r.roleTime}}</td>
          <td>{{r.roleEndTime}}</td>
          <td>有效</td>
          <td class="role-manage">
            <div class="observDiv">角色：管理员； 年资：5年；</div>
            <div class="lookBtn">
              <i class="iconfont icon-icon-search"></i>
              <span>查看</span>
            </div>
            <div class="setBtn"  @click="goRoleEditorPage6(index)">
              <i class="iconfont icon-xiugai1"></i>
              <span>修改</span>
            </div>
            <div class="stopBtn">
              <i class="iconfont icon-qiyong1"></i>
              <span>停用</span>
            </div>
            <div class="unstopBtn">
              <i class="iconfont icon-qiyong1"></i>
              <span>取消</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="rolePage">
      <div>
        <a class="prev" href="javascript:;">&lt;&lt;</a>
        <a class="num current currPageNumberOne" @click="rr=0"  href="javascript:;">1</a>
        <a class="num currPageNumberTwo"  @click="rr=1" href="javascript:;">2</a>
        <a class="num currPageNumberThree" @click="rr=2"   href="javascript:;">3</a>
        <a class="num currPageNumberFour"  @click="rr=3"  href="javascript:;">4</a>
        <a class="num currPageNumberFive"  @click="rr=4"  href="javascript:;">5</a>
        <a class="num currPageNumberSix"  @click="rr=5"  href="javascript:;">6</a>
        <a class="next"  href="javascript:;">&gt;&gt;</a>
      </div>
    </div>
  </div>
</template>

<script>
    import laydate from '../../static/laydate/laydate.js'
    import index from "../router";
    export default {
        name: "roleList",
        data() {
          return {
            roleDbs: [],
            roleDbsOne:[],
            roleDbsTwo: [],
            roleDbsThree: [],
            roleDbsFour:[],
            roleDbsFive: [],
            roleDbsSix: [],
            rr:0,
            rs:0
          }
        },
      methods:{
        goRoleEditorPage1:function (index) {
          console.log(index);
            this.$router.push({
              path:'/roleEditor',
              query:{
                id1:this.roleDbsOne[index]
              }
            })
        },
        goRoleEditorPage2:function (index) {
          console.log(index)
          this.$router.push({
            path:'/roleEditor',
            query:{
              id2:this.roleDbsTwo[index]
            }
          })
        },
        goRoleEditorPage3:function (index) {
          console.log(index)
          this.$router.push({
            path:'/roleEditor',
            query:{
              id3:this.roleDbsThree[index]
            }
          })
        },
        goRoleEditorPage4:function (index) {
          console.log(index)
          this.$router.push({
            path:'/roleEditor',
            query:{
              id4:this.roleDbsFour[index]
            }
          })
        },
        goRoleEditorPage5:function (index) {
          console.log(index)
          this.$router.push({
            path:'/roleEditor',
            query:{
              id5:this.roleDbsFive[index]
            }
          })
        },
        goRoleEditorPage6:function (index) {
          console.log(index)
          this.$router.push({
            path:'/roleEditor',
            query:{
              id6:this.roleDbsSix[index]
            }
          })
        }
      },
        created() {
          fetch('http://localhost:3000/roleListDbs').then(res => {
            res.json().then(datas => {
             // console.log("r1",datas.length);
              this.roleDbs = datas;
             // console.log("r2", this.roleDbs);
              for(var i=0;i<this.roleDbs.length;i++){

                if(i<10){
                    this.roleDbsOne.push(this.roleDbs[i]);
                }else if(i>=10 && i<20){
                    this.roleDbsTwo.push(this.roleDbs[i]);
                }else if(i>=20 && i<30){
                  this.roleDbsThree.push(this.roleDbs[i]);
                }else if(i>=30 && i<40){
                  this.roleDbsFour.push(this.roleDbs[i]);
                }else if(i>=40 && i<50){
                  this.roleDbsFive.push(this.roleDbs[i]);
                }else {
                    this.roleDbsSix.push(this.roleDbs[i]);
                }
              }
              // console.log("r4",this.roleDbsOne.length);
              // console.log("r5",this.roleDbsTwo.length);
              // console.log("r6",this.roleDbsThree.length);
              // console.log("r7",this.roleDbsFour.length);
              // console.log("r8",this.roleDbsFive.length);
              // console.log("r9",this.roleDbsSix.length);
            })
          });

        },
        mounted() {
          laydate.render({
            elem: '#roleInput' //指定元素
          });
          //  分页按钮功能实现
          $(function () {
            $(".num").click(function () {
              $(this).addClass("current").siblings().removeClass("current");

            });

            $(".prev").click(function () {
              let index = $(".current").index();
              let les = $(".num").length;
              if (index <= 1) {
                return false;
              }
              $(".current").removeClass("current").prev().addClass("current");
            })

            $(".next").click(function () {
              let index = $(".current").index();
              let les = $(".num").length;
              if (index >= les) {
                return;
              }
              $(".current").removeClass("current").next().addClass("current");
            })
            //查询功能实现

              $(".roleN").blur(function () {
                $("#checkThese").click(function () {
                  var valId = $(".roleN").val()
                  console.log(valId)
                  $.ajax({
                    type:"GET",
                    url:"http://localhost:3000/roleListDbs/"+valId,
                    dataType:"json",
                    success:function(data){
                      console.log(data);
                    },
                    error:function(err){
                      console.error(err)
                    }
                  })
                })
              });


            //  删除功能实现
            $(".roleDeleteRole").click(function(){
              alert("请问您真的要删除吗？")
              //console.log("aa",$("#roleBodyBtn").find("input").filter(":checked").parent().next().text())
              var idE=$("#roleBodyBtn").find("input").filter(":checked").parent().next().text();
              console.log(idE)
              var delRoleId=idE;
              $.ajax({
                type:"DELETE",
                url:"http://localhost:3000/roleListDbs/"+delRoleId,
                dataType:"json",
                success:function(data){
                  console.log(data)
                },
                error:function(err){
                  console.error(err)
                }
              })
              $("#roleBodyBtn").find("input").filter(":checked").parent().parent().remove()
            })

          })
        },
      updated(){
          $(function () {
            //显示总条数
            var trs= ($(".roletable").find("tr").length)-1;
            $("#trs").text(trs);

            //显示总页数
            var trsNum= $(".num").length;
            $("#trsNum").text(trsNum);

            //显示当前页数
            var index = $(".current").index();
            var trsIndex= index;
            $("#trsIndex").text(trsIndex);
            //  停用功能实现
            $(".stopBtn").click(function () {
              $(this).parent().parent().addClass("addTrColor");
            })
            //  取消停用功能实现
            $(".unstopBtn").click(function () {
              $(this).parent().parent().removeClass("addTrColor");
            })
          })

          // 全选、多选及反选
          var all = document.getElementById("roleAll");
          var allInputs = document.getElementsByName("roleInputPer");
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
          }

        //查看
        $(".lookBtn").mouseenter(function () {
          $(this).parent(".role-manage").find(".observDiv").css({
            "display":"block"
          })
        })
        $(".lookBtn").mouseleave(function () {
          $(this).parent(".role-manage").find(".observDiv").css({
            "display":"none"
          })
        })
        }
    }
</script>

<style scoped>
  @import "../../static/iconfont/iconfont.css";
  @import "../../static/laydate/theme/default/laydate.css";
  @charset "utf-8";
  /* CSS Document */
  body, div, p, ul, ol, li, dl, dt, dd, table, tr, td, th, form, h1,h2,p, h3, h4, h5, h6, input, label,textarea {
    margin: 0;
    padding: 0;
  }
  body{
    font-family:"微软雅黑",Arial;
  }
  a{
    text-decoration:none;
    cursor: pointer;
  }
  ol,ul{
    list-style: none;
  }
  img{
    border: 0;
  }
  .roleBody{
    padding: 20px;
  }
  .roleForm{
    margin-bottom: 20px;
  }
  .roleForm .roleInput,.roleControl{
    padding-left: 10px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #e6e6e6;
    background-color: #fff;
    border-radius: 4px;
  }
  .toolsParts{
    overflow: hidden;
  }
  .toolsPartsLeft{
    float: left;
  }
  .toolsPartsLeft li{
    float: left;
    margin-right: 18px;
    background: #b4d8f8;
    border-radius: 4px;
    height:30px;
    padding: 0 10px;
    color:#000;
  }
  .toolsPartsLeft li .iconfont{
    color:#0837ae;
    display: inline-block;
  }
  .toolsPartsLeft li span{
    display: inline-block;
    font-size:12px;
    line-height: 30px;
    cursor: pointer;
  }
  .toolsPartsRight{
    float: right;
  }
  .toolsPartsRight li{
    float: right;
    margin-left: 18px;
    color:#337ab7;
    border-radius: 4px;
    height:30px;
    border:1px solid #337ab7;
    cursor: pointer;
  }
  .toolsPartsRight li span{
    display: inline-block;
    padding:0 18px;
    font-size:12px;
    line-height: 30px;
  }

  .roletable{
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 12px;
    border-color:grey;
    text-align: left;
    line-height: 39px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .roletable th,td{
    padding:0 15px;
    border: 1px solid #e2e2e2;
    text-align: center;
  }
  .roletable th{
    background: #eaeef9;
  }
  .roletable tr:nth-child(2n){
    background: #f8f8f8;
  }
  .roletable tr:last-child th,td{
    text-align: left;
  }
  .roletable tr:hover{
    background:#eaeef9;
  }
.addTrColor{
    background:#b1bbd1!important;
}

#trs,#trsNum,#trsIndex{
  color:#0837ae;
  font-weight: normal;
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


  .role-manage div{
    display: inline-block;
    font-size: 12px;
    height: 22px;
    line-height: 22px;
    padding: 0 5px;
    background-color: #b4d8f8;
    opacity: .8;
    border-radius: 2px;
    color:#000;
    cursor: pointer;
    margin-right: 10px;
  }
  .role-manage{
    position: relative;
  }
  .role-manage .observDiv {
    display: none;
    position: absolute;
    left:18px;
    top:20px;
    padding: 5px;
    white-space: nowrap;
    z-index: 100;
    background: #0c8cf4;
    color: black;
  }
  .role-manage div .iconfont{
    display: inline-block;
    color: #0837ae;
    font-size: 12px;
    margin-right: 3px;
  }
  .role-manage a .iconfont:hover{
    opacity: .8;
  }
.rolePage{
  margin-top: 20px;
  text-align: center;
}

  .rolePage a{
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
    background: #b4d8f8 !important;
    color: #fff !important;
    padding: 10px;
    min-width: 15px;
    border: 1px solid #b4d8f8 !important;
  }

</style>
