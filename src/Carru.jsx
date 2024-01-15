import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Carru = () => {

  const images = [

    { 
      original: 'https://i.postimg.cc/yYvht8rh/1.gif'
    },
    {
      original: 'https://i.postimg.cc/L8Qc9RhL/2.gif'
    },
    {original: 'https://i.postimg.cc/qRqHcRYm/4.gif'
    },
    {original: 'https://i.postimg.cc/c17PKfrs/3.gif'
    },
      
    
  ]

  return (
    <div className='carru'>
      <ImageGallery clasname="carrucel"
      items={images}

      //muestra el boton de play
      showPlayButton={false}

      //muestra el boton de maximizar
      showFullscreenButton={false}

      //muestra los puntos de navegacion
      showBullets={true}

      //autoPlay
      autoPlay={true}

      //duracion de cada imagen
      slideInterval={4000}

      //duracion al pasar de una imagen a otra
      slideDuration={1000}

      
      />
    </div>
  )
}

export default Carru
