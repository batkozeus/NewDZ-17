import './scss/style.scss'

let wrapper = document.createElement('div');
wrapper.id = "wrapper";

let firsth2 = document.createElement('h2');
firsth2.innerText = "Задача 1";
wrapper.appendChild(firsth2);
let resortNumber = document.createElement('p');
resortNumber.id = "resortNumber";
wrapper.appendChild(resortNumber);
let resortName = document.createElement('p');
resortName.id = "resortName";
wrapper.appendChild(resortName);
let hr = document.createElement('hr');
wrapper.appendChild(hr);

let secondh2 = document.createElement('h2');
secondh2.innerText = "Задача 2";
wrapper.appendChild(secondh2);
let taba = document.createElement('p');
taba.id = "taba";
taba.innerText = "Taba - 6 мест";
wrapper.appendChild(taba);
let sharm = document.createElement('p');
sharm.id = "sharm";
sharm.innerText = "Sharm - 25 мест";
wrapper.appendChild(sharm);
let hurgada = document.createElement('p');
hurgada.id = "hurgada";
hurgada.innerText = "Hurgada - 15 мест";
wrapper.appendChild(hurgada);
wrapper.appendChild(hr);

export default wrapper;