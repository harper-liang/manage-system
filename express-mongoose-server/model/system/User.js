const { Schema, model } = require('mongoose')
  const schema = new Schema({
    userID: { type: String },
    user: { type: String },
    password: {type: String}
  })
  
module.exports = model('User', schema)