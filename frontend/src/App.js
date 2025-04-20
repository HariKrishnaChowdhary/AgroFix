// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import { Catalogue } from './components/Catalogue';
import { OrderPlacement } from './components/OrderPlacement';
import { OrderTracking } from './components/OrderTracking';
import { AdminDashboard } from './components/AdminDashboard';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className="app">
          <MenuBar />
          <h1>Agro Commerce Portal</h1>
          <Routes>
            <Route path="/" element={<Catalogue />} />
            <Route path="/order-placement" element={<OrderPlacement />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
