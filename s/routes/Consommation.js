const express = require('express')
const router = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const sequelize = require('sequelize')

const Lampadaire = require('../models/Lampadaire')
const Ampoule = require('../models/Ampoule')
const Capteur = require('../models/Capteur')
const Consommation = require('../models/Consommation')
const Position = require('../models/Position')

router.use(cors())


process.env.SECRET_KEY = 'secret'



router.get('/api/profile', (req, res) => {
  // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)ss

  Lampadaire.findAll({
    include: [
      { model: Ampoule },
      { model: Capteur },
      { model: Consommation },
      { model: Position }
    ]
  })
    .then(lampadaire => {
      if (lampadaire) {
        console.log(req.body)

        res.json(lampadaire)
      } else {
        res.send('Lampadaire does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.get('/api/consommation/:id/:mois', (req, res) => {
  // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  Consommation.findAll({  attributes: [
    [sequelize.fn('SUM', sequelize.col('conso')), 'conso']]
    ,where: sequelize.and(
      sequelize.where(sequelize.fn('MONTH', sequelize.col('date')), req.params.mois),
      {id_lampadaire:req.params.id}
    )
})
    .then(consommation => {
      if (consommation) {
        console.log(req.body)
        res.json(consommation)
      } else {
        res.send('Lampadaire does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})







module.exports = router
