"use strict"

//script that simulates active tabs
function activateTab(evt) {
// Declare all variables
    var i, tablinks;

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Add an "active" class to the button that opened the tab
    evt.currentTarget.className += " active";
}