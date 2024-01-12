import React from 'react'
import {catgamer} from './apigamer'

const Gamer = () => {
  return (
    <> 
    <p className='font-bold ml-[50px] mt-10'>ZonaGamer</p>
    <p className='ml-[50px] mt-'>Las mejores noverdades de todo el <span className='font-bold text-red-700'>P</span>er<span className='font-bold text-red-700'>ú</span></p>
    
    <div className='card_contenedor'>
      
      
    {catgamer.map((item)=> (
    <div className="proyecto">
        <div className=' border-slate-400/50 border-2 rounded-md ' >

          
         <div className="overlay bg-neutral-300/30 hover:translate-y-2.5 hover:transition-all hover:rounded-md text-center ">
        
            <img className='card_img' src={item.img} alt="" />
           
            <h2 className='card_info'>{item.informacion} </h2>
          
          <button className='flex items-center'>
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
    </>
  )
}

export default Gamer
