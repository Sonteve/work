// 배너 이미지 슬라이드
var swiper1 = new Swiper('.swiper-container',{
    pagination: {
        el: '.swiper-pagination',
        clickable : true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 4500,
    },

});
// 영화차트 이미지 슬라이드
var swiper2 = new Swiper('.swiper-container2',{
    slidesPerView: 4,
    spaceBetween: 24,
    /*mousewheel: {
        invert: true,
    },*/
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    /*autoplay: {
        delay: 4000,
    },*/
    breakpoints: {
        600: {
          slidesPerView: 1.4,
          spaceBetween: 24
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 24
        }
    }

});
/* 이벤트 영역 슬라이드 */
var swiper3 = new Swiper('.swiper-container3',{
    pagination: {
        el: '.swiper-pagination',
        clickable : true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000
    }
});

//영화차트 탭 메뉴
var movBtn = $(".movie-title > ul > li");        
var movCont = $(".movie-chart > div");

movCont.hide().eq(0).show();

/*movBtn.click(function(e){            
    e.preventDefault();            
    var index = $(this).index();
    $(this).addClass("active").siblings("li").removeClass("active");
    movCont.hide().eq(index).show();
});*/

movBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    movBtn.removeClass("active");
    target.addClass("active");
    movCont.hide().eq(index).show();
});

var star = $(".p-over .comment input");
var starArr = document.querySelectorAll(".comment input");
var text = document.querySelector(".comment span");

function getIndex(ele){
    var i = 0;
    while((ele = ele.previousElementSibling) != null ) {
        i++;
    }
    return i;
}        
star.mouseover(function(e){
    var target = e.target;
    var index = getIndex(target);
    /*var target = $(this);
    var index = target.index();*/
    if( index == 0 ){
        text.textContent = "괜히봤어요.";
    }else if( index == 1 ){
        text.textContent = "기대하진 말아요.";
    }else if( index == 2 ){
        text.textContent = "무난했어요.";
    }else if( index == 3 ){
        text.textContent = "기대해도 좋아요!";
    }else if( index == 4 ){
        text.textContent = "너무 멋진 영화였어요!";
    }           
    for( var i = 0; i < index+1 ; i++){                
        starArr[i].setAttribute("src","assets/img/star_big_on.png");
    }
    for( var k = index+1 ; k < starArr.length ; k++){
        starArr[i].setAttribute("src","assets/img/star_big_off.png");
    }
});
star.mouseout(function(){
    for(var i = 0; i < starArr.length ; i++){                
        starArr[i].setAttribute("src","assets/img/star_big_off.png");
    }
    text.textContent = "평점을 입력해주세요";
});

var banBtn = document.createElement("span");        
banBtn.classList.add("play-pause");        
var eveBtn = document.createElement("span");        
eveBtn.classList.add("play-pause");

var bannerPagination = document.querySelector(".swiper-container .swiper-pagination");
var eventPagination = document.querySelector(".swiper-container3 .swiper-pagination");
eventPagination.appendChild(eveBtn);
bannerPagination.appendChild(banBtn);

$(".swiper-container .play-pause").click(function(){
    var btn = $(this);
    if(btn.hasClass("pause")){
        swiper1.autoplay.start();
        btn.removeClass("pause");
    }else{
        swiper1.autoplay.stop();
        btn.addClass("pause");
    }
});        

$(".swiper-container3 .play-pause").click(function(){
    var btn = $(this);
    if(btn.hasClass("pause")){
        swiper3.autoplay.start();
        btn.removeClass("pause");
    }else{
        swiper3.autoplay.stop();
        btn.addClass("pause");
    }
});

/*$(".swiper-slide").hover(function() {
    swiper3.autoplay.stop();
    },function(){
    swiper3.autoplay.start();
    }
);*/

//공지사항 탭 메뉴
var tabMenu = $(".notice");

//컨텐츠 내용 숨김
tabMenu.find("ul > li > ul").hide();
tabMenu.find("li.active > ul").show();

function tabList(e){
    e.preventDefault(); //#의 기능을 차단
    var target = $(this);
    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").children("ul").hide();
    //버튼을 클릭하면 그것의 자식 ul을 보여주고 부모의 li태그에 클래스추가후 형제 li에게 클래스를 제거하고 그 자식 ul을 숨겨줌
}

tabMenu.find("ul > li > a").click(tabList).focusin(tabList);