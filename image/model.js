const Sequelize = require('sequelize')
const sequelize = require('../db')

const Images = sequelize.define('image', {
    url: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },{
  tableName: 'image',
  timestamps: false
})


module.exports = Images
