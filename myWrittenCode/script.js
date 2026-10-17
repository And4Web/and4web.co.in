console.log('Netlify client')

// fetch("https://and4web-co-in.onrender.com/test").then(response => {
//   if(!response.ok){
//     throw new Error("Fetch Error")
//   }
//   return response.json();
// }).then((data)=>console.log(data));
const api_base_url = "https://and4web-co-in-backend.onrender.com/";

function privateMessage(){
  console.log("Private message sending...")

  fetch(`${api_base_url}/test`).then(response=>response.json()).then(data=>console.log("data from server >>> ", data)).catch(e=>console.log("Error connecting to the server >>> ", e));
}


// Dropdown function
const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");
const navbar = document.getElementById("navbar");
function dropdown(){
  console.log("dropdown...")
  if(dropdownContent.classList.contains("dropdown-active")){
    dropdownContent.classList.remove("dropdown-active")
  }else{
    dropdownContent.classList.add('dropdown-active')
  }
  // if(navbar.style.display = "block"){
  //   dropdownContent.classList.remove('dropdown-active');
  // }
}