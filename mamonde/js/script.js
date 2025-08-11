$(function(){
    $(".all_menu").click(function(){
        $("#nav").addClass("on");
        $("body").addClass("on");
    });
    $(".close").click(function(){
        $("#nav").removeClass("on");
        $(".sub").hide();
        $("body").removeClass("on");
    })
    $(window).resize(function(){
        var w=$(window).width();
        if(w>=1024){
            $(".close").trigger("click");
        }
    })
    $("#nav>ul>li").click(function(){
        if($("#nav").hasClass("on")==true){
            $(this).find('.sub').stop().slideToggle();
        }
    });
     $("#nav>ul>li").hover(function(){
        if($("#nav").hasClass("on")==false){
            $(".subBack").stop().slideDown();
            $(this).find(".sub").stop().slideDown();
        }
    },function(){
        if($("#nav").hasClass("on")==false){
            $(".subBack").stop().slideUp();
            $(this).find(".sub").stop().slideUp();
        }
    });
    $(window).scroll(function(){
        var sT=$(window).scrollTop();
        if(sT>500){
            $(".topBtn").show();
        }else{
            $(".topBtn").hide();
        }
    })
    
    var n=0;
    var scroll=$(".scroll").width();
    var sBar=scroll/6
    var sW=sBar*(n+1);
    $(".s_bar").stop().animate({width:sW},500);
    var w=$(".slide li").width();
    // console.log(w);
    $(".left").click(function(e){
        e.preventDefault();
        if(n>0){
            n--
        }else{
            n=5;
        }
        scroll=$(".scroll").width();
        sBar=scroll/6
        sW=sBar*(n+1)
        $(".s_bar").stop().animate({width:sW},500);
        w=$(".slide li").width();
        $(".slide ul").stop().animate({left: w},0,function(){
            $(".slide li:last-child").prependTo(".slide ul");
            $(".slide ul").animate({left: 0},0);
        });
    });
    $(".right").click(function(e){
        e.preventDefault();
        if(n<5){
            n++
        }else{
            n=0;
        }
        scroll=$(".scroll").width();
        sBar=scroll/6
        sW=sBar*(n+1)
        $(".s_bar").stop().animate({width:sW},500);
        w=$(".slide li").width();
        $(".slide ul").animate({left: -w},0,function(){
            $(".slide li:first-child").appendTo(".slide ul");
        });
    });  
    $(window).resize(function(){
        scroll=$(".scroll").width();
        sBar=scroll/6
        sW=sBar*(n+1)
        $(".s_bar").stop().animate({width:sW},0);
    })
})


