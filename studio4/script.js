'use strict';
console.log('reading js');

document.querySelector('#submitComment').addEventListener('click', processForm);

upload.addEventListener('click', function() {
  alert('Feature Coming Soon')
});

submit.addEventListener('click', function() {
  alert('Awesome! Now upload your projects and get them reviewed!')
});


function processForm(evt) {
  var name = document.querySelector('#email').value;
  var comment = document.querySelector('#comment').value;
  var commentSection = document.querySelector('fieldset');
  var oneComment = document.querySelector('#oneComment');
  var msg = document.querySelector('#myMsg');
  var msgName = document.querySelector('#msgName');

  oneComment.style.display = 'block';
  msgName.innerHTML = name + ' says: '
  msg.innerHTML = comment;

  evt.preventDefault();
}