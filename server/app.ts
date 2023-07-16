import { Request,Response } from "express";

const express = require('express');
const app = express();
const port = 4000;
const mongooes = require('mongoose')



// moongoes access:
mongooes
  .connect('mongodb://127.0.0.1:27017')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(`at mongoose connect: ${err.message}`);
  });


app.set('view engine', 'ejs');
app.use(express.static('public'));
//Request & Response ---> i libbary that coonect the req and responed to the type scrip.
// the instalattion is : 
app.get('/4xxCode', (req:Request,res:Response)=>{
  res.render('4xxCode');
})

app.get('/5xxCode', (req:Request,res:Response)=>{
  res.render('5xxCode');
})

app.get('/special',(req:Request,res:Response)=>{
  res.render('Special');
});


app.get('/', (req, res) => {
  res.render('Special', {
    imagePath: '/path/to/your/image.jpg',
    text: 'Hello, world!'
  });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
      });

      