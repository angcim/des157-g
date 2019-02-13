'use strict';
console.log('reading js');

var beanie = document.querySelector('#beanie');
var waterBottle = document.querySelector('#bottle');
var laptop = document.querySelector('#laptop');
var paragraph = document.querySelector('#paragraph');
var stressed = document.querySelector('#stressed');
var title = document.querySelector('#title');
var text = document.querySelector('#text');
var close = document.querySelector('#close')

//hovers
beanie.addEventListener('mouseover', function() {
  document.getElementById('beanie').src = "images/beanie-shown.png";
  document.getElementById('image1').src = "images/beanie-hover-sm.png";
  document.getElementById('image2').src = "images/beanie-hover-lg.png";
});

beanie.addEventListener('mouseout', function() {
  document.getElementById('beanie').src = "images/beanie-hidden.png";
  document.getElementById('image1').src = "images/stressed-small.png";
  document.getElementById('image2').src = "images/stressed-large.png";
})

bottle.addEventListener('mouseover', function() {
  document.getElementById('bottle').src = "images/bottle-shown.png";
  document.getElementById('image1').src = "images/bottle-hover-sm.png";
  document.getElementById('image2').src = "images/bottle-hover-lg.png";
});

bottle.addEventListener('mouseout', function() {
  document.getElementById('bottle').src = "images/bottle-hidden.png";
  document.getElementById('image1').src = "images/stressed-small.png";
  document.getElementById('image2').src = "images/stressed-large.png";
})

laptop.addEventListener('mouseover', function() {
  document.getElementById('laptop').src = "images/laptop-shown.png";
  document.getElementById('image1').src = "images/laptop-hover-sm.png";
  document.getElementById('image2').src = "images/laptop-hover-lg.png";
});

laptop.addEventListener('mouseout', function() {
  document.getElementById('laptop').src = "images/laptop-hidden.png";
  document.getElementById('image1').src = "images/stressed-small.png";
  document.getElementById('image2').src = "images/stressed-large.png";
})

//text

beanie.addEventListener('click', function() {
  document.getElementById('change').src = "images/beanie.png";
  document.querySelector('#paragraph').style.display = 'flex';
  title.innerHTML = 'Beanie';
  text.innerHTML = 'My head needs warmth. I\’m such a mess. It\’s 6AM in the morning. I need some rest. I\’m looking for my beanie. It\’s not around. I thought it was in my closet. But it\’s nowhere to be found. I\’m going crazy. And freaking out. I sit in my desk. And forever pout.';
  document.getElementById('image1').style.opacity = '0.15';
  document.getElementById('image2').style.opacity = '0.15';
});

bottle.addEventListener('click', function() {
  document.getElementById('change').src = "images/bottle.png";
  document.querySelector('#paragraph').style.display = 'flex';
  title.innerHTML = 'Bottle';
  text.innerHTML = 'I’m dehydrated. And I\’m stressed. I\’m pulling an all nighter. For my test. My Hydroflask is empty. I need to fill it up. I can’t find it anywhere. So I grabbed a cup. I poured some water. and walked to my room. I\’m so exhausted. But my styudying must resume.';
  document.getElementById('image1').style.opacity = '0.15';
  document.getElementById('image2').style.opacity = '0.15';

});

laptop.addEventListener('click', function() {
  document.getElementById('change').src = "images/laptop.png";
  document.querySelector('#paragraph').style.display = 'flex';
  title.innerHTML = 'Laptop';
  text.innerHTML = 'I use my laptop. Every single day. I use it for homework. I use it to play. I spend 80\% of my time. Looking at a screen. Especially at night. With my mug of some caffeine. I can\’t find my charger. And my laptop’s battery is dead. That\’s it, I\’m done for the day. I\’m going to bed';
  document.getElementById('image1').style.opacity = '0.15';
  document.getElementById('image2').style.opacity = '0.15';
});

//close
close.addEventListener('mousedown', function() {
  document.getElementById('paragraph').style.display = 'none';
  document.getElementById('image1').style.opacity = '1';
  document.getElementById('image2').style.opacity = '1';
});