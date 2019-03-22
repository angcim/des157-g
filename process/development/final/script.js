'use strict';
console.log('reading js');

document.querySelector('#submit').addEventListener('click', processForm);
document.querySelector('#submitComment').addEventListener('click', processForm);
document.querySelector('#uploadProject').addEventListener('click', processForm);

// Variables
var community = document.querySelector('#communitylink');
var guidelines = document.querySelector('#guidelineslink');
var upload = document.getElementById('uploadLink');
var start = document.getElementById('start');

var work1 = document.querySelector('#work1');
var work2 = document.querySelector('#work2');
var work3 = document.querySelector('#work3');
var title = document.querySelector('.title');
var description = document.querySelector('.description');
var submitProject = document.getElementById('submitProject');

var popTitle = document.getElementById('popTitle');
var text = document.getElementById('popMsg');
var popup = document.getElementById('popup');
var yes = document.getElementById('yes');
var no = document.getElementById('no');

var okay = document.querySelector('.okay');
var close = document.querySelector('.close');
var exit = document.getElementById('exitUpload');
var gdexit = document.querySelector('#gdExit');

function processForm(evt) {
  console.log('processForm');

  // local variables
  var communityPage = document.querySelector('#communityPage').value;

  var recent = document.querySelector('#work1').value;
  var trending = document.querySelector('#work2').value;
  var mostPopular = document.querySelector('#work3').value;

  var name = document.querySelector('#email').value;
  var comment = document.querySelector('#comment').value;
  var commentSection = document.querySelector('fieldset');
  var oneComment = document.querySelector('#oneComment');
  var msg = document.querySelector('#myMsg');
  var msgName = document.querySelector('#msgName');

  //Conditional Statements based on dropbar
  if (communityPage == 'Recent') {
    document.getElementById('work1').src = "images/work1.png";
    document.getElementById('work2').src = "images/work2.png";
    document.getElementById('work3').src = "images/work3.jpg";
  }

  if (communityPage == 'Trending') {
    document.getElementById('work1').src = "images/work3.jpg";
    document.getElementById('work2').src = "images/work1.png";
    document.getElementById('work3').src = "images/work2.png";
    alert('Trending and Most Popular are having trouble with syncing to its critique pages. In order to critique the logo design of your choice, please go back to the Recent setting.')
  }

  if (communityPage == 'Most Popular') {
    document.getElementById('work1').src = "images/work2.png";
    document.getElementById('work2').src = "images/work3.jpg";
    document.getElementById('work3').src = "images/work1.png";
    alert('Trending and Most Popular are having trouble with syncing to its critique pages. In order to critique the logo design of your choice, please go back to the Recent setting.')
  }

  //Comment Section from Critique
  oneComment.style.display = 'block';
  msgName.innerHTML = name + ' says: '
  msg.innerHTML = comment;

  evt.preventDefault();
}

//Guidelines
guidelines.addEventListener('click', function() {
  document.querySelector('#guidelines').style.display = 'block';
  document.querySelector('#guidelineslink').style.color = '#1F467F';
});

gdexit.addEventListener('mousedown', function() {
  document.getElementById('guidelines').style.display = 'none';
  document.querySelector('#guidelineslink').style.color = '#FFFFFF';
});

//Upload Your Work
upload.addEventListener('click', function() {
  document.querySelector('#uploadfile').style.display = 'block';
  document.querySelector('#uploadLink').style.color = '#1F467F';
});

exit.addEventListener('mousedown', function() {
  document.querySelector('#uploadfile').style.display = 'none';
  document.querySelector('#uploadLink').style.color = '#FFFFFF';
});

uploadProject.addEventListener('mousedown', function() {
  document.querySelector('#loading').style.display = "block";
  document.querySelector('#uploadfile').style.display = "none";
  setTimeout(function() {
    document.querySelector('#popup').style.display = "block";
    popTitle.innerHTML = 'Thank you for submitting your project';
    text.innerHTML = 'You work is now being reviewed and you will soon get notifications';
    document.querySelector('#loading').style.display = "none";
    document.querySelector('#uploadLink').style.color = '#FFFFFF';
  }, 3000);
});

// Community Page
community.addEventListener('click', function() {
  document.querySelector('#loading').style.display = "block";
  document.querySelector('#getStarted').style.opacity = '0.5';
  document.querySelector('header').style.opacity = "0.5";
  setTimeout(function() {
    document.querySelector('#header').src = "images/background-2.png";
    document.querySelector('#communitylink').style.color = '#1F467F';
    document.querySelector('#header').style.display = "block";
    document.querySelector('#community').style.display = 'block';
    document.querySelector('#getStarted').style.display = 'none';
    document.querySelector('#loading').style.display = "none";
    document.querySelector('header').style.opacity = "1";
    document.querySelector('#getStarted').style.opacity = '1';
  }, 3000);
});

