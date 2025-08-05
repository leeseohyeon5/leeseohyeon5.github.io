$(function(){
    $(window).scroll(function(){
        var sT=$(window).scrollTop();
        if(sT>500){
            $(".etc").show();
        }else{
            $('.etc').hide();
        }
    });


    $(".navBtn").click(function(){
        $(".navWrap").addClass("on");
        $("body").addClass("on");
    });
    $(".close").click(function(e){
        e.preventDefault();
        $(".navWrap").removeClass("on");
        $(".sub").hide();
        $("body").removeClass("on");
    });
    $(window).resize(function(){
        var w=$(this).width();
        if(w>=1200){
            $('.close').click();
            $("input.search").val('');
        }
    });
    $("#nav>ul>li").click(function(){
        if($(".navWrap").hasClass("on")==true){
            $(this).find('.sub').stop().slideToggle();
        }
    });
     $("#nav, .subBack").hover(function(){
        if($(".navWrap").hasClass("on")==false){
            $(".sub, .subBack").stop().slideDown();
        }
    },function(){
        if($(".navWrap").hasClass("on")==false){
            $(".sub, .subBack").stop().slideUp();
        }
    });
    $(".searchB").click(function(){
        $(".searchWrap").show();
    })
    $(".searchWrap .close").click(function(){
        $(".searchWrap").hide();
        $("input.search").val('');
    })
    //slide
    var n=0;
    $(".rolling li").click(function(e){
        e.preventDefault();
        n=$(this).index();
        sMoving();
    })
    function sMoving(){
        $(".rolling li").removeClass("on");
        $(".rolling li").eq(n).addClass("on");
        $(".slide li").removeClass("on");
        $(".slide li").eq(n).addClass("on");
    }
    $(".next").click(function(e){
        e.preventDefault();
        if(n<2){
            n++;
        }else{
            n=0;
        }
        sMoving();
    })
    $(".prev").click(function(e){
        e.preventDefault();
        if(n>0){
            n--;
        }else{
            n=2;
        }
        sMoving();
    })
    var dis=0;
    var i=0;
    setInterval(function(){
        if(n<2){
            n++;
        }else{
            n=0;
        }
        sMoving();
        if(i<2){
            i++;
        }else{
            i=0;
        }
        dis=i*(-1)*100+"%";
        $(".b_slide").css({"left":dis});
    },3000)

    // tab
    $(".tabCont>div").hide().eq(0).show();
    $(".tabBtn a").click(function(e){
        e.preventDefault();
        $(".tabBtn a").removeClass("on");
        $(this).addClass("on");

        $(".tabCont>div").hide();
        var i=$(this).index();
        $(".tabCont>div").eq(i).show();
    });
    //more 
    var a=0;
    $(".more_v").click(function(e){
        e.preventDefault();
        if(a<1){
            a++;
            $(".more_v").parents(".tab").find("ul").eq(a).css({"display":"block"})
        }else{
            $(".more_v").parents(".tab").find("ul").eq(2).css({"display":"block"})
            $(".more_v").hide();
        }
    })
    var b=0;
    $(".more_v2").click(function(e){
        e.preventDefault();
        if(b<1){
            b++;
            $(".more_v2").parents(".tab").find("ul").eq(b).css({"display":"block"})
        }else{
            $(".more_v2").parents(".tab").find("ul").eq(2).css({"display":"block"})
            $(".more_v2").hide();
        }
    })
});