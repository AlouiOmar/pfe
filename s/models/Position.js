const Sequelize = require('sequelize')
const db = require('../database/db.js')
const Lampadaire = require('../models/Lampadaire')


const Position = db.sequelize.define(
  'position',
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
    
    region: {
      type: Sequelize.STRING
    },
    
    latitude: {
      type: Sequelize.FLOAT
    },
    longitude: {
        type: Sequelize.FLOAT
      }
  },
  {
    tableName: 'position'
  },
 
)

   // Position.belongsTo(Lampadaire,{ foreignKey: 'id_lampadaire' })
    

module.exports =Position;