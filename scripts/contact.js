const nameTest = /^[a-zA-Z]+$/;
const emailTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let form = document.getElementById("myform");
let fname = document.getElementById("name");
let email = document.getElementById("email");
let reason = document.getElementById("reason");
let message = document.getElementById("message");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let fnameValue = fname.value;
    let emailValue = email.value;
    let reasonValue = reason.value;
    let messageValue = message.value;

    if(fnameValue.match(nameTest) == null){
        document.getElementById("errorName").innerHTML = "<br/>Please enter only alphabets in Name";
    }
    else if(emailValue.match(emailTest) == null){
        document.getElementById("errorEmail").innerHTML = "<br/>Please enter a valid email";
    }
    else{
        form.innerHTML = "<h3> Thank you "+fnameValue+" for contacting us!!<br/><br/>We will get in touch with you soon. </h3>";
        form.style.color = "#04AA6D";
        console.log(reasonValue+" "+messageValue);
    }
});
