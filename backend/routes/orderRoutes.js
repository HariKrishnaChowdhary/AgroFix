const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');

router.post('/', controller.placeOrder);
router.get('/', controller.getAllOrders);
router.get('/:id', controller.getOrderById);
router.put('/:id', controller.updateOrderStatus);

module.exports = router;
