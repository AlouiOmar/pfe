const Sequelize = require('sequelize')
const db = require('../database/db.js')
const Lampadaire = require('../models/Lampadaire')


const Ampoule = db.sequelize.define(
  'ampoule',
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

    reference: {
        type: Sequelize.STRING
      },
      
    type: {
      type: Sequelize.STRING
    },
    etat: {
      type: Sequelize.STRING
    },
   
    conso: {
      type: Sequelize.INTEGER,
    }
  },
  {
    tableName: 'ampoule'
  },
 
)

   // Ampoule.belongsTo(Lampadaire,{ foreignKey: 'id_lampadaire' })
    

module.exports =Ampoule;