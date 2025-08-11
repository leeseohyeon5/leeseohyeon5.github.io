$(function(){
    $("#nav").hover(function(){
        $("#header").addClass("on");
        $("#nav .sub").stop().slideDown();
    },function(){
        $("#header").removeClass("on");
        $("#nav .sub").stop().slideUp();
    });
    var n=0;
    var dis=0;
    $(".left").click(function(e){
        e.preventDefault();
        if(n>0){
            n--
        }else{
            n=2;
        }
        sMoving();
    });
    $(".right").click(function(e){
        e.preventDefault();
        if(n<2){
            n++
        }else{
            n=0;
        }
        sMoving();
    })
    $(".rolling li").click(function(e){
        e.preventDefault();
        n=$(this).index();
        sMoving();
    });
    function sMoving(){
        dis=n*(-1)*100+"%";
        $(".slide").css({"left":dis});
        $(".rolling li").removeClass("on");
        $(".rolling li").eq(n).addClass("on");
    }
    setInterval(function(){
        //setInterval(); 함수를 일정 시간마다 반복 실행시켜 주는 기능을 갖는 메서드
        //setInterval(function, delay)
        if(n<2){
            n++
        }else{
            n=0;
        }
        sMoving();
    },3000);
    $(window).scroll(function(){
        //스크롤 이벤트
        var t=$(this).scrollTop();
        // console.log(t);//스크롤 거릿값
        if(t>=600){
            $(".cont1In .txtB").addClass("on");
        }else{
            $(".cont1In .txtB").removeClass("on");
        }
    })
    // login.html
    var loginId=$("#login_id"),
        loginPw=$("#login_pw"),
        loginBtn=$("#login_btn");
    loginBtn.click(function(){
        if(loginId.val()==''&&loginPw.val()==''){
            alert("아이디와 비밀번호를 입력해주세요")
        } 
        else if(loginId.val()==''){
            alert("아이디(이메일)을 입력해주세요");
        }else if(loginPw.val()==''){
            alert("비밀번호를 입력해주세요");
        }   
        else{
            alert('존재하지 않는 아이디입니다.')
        }
    })
});