import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

// Navigeerimiseks (URL vahetamine ja HTMLi vahetamine korraga):
// 1. npm react-router-dom(lisab node_modules kausta selleks vajalikud koodijupid)
// 2. import BrowserRouter osas (votab node_modules kaustast navigeerimise koodijupid)
// 3. ümbritseme <App /> BroswerRouteriga (annab navigeerimise voimekuse <App /> failile)
// 4. teeme URLi ja HTMLi seoseid App.jsx failis

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
