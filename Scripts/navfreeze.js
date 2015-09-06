/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/
/*jslint node: true*/

$(document).ready(function () {
    "use strict";
    var $header = $("#headerid"), staticDistance = $header.offset().top, $central = $("#centralcontent");
    
    $(window).on('scroll', function () {
    
        var scrollTop = $(window).scrollTop();

        if (scrollTop > staticDistance) {
            $header.removeClass("header");
            $header.addClass("affix");
            $central.css("margin-top", "80px");
        } else {
            $header.removeClass("affix");
            $header.addClass("header");
            $central.css("margin-top", "20px");
        }
    });
});