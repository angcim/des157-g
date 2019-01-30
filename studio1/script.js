'use strict';
console.log('reading js');

document.querySelector('#submit').addEventListener('click', processForm);
document.querySelector('#reset').addEventListener('click', resetForm);
document.querySelector('#reset2').addEventListener('click', resetForm);

var form = document.querySelector('form');

// global variable
var myMsg = document.querySelector('#myMsg');
var playAgain = document.querySelector('#reset2');

function processForm(evt) {

  // show form
  form.style.display = 'none';
  myMsg.style.display = 'block';
  playAgain.style.display = 'block';

  // local variables

  var dog = document.querySelector('#dog').value;
  var color = document.querySelector('#color').value;
  var verb = document.querySelector('#verb').value;
  var verbTwo = document.querySelector('#verbTwo').value;
  var verbThree = document.querySelector('#verbThree').value;
  var adjest = document.querySelector('#adjest').value;
  var adj = document.querySelector('#adj').value;
  var number = document.querySelector('#number').value;
  var adj2 = document.querySelector('#adj2').value;
  var adj3 = document.querySelector('#adj3').value;
  var pronoun = document.querySelector('#pronoun').value;
  var name = document.querySelector('#name').value;
  var item = document.querySelector('#item').value;
  var emotion = document.querySelector('#emotion').value;
  var verb4 = document.querySelector('#verb4').value;
  var image = document.querySelector('#image');

  myMsg.innerHTML = 'Today is the day I\'m going to adopt a ' + dog + '. I want my dog to have ' + color + ' spots. My dream dog will know how to do tricks like ' + verb + ', ' + verbTwo + ', and ' + verbThree + '. Most importantly, my ' + dog + ' will be the ' + adjest + ' dog in the world. I start to head over to the ' + adj + ' dog shelter ' + number + ' miles away from my house. I go inside and the shelter looks so ' + adj2 + '. All the dogs are just so ' + adj3 + '. Then there ' + pronoun + ' was. Looking at me with those puppy dog eyes. I named my dog ' + name + '. ' + name + ' was so happy ' + pronoun + ' got a free ' + item + '. We were both so ' + emotion + ' that we both ' + verb4 + ' home.'

  if (dog == 'Golden Retriever' & item == 'bone') {
    document.getElementById('image').src = "images/gr-bone.gif";
  } else if (dog == 'Golden Retriever' & item == 'frisbee') {
    document.getElementById('image').src = "images/gr-frisbee.gif"
  } else if (dog == 'Golden Retriever' & item == 'ball') {
    document.getElementById('image').src = "images/gr-ball.gif"
  } else if (dog == 'Golden Retriever' & item == 'rope') {
    document.getElementById('image').src = "images/gr-rope.gif"
  }

  if (dog == 'Border Collie' & item == 'bone') {
    document.getElementById('image').src = "images/bc-bone.gif";
  } else if (dog == 'Border Collie' & item == 'frisbee') {
    document.getElementById('image').src = "images/bc-frisbee.gif"
  } else if (dog == 'Border Collie' & item == 'ball') {
    document.getElementById('image').src = "images/bc-ball.gif"
  } else if (dog == 'Border Collie' & item == 'rope') {
    document.getElementById('image').src = "images/bc-rope.gif"
  }

  if (dog == 'Husky' & item == 'bone') {
    document.getElementById('image').src = "images/h-bone.gif";
  } else if (dog == 'Husky' & item == 'frisbee') {
    document.getElementById('image').src = "images/h-frisbee.gif"
  } else if (dog == 'Husky' & item == 'ball') {
    document.getElementById('image').src = "images/h-ball.gif"
  } else if (dog == 'Husky' & item == 'rope') {
    document.getElementById('image').src = "images/h-rope.gif"
  }

  if (dog == 'Corgi' & item == 'bone') {
    document.getElementById('image').src = "images/c-bone.gif";
  } else if (dog == 'Corgi' & item == 'frisbee') {
    document.getElementById('image').src = "images/c-frisbee.gif"
  } else if (dog == 'Corgi' & item == 'ball') {
    document.getElementById('image').src = "images/c-ball.gif"
  } else if (dog == 'Corgi' & item == 'rope') {
    document.getElementById('image').src = "images/c-rope.gif"
  }

  evt.preventDefault();
}

function resetForm() {
  form.style.display = 'flex';
  myMsg.style.display = 'none';
  document.getElementById('image').src = "images/mystery.jpg"
  playAgain.style.display = 'none';

  // if someone resets the form, hide the text
  // myMsg.innerHTML = '';
}
