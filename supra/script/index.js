$(function(){ 
    $(".searchWrap form>button").click(function(){
        $(".searchOn").css({"display":"block"});
        $("body").addClass("on");
    })
    $(".searchOn .close").click(function(e){
        e.preventDefault();
        $(".searchOn").css({"display":"none"});
        $("body").removeClass("on");
        $(".searchOn input").val('');
    })
    
    $(".navBtn").click(function(){
        $("#nav").addClass("on");
        $("body").addClass("on");
    })
    $("#nav strong>.close").click(function(e){
        e.preventDefault();
        $("#nav").removeClass("on");
        $("body").removeClass("on");
    })
    
    $(window).resize(function(){
        var w=$(window).width();
        if(w>=1024){
            $(".close").click();
            $(".searchOn input").val('');
        }
    })
});