const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Personal = new Schema({
    fullname: {type: String, maxLength: 255},
    birth: {type: String, maxLength: 255},
    hometown: {type: String, maxLength: 255},
    nationality: {type: String, maxLength: 255},
    education: {type: String, maxLength: 255},
    cover_name: {type: String, maxLength: 255},
    cover_img: {type: String, maxLength: 255},
    img: {type: String, maxLength: 255},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    
  });

  module.exports = mongoose.model('personal_info', Personal);