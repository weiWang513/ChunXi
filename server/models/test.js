const { Schema } = require("mongoose");

const mongoose = require('mongoose')
const { Schema, model } = mongoose
const test = new Schema({
  test: {
    type:String,
    index: true,
    unique: true
  }
}) 
module.exports = model('test', test)