$(document).ready(function () {
  var UserData;

  $("#JobSeekerRefreshbtn").on("click", function (event) {
    //Trigger on form submit
    console.log("Form submit event started");
    $("#name + .throw_error").html(""); //Clear the messages first
    $("#success").html("");

    var postForm = {
      //Fetch form data
      test: "Seeker",
    };

    $.ajax({
      //Process the form using $.ajax()
      type: "POST", //Method type
      url: "../Php/profilePageLogic(JobSeekers).php", //Your form processing file url
      data: postForm,
      beforeSend: function (xhr) {
        $("#JobSeekerRefreshbtn").attr("disabled", "disabled");
        // $("#divLoader").addClass("loader");
        console.log("Ajax call initiated");
      },
      success: function (data) {
        if (!data) {
          //If fails
          $(".throw_error").fadeIn(1000).html("No Data Found!"); //Throw relevant error
        } else {
          data = JSON.parse(data);
          $("#rowbar").html("");
          $("#success").fadeIn(1000).html("Data Found!!"); //If successful, than throw a success message
          for (var i in data) {
            $("#rowbar").append(
              '             <div class="col-4">  ' +
                '               <div class="container mt-5">  ' +
                '                 <div class="card p-3">  ' +
                '                   <div class="d-flex align-items-center">  ' +
                '                     <div class="image"> <img  ' +
                '                         src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"  ' +
                '                         class="rounded" width="155"> </div>  ' +
                '                     <div class="ml-3 w-100">  ' +
                '                       <h4 class="mb-0 mt-0">' +
                data[i][1] +
                " " +
                data[i][2] +
                "</h4> <span>" +
                data[i][3] +
                "</span>  " +
                '                       <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">  ' +
                '                         <div class="d-flex flex-column"> <span class="articles">ID</span> <span  ' +
                '                             class="number1">' +
                data[i][0] +
                "</span> </div>  " +
                '                         <div class="d-flex flex-column"> <span class="followers">Followers</span> <span  ' +
                '                             class="number2">' +
                data[i][4] +
                "</span> </div>  " +
                '                         <div class="d-flex flex-column"> <span class="rating">Following</span> <span  ' +
                '                             class="number3">' +
                data[i][5] +
                "</span>  " +
                "                         </div>  " +
                "                       </div>  " +
                '                       <div class="button mt-2 d-flex flex-row align-items-center"> <button  ' +
                '                           id="Viewbtn" class="btn btn-sm btn-outline-primary w-100">View</button> <button id="deletebtn"  ' +
                '                           class="btn btn-sm btn-primary w-100 ml-2">Delete</button> </div>  ' +
                "                     </div>  " +
                "                   </div>  " +
                "                 </div>  " +
                "               </div>  " +
                "            </div>  "
            );
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
      },
    });
    event.preventDefault(); //Prevent the default submit
    console.log("Form submit event ended");
  });

  $(document).on("click", "#deletebtn", function () {
    console.log("Form submit event started");
    $("#name + .throw_error").html(""); //Clear the messages first
    $("#success").html("");

    var postForm = {
      //Fetch form data
      value: $(this)[0].parentElement.parentElement.children[2].children[0]
        .children[1].childNodes[0].nodeValue,
      test: "Delete",
    };

    $.ajax({
      //Process the form using $.ajax()
      type: "POST", //Method type
      url: "../Php/profilePageLogic(JobSeekers).php", //Your form processing file url
      data: postForm,
      beforeSend: function (xhr) {
        $("#Viewbtn").attr("disabled", "disabled");
        console.log("Ajax call initiated");
      },
      success: function (data) {
        if (data) {
          console.log("Form submit event started");
          $("#name + .throw_error").html(""); //Clear the messages first
          $("#success").html("");

          var postForm = {
            //Fetch form data
            test: "Seeker",
          };

          $.ajax({
            //Process the form using $.ajax()
            type: "POST", //Method type
            url: "../Php/profilePageLogic(JobSeekers).php", //Your form processing file url
            data: postForm,
            beforeSend: function (xhr) {
              $("#JobSeekerRefreshbtn").attr("disabled", "disabled");
              // $("#divLoader").addClass("loader");
              console.log("Ajax call initiated");
            },
            success: function (data) {
              if (!data) {
                //If fails
                $(".throw_error").fadeIn(1000).html("No Data Found!"); //Throw relevant error
              } else {
                data = JSON.parse(data);
                $("#rowbar").html("");
                $("#success").fadeIn(1000).html("Data Found!!"); //If successful, than throw a success message
                for (var i in data) {
                  $("#rowbar").append(
                    '             <div class="col-4">  ' +
                      '               <div class="container mt-5">  ' +
                      '                 <div class="card p-3">  ' +
                      '                   <div class="d-flex align-items-center">  ' +
                      '                     <div class="image"> <img  ' +
                      '                         src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"  ' +
                      '                         class="rounded" width="155"> </div>  ' +
                      '                     <div class="ml-3 w-100">  ' +
                      '                       <h4 class="mb-0 mt-0">' +
                      data[i][1] +
                      " " +
                      data[i][2] +
                      "</h4> <span>" +
                      data[i][3] +
                      "</span>  " +
                      '                       <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">  ' +
                      '                         <div class="d-flex flex-column"> <span class="articles">ID</span> <span  ' +
                      '                             class="number1">' +
                      data[i][0] +
                      "</span> </div>  " +
                      '                         <div class="d-flex flex-column"> <span class="followers">Followers</span> <span  ' +
                      '                             class="number2">' +
                      data[i][4] +
                      "</span> </div>  " +
                      '                         <div class="d-flex flex-column"> <span class="rating">Following</span> <span  ' +
                      '                             class="number3">' +
                      data[i][5] +
                      "</span>  " +
                      "                         </div>  " +
                      "                       </div>  " +
                      '                       <div class="button mt-2 d-flex flex-row align-items-center"> <button  ' +
                      '                           id="Viewbtn" class="btn btn-sm btn-outline-primary w-100">View</button> <button id="deletebtn"  ' +
                      '                           class="btn btn-sm btn-primary w-100 ml-2">Delete</button> </div>  ' +
                      "                     </div>  " +
                      "                   </div>  " +
                      "                 </div>  " +
                      "               </div>  " +
                      "            </div>  "
                  );
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
            },
          });
          event.preventDefault(); //Prevent the default submit
          console.log("Form submit event ended");
        }
        console.log("Ajax call success");
      },
      error: function () {
        alert("System  currently unavailable, try again later.");
        console.log("Ajax call error");
      },
      complete: function () {
        $("#Viewbtn").removeAttr("disabled");
        console.log("Ajax call completed");
      },
    });
    event.preventDefault(); //Prevent the default submit
    console.log("Form submit event ended");
  });

  $(document).on("click", "#Viewbtn", function () {
    $(".modal").css("visibility", "visible");

    console.log("Form submit event started");
    $("#name + .throw_error").html(""); //Clear the messages first
    $("#success").html("");

    var postForm = {
      //Fetch form data
      value: $(this)[0].parentElement.parentElement.children[2].children[0]
        .children[1].childNodes[0].nodeValue,
      test: "View",
    };

    $.ajax({
      //Process the form using $.ajax()
      type: "POST", //Method type
      url: "../Php/profilePageLogic(JobSeekers).php", //Your form processing file url
      data: postForm,
      beforeSend: function (xhr) {
        $("#Viewbtn").attr("disabled", "disabled");
        console.log("Ajax call initiated");
      },
      success: function (data) {
        if (!data) {
          //If fails
          $(".throw_error").fadeIn(1000).html("No Data Found!"); //Throw relevant error
        } else {
          data = JSON.parse(data);
          for (var i in data) {
            $("#ID").html("ID: " + data[i][0]);
            $("#Fullname").html("FullName: " + data[i][1] + " " + data[i][2]);
            $("#EmailAddress").html("Email Address: " + data[i][3]);
            $("#Followers").html("Followers: " + data[i][4]);
            $("#Followings").html("Followings: " + data[i][5]);
          }
        }

        console.log("Ajax call success");
      },
      error: function () {
        alert("System  currently unavailable, try again later.");
        console.log("Ajax call error");
      },
      complete: function () {
        $("#Viewbtn").removeAttr("disabled");
        console.log("Ajax call completed");
      },
    });
    event.preventDefault(); //Prevent the default submit
    console.log("Form submit event ended");
  });

  $(".close").on("click", function () {
    $(".modal").css("visibility", "hidden");
  });

  $(".close1").on("click", function () {
    $(".modal1").css("visibility", "hidden");
  });

  $(document).on("click", function (event) {
    if (event.target == $(".modal")) {
      $(".modal").css("visibility", "hidden");
    }
  });

  $("#JobRefreshbtn").on("click", function (event) {
    console.log("Form submit event started");
    $("#name + .throw_error").html(""); //Clear the messages first
    $("#success").html("");

    var postForm = {
      //Fetch form data
      test: "Job",
    };

    $.ajax({
      //Process the form using $.ajax()
      type: "POST", //Method type
      url: "../Php/profilePageLogic(JobSeekers).php", //Your form processing file url
      data: postForm,
      beforeSend: function (xhr) {
        $("#JobRefreshbtn").attr("disabled", "disabled");
        console.log("Ajax call initiated");
      },
      success: function (data) {
        if (!data) {
          //If fails
          $(".throw_error").fadeIn(1000).html("No Data Found!"); //Throw relevant error
        } else {
          data = JSON.parse(data);
          $("#rowbar2").html("");
          $("#success").fadeIn(1000).html("Data Found!!"); //If successful, than throw a success message
          for (var i in data) {
            $("#rowbar2").append(
              '             <div class="col-4">  ' +
                '               <div class="container mt-5">  ' +
                '                 <div class="card p-3">  ' +
                '                   <div class="d-flex align-items-center">  ' +
                '                     <div class="image"> <img  ' +
                '                         src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"  ' +
                '                         class="rounded" width="155"> </div>  ' +
                '                     <div class="ml-3 w-100">  ' +
                '                       <h4 class="mb-0 mt-0">' +
                data[i][1] +
                " " +
                data[i][2] +
                "</h4> <span>" +
                data[i][3] +
                "</span>  " +
                '                       <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">  ' +
                '                         <div class="d-flex flex-column"> <span class="articles">Job ID</span> <span  ' +
                '                             class="number1">' +
                data[i][0] +
                "</span> </div>  " +
                '                         <div class="d-flex flex-column"> <span class="followers" style="margin-left: 50%">Date</span> <span  ' +
                '                             class="number2">' +
                data[i][4] +
                "</span> </div>  " +
                '                         <div class="d-flex flex-column"> <span class="rating">Applicants</span> <span  ' +
                '                             class="number3">' +
                data[i][5] +
                "</span>  " +
                "                         </div>  " +
                "                       </div>  " +
                '                       <div class="button mt-2 d-flex flex-row align-items-center"> <button  ' +
                '                           id="Viewbtn2" class="btn btn-sm btn-outline-primary w-100">View</button> <button id="deletebtn2"  ' +
                '                           class="btn btn-sm btn-primary w-100 ml-2">Delete</button> </div>  ' +
                "                     </div>  " +
                "                   </div>  " +
                "                 </div>  " +
                "               </div>  " +
                "            </div>  "
            );
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
      },
    });
    event.preventDefault(); //Prevent the default submit
    console.log("Form submit event ended");
  });

  $(document).on("click", "#Viewbtn2", function () {
    $(".modal1").css("visibility", "visible");

    console.log("Form submit event started");
    $("#name + .throw_error").html(""); //Clear the messages first
    $("#success").html("");

    var postForm = {
      //Fetch form data
      value: $(this)[0].parentElement.parentElement.children[2].children[0]
        .children[1].childNodes[0].nodeValue,
      test: "View2",
    };

    $.ajax({
      //Process the form using $.ajax()
      type: "POST", //Method type
      url: "../Php/profilePageLogic(JobSeekers).php", //Your form processing file url
      data: postForm,
      beforeSend: function (xhr) {
        $("#Viewbtn2").attr("disabled", "disabled");
        console.log("Ajax call initiated");
      },
      success: function (data) {
        if (!data) {
          //If fails
          $(".throw_error").fadeIn(1000).html("No Data Found!"); //Throw relevant error
        } else {
          data = JSON.parse(data);
          for (var i in data) {
            $("#Title").html("Title: " + data[i][1]);
            $("#ID").html("ID: " + data[i][0]);
            $("#Description").html("ID: " + data[i][3]);
            $("#CompanyID").html("Company ID: " + data[i][2]);
            $("#JobOfferDate").html("JobOfferDate: " + data[i][4]);
            $("#NumberOfApplicants").html("NumberOfApplicants: " + data[i][5]);
          }
        }

        console.log("Ajax call success");
      },
      error: function () {
        alert("System  currently unavailable, try again later.");
        console.log("Ajax call error");
      },
      complete: function () {
        $("#Viewbtn2").removeAttr("disabled");
        console.log("Ajax call completed");
      },
    });
    event.preventDefault(); //Prevent the default submit
    console.log("Form submit event ended");
  });

  $(document).on("click", "#deletebtn2", function () {
    console.log("Form submit event started");
    $("#name + .throw_error").html(""); //Clear the messages first
    $("#success").html("");

    var postForm = {
      //Fetch form data
      value: $(this)[0].parentElement.parentElement.children[2].children[0]
        .children[1].childNodes[0].nodeValue,
      test: "Delete2",
    };

    $.ajax({
      //Process the form using $.ajax()
      type: "POST", //Method type
      url: "../Php/profilePageLogic(JobSeekers).php", //Your form processing file url
      data: postForm,
      beforeSend: function (xhr) {
        $("#Viewbtn2").attr("disabled", "disabled");
        console.log("Ajax call initiated");
      },
      success: function (data) {
        if (data) {
          console.log("Form submit event started");
          $("#name + .throw_error").html(""); //Clear the messages first
          $("#success").html("");

          var postForm = {
            //Fetch form data
            test: "Job",
          };

          $.ajax({
            //Process the form using $.ajax()
            type: "POST", //Method type
            url: "../Php/profilePageLogic(JobSeekers).php", //Your form processing file url
            data: postForm,
            beforeSend: function (xhr) {
              $("#JobRefreshbtn").attr("disabled", "disabled");
              console.log("Ajax call initiated");
            },
            success: function (data) {
              if (!data) {
                //If fails
                $(".throw_error").fadeIn(1000).html("No Data Found!"); //Throw relevant error
              } else {
                data = JSON.parse(data);
                $("#rowbar2").html("");
                $("#success").fadeIn(1000).html("Data Found!!"); //If successful, than throw a success message
                for (var i in data) {
                  $("#rowbar2").append(
                    '             <div class="col-4">  ' +
                      '               <div class="container mt-5">  ' +
                      '                 <div class="card p-3">  ' +
                      '                   <div class="d-flex align-items-center">  ' +
                      '                     <div class="image"> <img  ' +
                      '                         src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"  ' +
                      '                         class="rounded" width="155"> </div>  ' +
                      '                     <div class="ml-3 w-100">  ' +
                      '                       <h4 class="mb-0 mt-0">' +
                      data[i][1] +
                      " " +
                      data[i][2] +
                      "</h4> <span>" +
                      data[i][3] +
                      "</span>  " +
                      '                       <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">  ' +
                      '                         <div class="d-flex flex-column"> <span class="articles">Job ID</span> <span  ' +
                      '                             class="number1">' +
                      data[i][0] +
                      "</span> </div>  " +
                      '                         <div class="d-flex flex-column" > <span class="followers" style="margin-left: 50%">Date</span> <span  ' +
                      '                             class="number2">' +
                      data[i][4] +
                      "</span> </div>  " +
                      '                         <div class="d-flex flex-column"> <span class="rating">Applicants</span> <span  ' +
                      '                             class="number3">' +
                      data[i][5] +
                      "</span>  " +
                      "                         </div>  " +
                      "                       </div>  " +
                      '                       <div class="button mt-2 d-flex flex-row align-items-center"> <button  ' +
                      '                           id="Viewbtn2" class="btn btn-sm btn-outline-primary w-100">View</button> <button id="deletebtn2"  ' +
                      '                           class="btn btn-sm btn-primary w-100 ml-2">Delete</button> </div>  ' +
                      "                     </div>  " +
                      "                   </div>  " +
                      "                 </div>  " +
                      "               </div>  " +
                      "            </div>  "
                  );
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
            },
          });
          event.preventDefault(); //Prevent the default submit
          console.log("Form submit event ended");
        }
        console.log("Ajax call success");
      },
      error: function () {
        alert("System  currently unavailable, try again later.");
        console.log("Ajax call error");
      },
      complete: function () {
        $("#Viewbtn2").removeAttr("disabled");
        console.log("Ajax call completed");
      },
    });
    event.preventDefault(); //Prevent the default submit
    console.log("Form submit event ended");
  });

  var togglevarsidebar = 0;
  $("#hidebtn").on("click", function () {
    if (togglevarsidebar === 0) {
      $(".sidebar").css("width", "0px");
      $("#side").css("margin-left", "50px");
      $(this).css({
        "-webkit-transform": "rotate(0deg)",
        "-moz-transform": "rotate(0deg)",
        transform: "rotate(0deg)" /* For modern browsers(CSS3)  */,
      });

      togglevarsidebar++;
    } else {
      $(".sidebar").css("width", "200px");
      $("#side").css("margin-left", "250px");
      $(this).css({
        "-webkit-transform": "rotate(180deg)",
        "-moz-transform": "rotate(180deg)",
        transform: "rotate(180deg)" /* For modern browsers(CSS3)  */,
      });
      togglevarsidebar--;
    }
  });

  $("#Homebtn").on("click", function () {
    $("#HomePage").css({
      width: "100%",
      height: "100%",
      visibility: "visible",
    });
    $("#JobSeekersPage").css({ width: "0", height: "0", visibility: "hidden" });
    $("#JobOffersPage").css({ width: "0", height: "0", visibility: "hidden" });
    $(".sidebar a").each(function () {
      if ($(this).hasClass("active")) $(this).removeClass("active");
    });
    $("#Homebtn").addClass("active");
  });

  $("#JobSeekersbtn").on("click", function () {
    $("#HomePage").css({ width: "0", height: "0", visibility: "hidden" });
    $("#JobSeekersPage").css({
      width: "100%",
      height: "100%",
      visibility: "visible",
    });
    $("#JobOffersPage").css({ width: "0", height: "0", visibility: "hidden" });
    $(".sidebar a").each(function () {
      if ($(this).hasClass("active")) $(this).removeClass("active");
    });
    $("#JobSeekersbtn").addClass("active");
  });

  $("#JobOffersbtn").on("click", function () {
    $("#HomePage").css({ width: "0", height: "0", visibility: "hidden" });
    $("#JobSeekersPage").css({ width: "0", height: "0", visibility: "hidden" });
    $("#JobOffersPage").css({
      width: "100%",
      height: "100%",
      visibility: "visible",
    });
    $(".sidebar a").each(function () {
      if ($(this).hasClass("active")) $(this).removeClass("active");
    });
    $("#JobOffersbtn").addClass("active");
  });
});

$(document).ready(function () {
  console.log("Form submit event started");

  $.ajax({
    //Process the form using $.ajax()
    type: "POST", //Method type
    url: "../Php/CheckSessionLogic.php", //Your form processing file url
    beforeSend: function (xhr) {
      console.log("Ajax call initiated");
    },
    success: function (data) {
      if (!data) {
        //If fails
        window.location.replace("../Views/login.html");
      }

      console.log("Ajax call success");
    },
    error: function () {
      alert("System  currently unavailable, try again later.");
      console.log("Ajax call error");
    },
    complete: function () {
      console.log("Ajax call completed");
    },
  });
  console.log("Form submit event ended");

  $("#JobOffersbtn").on("click", function () {
    $("#HomePage").css({ width: "0", height: "0", visibility: "hidden" });
    $("#JobSeekersPage").css({ width: "0", height: "0", visibility: "hidden" });
    $("#JobOffersPage").css({
      width: "100%",
      height: "100%",
      visibility: "visible",
    });
    $(".sidebar a").each(function () {
      if ($(this).hasClass("active")) $(this).removeClass("active");
    });
    $("#JobOffersbtn").addClass("active");
  });
});

window.onload = function () {
  var dataPoints1 = [];
  var dataPoints2 = [];

  $(document).ready(function () {
    var postForm = {
      //Fetch form data
      test: "UserChart",
    };
    $.ajax({
      url: "../Php/profilePageLogic(JobSeekers).php",
      type: "POST",
      data: postForm,
      success: function (response) {
        response = JSON.parse(response);
        for (var i in response) {
          dataPoints1.push({
            label: response[i].x,
            y: response[i].y,
          });
        }
        chart1.render();
      },
      error: function () {
        alert("System  currently unavailable, try again later.");
        console.log("Ajax call error");
      },
    });
  });


  $(document).ready(function () {
    var postForm = {
      //Fetch form data
      test: "JobChart",
    };
    $.ajax({
      url: "../Php/profilePageLogic(JobSeekers).php",
      type: "POST",
      data: postForm,
      success: function (response) {
        response = JSON.parse(response);
        for (var i in response) {
          dataPoints2.push({
            label: response[i].x,
            y: response[i].y,
          });
        }
        chart2.render();
      },
    });
  });

  var chart1 = new CanvasJS.Chart("chartContainer1", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Number applications per Seeker",
    },
    data: [
      {
        type: "column",
        dataPoints: dataPoints1,
      },
    ],
  });

  var chart2 = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Number of applicants per job",
    },
    data: [
      {
        type: "column",
        dataPoints: dataPoints2,
      },
    ],
  });
};
