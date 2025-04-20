// src/components/UIComponents.jsx
import React from 'react';
import './index.css';  // Import shared UI component styles

export function Card({ children, className }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}

export function Button({ children, onClick }) {
  return <button className="button" onClick={onClick}>{children}</button>;
}
