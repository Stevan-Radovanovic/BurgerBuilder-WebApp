import Express from 'express';
import sequelize from './data/database.mjs';
import Body from 'body-parser';

const app = Express();

app.use(Body.json());

sequelize
  .sync({ force: true })
  .then((res) => {
    console.log('BurgerBuilder started...');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
