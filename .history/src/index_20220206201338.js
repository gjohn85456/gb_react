import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routers from './pages/Routers'
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routers render={(name) => <b className={name}>My parent</b>} /> */}
      {/* <Routers /> */}
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


