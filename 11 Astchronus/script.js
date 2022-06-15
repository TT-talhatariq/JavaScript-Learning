'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, classN) {
  //console.log(data);

  const lang = Object.keys(data.languages);

  const names = Object.values(data.altSpellings);

  const currencies = Object.keys(data.currencies);

  const html = `
    <article class="country ${classN}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${names[1]}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${lang[0].toUpperCase()}</p>
        <p class="country__row"><span>💰</span>${currencies[0]}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryAndNumber = function (country) {
  //Old and first Step to make request
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  //get Data and Url fo request

  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    //Render Original COuntry
    renderCountry(data);

    //Negbhout
    const neigbhour = Object.values(data.borders);

    console.log(neigbhour);
    if (!neigbhour) return;

    //Old and first Step to make request
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neigbhour[0]}`);
    //get Data and Url fo request
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbour');
    });
  });
};

//getCountryAndNumber('russia');
//Old and first Step to make request

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0])
//     });
// };

const getJSON = function (url) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error('Not Found');
    return response.json();
  });
};
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`)
    .then(data => {
      renderCountry(data[0]);

      const neigbhour = data[0].borders[0];
      if (!neigbhour) return;
      return getJSON(`https://restcountries.com/v2/alpha/${neigbhour}`);
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log('err');
      renderError('Wrong Happened');
    });
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

btn.addEventListener('click', function () {
  getCountryData('pakistan ');
});

const whereIAm = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const dta = await res.json();
  renderCountry(dta[0]);
  console.log(res);
};

//whereIAm('pakistan');
console.log('First');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;

const loadAndPause = async function () {
  try {
    //Load Image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
  } catch (err) {
    console.log(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
