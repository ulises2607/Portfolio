const nav = document.querySelector('.menu');
const openButton = document.querySelector('.hamb-icon');
const closeButton = document.querySelector('.close');

openButton.addEventListener('click', () => {
  nav.classList.add('visible');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('visible');
});
