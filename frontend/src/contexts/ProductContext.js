import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

// Set base URL for Axios
axios.defaults.baseURL = 'https://agrofix-4q9j.onrender.com'; // Update to your backend URL

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products');
      setProducts(res.data);
      
    } catch (err) {
      console.error('Failed to fetch products:', err);
      // Optionally show a user-friendly message (toast, modal)
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await axios.get('/api/orders');
      console.log(typeof(res.data))
      console.log(...res.data)
      setOrders([...res.data]);
      
    } catch (err) {
      console.error('Failed to fetch orders:', err);
      // Optionally show a user-friendly message
    }
  };

  const addOrder = async (orderData) => {
    try {
      const res = await axios.post('/api/orders', orderData);
      setOrders(prevOrders => [...prevOrders, res.data]);
    } catch (err) {
      console.error('Failed to place order:', err);
      // Optionally show a user-friendly message
    }
  };

  const updateOrderStatus = async (id, status) => {
   
    try {
      const res = await axios.put(`/api/orders/${id}`, { status });
      setOrders(prevOrders =>
        prevOrders.map(order => order.id === id ? res.data : order)
      );
      fetchOrders();
    } catch (err) {
      console.error('Failed to update order status:', err);
      // Optionally show a user-friendly message
    }
  };

  const addProduct = async (product) => {
    try {
      const res = await axios.post('/api/products', product);
      setProducts(prevProducts => [...prevProducts, res.data]);
    } catch (err) {
      console.error('Failed to add product:', err);
      // Optionally show a user-friendly message
    }
  };

  const editProduct = async (id, updatedProduct) => {
    try {
      const res = await axios.put(`/api/products/${id}`, updatedProduct);
      setProducts(prevProducts =>
        prevProducts.map(p => p.id === id ? res.data : p)
      );
    } catch (err) {
      console.error('Failed to update product:', err);
      // Optionally show a user-friendly message
    }
  };

  const deleteProduct = async (id) => {
    try {
      console.log(id)
      await axios.delete(`/api/products/${id}`);
      setProducts(prevProducts => prevProducts.filter(p => p.id !== id));
      fetchProducts();
    } catch (err) {
      console.error('Failed to delete product:', err);
      // Optionally show a user-friendly message
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        orders,
        addOrder,
        updateOrderStatus,
        addProduct,
        editProduct,
        deleteProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
