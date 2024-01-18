import Carru from "../../Carru";
import Categoria from "../../cristhian/Categoria";
import Novedades from "../../cristhian/Novedades";
import Slider from "../../cristhian/Slider";
import Categorias from "../../cesar/Categorias";
import '../../cesar/Categorias.css'
import '../../cesar/ModoDarck1.css'

const Home = ({filteredApiNew}) => {
  return (
    <>
<<<<<<< HEAD
      
=======

>>>>>>> 1dca1a4f0de8db0aaa877f8662c84bd289bda288
      <Carru />
       <Categorias/>
      <Categoria />
      <Novedades items={filteredApiNew} />
      <Slider />
     
    </>
  );
};

export default Home;