// Get Started
start.addEventListener('click', function() {
  document.querySelector('#loading').style.display = "block";
  document.querySelector('#getStarted').style.opacity = '0.5';
  document.querySelector('header').style.opacity = "0.5";
  setTimeout(function() {
    document.querySelector('#header').src = "images/background-2.png";
    document.querySelector('#header').style.display = "block";
    document.querySelector('#community').style.display = 'block';
    document.querySelector('#getStarted').style.display = 'none';
    document.querySelector('#critique').style.display = 'none';
    document.querySelector('#popup').style.display = 'block';
    document.querySelector('header').style.opacity = "1";
    document.querySelector('#getStarted').style.opacity = '1';
    document.querySelector('#loading').style.display = "none";
    popTitle.innerHTML = 'Get Started';
    text.innerHTML = 'Pick A Logo Design You Want to Critique and Start Critiquing';
  }, 3000);
});

// Work
work1.addEventListener('click', function() {
  document.querySelector('#popup').style.display = 'block';
  document.querySelector('#critique').style.display = 'flex';
  document.querySelector('#header').style.display = 'none';
  document.querySelector('#community').style.display = 'none';
  document.querySelector('#imageChange').src = "images/work1-bigger.png"
  title.innerHTML = 'California Hall Logo Design';
  description.innerHTML = 'This is a logo design used for a signage system for California Hall. With a theme of abundance, the logo contains numerous fruits that are commonly grown in California. The colors used were based on images of real life fruit.';
  popTitle.innerHTML = 'Note';
  text.innerHTML = 'You Must Scroll Down in Order to Annotate the Logo Design';
});

work2.addEventListener('click', function() {
  document.querySelector('#popup').style.display = 'block';
  document.querySelector('#critique').style.display = 'flex';
  document.querySelector('#header').style.display = 'none';
  document.querySelector('#community').style.display = 'none';
  document.querySelector('#imageChange').src = "images/work2-bigger.png";
  title.innerHTML = 'MIX\'D Logo Design';
  description.innerHTML = 'This is a logo design for MIX\'D. MIX\'D is a trail mix company that promotes nutrition and health. The logo was inspired by nature.';
  popTitle.innerHTML = 'Note';
  text.innerHTML = 'You Must Scroll Down in Order to Annotate the Logo Design';
});

work3.addEventListener('click', function() {
  document.querySelector('#popup').style.display = 'block';
  document.querySelector('#critique').style.display = 'flex';
  document.querySelector('#header').style.display = 'none';
  document.querySelector('#community').style.display = 'none';
  document.querySelector('#imageChange').src = "images/work3-bigger.png";
  title.innerHTML = 'Personal Branding Logo';
  description.innerHTML = 'This is a logo design that I created to brand myself. I used prismatic shapes to illustrate my graphic design style. I love geomtric shapes and playful colors such as teal.';
  popTitle.innerHTML = 'Note';
  text.innerHTML = 'You Must Scroll Down in Order to Annotate the Logo Design';
});

//Critique Section and Submit Review
submitProject.addEventListener('mousedown', function() {
  document.querySelector('#thankyou').style.display = 'block';
  setTimeout(function() {
    document.querySelector('#critique').style.display = 'none';
    document.querySelector('#community').style.display = 'block';
    document.querySelector('#header').style.display = 'block';
    document.querySelector('#thankyou').style.display = 'none';
  }, 3000);
});

close.addEventListener('mousedown', function() {
  document.querySelector('#goBack').style.display = "block";
});

yes.addEventListener('mousedown', function() {
  document.querySelector('#loading').style.display = "block";
  document.querySelector('#critique').style.opacity = '0.5';
  document.querySelector('header').style.opacity = "0.5";
  document.querySelector('#goBack').style.display = "none";
  setTimeout(function() {
    document.querySelector('#header').src = "images/background-2.png";
    document.querySelector('#header').style.display = "block";
    document.querySelector('#community').style.display = 'block';
    document.querySelector('#critique').style.display = 'none';
    document.querySelector('#critique').style.opacity = '1';
    document.querySelector('header').style.opacity = "1";
    document.querySelector('#loading').style.display = "none";
  }, 3000);

  document.querySelector('#popup').style.display = 'none';
  document.querySelector('#uploadfile').style.display = 'none';
});

no.addEventListener('mousedown', function() {
  document.querySelector('#goBack').style.display = "none";
});

//Close
okay.addEventListener('mousedown', function() {
  document.getElementById('uploadfile').style.display = 'none';
  document.querySelector('#popup').style.display = 'none';
});
