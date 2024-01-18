import React from 'react'
import ReactDOM from 'react-dom/client'
import RafaHeader from './Rafael/RafaHeder.jsx'
import RafaOfertas from './Rafael/RafaOfertas.jsx'
import './Rafael/rafaHeader.css'
import './Rafael/rafaOfertas.css'

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RafaHeader/>
    <RafaOfertas/>
  </React.StrictMode>,
)
