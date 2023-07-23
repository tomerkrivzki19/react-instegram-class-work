import { Request,Response } from "express";
// import {SessionXXX} from './class/session';

const express = require('express');
const app = express();
const mongooes = require('mongoose')
const port = process.env.Port || 8080;


require('dotenv').config();

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
//Request & Response ---> A library that coonect the req and responed to the type scrip.--we van see the import at the top page.
// the instalattion is : 
app.get('/4xxCode', (req:Request,res:Response)=>{
  res.render('4xxCode');
  //need to add an files for the message
})

app.get('/5xxCode', (req:Request,res:Response)=>{
  res.render('5xxCode');
    //need to add an files for the message
})

app.get('/special',(req:Request,res:Response)=>{
  res.render('Special');
});


// app.get('/', (req, res) => {
//   res.render('Special', {
//     imagePath: '/path/to/your/image.jpg',
//     text: 'Hello, world!'
//   });
// });


// client-side query example: POST: 'http://localhost:3000/update-user/3069588493'; body: { address: 'Bugrashov 7, Tel-Aviv, Israel' }
//:id --> view of the id in the http path.
app.post('/update-user/:id', (req, res) => {
  const username = req.params.id;
  const payload = req.body;
  // cookie request:
  const { sessionId } = req.cookies;

  let session; // session = call mongodb - get session by sessionId
  if (session && session.isValid() && session.username == username) { // make sure that this user is really authorized to change this data
    // save new user data in database - by username
    res.status(200).send('User updated successfully!')
  } else {
    res.status(401).send('Unauthorized for action!');
  }
});

// app.post('/login', (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   let user;
//   // const user = call mongodb - get user by username
//   if (!user || user.password != password) {
//     res.status(401).send('Bad username & password combination');
//   } else {
//     const session = new Session(12, username); // this class saves the session in mongo behind the scenes - in Session constructor
//     const sessionId = session.id;
//     res.cookie('sessionId', sessionId, { maxAge: 900000, httpOnly: true });
//     res.status(200).send('Login succesfully!');
//   }
// });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
      });

