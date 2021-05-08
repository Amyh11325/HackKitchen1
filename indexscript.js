//||||||
//function that checks authentication password
function checkPassword() {
    var pass_s_p_ = document.getElementById("password").value;
    var name_s_p_ = document.getElementById("name").value;
    console.log(pass_s_p_);
    console.log(name_s_p_);

    console.log("hello");
    //document.location.href = 'file:///Users/amy/Downloads/HackKitchen1-main/cook.html';
    if (pass_s_p_ === "idiot" + name_s_p_ + "idiot" || pass_s_p_ === "Idiot" + name_s_p_ + "Idiot") {
        window.location.href="cook.html";
    } else {
        console.log("incorrect");
    }
    /*window.location.href = "(http://www.w3schools.com)";
    if (pass_s_p === "idiotRamseyFanidiot") {
        console.log("hello");
    }*/
}