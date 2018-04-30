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

function init() {
    //document.getElementById("left_message").innerHTML = "<h1>Click to start!</h1>";
    //document.getElementById("right_message").innerHTML = "<h1>Click to start!</h1>";
    //document.getElementById("message_area_image").innerHTML = "<img src='traffic_light_red.png' />";

    UpdateMessageArea("<h1>Click to start!</h1>", "< h1 > Click to start!</h1 >", "<img src='traffic_light_red.png' />");
    RacersToStartingLine();

    //damonPosition = 0;
    //document.getElementById("rat_damon").style.left = damonPosition + '%';
    //leblancPosition = 0;
    //document.getElementById("rat_leblanc").style.left = leblancPosition + '%';
}

function UpdateMessageArea(leftMessage, rightMessage, image) {
    document.getElementById("left_message").innerHTML = "<h1>Click to start!</h1>";
    document.getElementById("right_message").innerHTML = "<h1>Click to start!</h1>";
    document.getElementById("message_area_image").innerHTML = "<img src='traffic_light_red.png' />";
}

function RacersToStartingLine() {
    damonPosition = 0;
    document.getElementById("rat_damon").style.left = damonPosition + '%';
    leblancPosition = 0;
    document.getElementById("rat_leblanc").style.left = leblancPosition + '%';
}

function Race() {
    UpdateMessageArea("<h1>And they're off!</h1>", "<h1>And they're off!</h1>", "<img src='traffic_light_green.png' />");

    var raceInProgress = MoveRacers();

    var winner = DetermineWinner();

    DisplayResults(winner);

}

function MoveRacers(e) {
    var moveRacersInterval = setInterval(function () {
        //document.getElementById("left_message").innerHTML = "<h1>And they're off!</h1>";
        //document.getElementById("right_message").innerHTML = "<h1>And they're off!</h1>";
        //document.getElementById("message_area_image").innerHTML = "<img src='traffic_light_green.png' />";

        damonPosition += (Math.floor(Math.random() * 3) + 1);
        document.getElementById("rat_damon").style.left = damonPosition + '%';
        leblancPosition += (Math.floor(Math.random() * 3) + 1);
        document.getElementById("rat_leblanc").style.left = leblancPosition + '%';

        if (leblancPosition >= 85 || damonPosition >= 85) {
            clearInterval(moveRacersInterval);
            return "something";
            //DetermineWinner();
        }
    }, 200);
}

function DetermineWinner() {
    //document.getElementById("message_area_image").innerHTML = "<img src='trophy.png' />";
    //document.getElementById("right_message").innerHTML = "<h1>Click to race again!</h1>";

    if (damonPosition > leblancPosition) {
        return "Rat Damon";
        //document.getElementById("left_message").innerHTML = "<h1>Rat Damon wins!</h1></br></br><h2>Jason Bourne to run!</h2>";
    }
    else if (leblancPosition > damonPosition) {
        return "Rat Leblanc";
        //document.getElementById("left_message").innerHTML = "<h1>Rat Leblanc wins!</h1></br></br><h2>Joey's not so slowy!</h2>";
    }
    else {
        return "tie";
        //document.getElementById("left_message").innerHTML = "<h1>Oh my,</h1></br></br><h2>it's a tie!</h2>";
    }

    //location.reload();
    //MoveRacers();
}

function DisplayResults(winner) {
    var leftMessage;

    switch (winner) {
        case "Rat Damon":
            leftMessage = "<h1>Rat Damon wins!</h1></br></br><h2>Jason Bourne to run!</h2>";
            break;
        case "Rat Leblanc":
            leftMessage = "<h1>Rat Leblanc wins!</h1></br></br><h2>Joey's not so slowy!</h2>";
            break;
        case "tie":
            leftMessage = "<h1>Oh my,</h1></br></br><h2>it's a tie!</h2>";
            break;
        default:
            leftMessage = "<h1>Too close to call!</h1>";
    }

    UpdateMessageArea(leftMessage, "<h1>Click to race again!</h1>", "<img src='trophy.png' />");
}

// Run the init() function when the page loads
window.onload = init;

// Run the MoveRacers() function when the mouse is clicked
window.onclick = Race;
//var race = window.onclick = MoveRacers;

//var winner = DetermineWinner();
