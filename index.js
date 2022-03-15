function expert() {
    let text;
    let person = promot("Please enter your email:", "abc@gmail.com");
    if(person == null || person == "") {
        text = "You cancelled the prompt";
    } else {
        text = "Hello" + person + "will contact you soon";
    }
    document.getElementById("expert").innerHTML = text;
}
function discord() {
    let text;
    if (confirm("Press ok to join Discord!")) {
      text = "Congratulation you have joined Discord!";
    } else {
      text = "You Cancelled the event!";
    }
    document.getElementById("discord").innerHTML = text;
}