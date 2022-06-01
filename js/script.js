// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: June 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit6-04-JS/sw.js", {
    scope: "/ICS20-Unit6-04-JS/",
  })
}

"use strict"

window.onload = function() {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)
  
  // input
  const radiusSphere = params.get('r')

  // process
  const volume = 4/3 * Math.PI * Math.pow(radiusSphere, 3)
  const dimensions = "<ul>\n<li>r = " + radiusSphere

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}