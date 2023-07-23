import mongoose from  "mongoose"
// import { User } from '.'
import { user } from "./UserInterface";

const UserScehma = new mongoose.Schema<user>({
  UserName:String,
  Password:String
});

var UserModel = mongoose.model<user>("Users", UserScehma);

module.exports = UserModel;