$(function(){
    $(".navBtn").on("click",function(){
        $("header nav").addClass("on");
    });
    $(".navIn>span").on('click',function(e){
        e.preventDefault();
        $("header nav").removeClass("on");
    });
    $(window).resize(function(){
        var w=$(this).width();
        if(w>=768){
            $(".navIn>span").click();
        }
    });
    $(".section2 a, nav a, .contents a").click(function(){
        $('html').removeClass("on");
        $('html').addClass("on");
    })
    $(window).on("scroll", function(){
        var t = $(this).scrollTop();
        // console.log(t);
        var w=$(this).width();
        if(w<768){
            if(t>=2272){
                $(".section2").addClass("on");
            }else{
                $('.section2').removeClass('on');
            }
        }
    });
    $("#poster .contWrap li").hover(function(){
        var t=$(this).find(".topLine");
        var b=$(this).find(".bottomLine");
        var r=$(this).find(".rightLine");
        var l=$(this).find(".leftLine");
        t.css('left','-100%').stop().animate({left:0},500);
        b.css('left',"100%").stop().animate({left:0},500)
        r.css('top',"-100%").stop().animate({top:0},500)
        l.css('top',"100%").stop().animate({top:0},500)
    },function(){
        var t=$(this).find(".topLine");
        var b=$(this).find(".bottomLine");
        var r=$(this).find(".rightLine");
        var l=$(this).find(".leftLine");
        t.css('left',0).stop().animate({left:'-100%'},500);
        b.css('left',0).stop().animate({left:"100%"},500)
        r.css('top',0).stop().animate({top:"-100%"},500)
        l.css('top',0).stop().animate({top:"100%"},500)
    })
    $("#poster .poster li").click(function(){
        var i=$(this).index();
        $(".posterOn").addClass("on");
        $(".cont_in div").removeClass("on");
        $(".cont_in div").eq(i).addClass("on");
        if($(".posterOn").hasClass("on")==true){
            $("body").addClass("on");
        }else{
            $("body").removeClass("on");
        }
        setTimeout(function(){
            $(".cont_in").addClass("on");
        },100)
    })
    $(".p_close").click(function(){
        $(".posterOn").removeClass("on");
        $("body").removeClass("on");
        $(".cont_in").removeClass("on");
    })
});
