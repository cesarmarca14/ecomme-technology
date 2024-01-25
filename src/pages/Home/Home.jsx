import Carru from "../../Carru";
import Novedades from "../../cristhian/Novedades";
import SliderCesar from "../../cesar/SliderCesar";
import '../../cesar/ModoDarck1.css'



const Home = ({filteredApiNew}) => {
  return (
    <>
      
      <Carru />
      <SliderCesar />
      <Novedades items={filteredApiNew} />  

    </>
  );
};

export default Home;
