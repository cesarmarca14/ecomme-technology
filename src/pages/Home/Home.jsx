import Carru from "../../Carru";
import Categoria from "../../cristhian/Categoria";
import Novedades from "../../cristhian/Novedades";
import Slider from "../../cristhian/Slider";
import Categorias from "../../cesar/Categorias";
import '../../cesar/Categorias.css'
import '../../cesar/ModoDarck1.css'
import Gamer from "../../cristhian/Gamer";
import Galeria from "../../cristhian/Galeria";

const Home = ({filteredApiNew}) => {
  return (
    <>
    <Gamer/>
      <Carru />
       <Categorias/>
      <Categoria />
      <Novedades items={filteredApiNew} />
      <Slider />
      <Galeria/>
     
    </>
  );
};

export default Home;
