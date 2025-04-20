import React, { useState, useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import './index.css';

export const OrderPlacement = () => {
  const { products, addOrder } = useContext(ProductContext);
  const [form, setForm] = useState({ name: '', contact: '', address: '', items: [] });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleItemChange = (id, quantity) => {
    const updatedItems = form.items.filter(item => item.productId !== id);
    if (quantity > 0) updatedItems.push({ productId: id, quantity });
    setForm({ ...form, items: updatedItems });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      name: form.name,
      contact: form.contact,
      address: form.address,
      items: form.items,
      createdAt: new Date().toISOString(),
    };
    await addOrder(orderData);  // Send order data to addOrder
    setForm({ name: '', contact: '', address: '', items: [] });
  };

  return (
    <form className="order-placement" onSubmit={handleSubmit}>
      <h2 className="order-placement-title">Place Order</h2>
      <input 
        className="order-placement-input" 
        name="name" 
        placeholder="Name" 
        value={form.name} 
        onChange={handleChange} 
        required 
      />
      <input 
        className="order-placement-input" 
        name="contact" 
        placeholder="Contact" 
        value={form.contact} 
        onChange={handleChange} 
        required 
      />
      <input 
        className="order-placement-input" 
        name="address" 
        placeholder="Delivery Address" 
        value={form.address} 
        onChange={handleChange} 
        required 
      />
      <h3 className="order-placement-subtitle">Select Items:</h3>
      <div className="order-placement-items">
        {products.map(product => (
          <div key={product._id} className="order-placement-item">
            <span className="order-item-name">{product.name}</span>
            <input 
              className="order-placement-quantity" 
              type="number" 
              min="0" 
              onChange={(e) => handleItemChange(product._id, parseInt(e.target.value || 0))} 
            /> kg
          </div>
        ))}
      </div>
      <button type="submit" className="order-placement-btn">Submit Order</button>
    </form>
  );
};
