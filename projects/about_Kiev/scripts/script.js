(function(){

    "use strict"
    
    window.onscroll = function() {myFunction()};
    function myFunction() {
        var navbar = document.getElementById("myNavbar");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            navbar.className = "navbar-scroll"/*"w3-bar" + " w3-card" + " w3-animate-top" + " w3-white"*/;
        } else {
            navbar.className = navbar.className.replace("navbar-scroll", "navbar");
        }
    }


    let dateFrame = document.querySelector(".dateFrame");
    let date = new Date();
    let year = date.getFullYear();

    dateFrame.innerHTML = "© " + year + " Киев";

})();