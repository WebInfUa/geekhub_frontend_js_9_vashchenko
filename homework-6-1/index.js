let numArr = [-35, 26, 48, 78, 19, -6, 0, 33, 71, 12, 23, 29, 100];

console.log('My Array is = '+numArr);
console.log('Sum all numbers in array = '+numArr.reduce((accumulator, currentValue)  => accumulator + currentValue, 0));
const maxValue = Math.max.apply(null, numArr);
console.log('Max number in Array = '+ maxValue);

const minValue = Math.min.apply(null, numArr);
console.log('Min number in Array = '+ minValue);

const maxIndex = numArr.indexOf(maxValue);
const minIndex = numArr.indexOf(minValue);
numArr[maxIndex] = minValue;
numArr[minIndex] = maxValue;
console.log('My Array is = '+numArr);

function createSentences(text, callback){
  let sentence = 'Hello, amazing and crazy ' + text + ' world!';
  callback(sentence);
}

function logWrite(message){
  console.log(message);
}

createSentences("JavaScript", logWrite);

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

function randomStr(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

stringMatches(randomStr(30), randomStr(25));
