const { Knit } = require('../db/sequelize')
  
module.exports = (app) => {
  app.put('/api/knits/:id', (req, res) => {
    const id = req.params.id
    Knit.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      Knit.findByPk(id).then(knit => {
        const message = `Le point ${knit.name} a bien été modifié.`
        res.json({message, data: knit })
      })
    })
  })
}