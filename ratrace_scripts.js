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

var damonPosition;
var leblancPosition;


// Run the init() function when the page loads
window.onload = init;

// Run the MoveRacers() function when the mouse is clicked
var race = window.onclick = MoveRacers;

var winner = DetermineWinner();


function init() {
    //document.getElementById("left_message").innerHTML = "<h1>Click to start!</h1>";
    //document.getElementById("right_message").innerHTML = "<h1>Click to start!</h1>";
    //document.getElementById("message_area_image").innerHTML = "<img src='traffic_light_red.png' />";

    UpdateMessageArea("<h1>Click to start!</h1>", "< h1 > Click to start!</h1 >", "<img src='traffic_light_red.png' />" );
    damonPosition = 0;
    document.getElementById("rat_damon").style.left = damonPosition + '%';
    leblancPosition = 0;
    document.getElementById("rat_leblanc").style.left = leblancPosition + '%';
}

function UpdateMessageArea(leftMessage, rightMessage, image) {
    document.getElementById("left_message").innerHTML = "<h1>Click to start!</h1>";
    document.getElementById("right_message").innerHTML = "<h1>Click to start!</h1>";
    document.getElementById("message_area_image").innerHTML = "<img src='traffic_light_red.png' />";
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
            return;
            //DetermineWinner();
        }
    }, 200);
}

function DetermineWinner() {
    document.getElementById("message_area_image").innerHTML = "<img src='trophy.png' />";
    document.getElementById("right_message").innerHTML = "<h1>Click to race again!</h1>";

    if (damonPosition > leblancPosition) {
        document.getElementById("left_message").innerHTML = "<h1>Rat Damon wins!</h1></br></br><h2>Jason Bourne to run!</h2>";
    }
    else if (leblancPosition > damonPosition) {
        document.getElementById("left_message").innerHTML = "<h1>Rat Leblanc wins!</h1></br></br><h2>Joey's not so slowy!</h2>";
    }
    else {
        document.getElementById("left_message").innerHTML = "<h1>Oh my,</h1></br></br><h2>it's a tie!</h2>";
    }

    //location.reload();
    //MoveRacers();
}