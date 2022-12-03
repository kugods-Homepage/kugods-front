import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from '@emotion/react';
import { globalStyle } from './styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={globalStyle} />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
