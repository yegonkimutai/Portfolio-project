let popUp = document.querySelector('.hidden-menu');
let ham = document.querySelector('.h-menu');
let closeBtn = document.querySelector('.close-btn');
let body = document.querySelector('.body')
let choice = document.querySelector('.hidden-cont')

ham.addEventListener('click', () => {
    popUp.style.display = 'block';
    ham.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
    popUp.style.display = 'none';
    ham.style.display = 'block';
})

choice.addEventListener('click', () => {
    popUp.style.display = 'none';
    ham.style.display = 'block';
})

body.addEventListener('click', () => {
    popUp.style.display = 'none';
    ham.style.display = 'block';
})
