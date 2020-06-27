function sendMessageToHost(email, body, subject) {
    Email.send({
        SecureToken: "eb2ffeb9-c4e3-4387-84e6-f285032faa13",
        To: 'codegirls.opensource@gmail.com',
        From: email,
        Subject: subject,
        Body: body,
    }).then(
        alert(`
        Your mail has been send successfully!!
        Thanks..
      `)
      
    );
}


function sendEmail() {
    let name = $("#name").val();
    let email = $("#email").val();
    let subject = $("#subject").val();
    let message = $("#message").val();
    if (name == "") {
        $("#name").css({ "border-color": "red" })
        return;
    }

    if (email == "") {
        $("#email").css({ "border-color": "red" })
        return;
    }
    if (subject == "") {
        $("#subject").css({ "border-color": "red" })
        return;
    }

    if (message == "") {
        $("#message").css({ "border-color": "red" })
        return;
    }

    let s = `
    <html>
         <h2>Message From osDFS website</h2>
      Name of the sender: ${name} <br/>
      Email id of the sender : ${email} <br/>
      Subject : ${subject} <br/>
      Message : ${message}
    </html>
      
    `
    sendMessageToHost(email, s, subject);
    window.location.reload();
}

