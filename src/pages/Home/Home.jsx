import Carru from "../../Carru";
import Categoria from "../../cristhian/Categoria";
import Novedades from "../../cristhian/Novedades";
import Slider from "../../cristhian/Slider";
<<<<<<< HEAD
import Categorias from "../../cesar/Categorias";
import SliderCesar from "../../componets/SliderCesar";
import '../../styles/Slider.css'
import '../../cesar/Categorias.css'
import '../../cesar/ModoDarck1.css'

const Home = ({filteredApiNew}) => {
  return (
    <>
      <Carru />
       {/* <Categorias/> */}
      <SliderCesar/>
      <Categoria />
      <Novedades items={filteredApiNew} />
      <Slider />
     
=======

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
      
    
>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e
    </>
  );
};

export default Home;
