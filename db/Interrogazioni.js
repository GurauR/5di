const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    id: { type: Number, unique: true, required: true },
    materia: { type: String, unique: true, required: true },
    data: { type: String, unique: true,required: true }
},
{ timestamps: true })
module.exports = mongoose.model('Interrogazioni', userSchema);