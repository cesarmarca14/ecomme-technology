import Carru from "../../Carru";
import Categoria from "../../cristhian/Categoria";
import Novedades from "../../cristhian/Novedades";
import Slider from "../../cristhian/Slider";
import Categorias from "../../cesar/Categorias";
import SliderCesar from "../../componets/SliderCesar";
import '../../cesar/Categorias.css'
import '../../cesar/ModoDarck1.css'

const Home = ({filteredApiNew}) => {
  return (
    <>
      <Carru />
       <Categorias/>
      <Categoria />
      <Novedades items={filteredApiNew} />
      <Slider />
      <SliderCesar/>
     
    </>
  );
};

export default Home;
