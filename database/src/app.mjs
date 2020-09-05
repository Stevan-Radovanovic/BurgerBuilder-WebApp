import Express from 'express';
import sequelize from './data/database.mjs';
import Body from 'body-parser';
import Order from './models/order-model.mjs';
import Contact from './models/contact-model.mjs';

import OrderRoutes from './routes/order-routes.mjs';

const app = Express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, PUT, OPTIONS'
  );
  next();
});

app.use(Body.json());

Order.belongsTo(Contact, {
  foreignKey: { allowNull: true },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});
Contact.hasMany(Order);

app.use('/burger/orders', OrderRoutes);

sequelize
  .sync({
    /*force: true,*/
  })
  .then((res) => {
    console.log('BurgerBuilder started...');
    app.listen(1738);
  })
  .catch((err) => console.log(err));
