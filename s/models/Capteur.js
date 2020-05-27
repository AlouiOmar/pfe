const Sequelize = require('sequelize')
const db = require('../database/db.js')
const Lampadaire = require('../models/Lampadaire')


const Capteur = db.sequelize.define(
  'capteur',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
     // references :  { model: "Lampadaire", key: "id" }
    },id_lampadaire: {
      type: Sequelize.INTEGER,
      //: true,
     // autoIncrement: true,
      references :  { model: "Lampadaire", key: "id" }
    },
    reference: {
        type: Sequelize.STRING
      },
    type: {
      type: Sequelize.STRING
    },
    etat: {
      type: Sequelize.STRING
    },
    valeur: {
      type: Sequelize.INTEGER
    }
  },
  {
    tableName: 'capteur'
  },
 
)

   // Capteur.belongsTo(Lampadaire,{ foreignKey: 'id_lampadaire' })
    

module.exports =Capteur;