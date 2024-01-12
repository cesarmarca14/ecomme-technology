import { useState } from 'react'
import HeaderComputo from './components/HeaderComputo'
import Gamer from './components/Gamer'
import Categoria from './components/Categoria'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <HeaderComputo />

        <Categoria />
        <Gamer />
      </div>
    </>
  )
}

export default App
