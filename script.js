const btnSubs = document.querySelectorAll('.btn-subs');
const btnDis = document.querySelectorAll('.btn-dismiss');
const div = document.querySelector('div.input');
// const emailTxt = document.querySelector('.email-txt');
const mobForm = document.querySelector('.mobile-form');
const emails = document.querySelectorAll('#email');
const formType = document.querySelector('.form');
const modalWindow = document.querySelector('.desktop');
const mobModal = document.querySelector('.mobile');

const invalidMessage = function (form) {
  const email = form.querySelector('#email');
  const message = form.querySelector('.validation');
  message.textContent = `Valid e-mail required!`;
  email.classList.add('invalid');
  email.placeholder = 'ash#loremcompany.com';
  email.value = '';
};

const sucMessage = function (form, modal) {
  const email = form.querySelector('#email');
  const message = form.querySelector('.validation');
  const emailTxt = modal.querySelector('.email-txt');
  modal.classList.toggle('hide');
  form.classList.toggle('hide');
  emailTxt.textContent = email.value;
  message.textContent = '';
  email.classList.remove('invalid');
  email.value = '';
  email.placeholder = 'email@gmail.com';
};

const toggleForms = function (form, modal) {
  sucMessage(form, modal);
};

const checkFormEmail = function (form, modal) {
  const email = form.querySelector('#email');
  if (!email.value.includes('@gmail.com')) {
    invalidMessage(form);
  }
  if (email.value.includes('@gmail.com')) toggleForms(form, modal);
};

btnSubs.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(this);

    if (formType.contains(this)) {
      console.log('form');
      checkFormEmail(formType, modalWindow);
    }

    if (mobForm.contains(this)) {
      console.log('mobile-form');
      checkFormEmail(mobForm, mobModal);
    }
    // if (email.value.includes('@gmail.com')) toggleForms(e);
  });
});

btnDis.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const modal = btn.closest('.modalWindow');
    const form = modal.classList.contains('mobile') ? mobForm : formType;
    console.log(modal);
    e.preventDefault();
    toggleForms(form, modal);
  });
});
