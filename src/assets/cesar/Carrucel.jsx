import './Carrucel.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const carrucel = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='color'></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.postimg.cc/FKXzG0kq/22046389-1899860273373898-8565436825410370285-n.jpg" className="d-block w-500" alt="tienda" />
    </div>
    <div className="carousel-item">
      <img src="https://i.postimg.cc/CL7CczzM/904602.jpg" className="d-block w-500" alt="pantalla"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.postimg.cc/kXyrwFQV/Ecommer.png" className="d-block w-500 " alt="teclado"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden btn btn-danger">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default carrucel
