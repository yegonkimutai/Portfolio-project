const popUp = document.querySelector('.hidden-menu');
const ham = document.querySelector('.h-menu');
const closeBtn = document.querySelector('.close-btn');
const body = document.querySelector('.body');
const choice = document.querySelector('.hidden-cont');

ham.addEventListener('click', () => {
  popUp.style.display = 'block';
  ham.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  popUp.style.display = 'none';
  ham.style.display = 'block';
});

choice.addEventListener('click', () => {
  popUp.style.display = 'none';
  ham.style.display = 'block';
});

body.addEventListener('click', () => {
  popUp.style.display = 'none';
  ham.style.display = 'block';
});
