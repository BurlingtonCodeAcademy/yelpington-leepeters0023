
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
let name = document.getElementById('name')
let address = document.getElementById('address')
let phone = document.getElementById('phone')
let website = document.getElementById('website')
let hours = document.getElementById('hours')
let notes = document.getElementById('notes')
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
      console.log(jsonObj)
      let singleRest;
      for (let object of jsonObj) {
        if (object.id===individualId) {
          singleRest = object
          console.log(object)
        }
      }
      //if (jsonObj[id] === individualId) {
        //for (const restaurant of jsonObj) {
        console.log('inside loop')
          name = singleRest.name;
          address = singleRest.address;
          phone = singleRest.phone;
          website = singleRest.website;
          hours = singleRest.hours;
          notes = singleRest.notes;
          coords = JSON.parse(restaurant.coords);
          L.marker(coords).addTo(mymap)
        //}
      //}
    return jsonObj;
 })
}
      
    
      
        


