import {useState,useContext,React} from 'react'
import { ProductContext } from '../../contexts/ProductContext';

export const OrderTracking = () => {
  const { orders } = useContext(ProductContext);
  const [trackId, setTrackId] = useState('');
  const [result, setResult] = useState(null);

  const handleTrack = () => {
    const order = orders.find(o => o.id === trackId);
    setResult(order);
  };

  return (
    <div className="order-tracking">
      <h2>Track Your Order</h2>
      <input placeholder="Enter Order ID" value={trackId} onChange={(e) => setTrackId(e.target.value)} />
      <button onClick={handleTrack}>Track</button>
      {result && (
        <div>
          <p>Status: {result.status}</p>
          <p>Name: {result.name}</p>
          <p>Address: {result.address}</p>
        </div>
      )}
    </div>
  );
};












// import React, { useState, useContext } from 'react';
// import { ProductContext } from '../../contexts/ProductContext';
// import './index.css';

// function OrderTracking() {
//   const { orders } = useContext(ProductContext);
//   const [trackingId, setTrackingId] = useState('');
//   const [status, setStatus] = useState('');

//   const handleTrack = () => {
//     const order = orders.find(o => o.id === trackingId);
//     setStatus(order ? order.status : 'Order Not Found');
//   };

//   return (
//     <div className="order-tracking">
//       <h2>Track Order</h2>
//       <input placeholder="Order ID" value={trackingId} onChange={e => setTrackingId(e.target.value)} />
//       <button onClick={handleTrack}>Track</button>
//       <p>Status: {status}</p>
//     </div>
//   );
// }

// export default OrderTracking;
