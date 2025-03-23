import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)



//color : #d6fd51 magenta
//color : #000000 dark black
//color : #1c1c1c black variant
//color : #FAF9F6 offwhite
