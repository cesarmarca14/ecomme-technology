import Carru from "../../Carru";
import Categoria from "../../cristhian/Categoria";
import Novedades from "../../cristhian/Novedades";
import Slider from "../../cristhian/Slider";
import Categorias from "../../cesar/Categorias";
import '../../cesar/Categorias.css'
import '../../cristhian/Slider.css'

const Home = ({filteredApiNew}) => {
  return (
    <>
      <Carru />
       <Categorias/>
      <Categoria />
      <Novedades items={filteredApiNew} />
      <Slider />
     
    </>
  );
};

export default Home;
