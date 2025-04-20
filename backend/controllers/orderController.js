const Order = require('../models/order');


// Place a new order
exports.placeOrder = async (req, res) => {
  try {
    const orderData = req.body;
    
    // Ensure items have a productId and quantity
    if (!orderData.items || orderData.items.length === 0) {
      return res.status(400).json({ message: 'Order must have at least one item' });
    }

    // Create a new order based on the request body
    const order = new Order({
      name: orderData.name,
      contact: orderData.contact,
      address: orderData.address,
      items: orderData.items,
      createdAt: new Date(),
    });

    // Save the order to the database
    await order.save();

    // Return the newly created order
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error placing the order', error });
  }
};

// Get a specific order by its ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching order details', error });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

// Update the status of an order
exports.updateOrderStatus = async (req, res) => {
  try {
    const orderId=req.params.id
    const { status } = req.body;
    console.log(orderId)
    // Validate status
  

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }  // Return the updated order
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating order status', error });
  }
};


