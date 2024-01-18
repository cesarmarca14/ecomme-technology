
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComputo from "./cristhian/HeaderComputo";
import Home from "./pages/Home/Home.jsx";
import { catnew } from "./cristhian/apinew";
import Carrucel from './Carrucel.jsx';
import { useState } from "react";
import Login from "./Christofer/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import appFirebase from "./credenciales";
const auth = getAuth(appFirebase);
import Sliderr from './componets/Sliderr.jsx'



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





// import './App.css'




  return (
    <>

    <BrowserRouter>
    <HeaderComputo 
    
    user={user} />
      
      <Routes>
        <Route path="/" element={<Home filteredApiNew={filteredApiNew} />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    <Sliderr />
  </>
);
};

export default App
