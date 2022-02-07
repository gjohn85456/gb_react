import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './App.css';
import App from './App';
import Routers from './pages/Routers'
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


