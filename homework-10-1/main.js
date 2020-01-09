'use strict';

const getData= async (url) => {
  try {
    const data = await fetch(url);
    return await data.text();
  } catch {
    throw new Error('Ou ou, we have some problem. Check you URL or try use default URL.');
  }
};

const defaultUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';
const optionsRadio = document.getElementById('optionsRadios1');
const serverUrl = document.getElementById('serverUrl');
const serverResult = document.getElementById('serverResult');
const defUrl = () => (
  optionsRadio.checked
    ? serverUrl.value = defaultUrl
    : serverUrl.value = ''
);

const takeData = async () => {
  const url = serverUrl.value;
  serverResult.value = await getData(url);
};

optionsRadio.addEventListener('click', defUrl());
serverUrl.addEventListener('click', takeData());
