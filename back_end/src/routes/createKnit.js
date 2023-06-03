const { Knit } = require('../db/sequelize')
  
module.exports = (app) => {
  app.post('/api/knits', (req, res) => {
    Knit.create(req.body)
      .then(knit => {
        const message = `Le point ${req.body.name} a bien été crée.`
        res.json({ message, data: knit })
      })
  })
}