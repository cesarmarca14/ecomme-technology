import { useState } from 'react'

const ModoDarck = () => {
  
const[Darck, setDark] = useState(true)

  const toggle =() =>{
    setDark(!Darck)
}
  return (
    <>
      <button onClick={toggle} className={Darck ? 'Darck Darck-color' : 'Ligth'}>{Darck ? <i className="bi bi-moon"></i> : <i className="bi bi-sun-fill"></i>}
      </button>
    
    </>
  )
}

export default ModoDarck
