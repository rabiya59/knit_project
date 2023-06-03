const { Knit } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/knits/:id', (req, res) => {
    Knit.findByPk(req.params.id)
      .then(knit => {
        const message = 'Un pokémon a bien été trouvé.'
        res.json({ message, data: knit })
      })
  })
} 