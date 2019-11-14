alert('Hello! Need create the array and output result some manipulation whits this array.');
let userName = prompt('Enter your name:',);
console.log('console log output = '+userName);
console.log(userName.length);

if (userName !== "" && userName.length >= 3) {
  document.getElementById('jsHello').innerHTML = '<p class="${userName}"> Hello '+userName.charAt(0).toUpperCase() + userName.slice(1)+'!</p>';
} else {
  document.getElementById('jsHello').innerHTML = '<p class="${userName}"> Hello Stranger!</p>';
}
