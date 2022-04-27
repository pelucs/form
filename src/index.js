import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StepContextProvider } from './contextAPI/StepContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StepContextProvider>
        <App />
      </StepContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);