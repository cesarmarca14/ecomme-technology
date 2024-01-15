import { useState } from 'react'
import './cesar/Carrucel.css'
import './cesar/Categorias.css'
import Carrucel from './cesar/Carrucel'
import Categorias from './cesar/Categorias'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Carrucel/>
     <Categorias/>
    </>
  )
}

export default App
