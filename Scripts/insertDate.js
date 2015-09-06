/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/
/*jslint node: true*/

$(document).ready(function () {
    "use strict";
    var date = new Date(), location = document.getElementById("date"), node,
        para = document.createElement("p");
    
    location.innerHTML = date.toDateString();
    
    window.setInterval(function () {
        location.innerHTML = date.toDateString();
    }, 1000);
});