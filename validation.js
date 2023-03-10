const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const error = document.getElementById('error-msg');

form.addEventListener('submit', (event) => {
  const errArray = [];

  if (email.value === '') {
    errArray.push('Invalid email');
  } else if (email.value !== email.value.toLowerCase()) {
    errArray.push('Invalid email, ensure charecters are in lowerCase');
  } else {
    form.submit();
    form.reset();
  }

  if (errArray.length > 0) {
    event.preventDefault();
    error.innerHTML = errArray.join(', ');
  }
});
