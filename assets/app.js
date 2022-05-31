$(document).ready(function () {


    let localUser = JSON.parse(localStorage.getItem("dbUser"));
    if (localUser==null) {

        $("button").click(function () {
            if (localStorage.getItem("dbUser") == null) {
    
                let User = {
                    username: $("#username").val(),
                    password: $("#password").val(),
                    isLogin: false
                }
    
                if ($("#rememberCheck").is(':checked')) {
                    localStorage.setItem("dbUser", JSON.stringify(User));
                } else {
                    sessionStorage.setItem("dbUser", JSON.stringify(User));
                }
    
                window.location = "login.html";
    
            } else {
    
                let localUser = JSON.parse(localStorage.getItem("dbUser"));
                if (localUser.username == $("#username").val() && localUser.password == $("#password").val()) {
                    window.location = "login.html";
                }else{
                    alert("Username or password is wrong")
                }
            }
        })
    
    }else{

        window.location = "login.html";
        
    }

    









});