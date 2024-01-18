import Carru from "../../Carru";
import Categoria from "../../cristhian/Categoria";
import Novedades from "../../cristhian/Novedades";
import Slider from "../../cristhian/Slider";

import '../../cesar/Categorias.css'
import '../../cesar/ModoDarck1.css'

import Galeria from "../../cristhian/Galeria";

const Home = ({filteredApiNew}) => {
  return (
    <>
    
      <Carru />
      <Categoria />
      <Novedades items={filteredApiNew} />
      <Slider />
      
    
    </>
  );
};

export default Home;
