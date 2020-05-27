const express = require('express')
const router = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Lampadaire = require('../models/Lampadaire')
const Ampoule = require('../models/Ampoule')
const Capteur = require('../models/Capteur')
const Consommation = require('../models/Consommation')
const Position = require('../models/Position')

router.use(cors())


process.env.SECRET_KEY = 'secret'

router.post('/register', (req, res) => {
  const today = new Date()
  const lampadaireData = {
    type: req.body.first_name,
    status: req.body.last_name,
    date: today
  }

  Lampadaire.findOne({

  })
    //TODO bcrypt
    .then(lampadaire => {
      if (!lampadaire) {
        Lampadaire.create(lampadaireData)
          .then(lampadaire => {
            let token = jwt.sign(lampadaire.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.json({ token: token })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.json({ error: 'Lampadaire already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.post('/login', (req, res) => {
  Lampadaire.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
    .then(lampadaire => {
      if (lampadaire) {
        let token = jwt.sign(lampadaire.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.json({ token: token })
      } else {
        res.send('Lampadaire does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.get('/api/profile', (req, res) => {
  // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

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

router.get('/api/position', (req, res) => {
  // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  Position.findAll({
    attributes: [['id_lampadaire', 'id'], 'region','longitude','latitude']

  })
    .then(position => {
      if (position) {
        console.log(req.body)
        res.json(position)
      } else {
        res.send('Lampadaire does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.delete('/api/delete/:id', (req, res) => {
  // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  Lampadaire.destroy({
    where: {
      id: req.params.id
    }
  }
  )
    .then(() => {
      res.json({ status: 'Task Deleted!' })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.post('/api/register', (req, res) => {


  console.log("####")

  console.log(req.body)
  console.log("####")
  const lampadaireData = {
    id_user:1,
    type: req.body.type.Name,
    status: req.body.status.Name,
    date: req.body.date
  }
  console.log(req.body.status.Name)

  console.log(req.body.type)
  Lampadaire.create(lampadaireData)
    .then(() => {
      Lampadaire.findOne({
        order: [
          ['id', 'DESC']]


      })
        .then(lampadaire => {
          if (lampadaire) {
            console.log('"""""""""""""""""""')
            console.log(lampadaire.id)
            console.log(req.body.region)
            positionData = {
              id_lampadaire: lampadaire.id,
              region: req.body.region,
              latitude: 5,
              longitude: 2
            }
            Position.create(positionData)
              .then(() => {


                // res.send('Lampadaire created')
              })
              .catch(err => {
                res.send('error: ' + err)
              })
          } else {
            res.json({ error: 'Lampadaire already exists' })
          }
        })
        .catch(err => {
          res.send('error: ' + err)
        })

    })



})

router.post('/api/update', (req, res) => {
  // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  console.log('"""""""""""""""""""')

  console.log(req.body)


  Lampadaire.findOne({
     where: {
      id: req.body.id 
            }
  }
  )
    .then((lampadaire) => {
      if(lampadaire){
     
     const lampadaireData = {}
     console.log(req.body.type)
     if(req.body.type!= null)
     {
       lampadaireData.type=req.body.type.Name
     }
     if(req.body.status!= null)
     {
       lampadaireData.status=req.body.status.Name
     }
     if(req.body.date!= null)
     {
       lampadaireData.date=req.body.date
     }
     
      Lampadaire.update(lampadaireData,{ where: { id : lampadaire.id }}).then()   .catch(err => {
      if(err.message == 'Query was empty'){
        console.log('There is no changes in the update of lampadaire, lets continue the progress...');
        
    }
      res.send('error: ' + err)
    })
      // console.log(req.body)
      const positionData = {}

      if(req.body.region!= null)
     {
       positionData.region=req.body.region
     }
      console.log(req.body.region)

     Position.update(positionData,{ where: { id_lampadaire : lampadaire.id }}).then().catch(err => {
      if(err.message == 'Query was empty'){
        console.log('There is no changes in the update of position, lets continue the progress...');
        
    }
      res.send('error: ' + err)
    })


      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = router
