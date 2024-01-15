import { useState } from 'react'
import './cesar/Carrucel.css'
import './cesar/Categorias.css'
import './cesar/ModoDarck1.css'
import Carrucel from './cesar/Carrucel'
import Categorias from './cesar/Categorias'
import ModoDarck from './cesar/ModoDarck'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ModoDarck/>
     <Carrucel/>
     <Categorias/>
    </>
  )
}

export default App
