const Sequelize = require('sequelize')
const db = require('../database/db.js')
const Ampoule = require('../models/Ampoule')
const Capteur = require('../models/Capteur')
const Consommation = require('../models/Consommation')
const Position = require('../models/Position')
const User = require('../models/User')


const Lampadaire=db.sequelize.define(
  'lampadaire',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      // references :  { model: "Ampoule", key: "id_lampadaire" }

    },
    id_user: {
      type: Sequelize.INTEGER,
       references :  { model: "User", key: "id" }
    },
    
    type: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
   
    date: {
      type: Sequelize.STRING,
    }
  },
  {
    tableName: 'lampadaire'
  },
 
)

  User.hasMany(Lampadaire,{ foreignKey: 'id_user'})
  Lampadaire.belongsTo(User,{ foreignKey: 'id_user'})

  Lampadaire.hasMany(Ampoule,{ foreignKey: 'id_lampadaire'})
  Ampoule.belongsTo(Lampadaire,{ foreignKey: 'id_lampadaire'})

  Lampadaire.hasMany(Capteur,{foreignKey: 'id_lampadaire' })
  Capteur.belongsTo(Lampadaire,{ foreignKey: 'id_lampadaire'})

  Lampadaire.hasMany(Consommation,{ foreignKey: 'id_lampadaire'})
  Consommation.belongsTo(Lampadaire,{ foreignKey: 'id_lampadaire'})

  Lampadaire.hasMany(Position,{ foreignKey: 'id_lampadaire'})
  Position.belongsTo(Lampadaire,{ foreignKey: 'id_lampadaire'})

   Position.removeAttribute('id');

module.exports =Lampadaire;