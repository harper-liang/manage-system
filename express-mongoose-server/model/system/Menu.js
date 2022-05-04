const { Schema, model } = require('mongoose')
  const schema = new Schema({
    menuID: { type: String },
    menu: { type: String }
  })
  
  module.exports = model('Menu', schema)



