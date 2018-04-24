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
var racerPosition = 0;

// Run the init() function when the page loads
window.onload = init;
window.onclick = MoveRacers;
//window.alert("yo");

function init() {
    document.getElementById("left_message").innerHTML = "<h1>Click to start!</h1>";
    document.getElementById("right_message").innerHTML = "<h1>Click to start!</h1>";
    document.getElementById("rat_damon").style.left = 0;
    document.getElementById("rat_leblanc").style.left = 0;
    messageAreaImage = "<img src='traffic_light_red.png' />";
}

function MoveRacers() {
    document.getElementById("left_message").innerHTML = "<h1>And they're off!</h1>";
    document.getElementById("message_area_image").innerHTML = "<img src='traffic_light_green.png' />";
    racerPosition += 5;
    document.getElementById("rat_damon").style.left = racerPosition + '%';
    document.getElementById("rat_leblanc").style.left = racerPosition + racerPosition + '%';
}

function MoveByFivePercent(currentPosition) {
    currentPosition += 5;
}

function AmountToString() {

}