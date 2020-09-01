import Sequelize from 'sequelize';

const sequelize = new Sequelize('bruger_builder', 'root', 'whatever', {
  dialect: 'mysql',
  host: 'localhost',
  define: {
    timestamps: false,
  },
});

export default sequelize;
