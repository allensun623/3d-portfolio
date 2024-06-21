import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FourStarBallContextProvider } from './components/context/FourStarBallContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FourStarBallContextProvider>
      <App />
    </FourStarBallContextProvider>
  </React.StrictMode>
);
