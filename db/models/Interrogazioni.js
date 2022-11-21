const mongoose = require('mongoose')

const InterrogazioniSchema = mongoose.Schema({
  materia: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
})

const Interrogazioni = mongoose.model("Interrogazioni", InterrogazioniSchema)
module.exports = Interrogazioni