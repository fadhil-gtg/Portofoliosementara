import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import { frameManager } from './utils/framePreloader'
import './styles/globals.css'

// Start preloading first window of scroll animation frames before React renders
frameManager.preloadFirstWindow()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
