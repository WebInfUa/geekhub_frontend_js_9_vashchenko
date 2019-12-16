'use strict';

let nodeFetch = require('node-fetch');

async function getData(url) {
  try {
    let data = await nodeFetch(url);
    return data.json();
  } catch (e) {
    throw "We have error in getData function";
  }
}

(async () => {
  try {
    let responseData = getData('https://https://my-json-server.typicode.com/typicode/demo');
    console.log(responseData);
  }catch (e) {
    console.log(e)
  }
})();

// TEST - Catch error (wrong url)
(async () => {
  try {
    let responseData = getData('server.typicode.com');
    console.log(responseData);
  }catch (e) {
    console.log(e)
  }
})();
