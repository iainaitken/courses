'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const l = btnsShowModal.length;
for (let i = 0; i < l; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

overlay.addEventListener('click', closeModal);

btnCloseModal.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
