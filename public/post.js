
let mymap = L.map('mapid').setView([44.475, -73.212], 13)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/dark-v10',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibHBldGVyczAwMjMiLCJhIjoiY2s3ZjU1NTB4MTZ2YTNtbXl3djR1OGd0eiJ9.GfFkcLF5-CITMYpJOF4weQ'
}).addTo(mymap);
// | - - - ^ map stuff ^ - - - |
// delcare all vars into global scope
let name;
let address;
let phone;
let website;
let hours;
let notes;
let coords;
let restaurant;
let id;
let individualId = document.location.hash.slice(1) 

getRestaurant();
async function getRestaurant() {
  restaurant = await fetch(`locations.json`)
    .then((response) => {
    return response.json()
  }).then((jsonObj) => {
      console.log(jsonObj)
      let singleRest; // needed a second var here to store individual location data 
      for (let object of jsonObj) { // matches what's been clicked with the required location data and assigns to var
        if (object.id===individualId) {
          singleRest = object
          console.log(singleRest)
        }
      } 
        name = singleRest.name;
        document.getElementById('name').textContent = name;
        address = singleRest.address;
        document.getElementById('address').textContent = address;
        phone = singleRest.phone;
        document.getElementById('phone').textContent = phone;
        website = singleRest.website;
        document.getElementById('website').textContent = website;
        hours = singleRest.hours;
        document.getElementById('hours').textContent = hours;
        notes = singleRest.notes;
        document.getElementById('notes').textContent = notes;
        coords = JSON.parse(singleRest.coords);
        L.marker(coords).addTo(mymap)
          return jsonObj;
 })
}
      
  