import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './CSS/normalize.css';
import './CSS/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode class="strict">
    <App />
  </React.StrictMode>
);
