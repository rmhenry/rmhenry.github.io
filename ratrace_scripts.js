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

// Run the init() function when the page loads
window.onclick = MoveRacers;

function init() {
    document.getElementById("left_message").innerHTML = "<h1>Click to start!</h1>";
    document.getElementById("right_message").innerHTML = "<h1>Click to start!</h1>";
    document.getElementById("rat_damon").style.left = 0;
    document.getElementById("rat_leblanc").style.left = 0;
    messageAreaImage = "<img src='traffic_light_red.png' />";
}

function MoveRacers(e) {
    var moveRacersInterval = setInterval(function () {
        document.getElementById("left_message").innerHTML = "<h1>And they're off!</h1>";
        document.getElementById("right_message").innerHTML = "<h1>And they're off!</h1>";
        document.getElementById("message_area_image").innerHTML = "<img src='traffic_light_green.png' />";

        damonPosition += (Math.floor(Math.random() * 3) + 1);
        document.getElementById("rat_damon").style.left = damonPosition + '%';
        leblancPosition += (Math.floor(Math.random() * 3) + 1);
        document.getElementById("rat_leblanc").style.left = leblancPosition + '%';

        if (leblancPosition >= 85 || damonPosition >= 85) {
            clearInterval(moveRacersInterval);
            DetermineWinner();
        }
    }, 200);

}

function DetermineWinner() {
    document.getElementById("message_area_image").innerHTML = "<img src='trophy.png' />";

    if (damonPosition > leblancPosition) {
        document.getElementById("left_message").innerHTML = "<h1>Rat Damon wins!</h1>";
        document.getElementById("right_message").innerHTML = "<h1>Jason Bourne to run!</h1>";
    }
    else if (leblancPosition > damonPosition) {
        document.getElementById("left_message").innerHTML = "<h1>Rat Leblanc wins!</h1>";
        document.getElementById("right_message").innerHTML = "<h1>Joey's not so slowy!</h1>";
    }
    else {
        document.getElementById("left_message").innerHTML = "<h1>Oh my...</h1>";
        document.getElementById("right_message").innerHTML = "<h1>It's a tie!</h1>";
    }
}