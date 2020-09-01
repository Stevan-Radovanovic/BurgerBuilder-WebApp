import Sequelize from 'sequelize';

const sequelize = new Sequelize('burger_builder', 'root', 'whatever', {
  dialect: 'mysql',
  host: 'localhost',
  define: {
    timestamps: false,
  },
});

export default sequelize;
