$(document).ready(function () {
    $('form').submit(function (event) { //Trigger on form submit
        console.log("Form submit event started");

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

                if (data) { //If fails
                    window.location.replace("../Views/new_password.html");
                }
                
                console.log("Ajax call success");
            },
            error: function () {
                alert("System  currently unavailable, try again later.");
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