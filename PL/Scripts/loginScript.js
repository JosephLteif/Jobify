$(document).ready(function () {
    $('form').submit(function (event) { //Trigger on form submit
        console.log("Form submit event started");
        $('.throw_error').html(""); //Clear the messages first
        $('#success').html("");

        var postForm = {//Fetch form data
            'username': $('input[name=username]').val(), //Store name fields value
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

                if (data) {
                    $('#success').fadeIn(1000).html("Logged in!"); //If successful, than throw a success message
                    window.location.replace("../Views/profilePage.html");
                } else {
                    $('.throw_error').fadeIn(1000).html("Invalid Credentials"); //Throw relevant error
                    window.location.replace("../Views/login.html");
                }
                console.log("Ajax call success");
            },
            error: function () {
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