
// const { getClients } = require ('./src/user/userCase/getClients/getClients')

//console.log(getClients)
//console.log(getClients(123))
const cors = require('cors')
const express = require('express')
const cookies = require(`cookie-parser`)
require('dotenv').config()

const app = express()
const port = process.env.port
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookies())

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log ('Conexión a MongoDB establecida'))
  .catch(err => console.log (err))

// Archivos clients
app.use('/api/v1',  require('./src/routers/routers'));
app.use('/api/v1',  require('./src/routers/authrouters'));
app.use('/api/v1',  require('./src/routers/validate-token'));

i=0

app.get('/', (req, res) => {
  res.cookie('username', 'John');
  res.send('welcome to express');
});

app.get('/clients', (req, res) => {
  res.send('Hello World!')
  console.log(`Peticiones resueltas ${port} ${i++}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})