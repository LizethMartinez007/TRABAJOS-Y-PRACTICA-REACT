import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomeView from './publicos/HomeView.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HomeView />
    </BrowserRouter>
  </StrictMode>

)
