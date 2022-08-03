import React from 'react';
import ReactDOM from 'react-dom/client'; // Librería react-dom

import { Auth0Provider } from '@auth0/auth0-react';
import App from './js/App';

import './css/index.css';
import reportWebVitals from './js/reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4
import 'bootstrap/dist/js/bootstrap.min'; // Archivo Javascript de Bootstra


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <Auth0Provider
      domain='felipecadavid.us.auth0.com'
      clientId='67QuW9sOtNB7bXK5ofGUWyQmT1gcVLAY'
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();