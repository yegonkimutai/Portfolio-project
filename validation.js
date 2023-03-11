const form = document.getElementById('contact-form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const text = document.getElementById('message');
const error = document.getElementById('error-msg');

form.addEventListener('submit', (event) => {
  const errArray = [];

  if (email.value === '') {
    errArray.push('Invalid email');
  } else if (email.value !== email.value.toLowerCase()) {
    errArray.push('Invalid email, ensure characters are in lowerCase');
  } else {
    form.submit();
    form.reset();
  }

  if (errArray.length > 0) {
    error.innerHTML = errArray.join(', ');
  }
  event.preventDefault();
});

function saveInfo() {
  const userInfo = JSON.stringify({
    username: userName.value,
    email: email.value,
    text:
     text.value,
  });
  localStorage.setItem('userInfo', userInfo);
}

userName.addEventListener('input', saveInfo);
email.addEventListener('input', saveInfo);
text.addEventListener('input', saveInfo);

const userInfo = localStorage.getItem('userInfo');

userName.value = JSON.parse(userInfo)?.username ? JSON.parse(userInfo).username : '';
email.value = JSON.parse(userInfo)?.email ? JSON.parse(userInfo).email : '';
text.value = JSON.parse(userInfo)?.text ? JSON.parse(userInfo).text : '';
