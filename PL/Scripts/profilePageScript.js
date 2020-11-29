$(document).ready(function () {
    $('#JobSeekerRefreshbtn').on("click", function (event) { //Trigger on form submit
        console.log("Form submit event started");
        $('#name + .throw_error').html(""); //Clear the messages first
        $('#success').html("");

        $.ajax({//Process the form using $.ajax()
            type: 'POST', //Method type
            url: '../Php/profilePageLogic(JobSeekers).php', //Your form processing file url
            beforeSend: function (xhr) {
                $("#JobSeekerRefreshbtn").attr("disabled", "disabled");
                // $("#divLoader").addClass("loader");
                console.log("Ajax call initiated");
            },
            success: function (data) {

                if (!data) { //If fails
                    $('.throw_error').fadeIn(1000).html("No Data Found!"); //Throw relevant error
                } else {
                    data = JSON.parse(data);
                    $("#JobSeekersTable tbody").html("");
                    $('#success').fadeIn(1000).html("Data Found!!"); //If successful, than throw a success message
                    for(var i in data){
                        $("#JobSeekersTable tbody").append("<tr><td>"+data[i][0]+"</td><td>"+data[i][1]+"</td><td>"+data[i][2]+"</td><td>"+data[i][3]+"</td></tr>")
                    }
                }

                console.log("Ajax call success");
            },
            error: function () {
                alert("System  currently unavailable, try again later.");
                console.log("Ajax call error");
            },
            complete: function () {
                $("#JobSeekerRefreshbtn").removeAttr("disabled");
                // $("#divLoader").removeClass("loader");
                console.log("Ajax call completed");
            }

        });
        event.preventDefault(); //Prevent the default submit
        console.log("Form submit event ended");
    });


    $('#JobRefreshbtn').on("click", function (event) { //Trigger on form submit
        console.log("Form submit event started");
        $('#name + .throw_error').html(""); //Clear the messages first
        $('#success').html("");

        $.ajax({//Process the form using $.ajax()
            type: 'POST', //Method type
            url: '../Php/profilePageLogic(JobSeekers).php', //Your form processing file url
            beforeSend: function (xhr) {
                $("#JobRefreshbtn").attr("disabled", "disabled");
                // $("#divLoader").addClass("loader");
                console.log("Ajax call initiated");
            },
            success: function (data) {

                if (!data) { //If fails
                    $('.throw_error').fadeIn(1000).html("No Data Found!"); //Throw relevant error
                } else {
                    data = JSON.parse(data);
                    $("#JobOffersTable tbody").html("");
                    $('#success').fadeIn(1000).html("Data Found!!"); //If successful, than throw a success message
                    for(var i in data){
                        $("#JobOffersTable tbody").append("<tr><td>"+data[i][0]+"</td><td>"+data[i][1]+"</td><td>"+data[i][2]+"</td><td>"+data[i][3]+"</td></tr>")
                    }
                }

                console.log("Ajax call success");
            },
            error: function () {
                alert("System  currently unavailable, try again later.");
                console.log("Ajax call error");
            },
            complete: function () {
                $("#JobRefreshbtn").removeAttr("disabled");
                // $("#divLoader").removeClass("loader");
                console.log("Ajax call completed");
            }

        });
        event.preventDefault(); //Prevent the default submit
        console.log("Form submit event ended");
    });



    var togglevarsidebar = 0;
    $("#hidebtn").on("click", function () {
        if (togglevarsidebar === 0) {
            $(".sidebar").css("width", "0px");
            $("#side").css("margin-left", "50px")
            $(this).css({
                "-webkit-transform": "rotate(0deg)",
                "-moz-transform": "rotate(0deg)",
                "transform": "rotate(0deg)" /* For modern browsers(CSS3)  */
            });

            togglevarsidebar++;
        } else {
            $(".sidebar").css("width", "200px");
            $("#side").css("margin-left", "250px")
            $(this).css({
                "-webkit-transform": "rotate(180deg)",
                "-moz-transform": "rotate(180deg)",
                "transform": "rotate(180deg)" /* For modern browsers(CSS3)  */
            });
            togglevarsidebar--;
        }
    });

    $("#Homebtn").on("click", function () {
        $("#HomePage").css({ "width": "100%", "height": "100%", "visibility": "visible" });
        $("#JobSeekersPage").css({ "width": "0", "height": "0", "visibility": "hidden" });
        $("#JobOffersPage").css({ "width": "0", "height": "0", "visibility": "hidden" });
    });

    $("#JobSeekersbtn").on("click", function () {
        $("#HomePage").css({ "width": "0", "height": "0", "visibility": "hidden" });
        $("#JobSeekersPage").css({ "width": "100%", "height": "100%", "visibility": "visible" });
        $("#JobOffersPage").css({ "width": "0", "height": "0", "visibility": "hidden" });
    });

    $("#JobOffersbtn").on("click", function () {
        $("#HomePage").css({ "width": "0", "height": "0", "visibility": "hidden" });
        $("#JobSeekersPage").css({ "width": "0", "height": "0", "visibility": "hidden" });
        $("#JobOffersPage").css({ "width": "100%", "height": "100%", "visibility": "visible" });
    });

});