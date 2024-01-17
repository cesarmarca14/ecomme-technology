import { categoriaApi } from "./Categorias1"

const Categorias = () => {
  return (
    <div className="containerCategorias">
<<<<<<< HEAD
      {categoriaApi.map((cesar)=>(
        <div>
            <img src={cesar.img} alt="" />
            <h2>{cesar.Id}</h2>
            
        </div>
=======
      {categoriaApi.map((item)=>(
        <div>
            <img src={item.img} alt="" />
            <h2>{item.Id}</h2>
            
        </div>
     
>>>>>>> e532e6f0b922e9661ee634dc5a1afb45b1169866

      ))}
    </div>
  )
}

export default Categorias
