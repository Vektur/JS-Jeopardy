'use strict';

// var firstPlace = document.createElement('p'); NOT NECCESSARY
// firstPlace.setAttribute('id', 'Winner'); NOT NECCESARY
var stringArray = localStorage.getItem('players');
var playersArray = JSON.parse(stringArray);


// Get player data from local storage

// var playerArray = localStorage.getItem('players');
// playerArray = JSON.parse(playerArray);


// GLOBAL VARIABLES
// var playersArray = [];

// Placements Variable for the sake of showing Scores

// Variable for linking Elements to page
var results = document.getElementById('results');
// Function used to create each Players position on the score board!
function playerGenerator() {
  // Some sort of Filter for highest number
  for (var i = 0; i < playersArray.length; i++) {
    var playerid = `Player${i}`;
    var placements = document.createElement('p');

    placements.setAttribute('id', playerid); // Remember it is 0-3 for the array CSS Purposes
    placements.textContent = `${playersArray[i].name} your score was ${playersArray[i].score}!`;
    results.appendChild(placements);
  }

  playersArray.sort(function (a, b) {
    return b.score - a.score;
  });
  localStorage.setItem('leader', JSON.stringify(playersArray[0]));
}


playerGenerator();
