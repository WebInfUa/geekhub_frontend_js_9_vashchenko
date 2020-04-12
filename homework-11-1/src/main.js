'use strict';

  import 'babel-polyfill';
  import {logInHTML, logIn} from './scripts/login.js';
  import {signUpHTML, sign} from './scripts/sign.js';
  import {resetPasswordHTML, reset} from './scripts/reset.js';
  import {validEmail, validPassword, validName} from './scripts/validation.js';
  import './styles/main.scss';
  import './assets/images/user.png';

  const titleElement = document.getElementById('status');
  const avatar = document.getElementById('avatar');
  const content = document.getElementById('app');
  let appStatus = false;

  if (appStatus === false) {
    appStatus = true;
    console.log('App in a live. App load status: '+ appStatus);
    insertText();
    insertText(logInHTML, content);
  }

  if (avatar.src.substr(-3) !== 'png' || avatar.src.substr(-3) !== 'jpg' ) {
    avatar.src = "images/user.png";
  }

  function insertText(value, element) {
    if (value === undefined) {
      value = 'Login or register you account'
    }
    if (element === undefined) {
      element = titleElement
    }
    element.innerHTML = value;
  }

  document.addEventListener('click', function(e) {
    if (e.target.id === 'login') {
      insertText();
      insertText(logInHTML, content)
    }
    if (e.target.id === 'sign') {
      insertText('Sign up new account', titleElement);
      insertText(signUpHTML, content)
    }
    if (e.target.id === 'reset') {
      insertText('Reset password or sing up new account', titleElement);
      insertText(resetPasswordHTML, content)
    }
    if (e.target.id === 'logInSubmit') {
      loginForm();
    }
    if (e.target.id === 'signup') {
      sigupForm();
    }
    if (e.target.id === 'resetpassword') {
      resetForm();
    }
  });

function loginForm () {
  const emailId = document.getElementById("emailId");
  const passwordId = document.getElementById("passwordId");
  const emailVal = emailId.value;
  const passwordVal = passwordId.value;
  validEmail(emailId, emailVal);
  validPassword(passwordId, passwordVal, passwordVal);
  logIn(emailVal, passwordVal);
}

function sigupForm () {
  const nameId = document.getElementById("nameId");
  const emailId = document.getElementById("emailId");
  const passwordId = document.getElementById("passwordId");
  const passwordConfirmId = document.getElementById("confirmPasswordId");
  const nameVal = nameId.value;
  const emailVal = emailId.value;
  const passwordVal = passwordId.value;
  const passwordConfirmVal = passwordConfirmId.value;
  validEmail(emailId, emailVal);
  validPassword(passwordId, passwordVal, passwordConfirmVal);
  validName(nameId, nameVal);
  sign(emailVal, passwordVal, nameVal);
}

function resetForm () {
  const emailId = document.getElementById("emailId");
  const passwordId = document.getElementById("passwordId");
  const passwordConfirmId = document.getElementById("confirmPasswordId");
  const emailVal = emailId.value;
  const passwordVal = passwordId.value;
  const passwordConfirmVal = passwordConfirmId.value;
  validEmail(emailId, emailVal);
  validPassword(passwordId, passwordVal, passwordConfirmVal);
  reset(emailVal, passwordVal, passwordConfirmVal);
}
