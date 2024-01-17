$(function(){
    const mainSwiper = new Swiper(".mainSwiper", {
    centeredSlides: true,
    loop: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const subSwiper = new Swiper(".subSwiper", {
    on: {
        activeIndexChange: function(){
            $(".media .heading .control ul li").removeClass("active");
            $(".media .heading .control ul li").eq(this.activeIndex).addClass("active");
        },
    }
});

$("section .media .heading .control ul li a").click(function(e){
    e.preventDefault();
    $("section .media .heading .control ul li a").removeClass("active");
    $(this).addClass("active");
});

$("header nav li").mouseenter(function(){
    $(".nav_bg").addClass("active");
    $("header nav").addClass("active");
});

$(".nav_bg").mouseout(function(){
    $(".nav_bg").removeClass("active");
    $("header nav").removeClass("active");
});

$("header nav li").focusin(function(){
    $(".nav_bg").addClass("active");
    $("header nav").addClass("active");
});

$("header nav li li:last-child").focusout(function(){
    $(".nav_bg").removeClass("active");
    $("header nav").removeClass("active");
});

$("header nav li li").hover(
    function(){
    $(this).addClass("active");
},
function(){
    $(this).removeClass("active");
}
);

$("header nav li li a").focusin(function(){
    $(this).parent().addClass("active");
});

$("header nav li li a").focusout(function(){
    $(this).parent().removeClass("active");
});

$("section .notice li:first-child").addClass("active");
$("section .notice .title ul li").click(function(e){
    e.preventDefault();
    $("section .notice .title ul li").removeClass("active");
    $(this).addClass("active");
});

$(".media .heading .control ul li:first-child").addClass("active");
$(".media .heading .control ul li").click(function(e){
    e.preventDefault();
    let idx=$(this).index();
    subSwiper.slideTo(idx, 300);
});


});