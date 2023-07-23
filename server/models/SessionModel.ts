const mongoose = require('mongoose');


const SessionScema = new mongoose.Schema({
    UserName:String,
    expireTime:String,
    id:String
  });
  
  var SessionModel = mongoose.model("Session", SessionScema);
  
  
module.exports = SessionModel;