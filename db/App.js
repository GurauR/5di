var express = require('express');
var app = express();

var url = "mongodb://172.104.156.217:27017/?directConnection=true&appName=mongosh+1.6.0";

app.listen(3000, () => {
   console.log('Server listening on 3000');
})

const mongoose = require('mongoose');
mongoose.connect(url, () => {
   console.log('Connected to Mongo DB Successfully!!');
})

const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
const Interrogazioni = require('./Interrogazioni.js'); 
router.post('/user', (request, response) => {
  const user = new Interrogazioni({
    
    materia: request.body.materia,
    data: request.body.data
  });
});
module.exports = router;