const Sequelize = require('sequelize')
const sequelize = require('../db')

const Words = sequelize.define('word', {
    words: {
      // Type Array might need key prop
      type: Sequelize.JSON,
      allowNull: false
    }
  },{
  tableName: 'word',
  timestamps: false
})


module.exports = Words
