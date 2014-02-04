
$(document).ready(function(){
// options
var timeout = 15000;
var url = "../../index.html"; //ovde stavi celu web adresu

// function to execute upon timeout
var redirect = function() {
    console.log("redirecting");
    window.location.href = url;
};

//function to reset the timeout
var reset = function() {
    window.clearTimeout(timeoutHandle);
    timeoutHandle = window.setTimeout(redirect, timeout);
    console.log("resetting timer");
};
    
// timeout timer
var timeoutHandle = window.setTimeout(redirect, timeout);

//bind browser events
$(window).scroll(reset);
$(document).click(reset);
$(document).bind("swipe", reset);
});
