alert('Hello! Need create the array and output result some manipulation whits this array.');
let userName = prompt('Enter your name:',);
let status = 0;
let numberArr = [];
// console.log('console log output = '+userName);
// console.log(userName.length);

if (userName !== "" && userName.length >= 3) {
  document.getElementById('jsHello').innerHTML = '<p class="user__name"> Hello '+userName.charAt(0).toUpperCase() + userName.slice(1)+'!</p>';
  status = 1;
} else {
  document.getElementById('jsHello').innerHTML = '<p class="user__name"> Hello Stranger!</p>';
  status = 1;
}

(status === 1) ? document.getElementById('jsForm').style.display = 'flex' : window.location.reload(false);

function sendNumber(number) {
  numberArr.push(number)
}
