import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComputo from "./cristhian/HeaderComputo";
import Home from "./pages/Home/home";
import { catnew } from "./cristhian/apinew";
<<<<<<< HEAD
import Carrucel from './Carrucel.jsx';
=======
import Carrucel from "./Carrucel.jsx";
>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e
import { useState } from "react";
import Login from "./Christofer/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import appFirebase from "./credenciales";
const auth = getAuth(appFirebase);
import ModoDarck from "./cesar/ModoDarck.jsx";
<<<<<<< HEAD
=======
import Gamer from "./cristhian/Gamer.jsx";
import GaleriaGamer from "./pages/Home/GaleriaGamer.jsx";
>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e

const App = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  const filteredApiNew = catnew.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUser(usuarioFirebase);
    } else {
      setUser(null);
    }
  });

  return (
    <>
<<<<<<< HEAD

      <BrowserRouter>
      <HeaderComputo 
      
      user={user} />
        
=======
      <BrowserRouter>
        <HeaderComputo user={user} />

>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e
        <Routes>
          <Route path="/" element={<Home filteredApiNew={filteredApiNew} />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
<<<<<<< HEAD
        </Routes>
=======
          <Route path= "/zonaga" element={<GaleriaGamer/>} />

          </Routes>
>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e
      </BrowserRouter>
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
