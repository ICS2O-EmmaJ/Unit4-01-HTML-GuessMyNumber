// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Emma Janani
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a message based on if the user guessed the number correctly
 */

  const MIN = 1;
  const MAX = 6;
  Math.floor((Math.random() * max) + min);

function displayMessage () {
  // initialize variables
	let message = ""
	
	// get user input
	let input = parseInt(document.getElementById('input').value)


  // determine the message based on the user input
	if (input == Math.floor) {
		greeting = "You got it right!"
	}

  if (input != Math.floor) {
    greeting = "You got it wrong!"
  }

  // display the results
  document.getElementById('message').innerHTML = message
}