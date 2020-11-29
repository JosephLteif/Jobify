$(document).ready(function () {
    $('form').submit(function (event) { //Trigger on form submit
        console.log("Form submit event started");
        $('#name + .throw_error').html(""); //Clear the messages first
        $('#success').html("");

        var postForm = {//Fetch form data
            'pass': $('input[name=pass]').val(),
            'token': $('input[name=token]').val()
        };

        //TO-DO need to validate that the 2 password are the same before ajax call


        $.ajax({//Process the form using $.ajax()
            type: 'POST', //Method type
            url: '../Php/NewPasswordLogic.php', //Your form processing file url
            data: postForm, //Forms name
            beforeSend: function (xhr) {
                $("#Submitbtn").attr("disabled");
                console.log("Ajax call initiated");
            },
            success: function (data) {

                if (data) {
                    $('#success').fadeIn(1000).html("Password Reset Done!"); //If successful, than throw a success message
                    window.location.replace("../Views/login.html");
                } else {
                    $('.throw_error').fadeIn(1000).html("Data not received!!"); //Throw relevant error
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