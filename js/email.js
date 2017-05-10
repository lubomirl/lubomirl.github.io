function sendMail() {
    var link = "mailto:lubomir75@gmail.com"
             + "?subject=" + escape(document.getElementById('email_subject').value)
             + "&body=" + escape(document.getElementById('email_body').value)
    ;

    window.location.href = link;
}