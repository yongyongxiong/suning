$(function(){

        $(".addBtn").children("li").mouseenter(function(){
            $(this).find("span").addClass("spanO");
            $(this).parent().children().children().children("i").removeClass("icon-arrLeft-fill").addClass("icon-arrLeft-fill1");
            $(this).next(".add-child").css({
                "display":"block"
            })           
           
        });
        $(".addBtn").mouseleave(function(){
            $(this).children("li").find("span").removeClass("spanO");
            $(this).children().children().children("i").removeClass("icon-arrLeft-fill1").addClass("icon-arrLeft-fill");
            $(this).children(".add-child").css({
                "display":"none"
            })
           
        });
         $(".add-child").children().mouseover(function(){
            $(this).css({
                "background":"#f2f2f2"
            })
        });
        $(".add-child").children().mouseout(function(){
            $(this).css({
                "background":"#fff"
            })
        });

        $(".menu-list").children("a").click(function(){
            if(parseInt($(this).parent().height())<=parseInt($(this).height())){
                 $(this).parent().children(".sub-menu").css({
                    "display":"block"
                 }); 
                 $(this).children("i").removeClass("icon-jiantou1").addClass("icon-arrowDown").animate("margin-right","10px");
                 /*$(this).children("i").addClass("icon-arrowDown");*/
            }else{
                $(this).parent().children(".sub-menu").css({
                    "display":"none"
                 });
                 $(this).children("i").removeClass("icon-arrowDown").addClass("icon-jiantou1");/*
                 $(this).children("i").addClass("icon-jiantou1");*/
            }                       

        });


        $(".table").find("tr").mouseover(function(){
            $(this).addClass("addColor");
        })
        $(".table").find("tr").mouseout(function(){
            $(this).removeClass("addColor");
        })

        $(".icon-chahao1").click(function(){
            $(this).parent().parent().css({
                "display":"none"
            })
            $(this).parent().parent().next().css({
                "display":"none"
            })
        });

    });