$(document).on("click",".menuToggle",function(){
    $(".menuToggle").toggleClass("active");
    $(".navigation").toggleClass("active");
});

$(document).on("scroll",function(){
    $("header").toggleClass("sticky", window.scrollY>0);
})

$(document).on("click",".btnlogin",function(){
    $(".btnlogin").toggleClass("new");
})



