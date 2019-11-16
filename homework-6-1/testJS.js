alert('Hello! Need create the array and output result some manipulation whits this array.');
let userName = prompt('Enter your name:',);
let status = 0;
let arrNumber = [];
let hello = document.getElementById('jsHello');
let numberInArr = document.getElementById('jsNumber');

if (userName !== "" && userName.length >= 3) {
  hello.innerHTML = '<p class="user__name"> Hello '+userName.charAt(0).toUpperCase() + userName.slice(1)+'!</p>';
  status = 1;
} else {
  hello.innerHTML = '<p class="user__name"> Hello Stranger!</p>';
  status = 1;
}

(status === 1) ? document.getElementById('jsForm').style.display = 'flex' : window.location.reload(false);

function sendNumber() {
  if (numberInArr.value !== '') {
    arrNumber.push(numberInArr.value);
    numberInArr.value = "";
  }
}

function getResult() {

  let par = document.createElement('p');

  if (arrNumber.length < 3) {
    par.id = 'jsError';
    par.className = 'form__error';
    par.innerHTML = 'You enter only '+ arrNumber.length +' numbers. You need enter 3 and more number';
    document.getElementById('jsForm').append(par);
    document.getElementById('jsError').style.display = 'none';

  } else {

    let min = Number(arrNumber[0]);
    let max = min;
    let maxIndex, minIndex = 0;

    for (let i = 1; i < arrNumber.length; ++i) {
      if (arrNumber[i] > max) {
        max = Number(arrNumber[i]);
        maxIndex = i;
      }
      if (arrNumber[i] < min) {
        min = Number(arrNumber[i]);
        minIndex = i;
      }
    }

    document.getElementById('jsMessage').style.display = 'flex';
    par.id = 'jsReduce';
    // noinspection JSAnnotator
    par.innerHTML =
      'Our array is = [' + arrNumber.reduce((accumulator, currentValue)  => accumulator + ' | ' +currentValue)+']'+
      '<br><br>Max all numbers in array is = ' + max +
      '<br><br>Min numbers in array is = ' + min +
      '<br><br>Sum all numbers in array is = ' +arrNumber.reduce((accumulator, currentValue)  => Number(accumulator) + Number(currentValue))+
      '<br><br>Our array is = [' + arrNumber[max_index] = min + ' '+ arrNumber[min_index] = max +''+ arrNumber.reduce((accumulator, currentValue)  => accumulator + ' | ' +currentValue)+']';
    document.getElementById('jsMessage').append(par);
  }
}

