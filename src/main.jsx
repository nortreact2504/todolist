import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoMain from './TodoMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoMain />
  </StrictMode>,
)
