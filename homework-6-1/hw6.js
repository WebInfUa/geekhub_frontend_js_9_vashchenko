//Find min, max, sum and replace in array
let numArr = [];

for (let i = 0; i<10; i++) {
  let randNum = parseInt( Math.random()*100 );
  numArr.push(randNum);
}
console.log('My Array is = '+numArr);

console.log('Sum all numbers in array = '+numArr.reduce((accumulator, currentValue)  => accumulator + currentValue));

let min = numArr[0];
let minIndex = 0;
let max = 0;
let maxIndex = 0;

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] > max) {
    max = numArr[i];
    maxIndex = i;
  }
  if (numArr[i] < min) {
    min = numArr[i];
    minIndex = i;
  }
}

numArr[maxIndex] = min;
numArr[minIndex] = max;

console.log('Min number in Array = '+min);
console.log('Max number in Array = '+max);
console.log('Replace min max in array = '+numArr);

// Callback
function createSentences(text, callback){
  let sentence = 'Hello, amazing and crazy ' + text + ' world!';
  callback(sentence);
}

function logWrite(message){
  console.log(message);
}

createSentences("JavaScript", logWrite);

// fooBar
function fooBar() {
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 3 === 0 && numArr[i] % 7 === 0) {
      numArr[i] = 'foobar';
    } else if (numArr[i] % 7 === 0) {
      numArr[i] = 'bar';
    } else if (numArr[i] % 3 === 0) {
      numArr[i] = 'foo';
    }
  }
  console.log('When number mod 3 or/and 7 = 0 replace on foo, bar or foobar = \n'+numArr);
}

fooBar();

//stringMatches
function stringMatches (frsStr, secStr) {
  console.log('First string = "'+ frsStr+'"');
  console.log('Second string = "'+secStr+'"');
  frsStr = frsStr.replace(/\s/g, '');
  secStr = secStr.replace(/\s/g, '');
  let frsStrArr = [];
  let secStrArr = [];
  for (let char of frsStr) {
    frsStrArr.push(char);
  }
  for (let char of secStr) {
    secStrArr.push(char);
  }
  let missingChar = frsStrArr.filter(n => secStrArr.indexOf(n) === -1);
  console.log('First string length = '+ frsStrArr.length);
  console.log('Second string length = '+ secStrArr.length);
  console.log('Missing characters string length = '+ missingChar.length);
  let result = ((frsStrArr.length - missingChar.length) / frsStrArr.length) * 100;
  console.log('Mismatched characters in strings: '+ missingChar);
  console.log('String coincidence = '+Math.round(result)+'%');

}

let randomStr1 =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, Math.random() * 15);
let randomStr2 =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, Math.random() * 15);

stringMatches(randomStr1, randomStr2);
