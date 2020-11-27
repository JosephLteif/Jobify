$(document).ready(function () {
    $('form').submit(function (event) { //Trigger on form submit
        console.log("Form submit event started");
        $('#name + .throw_error').empty(); //Clear the messages first
        $('#success').empty();

        var postForm = {//Fetch form data
            'email': $('input[name=email]').val(), //Store name fields value
            'pass': $('input[name=pass]').val()
        };

        $.ajax({//Process the form using $.ajax()
            type: 'POST', //Method type
            url: '../Php/loginLogic.php', //Your form processing file url
            data: postForm, //Forms name
            beforeSend: function (xhr) {
                $("#Submitbtn").attr("disabled");
                console.log("Ajax call initiated");
            },
            success: function (data) {

                if (!data) {//If fails
                    if (data.errors) { //Returned if any error from process.php
                        $('.throw_error').fadeIn(1000).html(data.errors); //Throw relevant error
                    }
                } else {
                    $('#success').fadeIn(1000).html("Logged in!"); //If successful, than throw a success message
                    window.location.replace("profilePage.html");
                }

                console.log("Ajax call success");
            },
            error: function () {
                alert("System  currently unavailable, try again later.");
                $('.throw_error').fadeIn(1000).html("Serve error!!"); //Throw relevant error
                console.log("Ajax call error");
            },
            complete: function () {
                $("#Submitbtn").removeAttr("disabled");
                console.log("Ajax call completed");
            }

        });
        event.preventDefault(); //Prevent the default submit
        console.log("Form submit event ended");
    });
});