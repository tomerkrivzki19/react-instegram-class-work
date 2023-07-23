import { Request,Response, response } from "express";
import { Model } from "mongoose";
import { Session, Sessions } from "./class/Session";
import { SessionXXX } from "./class/sessionXXX";
const SessionModel:Model<Sessions> = require('./models/SessionModel')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;



export interface User{
  UserName:String,
  Password:String
 }

 const UserModel:Model<User> = require('./models/UserModel');


mongoose
  .connect('mongodb://127.0.0.1:27017')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(`at mongoose connect: ${err.message}`);
  });



app.set('view engine','ejs');


app.post('/addUser',async (req:Request,res:Response)=>{
  // let {FirstName,LastName,Email} = req.body;
  try {
    const UserDB = new UserModel<User>({
      UserName:'ori',
      Password:'12345'
    });
    await UserDB.save().then(()=>{
      res.send({ok:true,UserDB});
    });
  } catch (error) {
    res.status(500).send();
  }


})
app.get('/getUsers',async (req:Request,res:Response) => {
try {
  const Users = await UserModel.find();
  res.send({ok:true,Users});
} catch (error) {
  res.status(500).send({ok:false});
}
})

app.post('/update-user/:id',async (req:Request|any, res:Response) => {
  const username = req.params.id;
  // console.log(req);
  // const { sessionId } = req.cookie;
  
  
  const sessionId =289;

  const session = new SessionXXX(username,sessionId);
  setTimeout( async ()=>{
    if (session && session.isValid() && session.session.getUserName() == username) { // make sure that this user is really authorized to change this data
     await UserModel.findOneAndUpdate({UserName:username},{UserName:username+'yes'}).then((value)=>{
      res.status(200).send('User updated successfully!');
     })
    } else {
      res.status(401).send('Unauthorized for action!');
    }
  },200)
 
});

app.post('/login', async (req:Request, res:Response) => {
  try {
    const username:any = req.query.username;
    const password = req.query.password;
    const user:any = await UserModel.findOne({UserName:username});
    
    if (!user || user.Password != password) {
      res.status(401).send('Bad username & password combination');
    } else {
      const sessionn = await new Session(username,12); // this class saves the session in mongo behind the scenes - in Session constructor
      const sessionId = sessionn.id;
      res.cookie('sessionId', sessionId, { maxAge: 900000, httpOnly: true });
      res.status(200).send('Login succesfully!');
    }
    
  } catch (error) {
    console.log(error);
    
  }
 
});



app.get('/5xxCode', (req:Request,res:Response)=>{
  res.render('5xxCode');
})

app.get('/special',(req:Request,res:Response)=>{
  res.render('Special');
});

app.get('/', (req: any, res: any) => {
  res.send('Hello, world!');
});

app.use('*', (req:Request,res:Response)=>{
  res.status(404).render('4xxCode');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

});