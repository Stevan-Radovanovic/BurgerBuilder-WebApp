import Sequelize from 'sequelize';
import sequelize from '../data/database.mjs';

const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  price: {
    type: Sequelize.REAL,
    allowNull: false,
  },
  saladCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cheeseCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  meatCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  baconCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export default Order;
