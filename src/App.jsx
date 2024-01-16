
import React, { useState } from 'react';
import HeaderComputo from './cristhian/HeaderComputo';
import Categoria from './cristhian/Categoria';
import Novedades from './cristhian/Novedades';
import Carrucel from './Carrucel.jsx';
import Carru from './Carru.jsx';
import { catnew } from './cristhian/apinew';
import Slider from './cristhian/Slider.jsx';

const App = () => {
  const [search, setSearch] = useState('');

  const filteredApiNew = catnew.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <HeaderComputo />
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Carru />
      <Categoria />
      <Novedades items={filteredApiNew} />
      {/* <Carrucel /> */}
      <Slider />
    </>
  );
};
export default App;













// import React from 'react'
// import HeaderComputo from './cristhian/HeaderComputo'
// import Categoria from './cristhian/Categoria'
// import Novedades from './cristhian/Novedades'
// import Carrucel from './Carrucel.jsx'
// import Carru from './Carru.jsx'


// const App = () => {
//   return (
//     <>
//       <HeaderComputo />
//       <Carru />
//         <Categoria />
//         <Novedades /> 
       
//         <Carrucel />
       
//     </>
//   )
// }

// export default App
