import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles';
import App from './pages/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <App />
  </React.StrictMode>
);
