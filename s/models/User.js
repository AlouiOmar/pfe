const Sequelize = require('sequelize')
const db = require('../database/db.js')


const User = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
    role: {
        type: Sequelize.STRING,
        defaultValue: "admin"
      },

    nom: {
        type: Sequelize.STRING
      },
      
    prenom: {
      type: Sequelize.STRING
    },

   
    email: {
      type: Sequelize.STRING
    },
    mdp: {
        type: Sequelize.STRING
      },
      cree: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW      }
  },
  {
      timestamps: false,
    tableName: 'user'
  },
 
)

   // Ampoule.belongsTo(Lampadaire,{ foreignKey: 'id_lampadaire' })
    

module.exports =User;