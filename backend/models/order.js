const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  contact: String,
  address: String,
  items: [{ productId: String, quantity: Number }],
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Completed', 'Canceled'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
