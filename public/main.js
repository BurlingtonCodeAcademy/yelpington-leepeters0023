
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
// | - - - fetching - - - |
let name;
let id;
let address;
let phone;
let website;
let hours;
let notes;
let restaurant;
let coords;
let navContainer = document.getElementsByClassName
('navItem');

let count = 0;
getRestaurant();
async function getRestaurant() { // this cycles until all promises have been fufilled 
  restaurant = await fetch(`locations.json`)
    .then((response) => {
      return response.json()
    }).then((jsonObj) => {
      console.log(jsonObj);
      for (const restaurant of jsonObj) {
        id = restaurant.id;
        name = restaurant.name;
        address = restaurant.address;
        phone = restaurant.phone;
        website = restaurant.website;
        hours = restaurant.hours;
        coords = JSON.parse(restaurant.coords);
        L.marker(coords).addTo(mymap).on('click', onClick)
        function onClick() {
          window.open(`post.html/#${id}`);
        }
        notes = restaurant.notes;
        navContainer[count].innerHTML = `<a href=post.html/#${id}'>${name}</a>`;
        count++;
      }
      return jsonObj;
    })
}

// marker.fire('click') */
/*fetch('https://json-server.burlingtoncodeacademy.now.sh/restaurants')
let path = window.location.pathname // this returns a string 
let pathArray = path.split('/'); 
let id = pathArray.pop(); */