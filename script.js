console.log('Netlify client')

const test = fetch("https://and4web-co-in.onrender.com/test").then(data=>data.message).then((message)=>console.log(message));

