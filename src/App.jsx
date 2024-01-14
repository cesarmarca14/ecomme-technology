import { useState } from 'react'
import HeaderComputo from './components/HeaderComputo'
import Gamer from './components/Gamer'
import Categoria from './components/Categoria'
import {blogs} from './data/data'
import {CardBlog} from './components/CardBlog';
import Novedades from './components/Novedades'
import './App.css'


function App() {
  
  const carouselBlogs = [...blogs, ...blogs];
  return (
    <>
      <div>
        <HeaderComputo />
        <Categoria />
        <Novedades />
        <div className="container bg-black h-[150px]  mt-20">
    <div className=" overflow-hidden w-full">

      <div className='flex whitespace-nowrap animate-scroll'>
        {/* aqui colocamos un index porque vamos a colocar la key , ponemos el index y no el ID porque mas arriba en ...blog tengo duplicado el id y por lo tanto tengo 2 veces cada id y saldria un warning en la consola y es mejor hacerlo con el index */}
      {carouselBlogs.map((blog, index)=>(
        <CardBlog blog={blog} key={index}/>
      ))}
      </div>
    </div>

    </div>
      </div>
    </>
  )
}

export default App
