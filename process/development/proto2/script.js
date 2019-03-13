'use strict';
console.log('reading js');

var step1 = document.querySelector('#step1');
var step2 = document.querySelector('#step2');
var step3 = document.querySelector('#step3');
var requirements = document.querySelector('#requirementslink');
var community = document.querySelector('#communitylink');
var instructions = document.querySelector('#instructions');
var close = document.querySelector('#close')

step1.addEventListener('click', function() {
  instructions.innerHTML = 'Go to the community page and find a piece of work you want to review';
});

step2.addEventListener('click', function() {
  instructions.innerHTML = 'Click on the edit button at the top left corner of the project.';
});

step3.addEventListener('click', function() {
  instructions.innerHTML = 'Edit, Annotate, and write comments on the project. Once finished, press submit.';
});

requirements.addEventListener('click', function() {
  document.querySelector('#requirements').style.display = 'block';
});

community.addEventListener('click', function() {
  document.querySelector('#community').style.display = 'block';
    document.querySelector('#howItWorks').style.display = 'none';
      document.querySelector('#header').style.display = 'none';
});

//close
close.addEventListener('mousedown', function() {
  document.getElementById('requirements').style.display = 'none';
});
