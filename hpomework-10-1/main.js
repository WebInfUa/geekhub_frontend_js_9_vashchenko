'use strict';

let nodeFetch = require('node-fetch');

async function getData(url) {
  try {
    let data = await nodeFetch(url);
    let res;
    res = await data.json();
    return res;
  } catch (e) {
    throw "We have error in getData function";
  }
}

(async () => {
  try {
    let responseData = await getData('https://my-json-server.typicode.com/typicode/demo/posts');
    console.log(responseData);
  }catch (e) {
    console.log(e)
  }
})();

// TEST - Catch error (wrong url)
(async () => {
  try {
    let responseData = await getData('server.typicode.com');
    console.log(responseData);
  }catch (e) {
    console.log(e)
  }
})();
