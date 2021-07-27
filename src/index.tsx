import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastProvider } from "./context/ToastState";

ReactDOM.render(
  <React.StrictMode>
   <SnackbarProvider
      maxSnack={6}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <ToastProvider>
        <App />
      </ToastProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
