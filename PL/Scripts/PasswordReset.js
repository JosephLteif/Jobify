$(document).ready(function () {
    $('form').submit(function (event) { //Trigger on form submit
        console.log("Form submit event started");
        $('#name + .throw_error').html(""); //Clear the messages first
        $('#success').html("");

        var postForm = {//Fetch form data
            'email': $('input[name=email]').val(), //Store name fields value
        };

        $.ajax({//Process the form using $.ajax()
            type: 'POST', //Method type
            url: '../Php/passwordResetLogic.php', //Your form processing file url
            data: postForm, //Forms name
            beforeSend: function (xhr) {
                $("#Loginbtn").attr("disabled", "disabled");
                console.log("Ajax call initiated");
            },
            success: function (data) {

                if (data) {
                    $('#success').fadeIn(1000).html("Logged in!"); //If successful, than throw a success message
                    window.location.replace("../Views/new_password.html");
                }else {
                    $('.throw_error').fadeIn(1000).html("Data not received!!"); //Throw relevant error
                }
                
                console.log("Ajax call success");
            },
            error: function () {
                $('.throw_error').fadeIn(1000).html("Serve error!!"); //Throw relevant error
                console.log("Ajax call error");
            },
            complete: function () {
                $("#Loginbtn").removeAttr("disabled");
                console.log("Ajax call completed");
            }

        });        
        event.preventDefault(); //Prevent the default submit
        console.log("Form submit event ended");
    });

});