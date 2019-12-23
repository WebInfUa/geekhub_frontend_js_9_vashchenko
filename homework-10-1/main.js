'use strict';

const getData= async (url) => {
  let res = "Ou ou, we have some problem. Check you URL or try use default URL";
  let data = await fetch(url);
  if (data.ok) {
    res = await data.text();
  }
  return res;
};

const takeData = async () => {
  const url = document.getElementById('serverUrl').value;
  document.getElementById('serverResult').value = await getData(url);
};

const defUrl = () => (document.getElementById('optionsRadios1').checked === true) ?
  document.getElementById('serverUrl').value='https://my-json-server.typicode.com/typicode/demo/posts' :
  document.getElementById('serverUrl').value='';


