
const {Sequelize, DataTypes} = require('sequelize')
const KnitModel = require('../models/knits')
const knits = require('../db/mock-knit')


// on crée une instance 

const squelize = new Sequelize(
    'search_knit',
    'knit',
    '123',
    {
        host: '192.168.64.2', 
        dialect: 'mariadb', 
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
        logging : false,
    }
);

const Knit = KnitModel(squelize, DataTypes);

const initDb = () => {
 return squelize.sync({force: true }).then(_ => {
    console.log('La base de données "Knit" a bien été synchronisée.')
    knits.map(knit => {
        Knit.create({ 
            name: knit.name,
            picture: knit.picture
            // retourne une promesse javascript (then)
            // methode toJSON : POUR débeugage
            }).then(torsade => console.log(torsade.toJSON()))
         })  
    })
}

module.exports = {
    initDb, Knit
}








