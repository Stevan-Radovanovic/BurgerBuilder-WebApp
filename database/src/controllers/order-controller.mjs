import Order from '../models/order-model.mjs';

const getOrders = async (req, res, next) => {
  try {
    const result = await Order.findAll();
    res.json({ orders: result });
  } catch (err) {
    console.log(err);
  }
};

const postOrder = async (req, res, next) => {
  try {
    const result = await Order.create({
      saladCount: req.body.saladCount,
      meatCount: req.body.meatCount,
      baconCount: req.body.baconCount,
      cheeseCount: req.body.cheeseCount,
      price: req.body.price,
    });
    res.json({ message: 'New order created', order: result });
  } catch (err) {
    console.log(err);
  }
};

export { postOrder, getOrders };
