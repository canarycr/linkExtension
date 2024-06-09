// popup.js
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchButton').addEventListener('click', searchCountry);
  });
  
  function searchCountry() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  
    // Fetch data from file
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const countryData = data[searchInput];
        if (countryData) {
          displayCities(countryData);
        } else {
          alert('Country not found!');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // function displayCities(countryData) {
  //   const cityList = document.getElementById('cityList');
  //   cityList.innerHTML = '';
  
  //   for (const city of countryData.cities) {
  //     const mapLink = `https://maps.google.com/?q=${encodeURIComponent(city)}`;
  //     //const mapLink = `${countryData.links[0]}`
  //     console.log(`${index}`);
  //     const cityDiv = document.createElement('div');
  //     cityDiv.innerHTML = `<a href="${mapLink}" target="_blank">${city}</a>`;
  //     cityList.appendChild(cityDiv);
  //   }
  // }
  
  function displayCities(countryData) {
    const cityList = document.getElementById('cityList');
    cityList.innerHTML = '';
  
    for (let i = 0; i < countryData.cities.length; i++) {
      const city = countryData.cities[i];
      //const mapLink = `https://maps.google.com/?q=${encodeURIComponent(city)}`;
      const demoValue = countryData.links[i]
      console.log(`${demoValue}`);
      const mapLink = `https://${encodeURIComponent(demoValue)}`
      const cityDiv = document.createElement('div');
      cityDiv.innerHTML = `<a href="${mapLink}" target="_blank">${city}</a>`;
      cityList.appendChild(cityDiv);
    }
  }