import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider, Helmet } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'
import { securityHeaders } from './utils/security'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        {Object.entries(securityHeaders).map(([key, value]) => (
          <meta key={key} httpEquiv={key} content={value} />
        ))}
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)