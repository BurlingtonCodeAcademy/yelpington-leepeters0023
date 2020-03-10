
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
let name = document.getElementById('name').innerHTML;
let address = document.getElementById('address').innerHTML;
let phone = document.getElementById('phone').innerHTML;
let website = document.getElementById('website').innerHTML;
let hours = document.getElementById('hours').innerHTML;
let notes = document.getElementById('notes').innerHTML;
let coords;
let restaurant;
let id;
let count = 0;
let individualId = document.location.hash.slice(1) 

getRestaurant();
async function getRestaurant() {
  restaurant = await fetch(`locations.json`)
    .then((response) => {
      return response.json()
    }).then((jsonObj) => {
      for (let i = 0; i < jsonObj.length; i++) {
        if (jsonObj.id[i] === individualId) {
          console.log('working')
        }
      }
          if ("id" === individualId){
            for (const restaurant of jsonObj) {
              console.log('inside loop')
            name = restaurant.name;
            address = restaurant.address;
            phone = restaurant.phone;
            website = restaurant.website;
            hours = restaurant.hours;
            notes = restaurant.notes;
            coords = JSON.parse(restaurant.coords);
            L.marker(coords).addTo(mymap)
            }
      }
      return jsonObj;
    })
}
      
    
      
        


