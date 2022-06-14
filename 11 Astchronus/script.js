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

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);

      const neigbhour = data[0].borders[0];
      if (!neigbhour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neigbhour}`);
    })
    .then(function (response) {
      return response.json();
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
