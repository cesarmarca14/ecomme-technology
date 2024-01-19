<<<<<<< HEAD
=======
  import React from 'react'
import { Link } from 'react-router-dom'
>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e

const Categoria = () => {
  return (
    <div>
<<<<<<< HEAD
      <section className="flex justify-center gap-10  text-2xl font-bold bg-[#162436]  ">
            <h1><a href="">Categorias</a>
                </h1>
            <p><a href="">Ofertas</a>
                </p>
            <p><a href="">ZonaGamer</a>
=======
      <section className="flex justify-center gap-10  text-2xl font-bold   ">
            <h1><a href="">Categorias</a>
                </h1>
            <p><a href="">Ofertas</a>
             </p>
            <p>
             <Link to="/zonaga">  <a   href="">ZonaGamer</a></Link>
>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e
                </p>
        </section>
    </div>
  )
}

export default Categoria
