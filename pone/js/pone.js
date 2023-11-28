function validatelogin() {
    var username;
    username = document.getElementById("username").value;
    if (username == "") {
        alert("Please enter your Username!");
        return false;
    };
}


function validateform() {
    var fname;
    fname = document.getElementById("fname").value;
    if (fname == "") {
        alert("Please enter your First Name!");
        return false;
    };
}
