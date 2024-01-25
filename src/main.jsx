import React from 'react'
import ReactDOM from 'react-dom/client'
import RafaFooter from './rafael/rafaFooter.jsx'
import App from './App.jsx'
import './index.css'
import Slider from "./cristhian/Slider";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
    <Slider />
    <RafaFooter/>

  </React.StrictMode>,
)
