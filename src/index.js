import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>
);
