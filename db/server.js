const express = require('express')
const  mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 3001

const InterrogazioniModel = require("./models/Interrogazioni")
const UserModel = require("./models/Users")

var url = "mongodb://172.104.156.217:27017/?directConnection=true&appName=mongosh+1.6.0";

app.use(cors())
app.use(express.json())

mongoose.connect(url, { useNewUrlParser: true })

app.post('/insertInterrogazione', async (req, res) => {

  const materia = req.body.materia
  const date = req.body.date

  const interrogazioni = new InterrogazioniModel({ materia: materia, date: date })
  
  try {
    await interrogazioni.save()
    res.send("inserted Data")
  } catch (err) {
    console.log(err)
  }
})

app.get('/readInterrogazione', async (req, res) => {

  InterrogazioniModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }
    
    res.send(result)
  })

})

app.post('/insertUser', async (req, res) => {

  const matricola = req.body.matricola
  const nome = req.body.nome
  const cognome = req.body.cognome
  const DIV = req.body.DIV
  const GPI = req.body.GPI
  const ING = req.body.ING
  const INI = req.body.INI
  const IRC = req.body.IRC
  const LIT = req.body.LIT
  const MAT = req.body.MAT
  const SMS = req.body.SMS
  const SRI = req.body.SRI
  const STO = req.body.STO
  const TPI = req.body.TPI

  //const matricola = 19254
  //const nome = "Roberto"
  //const cognome = "Gurau"
  //const DIV = true
  //const GPI = true
  //const ING = true
  //const INI = true
  //const IRC = true
  //const LIT = true
  //const MAT = true
  //const SMS = true
  //const SRI = true
  //const STO = true
  //const TPI = true

  const users = new UserModel({ matricola: matricola, nome: nome, cognome: cognome, DIV: DIV, GPI: GPI, ING: ING, INI: INI, IRC: IRC, LIT: LIT, MAT: MAT, SMS: SMS, SRI: SRI, STO: STO, TPI: TPI })

  try {
    await users.save()
    res.send("inserted Data")
  } catch (err) {
    console.log(err)
  }

})

app.get('/readUser', async (req, res) => {

  UserModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }
    
    res.send(result)
  })

})

app.put('/updateUser', async (req, res) => { 

  const id = req.body.id

  const matricola = req.body.updatedUser.matricola
  const nome = req.body.updatedUser.nome
  const cognome = req.body.updatedUser.cognome
  const newDIV = req.body.updatedUser.DIV
  const newGPI = req.body.updatedUser.GPI
  const newING = req.body.updatedUser.ING
  const newINI = req.body.updatedUser.INI
  const newIRC = req.body.updatedUser.IRC
  const newLIT = req.body.updatedUser.LIT
  const newMAT = req.body.updatedUser.MAT
  const newSMS = req.body.updatedUser.SMS
  const newSRI = req.body.updatedUser.SRI
  const newSTO = req.body.updatedUser.STO
  const newTPI = req.body.updatedUser.TPI

  try {
    console.log(id)
    UserModel.findById(id, (user) => {
      user.DIV = newDIV,
      user.GPI = newGPI,
      user.ING = newING,
      user.INI = newINI,
      user.IRC = newIRC,
      user.LIT = newLIT,
      user.MAT = newMAT,
      user.SMS = newSMS,
      user.SRI = newSRI,
      user.STO = newSTO,
      user.TPI = newTPI
    })
  } catch (err) {
    console.log(err)
  }
})

app.listen(port, () => console.log(`Server running on port ${port}!`))