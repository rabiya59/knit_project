const {Knit} = require('../db/sequelize');
var cors = require('cors')


module.exports = (app) => {
    app.get('/api/knits',cors(), (req,res) => {
        Knit.findAll()
        .then(knits => {
            const message = 'la liste des points a bien été récupérée'
            res.json({message, data: knits})
        })
    })
}