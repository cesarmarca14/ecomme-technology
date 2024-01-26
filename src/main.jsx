import React from 'react'
import ReactDOM from 'react-dom/client'
import RafaFooter from './Rafael/RafaFooter.jsx'
import App from './App.jsx'
import './index.css'
import Slider from "./cristhian/Slider.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
    <Slider />
    <RafaFooter/>
  </React.StrictMode>,
)
