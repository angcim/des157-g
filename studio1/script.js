'use strict';
console.log('reading js');

document.querySelector('#submit').addEventListener('click', processForm);


function processForm(evt) {

  var dog = document.querySelector('#dog').value;
  var color = document.querySelector('#color').value;
  var verb = document.querySelector('#verb').value;
  var verbTwo = document.querySelector('#verbTwo').value;
  var verbThree = document.querySelector('#verbThree').value;
  var adjest= document.querySelector('#adjest').value;
  var adj = document.querySelector('#adj').value;
  var number = document.querySelector('#number').value;
  var adj2 = document.querySelector('#adj2').value;
  var adj3 = document.querySelector('#adj3').value;
  var pronoun = document.querySelector('#pronoun').value;
  var name = document.querySelector('#name').value;
  var item = document.querySelector('#item').value;
  var emotion = document.querySelector('#emotion').value;
  var verb4 = document.querySelector('#verb4').value;


var myMsg = document.querySelector('#myMsg');

  myMsg.innerHTML = 'Today is the day I\'m going to adopt a ' + dog + '. I want my dog to have ' + color + ' spots. My dream dog will know how to do tricks like ' + verb + ', ' + verbTwo + ', and ' + verbThree + '. Most importantly, my ' + dog + ' will be the ' + adjest + ' dog in the world. I start to head over to the ' + adj + ' dog shelter ' + number + ' miles away from my house. I go inside and the shelter looks so ' + adj2 + '. All the dogs are just so ' + adj3 + '. Then there ' + pronoun + ' was. Looking at me with those puppy dog eyes. I named my dog ' + name + '. ' + name + ' was so happy ' + pronoun + ' got a free ' + item + '. We were both so ' + emotion + ' that we both ' + verb4 + ' home.'

  evt.preventDefault();
}
