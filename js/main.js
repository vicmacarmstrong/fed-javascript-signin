var elModal = document.getElementById('modal');
var elSignInBtn = document.getElementById('signin');
var elCloseBtn = document.getElementById('close');
var elSubBtn = document.getElementById('submit');
// var elInput = document.querySelectorAll('.field');
// var elInput = document.querySelector('.field');
var elInputUser = document.getElementById('user');
var elInputPass = document.getElementById('pass');
// var elInput = document.getElementsByTagName('input');

function openModal() {
elModal.style.display = 'block';
}

elSignInBtn.addEventListener('click', function(e) {
  elModal.classList.add('open');
  elModal.classList.remove('close');
});

elCloseBtn.addEventListener('click', function(e){
  elModal.classList.add('close');
  elModal.classList.remove('open');
  elInputUser.classList.remove('error');
  elInputPass.classList.remove('error');
});

elSubBtn.addEventListener('click', function(e){
  elInputUser.classList.add('error');
  elInputPass.classList.add('error');

  // if the value in either field is blank: '', add the error
  // trim the input
  // If the vale in either field is less than x character (length), add the error

  // '' == ''
  // ' test '.trim
  // ''.trim() == ''
  // "testing".length > 0
});

elInputUser.addEventListener('focus', function(e){
  this.classList.remove('error');
});

// elInputUser.addEventListener('mouseout', function(e){
//   this.classList.add('error');
// });

elInputPass.addEventListener('focus', function(e){
  this.classList.remove('error');

// var elInput = document.querySelectorAll('.field');
// allInputFields.forEach (field => {
//   field.
// })


});
//
// elInputPass.addEventListener('mouseout', function(e){
//   this.classList.add('error');
// });
