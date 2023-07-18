import mongooseUser from 'mongoose';
import { user } from './interFace';
//  const {user} = require('./interface')


const userSchema = new mongooseUser.Schema<user>({
    username:String,
    password: String,
});

const model =  mongooseUser.model("users",userSchema);

module.exports= model;

