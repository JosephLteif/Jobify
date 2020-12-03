$(document).on("click", ".menuToggle", function () {
    $(".menuToggle").toggleClass("active");
    $(".navigation").toggleClass("active");
    $("header").toggleClass("sticky");
});

$(document).on("click", ".menubtn", function () {
    $(".menuToggle").toggleClass("active");
    $(".navigation").toggleClass("active");
})

$(document).on("scroll", function () {
    $("header").toggleClass("sticky", window.scrollY > 0);
})

$(document).on("click", ".btnlogin", function () {
    $(".btnlogin").toggleClass("new");
})

$(document).ready(function () {
    $(".btn").on("click", function (event) {
        console.log("Form submit event started");
        $.ajax({//Process the form using $.ajax()
            type: 'POST', //Method type
            url: '../Php/CheckSessionLogic.php', //Your form processing file url
            beforeSend: function (xhr) {
                console.log("Ajax call initiated");
            },
            success: function (data) {
                if (!data) { //If fails
                    window.location.replace("../Views/login.html");
                } else {
                    window.location.replace("../Views/profilePage.html");
                }

                console.log("Ajax call success");
            },
            error: function () {
                alert("System  currently unavailable, try again later.");
                console.log("Ajax call error");
            },
            complete: function () {
                console.log("Ajax call completed");
            }

        });
        event.preventDefault();
        console.log("Form submit event ended");
    })
})

$(document).ready(function(){
    if (localStorage.getItem('cookieSeen') != 'shown') {
        $('.cookie-banner').css("visibility","visible");
        localStorage.setItem('cookieSeen','shown');
      };
      $('.close').on("click",function() {
        $('.cookie-banner').css("visibility","hidden");

      })
})

