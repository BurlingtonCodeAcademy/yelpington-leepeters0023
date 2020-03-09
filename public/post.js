
let name = document.getElementById('name').innerHTML;
let address = document.getElementById('address').innerHTML;
let phone = document.getElementById('phone').innerHTML;
let website = document.getElementById('website').innerHTML;
let hours = document.getElementById('hours').innerHTML;
let notes = document.getElementById('notes').innerHTML;
let coords;
let post;
let id;
let count = 0;
let individualId = document.location.hash.slice(1) // be aware that this returns an array // this is actually id and was correct the first time, what has been clicked 
console.log(individualId)
getIndividualPost()
async function individualPost() {
post = await fetch(`locations.json`) 
  .then(res => res.json()) // this is called an implicit return, if we're not passing anything we don't need to curly braces, I think. Doesn't actually matter. 
  .then((jsonRes) => {
    console.log(jsonRes) // json res is an array
    // displayName.innerText = jsonRes.name
    for (post of jsonRes) {
      if (individualId === id) {
        console.log(name)
        name = post.name;
        address = post.address;
        phone = post.phone;
        website = post.website;
        hours = post.hours;
        notes = post.notes;
        coords = JSON.parse(post.coords);
        //L.marker(coords).addTo(mymap)
        //id[count].innerHTML = id
        //count++
       }
      }
      return jsonRes;
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