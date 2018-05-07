"use strict";

/*
   CIS370-898 Introduction to Web Development
   Final Project: Rat Race
   Author: Reese Henry
   Date:   4/20/2018
   
   File: ratrace_scripts.js

   Variables
   =========

   damonPosition
      Holds the int value used to set the Rat Leblanc
      avatar's style.left property

   leblancPosition
      Holds the int value used to set the Rat Leblanc
      avatar's style.left property


   moveRacers - in Race function
       Used to set the interval for the function
       that updates the avatars' style.left properties

   winner - in DetermineWinner function
       Holds a text string describing which avatar
       win the race

   leftMessage - in DisplayResults function
       Holds the string used to update the div#left_message
       element's innerHTML

   image - in DisplayResults function
       Holds the string used to update the div#message_area_image
       element's innerHTML
  	

    Function List
    =============

    init
      Do the following when the page loads:
        Set the message area text and images to their
            beginning values.
        Call the function to return the racer avatars
            to the starting line.
        Establish an onclick event listener to start the race.

    
	
*/

/* ================================================================= */

var damonPosition;
var leblancPosition;

// Run the init() function when the page loads
window.onload = init;

function init() {
    // Set left message, right message, and image to their pre-race values.
    UpdateMessageArea("<h1>Click to start!</h1>", "<h1>Click to start!</h1>", "<img id='traffic_light_red' src='traffic_light_red.png' />");

    // Move racers to the starting line.
    RacersToStartingLine();

    // Run the MoveRacers() function when the mouse is clicked.
    window.addEventListener("click", Race);
}

function UpdateMessageArea(leftMessage, rightMessage, image) {
    document.getElementById("left_message").innerHTML = leftMessage;
    document.getElementById("right_message").innerHTML = rightMessage;
    document.getElementById("message_area_image").innerHTML = image;
}

function RacersToStartingLine() {
    damonPosition = 0;
    document.getElementById("rat_damon").style.left = damonPosition + '%';
    leblancPosition = 0;
    document.getElementById("rat_leblanc").style.left = leblancPosition + '%';
}

function Race() {
    window.removeEventListener("click", Race);
    UpdateMessageArea("<h1>Jason Bourne to run!</h1>", "<h1>Joey's not so slowy!</h1>", "<img id = 'traffic_light_green' src='traffic_light_green.png' />");

    var moveRacers = setInterval(function () {
        damonPosition += (Math.floor(Math.random() * 3) + 1);
        document.getElementById("rat_damon").style.left = damonPosition + '%';
        leblancPosition += (Math.floor(Math.random() * 3) + 1);
        document.getElementById("rat_leblanc").style.left = leblancPosition + '%';

        if (leblancPosition >= 85 || damonPosition >= 85) {
            clearInterval(moveRacers);
            DetermineWinner();
        }
    }, 200);
}

function DetermineWinner() {

    var winner;

    if (damonPosition > leblancPosition) {
        winner = "Rat Damon";
        //document.getElementById("left_message").innerHTML = "<h1>Rat Damon wins!</h1></br></br><h2>Jason Bourne to run!</h2>";
    }
    else if (leblancPosition > damonPosition) {
        winner =  "Rat Leblanc";
        //document.getElementById("left_message").innerHTML = "<h1>Rat Leblanc wins!</h1></br></br><h2>Joey's not so slowy!</h2>";
    }
    else {
        winner =  "tie";
        //document.getElementById("left_message").innerHTML = "<h1>Oh my,</h1></br></br><h2>it's a tie!</h2>";
    }

    DisplayResults(winner);
}

function DisplayResults(winner) {
    var leftMessage;
    var image;

    switch (winner) {
        case "Rat Damon":
            leftMessage = "<h1>Rat Damon wins!</h1>";
            image = "<img id='damon_flag' src='damon_flag.png' />";
            break;
        case "Rat Leblanc":
            leftMessage = "<h1>Rat Leblanc wins!</h1>";
            image = "<img id='leblanc_flag' src='leblanc_flag.png' />";
            break;
        case "tie":
            leftMessage = "<h1>Oh my, it's a tie</h1>";
            image = "<img id='tie' src='tie.png' />";
            break;
        default:
            leftMessage = "<h1>Too close to call!</h1>";
    }

    UpdateMessageArea(leftMessage, "<h1>Click to race again!</h1>", image);

    window.addEventListener("click", init);
}