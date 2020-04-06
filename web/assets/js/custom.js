/* 탭 메뉴 */
var $tab_list = $(".tab-menu");
$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();

}
$tab_list.find(">ul>li>a").click(tabMenu).focus(tabMenu);
/* 웹접급성 준수를위해서 focus 넣어줌 안넣으면 내용훑고 나머지 탭은 내용 안훑고 탭메뉴를 빠져나감*/




/* 전체 메뉴 */
$(".tit .btn").click(function(e){
   e.preventDefault();
   $("#cont_nav").slideToggle(200);
   $(this).toggleClass("active");

});

/* 배너 */          
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true

});

/* 갤러리 */
var $gallery = $(".gallery .gal-img");
$gallery.slick({
    infinite: true,
    fade: true,
    autoplaySpeed: 3000,
    speed: 300,
    prevArrow: $(".gal-btn .prev"),
    nextArrow: $(".gal-btn .next")
});
var $gal_btn = $(".gal-btn li a");            
$gal_btn.click(function(e){
    e.preventDefault();
    if($(this).parent().hasClass("play")){
        $gallery.slick("slickPlay");        
    }else if($(this).parent().hasClass("pause")){
        $gallery.slick("slickPause");                    
    }
})


/* 레이어 팝업*/
$(".layer").click(function(e){
    e.preventDefault();
    $("#layer").fadeIn(250);
});
$("#layer .close").click(function(e){
    e.preventDefault();
   $("#layer").fadeOut(250); 
});

/* 윈도우 팝업 */
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
     window.open('sample_popup.html', 'popup01', "toolbar=yes,scrollbars=no,top=50,left=50,width=800,height=570");

});

/* 라이트갤러리 */
$(".lightgallery").lightGallery(); 
/*$(".lightgallery").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
}); */