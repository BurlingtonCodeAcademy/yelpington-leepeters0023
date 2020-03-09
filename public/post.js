
let name;
let address;
let phone;
let website;
let hours;
let notes;
let restaurant;
let coords;
let post; // do dom queries here 
let count = 0;
let name = document.location.hash.slice(1) // be aware that this returns an array // this is actually id and was correct the first time, what has been clicked 
let displayName = document.getElementById('leftNav') // do dom queries for each element 

// let query = window.location.search // gives you the question mark and anything after it 

let id = query.split('?')[1] // splits at the ? and the 1 means we take everything after the ? 

fetch(`/locations.json`) 
  .then(res => res.json()) // this is called an implicit return, if we're not passing anything we don't need to curly braces, I think. Doesn't actually matter. 
  .then((jsonRes) => {
    console.log(jsonRes) // json res is an array
    displayName.innerText = jsonRes.name
    for (post of jsonRes) {
      // ad if else if post id === query 
      name = post.name;
      address = post.address;
      phone = post.phone;
      website = post.website;
      hours = post.hours;
      notes = post.notes;
      coords = JSON.parse(post.coords);
      L.marker(coords).addTo(mymap)
      name[count].innerHTML = name
      count++
      }
      return jsonObj;
    })
}

    // fun fact: we can do fetches inside of fetches
    //fetch(`https://nominatim...${jsonRes.address}`)
      //.then(res => res.json()) 
  //})
/*getPost();
async function getPost() {
  post = await fetch(`locations.json`${:name})
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
      coords = JSON.parse(post.coords);
      L.marker(coords).addTo(mymap)
      name[count].innerHTML = name
      count++
      }
      return jsonObj;
    })
}
*/ 

// single page web app 