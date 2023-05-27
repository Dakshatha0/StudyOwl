import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const myApp = (
  <div>
    <h1>This is my app</h1>
    <h2>Dakshatha's app</h2>
  </div>
)
root.render(
  <React.StrictMode>
    {myApp}
  </React.StrictMode>
);

