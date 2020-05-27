const Sequelize = require('sequelize')
const db = require('../database/db.js')
const Lampadaire = require('../models/Lampadaire')


const Consommation = db.sequelize.define(
  'consommation',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_lampadaire: {
      type: Sequelize.INTEGER,
     references :  { model: "Lampadaire", key: "id" }
    },
    
    conso: {
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.STRING
    }
  },
  {
    tableName: 'consommation'
  },
 
)

   // Consommation.belongsTo(Lampadaire,{ foreignKey: 'id_lampadaire' })
    

module.exports =Consommation;