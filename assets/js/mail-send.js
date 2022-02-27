function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function sendEmail() {
  console.log("Sending email");

  let err = "";

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (name == "") {
    err += "<p>The Name Filed is Blank</p>";
  }
  if (email == "") {
    err += "<p>The Email Filed is Blank</p>";
  }
  if (subject == "") {
    err += "<p>The Subject Filed is Blank</p>";
  }
  if (message == "") {
    err += "<p>The Message Filed is Blank</p>";
  }
  if (validateEmail(email) == false) {
    err += "<p>The Email Entered is in a wrong format</p>";
  }

  if (err == "") {
    document.getElementById("error-message").removeAttribute("class");
    document
      .getElementById("sent-message")
      .setAttribute("class", "alert alert-warning");
    document.getElementById("sent-message").innerHTML = "Sending....";
    Email.send({
      Host: "smtp.gmail.com",
      Username: "pabhishekm@gmail.com",
      Password: "unzoktpivoaqzsql",
      To: "pabhishekm@gmail.com",
      From: email,
      Subject: "My Resume Response: " + subject,
      Body:
        "From: " +
        name +
        "<br>" +
        "Email Address: " +
        email +
        "<br><br><br>" +
        message,
    }).then(function (message) {
      document
        .getElementById("sent-message")
        .setAttribute("class", "alert alert-success");
      document.getElementById("sent-message").innerHTML =
        "Thank You for Contacting Me";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    });
  } else {
    document.getElementById("sent-message").removeAttribute("class");
    document
      .getElementById("error-message")
      .setAttribute("class", "alert alert-danger");
    document.getElementById("error-message").innerHTML = err;
  }
}
