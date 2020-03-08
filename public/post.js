let mymap = L.map('mapid').setView([44.475, -73.212], 13)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/dark-v10',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibHBldGVyczAwMjMiLCJhIjoiY2s3ZjU1NTB4MTZ2YTNtbXl3djR1OGd0eiJ9.GfFkcLF5-CITMYpJOF4weQ'
}).addTo(mymap);
let name;
let address;
let phone;
let website;
let hours;
let notes;
let restaurant;
let coords;
let navContainer = document.getElementsByClassName('navItem');
let count = 0;
let path = window.location.pathname 
let name = document.location.hash.slice(1) 

getPost();
async function getPost() {
  post = await fetch(`locations.json/` + name)
    .then((response) => {
      return response.json()
    }).then((jsonObj) => {
      console.log(jsonObj);
      for (const restaurant of jsonObj) {
      name = post.name;
      address = post.address;
      phone = post.phone;
      website = post.website;
      hours = post.hours;
      notes = post.notes;
      document.getElementById('name').textContent = name;
      document.getElementById('address').textContent =address;
      document.getElementById('phone').textContent = phone;
      document.getElementById('website').textContent =website;
      document.getElementById('hours').textContent = hours;
      document.getElementById('notes').textContent = notes;
    }
}

       