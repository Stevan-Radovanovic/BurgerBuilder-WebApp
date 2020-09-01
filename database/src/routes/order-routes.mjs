import express from 'express';
import * as controller from '../controllers/order-controller.mjs';
const router = express.Router();

router.get('/', controller.getOrders);
router.post('/', controller.postOrder);

export default router;
