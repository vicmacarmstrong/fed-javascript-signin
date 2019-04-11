var elModal = document.getElementById('modal');
var elSignInBtn = document.getElementById('signin');
var elCloseBtn = document.getElementById('close');
var elSubBtn = document.getElementById('submit');
var elInput = document.getElementsByTagName('input')

function openModal() {
elModal.style.display = 'block';
}

elSignInBtn.addEventListener('click', function(e) {
  elModal.classList.toggle('open');
});

elCloseBtn.addEventListener('click', function(e){
  elModal.classList.toggle('close');
});

elSubBtn.addEventListener('click', function(e){
  elInput.classlist.toggle('error');
});
