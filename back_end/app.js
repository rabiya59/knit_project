  //*** le fichier APP.js permet de démarrer un serveur express
  
  // On récupere le packet express
const express = require('express');
const favicon = require('serve-favicon')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app= express();
const sequelize = require('./src/db/sequelize')
const cors = require('cors')



const dotenv = require('dotenv');
dotenv.config();
 
// on crée une instance 
const port = process.env.PORT || 3000;

app.use(favicon(__dirname + '/favicon.ico'))
app.use(morgan('dev'))
app.use(bodyParser.json()) 
app.use(cors())


sequelize.initDb()

//ici nous placerons nos futus points de terminaison
require('./src/routes/findallKnit')(app)
require('./src/routes/createKnit')(app)
require('./src/routes/findknitbyKt')(app)
require('./src/routes/updateKnit')(app)
require('./src/routes/deleteKnit')(app)




app.listen(port,() => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`));







