const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const items = sequelize.define("items", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  items,
};
