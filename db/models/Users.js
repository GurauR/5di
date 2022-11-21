const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  matricola: {
    type: Number,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  cognome: {
    type: String,
    required: true,
  },
  DIV: {
    type: Boolean,
    required: true
  },
  GPI: {
    type: Boolean,
    required: true
  },
  ING: {
    type: Boolean,
    required: true
  },
  INI: {
    type: Boolean,
    required: true
  },
  IRC: {
    type: Boolean,
    required: true
  },
  LIT: {
    type: Boolean,
    required: true
  },
  MAT: {
    type: Boolean,
    required: true
  },
  SMS: {
    type: Boolean,
    required: true
  },
  SRI: {
    type: Boolean,
    required: true
  },
  STO: {
    type: Boolean,
    required: true
  },
  TPI: {
    type: Boolean,
    required: true
  },
})

const User = mongoose.model("User", UserSchema)
module.exports = User