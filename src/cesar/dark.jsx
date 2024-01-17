import { useState } from 'react'
import './Practica3Js'

const Practica3 = () => {
  const[Darck, setDark] = useState(true)

  const toggle =() =>{
    setDark(!Darck)
  }

  return (
    <>
      <button onClick={toggle} className={Darck ? 'Darck Darck-color' : 'Ligth'}>{Darck ? 'noche',<i class="bi bi-moon"></i> : 'Dia'  <i class="bi bi-sun-fill"></i>}



      </button>
    </>
  )
}

export default Practica3