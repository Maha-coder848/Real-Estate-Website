import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'             // ✅ Tailwind styles and fonts applied globally
import App from './App.jsx'      // ✅ Main app component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
