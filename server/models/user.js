const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    knownLanguages:[{
      type:String,
    }],
    gender: {
          type: Boolean,
          required: true,   
          default: false
      },
      education: {
          type: String,
          // required: true
      },
      bio: {
        type: String,
        // required: true
    },
})

module.exports = mongoose.model('user', userSchema)