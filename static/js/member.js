  $(function(){
  	$(".num").click(function(){  		
  		$(this).addClass("current").siblings().removeClass("current");

  	});
  	
  	
  	$(".prev").click(function(){
  		let index=$(".current").index();
  		let les=$(".num").length;
  		if(index<=1){
	  		return false;
	  	}
  		$(".current").removeClass("current").prev().addClass("current");
  	})

  	$(".next").click(function(){
  		let index=$(".current").index();
  		let les=$(".num").length; 		
  		if(index>=les){
  			return;
  		}
  		$(".current").removeClass("current").next().addClass("current");
  	})
  	$(".btn-aa").click(function(){
  		$(".shadowB").css({
  			"display":"block",
  		})
  		$(".shodawB-ta").css({
  			"display":"block",
  		})
  	})
  	$(".shodawB-tab-title ul li").children(".icon-chahao").click(function(){
  		$(".shadowB").css({
  			"display":"none",
  		})
  		$(".shodawB-ta").css({
  			"display":"none",
  		})
  	})
  	/*$(".shodawB-tab-title ul li").children(".icon-zuidahua").click(function(){
  		$(this).removeClass("icon-zuidahua").addClass("icon-max"),
  		$(".shodawB-tab").removeClass("shodawB-tab").addClass("shodawB-tab-max")
		  	$(".shodawB-tab-title ul li").children(".icon-max").click(function(){
		  		$(this).removeClass("icon-max").addClass("icon-zuidahua"),
		  		$(".shodawB-tab-max").removeClass("shodawB-tab-max").addClass("shodawB-tab")
		  	})
  	})*/
  	
  	/*$(".shodawB-tab-title ul li").children(1).click(function(){
  		$(this).toggle(
  			function () {
  				$(this).removeClass("icon-zuidahua").addClass("icon-max");
			  },
			  function () {
			    $(this).removeClass("icon-max").addClass("icon-zuidahua");
			  }
			);
*/

	// $(".shodawB-tab-title ul li").children(1).click(function(){
	// 	$(this).removeClass("icon-zuidahua").addClass("icon-max"),
	// 	$(".shodawB-tab").removeClass("shodawB-tab").addClass("shodawB-tab-max")
	//   	$(".shodawB-tab-title ul li").children(".icon-max").click(function(){
	//   		$(this).removeClass("icon-max").addClass("icon-zuidahua"),
	//   		$(".shodawB-tab-max").removeClass("shodawB-tab-max").addClass("shodawB-tab")
	//   	})
  	// })


	// $(".tabone tbody input").click(function(){
     //    $(this).addClass("chekIt")
	// })


  addTabInfo();

	$(".btnFuc").live("click",function(e){
        e.stopPropagation();
		$(".tabone tbody").find("input").filter(":checked").parent().parent().remove();
	})
	$(".icon-del").live("click",function(e){
        e.stopPropagation();
		$(this).parents("tr").remove();
	})

  

    $("#allBtn").checkFunc($("tbody").find(":checkbox"));



  });

jQuery.fn.extend({

 checkFunc:function($child){
 	let $parent=this;
 	//1、父控制子的选择
 	this.click(function(){
 		let parent=this;
 		$child.each(function(){
 			//此this是$child里的每一个DOM元素；
				this.checked = parent.checked; 
 		});
 	});


 	//2、子控制父的选择

 	$child.click(function(){
 		let allCheck=true;
 		$child.each(function(){
 			if(!this.checked){
 				allCheck=false;
 			}
 		});
 		if(allCheck==true){
 			$("#allBtn").attr("checked","checked")
 		}
 		
 	});

 }
});
 function  addTabInfo(){
            let vals=[];
            $(".f-ad").find(".userMail").each(function(){
                let val1=$(this).val()
                vals.push(val1)
                console.log(vals)
            })

            $(".addSub").click(function(){
                $(".tabone tbody").append("<tr>"+
                    "<td><input class=\"allB allC\" type=\"checkbox\" name=\"\"></td>" +
                    "<td class=\"scoreF\"></td><td class=\"admin\"></td>" +
                    "<td>男</td><td>13000000000</td><td class=\"adminMail\"></td>" +
                    "<td>北京市 海淀区</td><td>2017-01-01 11:11:42</td>" +
                    "<td class=\"td-status\"><span class=\"actionBtn\">已启用</span></td>" +
                    "<td class=\"td-manage\"><a href=\"javascript:;\" title=\"启用\"><i class=\"iconfont icon-qiyong1\"></i></a><a title=\"编辑\" href=\"javascript:;\"><i class=\"iconfont icon-bianji1\"></i></a><a  title=\"修改密码\" href=\"javascript:;\"><i class=\"iconfont icon-xiugai1\"></i></a><a title=\"删除\"  href=\"javascript:;\"><i class=\"iconfont icon-del\"></i></a></td>"+"</tr>")

                    $(".tabone tbody .adminMail").html(vals[0]);
                    $(".tabone tbody .admin").html(vals[1])

                    let num=$(".tabone tbody tr").length;
                    $(".tabone tbody .scoreF:last").html(num);

            })
            $(".icon-del").live("click",function(e){
                e.stopPropagation();
                $(this).parents("tr").remove();
            })
            
             
    }