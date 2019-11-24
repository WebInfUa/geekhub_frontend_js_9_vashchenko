'use strict';

let numArr = [-35, 26, 48, 78, 19, -6, 0, 33, 71, 12, 23, 29, 100];

//Task1
let arrOperation = (array) => {
  let arrSum = array.reduce((accumulator, currentValue)  => accumulator + currentValue, 0);
  const maxValue = Math.max(...array);
  const minValue = Math.min(...array);
  let maxIndex = array.indexOf(maxValue);
  let minIndex = array.indexOf(minValue);
  array[maxIndex] = minValue;
  array[minIndex] = maxValue;
  let result = `Sum = ${arrSum} Max  ${maxValue} Min = ${minValue} Replace ${numArr}`;

  return (result);
};

//Task2
let createSentences = (text, callback) => {
  let sentence = 'Callback = callback function '+ text;
  callback(sentence);
};

let logWrite = (message) => console.log(message);

//Task3
let fooBar = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 7 === 0) {
      array[i] = 'foobar';
    } else if (array[i] % 7 === 0) {
      array[i] = 'bar';
    } else if (array[i] % 3 === 0) {
      array[i] = 'foo';
    }
  }

  return array;
};

//Task4
let stringMatches = (frsStr, secStr, callback) => {
  callback('First string = '+ frsStr);
  callback('Second string = '+ secStr);

  frsStr = frsStr.replace(/\s/g, '');
  secStr = secStr.replace(/\s/g, '');
  let frsStrArr = [], secStrArr = [];

  for (let char of frsStr) {
    frsStrArr.push(char);
  }

  for (let char of secStr) {
    secStrArr.push(char);
  }

  let missingChar = frsStrArr.filter(n => secStrArr.indexOf(n) === -1);
  let percentOccurrence = Math.round(((frsStrArr.length - missingChar.length) / frsStrArr.length) * 100) + '%';
  let result = 'String coincidence = '+ percentOccurrence;

  callback(result);
};

let randomStr = (strLength) => {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < strLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

logWrite('Array = '+numArr);
logWrite(arrOperation(numArr));
createSentences("write in console", logWrite);
logWrite(fooBar(numArr));
stringMatches(randomStr(30), randomStr(25), logWrite);


class StackCalc {
  constructor() {
    this.stack = [];
  }

  run(instructions) {
    let i = instructions.split(" ").map((cV) => {
      if (!isNaN(+cV)) this.stack.push(+cV);
      if (isNaN(+cV)) {
        switch (cV) {
          case "+":
            this.stack.push(this.stack.pop() + this.stack.pop());
            break;
          case "-":
            this.stack.push(this.stack.pop() - this.stack.pop());
            break;
          case "*":
            this.stack.push(this.stack.pop() * this.stack.pop());
            break;
          case "/":
            this.stack.push(this.stack.pop() / this.stack.pop());
            break;
          case "DUP":
            const popped = this.stack.pop();
            this.stack.push(popped);
            this.stack.push(popped);
            break;
          case "POP":
            this.stack.pop();
            break;
          default:
            return "Invalid instruction: " + cV
        }
      }
    }).filter((cV) => cV);
    if (i.length > 0) this.stack.push(i[0]);
  }
  get value() {
    return this.stack [this.stack.length - 1] || 0;
  }
}
