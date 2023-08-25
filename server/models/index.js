const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define("items", {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  price: Sequelize.FLOAT,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Item,
};
