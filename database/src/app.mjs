import Express from 'express';
import sequelize from './data/database.mjs';
import Body from 'body-parser';
import Order from './models/order-model.mjs';

import OrderRoutes from './routes/order-routes.mjs';

const app = Express();

app.use(Body.json());

app.use('/burger/orders', OrderRoutes);

sequelize
  .sync({
    /* force: true */
  })
  .then((res) => {
    console.log('BurgerBuilder started...');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
