import React, { useState, useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import './index.css';

export const AdminDashboard = () => {
  const {
    products,
    orders,
    updateOrderStatus,
    addProduct,
    deleteProduct
  } = useContext(ProductContext);

  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const handleAddProduct = async () => {
    await addProduct(newProduct);
    setNewProduct({ name: '', price: '' });
  };

  const getOrderClass = (status) => {
    if (status === 'Pending') return 'order-card order-pending';
    if (status === 'In Progress') return 'order-card order-progress';
    if (status === 'Delivered') return 'order-card order-delivered';
    return 'order-card';
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <section>
        <h3>Manage Orders</h3>
        {orders.map(order => (
          <div
            key={order._id}
            className={getOrderClass(order.status)}
          >
            <p><strong>Customer:</strong> {order.name}</p>
            <p><strong>Contact:</strong> {order.contact}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <select
              onChange={(e) => updateOrderStatus(order._id, e.target.value)}
              value={order.status}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </section>

      <section className="product-section">
  <h3>Manage Products</h3>

  {products.map(product => (
    <div key={product._id} className="product-item">
      <span>{product.name} - ₹{product.price}/kg</span>
      <button onClick={() => deleteProduct(product._id)}>Delete</button>
    </div>
  ))}

  <div className="product-inputs">
    <input
      placeholder="Product Name"
      value={newProduct.name}
      onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
    />
    <input
      placeholder="Price"
      type="number"
      value={newProduct.price}
      onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
    />
    <button onClick={handleAddProduct}>Add Product</button>
  </div>
</section>

    </div>
  );
};
