let path = window.location.pathname // this returns a string 
let pathArray = path.split('/'); // gets the last character for whatever reason
let id = pathArray.pop();
let post;

async function getOtherPosts() { // this cycles until all promises have been fufilled 
  post = await fetch('https://json-server.burlingtoncodeacademy.now.sh/restaurants/' + id)  // this gets the content of a particular page
    .then((response) => {
      return response.json()
    }).then((jsonObj) => {
      return jsonObj;
    })  
        let name = post.name;
        let address = post.address;
        let phone = post.phone;
        let website = post.website;
        let hours = post.hours;
        let notes = post.notes;
document.getElementById('name').textContent = name;
document.getElementById('address').textContent = address;
document.getElementById('phone').textContent = phone;
document.getElementById('website').textContent = website;
document.getElementById('hours').textContent = hours;
document.getElementById('notes').textContent = notes;

  let authorName = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    .then((x) => {
      return x.json();
    }).then((y) => {
      return y.name
    })
}

