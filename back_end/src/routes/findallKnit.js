const {Knit} = require('../db/sequelize');

module.exports = (app) => {
    app.get('/api/knits', (req,res) => {
        Knit.findAll()
        .then(knits => {
            const message = 'la liste des points a bien été récupérée'
            res.json({message, data: knits})
        })
    })
}