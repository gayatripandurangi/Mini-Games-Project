function formValidation(){

    const nameTest = /^[a-zA-Z]+$/;
    const emailTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const fname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const reason = document.getElementById("reason").value;
    const message = document.getElementById("message").value;

    if(fname.match(nameTest) == null){
        alert("Please enter Alphabets only in name");
        return false;
    }
    if(email.match(emailTest) == null){
        alert("Please enter a valid email address");
        return false;
    }
    else{
        alert("You information are valid");
        alert(`Entered information: Name - ${fname}, email -${email}, reason - ${reason}, message - ${message}`);
        return true;
    }
}