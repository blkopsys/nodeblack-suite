import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import Dashboard from './components/Dashboard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
);
