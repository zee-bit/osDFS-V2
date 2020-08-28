url = "https://osdfsbackend.herokuapp.com";
$("#submit").click(function () {
  var first_name = $("#first_name").val();
  var last_name = $("#last_name").val();
  var name = first_name + " " + last_name;
  var city = $("#city").val();
  var email = $("#email").val();
  var phoneNo = $("#phone_number").val();
  var univ = $("#university").val();
  var git = $("#github").val();
  var linkedin = $("#linkedin").val();
  var queston = $("#question").val();
  var cv = $("#cv").val();
  var team = $(".selected").text();

  if (first_name == "") return;
  else if (last_name == "") return;
  else if (city == "") return;
  else if (email == "") return;
  else if (phoneNo == "") return;
  else if (univ == "") return;
  else if (git == "") return;
  else if (linkedin == "") return;
  else if (queston == "") return;
  else if (cv == "") return;
  else if (team == "") return;
  else {
    $.ajax({
      url: url + "/newUserEntry",
      method: "POST",
      data: {
        userName: name,
        userEmail: email,
        city: city,
        phone: phoneNo,
        university: univ,
        githubProfile: git,
        linkdinProfile: linkedin,
        canLeadUs: queston,
        cvLink: cv,
        team: team,
      },

      success: function (res) {
        if (res.status !== 200) {
          console.log(res);
          $("#message").text(res.message);
          alert(res.message);
          setTimeout(function () {
            window.location.reload(true);
          }, 8000);
        } else if (res.status === 200) {
          console.log(res);
          $("#message").text(res.message);
          alert(res.message);
        }
      },
      error: function (err) {
        console.log(err);
        alert(err);
      },
    });
  }
});
