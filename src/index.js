import React from 'react';
import ReactDOM from 'react-dom/client';  // 최신 방식
import App from './App';
import './styles/index.css';  // styles 폴더에서 불러옴

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
