function check() {
    
   var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    

    // check if the guess is correct
    if(username == "admin" && password=="123456") {
        window.location.href="page1.html";
    }
        else
         {   alert("login failed");
    
    }
}



