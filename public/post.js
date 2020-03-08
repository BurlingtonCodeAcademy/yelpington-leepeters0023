
let name;
let address;
let phone;
let website;
let hours;
let notes;
let restaurant;
let coords;
let post;
let count = 0;
let path = window.location.pathname 
let name = document.location.hash.slice(1) 

getPost();
async function getPost() {
  post = await fetch(`locations.json`)
    .then((response) => {
      return response.json()
    }).then((jsonObj) => {
      console.log(jsonObj);
      for (post of jsonObj) {
      name = post.name;
      address = post.address;
      phone = post.phone;
      website = post.website;
      hours = post.hours;
      notes = post.notes;
      name[count].innerHTML = name
      count++
      }
      return jsonObj;
    })
}
