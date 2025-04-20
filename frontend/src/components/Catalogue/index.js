import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';
import './index.css';

export const Catalogue = () => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate('/order-placement');
  };

  return (
    <div className="catalogue">
      <h2>Product Catalogue</h2>
      <ul>
        {products.map(product => (
          <li key={product._id} className="catalogue-item">
            <span className="product-name"><strong>{product.name}</strong></span>
            <span className="product-price">₹{product.price}/kg</span>
          </li>
        ))}
      </ul>

      <button onClick={handlePlaceOrder} className="place-order-btn">
        Place Order
      </button>
    </div>
  );
};
