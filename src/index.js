import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const myName = 'Evgeniy';

ReactDOM.render(
  <React.StrictMode>
    <App name={myName} topPosition={'100px'} />
  </React.StrictMode>,
  document.getElementById('root')
);


