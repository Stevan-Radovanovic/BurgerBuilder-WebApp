import express from 'express';
import * as controller from '../controllers/contact-controller.mjs';
const router = express.Router();

router.get('/', controller.getContacts);
router.post('/', controller.postContact);

export default router;
