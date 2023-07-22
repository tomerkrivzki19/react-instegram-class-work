import { Schema, model } from "mongoose";

const userSchema= new Schema({
        id:{type:String},
        userName:{type:String}
})

export const User = model("User", userSchema);