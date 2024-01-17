import { categoriaApi } from "./Categorias1"

const Categorias = () => {
  return (
    <div className="containerCategorias">
      {categoriaApi.map((cesar)=>(
        <div>
            <img src={cesar.img} alt="" />
            <h2>{cesar.Id}</h2>
            
        </div>
      {categoriaApi.map((item)=>(
        <div>
            <img src={item.img} alt="" />
            <h2>{item.Id}</h2>
            
        </div>
     

      ))}
    </div>
  )
}

export default Categorias
