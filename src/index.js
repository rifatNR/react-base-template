import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './Context/AuthContext';
import RequestContextProvider from './Context/RequestContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <RequestContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </RequestContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);