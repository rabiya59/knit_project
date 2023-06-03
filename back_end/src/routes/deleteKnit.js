const { Knit } = require('../db/sequelize')
  
module.exports = (app) => {
  app.delete('/api/knits/:id', (req, res) => {
    Knit.findByPk(req.params.id).then(knit => {
      const KnitDeleted = knit;
      Knit.destroy({
        where: { id: knit.id }
      })
      .then(_ => {
        const message = `Le point ${KnitDeleted.name} a bien été supprimé.`
        res.json({message, data: KnitDeleted })
      })
    })
  })
}
