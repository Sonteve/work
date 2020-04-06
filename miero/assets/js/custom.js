$(function(){
    var current=0;// banner current slide check
    var sct=0;  // current scrolltop value
    
    
   ////////////// height Initialize ///////////////////
    var section_4_height=$(".section-4 .slide-content").height()+$(".section-4 .container>h2").height()+25;//position으로 내용물이 떠버려서 부모 섹션이 높이값을 잃어버리므로 자식 컨텐츠 height값의 총합을 구한다음 부모값으로 넣어준다.  자식height총합 = 부모 height
//            var cw = $(window).width();
//            if(cw>1280){
//                $(".section-4 .container").css("height",542);    
//            }
    
    
    /*var section_5_height=$(".section-5 .con.long.top").height();*/
    /*con-2의 height값에 다른 con의 값을 맞추기 위해서 con-2의 height값을 구해서 다른 con에 넣어준다.*/                       
    /*$(".section-5 .con.top").css("height",section_5_height);
    /////////////// height Initialize ///////////////////*/
    
    
    
    ////////////////header nav click event ///////////////////////
    $(".lnb>ul>li").click(function(e){
        e.stopPropagation();               
        $(".sub-menu").stop().fadeOut(250);
        $(this).children(".sub-menu").stop().fadeToggle(250);
    });            
    $(document).click(function(){
       $(".sub-menu").stop().hide(); 
    });
    ///////////// header nav click event //////////////////////
    
    
    //////////////////// banner control ////////////////////////// 
    var prevBtn=$(".prev");            
    var nextBtn=$(".next");
    prevBtn.attr("onOff","on");
    nextBtn.attr("onOff","on");
    prevBtn.click(function(){       
        if(prevBtn.attr("onOff")=="on"){ //1초지나야 다시 클릭 할수있게 바뀐다.
            clearInterval(interval);
            var i = current-1;
            if(i==-1)i=2
            fadeControl(i);
            $(this).attr("onOff","off");
            onOffControl(prevBtn,prevBtn.attr("onOff"),1000);
        }
    });
    nextBtn.click(function(){
        if(nextBtn.attr("onOff")=="on"){
            clearInterval(interval);
            var i = (1+current)%3;
            fadeControl(i);   
            nextBtn.attr("onOff","off");
            onOffControl(nextBtn,nextBtn.attr("onOff"),1000);
        }
    });
    $(".control a").each(function(index){
       $(this).attr("data-index",index); 
    }).click(function(){
        var i = $(this).attr("data-index");
        fadeControl(i);
    });
    ////////////// banner control ///////////////////////////// 
    
    
    ////////////// section-2 tab /////////////////////////////
    
    var tabBtn=$(".section-2 .left .tab-btn li");  
    var tabCon=$(".section-2 .left .tab-con>div");
    var mo_tabBtn=$(".section-2 .mo-left .tab-btn");  
    var mo_tabCon=$(".section-2 .mo-left .content");
    mo_tabCon.hide();
    
    /*mobile*/
    mo_tabBtn.click(function(){                
        $(this).next().slideToggle(300);
        $(this).toggleClass("active");
        mo_tabCon.not($(this).next()).slideUp(300);
        mo_tabBtn.not($(this)).removeClass("active");                
    });
    
    
    /*mobile*/            
    tabBtn.each(function(index){
        $(this).attr("data-index",index); 
    }).click(function(){
        var i = $(this).attr("data-index");
        tabBtn.removeClass("active");
        $(this).addClass("active");
        tabCon.hide();
        tabCon.eq(i).show();
    });
    
    ///////////////////section-2 tab ////////////////////////////
    
    
    //////////////////// section-4 slide //////////////////////
    var slideCon=$(".section-4 .slide-wrap");
    var slideW=$(".section-4 .container").width();
    var moveX=0;
    var lBtn=$(".section-4 .left");
    var rBtn=$(".section-4 .right");
    
    /* slide 초기화*/
    slideCon.css("transition","transform 1.5s"); //슬라이드시간 1.5초
    slideCon.children(".slide-content:last").insertBefore(slideCon.children(".slide-content:first")); 
    slideCon.css("left", -slideW); 
    /*lBtn rBtn 광클 막기위해서 attr로 on,off제어 */
    lBtn.attr("onOff","on");
    rBtn.attr("onOff","on");            
    lBtn.click(function(){       
        if(lBtn.attr("onOff")=="on"){ //1초지나야 다시 클릭 할수있게 바뀐다.
            clearInterval(interval); // 자동슬라이드 잠시멈추기위해 clearinterval해줌
            moveX+= slideW;
            carouselControl("prev"); 
            lBtn.attr("onOff","off");
            onOffControl(lBtn,lBtn.attr("onOff"),1500); //이 함수에서 다시 setinterval해줌
        }
    });
    rBtn.click(function(){
        if(rBtn.attr("onOff")=="on"){ 
            clearInterval(interval);
            moveX+= -slideW;
            carouselControl("next"); 
            rBtn.attr("onOff","off");
            onOffControl(rBtn,rBtn.attr("onOff"),1500);
        }
    });
    ///////////////// section-4 slide //////////////////////////////
    
    var interval=setInterval(function(){
        var i=(1+current)%3;
        fadeControl(i);
        
        moveX += -slideW; 
        carouselControl();
    },3000);
    
    /////////////// resize ///////////////            
    var ww;   
    var s_4_btn=$(".section-4 .btn"); //container 높이바뀜에따라 거기에맞춰 controller의 top높이 조절 
    
    /*요소 하나하나의 height값 전부 더해준다.................................ㅎㅎㅎ..*/
    /* Number($(".section-4 .container>h2").css("marginBottom").replace(/[^-\d\.]/g, '')) 
    이런식으로쓰면 css값 가져올때 px떼고 가져오기때문에 앞에 Number만 붙여주면 일반 수 처럼 더하고빼고 할 수 있다. */
    $(window).resize(function(){
        ww=$(window).width();
        slideW=$(".section-4 .container").width(); //slideW: 슬라이드가 한번에 넘어가는 가로값                
        var s_4_height=$(".section-4 .container>h2").height() + Number($(".section-4 .container>h2").css("marginBottom").replace(/[^-\d\.]/g, '')) + $(".section-4 .slide-content img").height() + $(".section-4 .slide-content .text").height() + 25;
        $(".section-4 .container").css("height",s_4_height);            
        /*요소들의 총합이 container의 세로길이가 된다.*/
        
        var s_4_arr_top=$(".section-4 .container>h2").height()+Number($(".section-4 .container>h2").css("marginBottom").replace(/[^-\d\.]/g, ''))+$(".section-4 .slide-content img").height()/2 - s_4_btn.height()/2 + Number($(".section-4").css("paddingTop").replace(/[^-\d\.]/g, ''));
        s_4_btn.css("top",s_4_arr_top);
   
        if(ww>771){
            $(".lnb").css("display","block");
            $(".mo-btn").removeClass("onclick");
            $(".mo-btn").removeClass("on");
        }else{
            $(".lnb").css("display","none");
        }
    });
    
    
    /////////////// resize ///////////////
    
    
    /////////////// top-up버튼 애니메이션 ////////////////////////////
    $(window).scroll(function(){
       sct=$(window).scrollTop();
//                console.log(sct);
        if(sct>50){
            $("#top-up").show();
        }else{
            $("#top-up").hide();
        }
        
    });
    
    $("#top-up").click(function(){
       $('body,html').animate({
           scrollTop:0
       }) ;
    });
    /////////////// top-up버튼 애니메이션 ////////////////////////////
    
    
    
    
    ///////////////////// function ///////////////////////////////////
    /*banner fade슬라이드*/
    function fadeControl(num){         
        $(".slide-con").eq(current).stop().fadeOut(1000);
        $(".slide-con").eq(num).stop().fadeIn(1000);
        $(".control a").removeClass("active");
        $(".control a").eq(num).addClass("active");
        current=num;
    }
    /*section-4 carousel슬라이드*/
    function carouselControl(dir){                
        slideCon.css("transform","translateX("+moveX+"px)");
        if(dir=="prev"){
            slideCon.children(".slide-content:last").insertBefore(slideCon.children(".slide-content:first"));   
        }else{
            slideCon.children(".slide-content:first").insertAfter(slideCon.children(".slide-content:last"));   
        }                
        slideCon.css("left",-moveX-slideW);                
    }
    /*section-4 중복 클릭 막기위한 함수*/
    function onOffControl(btn,status,delay){
        if(status=="off"){
            setTimeout(function(){
                btn.attr("onOff","on");     
                
                interval=setInterval(function(){
                    var i=(1+current)%3;
                    fadeControl(i);
                    moveX += -slideW; 
                    carouselControl();
                },3000);
                
            },delay);
        }
    }
    
    'select * from tables';
    ///////////////////// function ///////////////////////////////////
});