$(function(){
    //#nav
    $("#nav>ul>li").hover(function(){
        //마우스를 올리면 동작
        // #nav>ul>li>a
        // $(this).next(".sub").stop().slideDown();
        $(this).find(".sub").stop().slideDown();
    },function(){
        //마우스를 내리면
        $(this).find(".sub").stop().slideUp();
    });

    //slide
    var n=0; //번호변수, 전역변수
    //arrow
    $(".left").click(function(e){ //765432107....
        e.preventDefault();
        if(n>0){ 
            n--;
        }else{
            n=3;
        }
        // console.log(n);
        sMoving();
    });
    $(".right").click(function(e){ //12345670
        e.preventDefault();
        if(n<3){
            n++;
        }else{
            n=0;
        }
        // console.log(n);
        sMoving();
    });

    //반복하는 스크립트 동작을 사용자 정의 함수로 제작할 수 있다.
    function sMoving(){
        $(".slide li").removeClass("on");
        $(".slide li").eq(n).addClass("on");
        $(".rolling li").removeClass("on");
        $(".rolling li").eq(n).addClass("on");
    };

    //rolling li
    $(".rolling li").click(function(e){
        e.preventDefault();
        n=$(this).index();
        // console.log(n);
        sMoving();
    });

    // setInterval
    setInterval(function(){
        if(n<3){
            n++;
        }else{
            n=0;
        }
        // console.log(n);
        sMoving();
    },3000);

    // scroll 이벤트
    $(window).scroll(function(){
        var t=$(this).scrollTop();
        // console.log(t);
        if(t>=80){
            $(".content1>div").addClass("on");
        }
    });


    //more 
    // console.log(n);
    var i=0;
    $(".more a").click(function(e){
        e.preventDefault();
        $(".content4 .cont ul").eq(i).css({"display":"block"});
        // console.log(n);
        if(i<2){
            i++;
            $(".content4 .cont ul").eq(i).css({"display":"block"});
            console.log(i);
        }else{
            $(".content4 .cont ul").eq(3).css({"display":"block"});
            $(".more a").css({"display":"none"});
        };
    });
});