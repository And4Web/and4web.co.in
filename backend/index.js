const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
  origin: process.env.CLIENT_URL
}));

app.get('/', (req, res)=>{
  res.send("hello world!")
})

app.get('/test', (req, res)=>{
  res.status(200).json({"message": "test successful"})
})

app.listen(PORT, ()=>{
  console.log(`Server running on ${PORT}`)
})