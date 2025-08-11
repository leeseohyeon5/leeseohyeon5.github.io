$(function(){
    // .mtB클릭이벤트
    $(".mtB").click(function(){
        $("#nav").stop().toggleClass("on");
    });
    // toggle이벤트
    // $(".mtB").toggle(function(){
    //     $("#nav").css('display','block');
    // },function(){
    //     $("#nav").css('display','none');
    // });
    // resize
    $(window).resize(function(){
        var w=$(this).width();
        if(w>=768){
            $("#nav").stop().removeClass("on");
        }
    });
    $(window).scroll(function(){
        var s=$(this).scrollTop();
        if(s>=500){
            $(".top").addClass("on");
        }else{
            $(".top").removeClass("on");
        }
    })
});
