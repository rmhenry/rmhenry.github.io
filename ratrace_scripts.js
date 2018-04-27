"use strict";

/*
   CIS370-898 Introduction to Web Development
   Final Project: Rat Race
   Author: Reese Henry
   Date:   4/20/2018
   
   File: ratrace_scripts.js

   Variables
   =========

   variable names
      description
  	

    Function List
    =============

    function names
      description
	
*/

/* ================================================================= */

var leftMessage = document.getElementById("left_message").innerHTML;
var rightMessage = document.getElementById("right_message").innerHTML;
var messageAreaImage = document.getElementById("message_area_image").innerHTML;
var damonPosition = 0;
var leblancPosition = 0;
//var interval = setInterval(MoveRacers, 250);


// Run the init() function when the page loads
window.onload = init;

//document.getElementById("message_area_image").click = StartRace;
window.onclick = MoveRacers;
//window.alert("yo");

function init() {
    document.getElementById("left_message").innerHTML = "<h1>Click to start!</h1>";
    document.getElementById("right_message").innerHTML = "<h1>Click to start!</h1>";
    document.getElementById("rat_damon").style.left = 0;
    document.getElementById("rat_leblanc").style.left = 0;
    messageAreaImage = "<img src='traffic_light_red.png' />";
}



function MoveRacers(e) {
    setInterval(function () {
        document.getElementById("left_message").innerHTML = "<h1>And they're off!</h1>";
        document.getElementById("message_area_image").innerHTML = "<img src='traffic_light_green.png' />";

        damonPosition += (Math.floor(Math.random() * 3) + 1);
        document.getElementById("rat_damon").style.left = damonPosition + '%';
        leblancPosition += (Math.floor(Math.random() * 3) + 1);
        document.getElementById("rat_leblanc").style.left = leblancPosition + '%';
    }, 200);

}

function MoveByFivePercent(currentPosition) {
    currentPosition += 5;
}

function AmountToString() {

}