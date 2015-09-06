/*jslint plusplus: true*/
/*jshint onedef: true*/
/*jshint onevar: true*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    var firstDate = new Date(), location = document.getElementById("date"),
        timelocation = document.getElementById("time");
    
    location.innerHTML = firstDate.toDateString();
    timelocation.innerHTML = firstDate.toLocaleTimeString();
    
    window.setInterval(function () {
        var date = new Date();
        location.innerHTML = date.toDateString();
        timelocation.innerHTML = date.toLocaleTimeString();
    }, 1000);
});