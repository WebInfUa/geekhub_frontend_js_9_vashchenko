'use strict';

const nodeFetch = require("node-fetch");

async function getData(url) {
  console.log(url);
  try {
    let data = await nodeFetch(url);
    let res;
    res = await data.json();
    return res;
  } catch (e) {
    throw "Ou ou, we have some problem. Check you URL or try use default URL";
  }
}

async function takeData() {
  const url = document.getElementById('serverUrl').value;
  console.log(`take data url - ${url}`);
  try {
    document.getElementById('serverResult').value = await getData(url);
    console.log('function getData: Server request is - Successful');
  }catch (e) {
    document.getElementById('serverResult').value = e;
    console.log('Function takeData - take promise error');
  }
}

function defUrl() {
  let status = document.getElementById('optionsRadios1').checked;
  if (status) {
    document.getElementById('serverUrl').value='https://my-json-server.typicode.com/typicode/demo/posts'
  } else {
    document.getElementById('serverUrl').value=''
  }
}
