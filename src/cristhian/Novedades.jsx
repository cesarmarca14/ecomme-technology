import React from 'react'
import {catnew} from './apinew'

const Novedades = () => {
  return (
        <> 
        <div className=''>
        <p className='font-bold ml-[50px]  mt-10'>Novedades</p>
        <p className='ml-[50px] mt-'>Las mejores novedades de todo el <span className='font-bold text-red-700'>P</span>er<span className='font-bold text-red-700'>ú</span></p>
        
        <div className='card_contenedor  '>
          
          
        {catnew.map((item)=> (
        <div className="proyecto ">
            <div className=' bg-white border-2 rounded-md ' >
    
              
             <div className="overlay hover:translate-y-2.5 hover:transition-all hover:rounded-md text-center ">
            
                <img className='card_img' src={item.img} alt="" />
               
                <h2 className='card_info'>{item.name} </h2>
              
              <button className='boton_compra flex items-center'>
                <a target="_blank" href=''>
                  {item.price}
                </a>
                <p>🛒</p>
              </button>
              <a target="_blank" href="./HeaderComputo.jsx"
            
                ><h3></h3>
                <p></p></a>
            </div>
          
            </div></div>
        ) )
    
        }
         </div> 
         </div>
        </>
      )
    }
    
export default Novedades
