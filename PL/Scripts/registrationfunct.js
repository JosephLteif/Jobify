$(document).ready(function () {
  var done = false;
  var done1 = false;
  var done2 = false;
  var done3 = false;
  var done4 = false;

  checkforsubmit();

  $("form").submit(function (event) {
    //Trigger on form submit
    console.log("Form submit event started");
    $("#name + .throw_error").html(""); //Clear the messages first
    $("#success").html("");

    var postForm = {
      //Fetch form data
      email: $("input[name=email]").val(), //Store name fields value
      pass: $("input[name=pass]").val(),
      lastname: $("input[name=lname]").val(), //Store name fields value
      firstname: $("input[name=fname]").val(),
    };

    $.ajax({
      //Process the form using $.ajax()
      type: "POST", //Method type
      url: "../Php/SignUpLogic.php", //Your form processing file url
      data: postForm, //Forms name
      beforeSend: function (xhr) {
        $("#Submitbtn").attr("disabled");
        console.log("Ajax call initiated");
      },
      success: function (data) {
        if (data) {
          $("#success").fadeIn(1000).html("Registration complete!"); //If successful, than throw a success message
          window.location.replace("../Views/login.html");
        } else {
          $(".throw_error").fadeIn(1000).html("Registration not valid!"); //Throw relevant error
        }
        console.log("Ajax call success");
      },
      error: function () {
        $(".throw_error").fadeIn(1000).html("Serve error!!"); //Throw relevant error
        console.log("Ajax call error");
      },
      complete: function () {
        $("#Submitbtn").removeAttr("disabled");
        console.log("Ajax call completed");
      },
    });
    event.preventDefault(); //Prevent the default submit
    console.log("Form submit event ended");
  });

  $("#email").focusout(function (event) {
    console.log("Form submit event started");
    var myvar = $("input[name=email]").val();
    var postForm = {
      //Fetch form data
      email: myvar,
    };

    $.ajax({
      //Process the form using $.ajax()
      type: "POST", //Method type
      url: "../Php/email verify.php", //Your form processing file url
      data: postForm, //Forms name
      beforeSend: function (xhr) {
        console.log("Ajax call initiated");
      },
      success: function (data) {
        if (!data) {
          //If fails
          console.log("Done");
          done = true; //Throw relevant error
          $("#email").css("border-bottom", "3px solid #34F458");
        } else {
          console.log("Nope");
          $("#email").css("border-bottom", "3px solid #F90A0A");
          done = false; //If successful, than throw a success message
        }

        console.log("Ajax call success");
      },
      error: function () {
        alert("System  currently unavailable, try again later.");
        console.log("Ajax call error");
      },
      complete: function () {
        checkforsubmit();
        console.log("Ajax call completed");
      },
    });
    event.preventDefault(); //Prevent the default submit
    console.log("Form submit event ended");
  });

  $("#fname").focusout(function () {
    if (
      $("input[name=fname]").val() == "" ||
      $("input[name=fname]").val() == null
    ) {
      $("#fname").css("border-bottom", "3px solid #F90A0A");
      done1 = false;
    } else {
      $("#fname").css("border-bottom", "3px solid #34F458");
      done1 = true;
    }
    checkforsubmit();
  });

  $("#lname").focusout(function () {
    if (
      $("input[name=lname]").val() == "" ||
      $("input[name=lname]").val() == null
    ) {
      $("#lname").css("border-bottom", "3px solid #F90A0A");
      done2 = false;
    } else {
      $("#lname").css("border-bottom", "3px solid #34F458");
      done2 = true;
    }
    checkforsubmit();
  });

  // $('#email').focusout(function(){
  // 	if($('input[name=email]').val() == '' || $('input[name=email]').val() == null){
  // 		$('#email').css("border-bottom","3px solid #F90A0A");
  // 	} else {
  // 		$('#email').css("border-bottom","3px solid #34F458");
  // 	}
  // })

  $("#pass").focusout(function () {
    if (
      $("input[name=pass]").val() == "" ||
      $("input[name=pass]").val() == null
    ) {
      $("#pass").css("border-bottom", "3px solid #F90A0A");
      done3 = false;
    } else {
      $("#pass").css("border-bottom", "3px solid #34F458");
      done3 = true;
    }
    checkforsubmit();
  });

  $("#rpass").focusout(function () {
    if (
      $("input[name=rpass]").val() == "" ||
      $("input[name=rpass]").val() == null ||
      $("input[name=rpass]").val() !== $("input[name=pass]").val()
    ) {
      $("#rpass").css("border-bottom", "3px solid #F90A0A");
      done4 = false;
    } else {
      $("#rpass").css("border-bottom", "3px solid #34F458");
      done4 = true;
    }
    checkforsubmit();
  });

  function checkforsubmit() {
    if (done && done1 && done2 && done3 && done4) {
      $("#Submitbtn").removeAttr("disabled");
    } else {
      $("#Submitbtn").attr("disabled", "disabled");
    }
  }
});
