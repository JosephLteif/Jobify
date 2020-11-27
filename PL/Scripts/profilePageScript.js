$(document).ready(function () {
    $('form').submit(function (event) { //Trigger on form submit
        console.log("Form submit event started");
        $('#name + .throw_error').empty(); //Clear the messages first
        $('#success').empty();

        var postForm = {//Fetch form data
            'name': $('input[name=name]').val(), //Store name fields value
            'action': 'test'
        };

        $.ajax({//Process the form using $.ajax()
            type: 'POST', //Method type
            url: 'php/services.php', //Your form processing file url
            data: postForm, //Forms name
            dataType: 'json',
            beforeSend: function (xhr) {
                $("#submitbtn").attr("disabled", "disabled");
                $("#divLoader").addClass("loader");
                console.log("Ajax call initiated");
            },
            success: function (data) {

                if (!data.success) { //If fails
                    if (data.errors.name) { //Returned if any error from process.php
                        $('.throw_error').fadeIn(1000).html(data.errors.name); //Throw relevant error
                    }
                } else {
                    $('#success').fadeIn(1000).append('<p>' + data.posted + '</p>'); //If successful, than throw a success message
                }
                
                console.log("Ajax call success");
            },
            error: function () {
                alert("System  currently unavailable, try again later.");
                console.log("Ajax call error");
            },
            complete: function () {
                $("#submitbtn").removeAttr("disabled");
                $("#divLoader").removeClass("loader");
                console.log("Ajax call completed");
            }

        });        
        event.preventDefault(); //Prevent the default submit
        console.log("Form submit event ended");
    });

});