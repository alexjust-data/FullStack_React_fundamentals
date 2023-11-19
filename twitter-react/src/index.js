import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import storage from './utils/storage';
import { setAuthorizationHeader } from './api/client';
import { AuthContextProvider } from './pages/auth/context';

const accesToken = storage.get('auth'); // podrías tener todas las caves tipadas para no quivocarte 'auht'
// inicicalizo el cliente de axios, guardar allí
if (accesToken) {
  setAuthorizationHeader(accesToken);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthContextProvider initiallyLogged={!!accesToken}>
     <App />,
   </AuthContextProvider>
  </React.StrictMode>,
);