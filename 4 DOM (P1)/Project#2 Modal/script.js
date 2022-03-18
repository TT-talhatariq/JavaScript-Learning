'use strict';

//Elements
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');
const overaly = document.querySelector('.overlay');
const btnOpen = document.querySelectorAll('.show-modal');

//Functions for opening and closing
const closeModal = function () {
  overaly.classList.add('hidden');
  modal.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overaly.classList.remove('hidden');
};

//Adding Listeners
for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener('click', openModal);
}
btnClose.addEventListener('click', closeModal);
overaly.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
console.log('Ok');
