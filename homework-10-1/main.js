'use strict';

async function getData(url) {
  debugger;
  console.log(url);
    debugger;
    let data = await fetch(url);
    let res;
  if (data.ok) {
      debugger;
      res = await data.text();
      debugger;
      return res;
  } else {
      res = "Ou ou, we have some problem. Check you URL or try use default URL";
      debugger;
      return res;
  }
}

async function takeData() {
  debugger;
  const url = document.getElementById('serverUrl').value;
  debugger;
  console.log(`take data url - ${url}`);
  debugger;
  let result;
    debugger;
    result = await getData(url);
    debugger;
    document.getElementById('serverResult').value = result;
    debugger;
    console.log('function getData: Server request is - Successful');
}

function defUrl() {
  debugger;
  let status = document.getElementById('optionsRadios1').checked;
  if (status) {
    debugger;
    document.getElementById('serverUrl').value='https://my-json-server.typicode.com/typicode/demo/posts';
  } else {
    debugger;
    document.getElementById('serverUrl').value=''
  }
}
