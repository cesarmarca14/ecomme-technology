import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import ModoDarck from "../cesar/ModoDarck";

const auth = getAuth(appFirebase);

const HeaderComputo = ({ user }) => {
  return (


    
<<<<<<< HEAD

    <div className="w-[100%] mx-auto overflow-hidden bg-[#009fe3]  ">
=======
//aqui se le agrego la posicion fixed para que la posicion de los elementos sea fija al hacer scrool , un top 0 que asegura que el elemento siempre este en la parte superior de la pagina y un z-50 asegura que el elemento siempre este por encima de los demas elementos de la pagina osea que este superior a cualquier otro contenido de la pagina
    <div className="w-[100%] mx-auto  overflow-hidden bg-[#4badf4] fixed top-0 z-50  ">
>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e
      <header>
    
        <nav className="flex h-32 items-center justify-between ">
          <Link
            to="/"
<<<<<<< HEAD
            className="w-1/2   mr-90  text-4xl text-white font-bold "
          >
            <img
              className=" w-80 mt-6"
=======
            className="w-1/2  mr-92   text-4xl text-white font-bold "
          >
            <img
              className=" w-80 mt-4 "
>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e
              src="./public/DeluxeComputer2.png"
              alt=""
            />
          </Link>
          <input type="checkbox" id="menu" className=" peer/menu hidden" />
          <label
            htmlFor="menu"
            className="hamburguer   w-10 h-10  bg-open-menu bg-cover bg-center rounded-lg  bg-blue-800 cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden "
          ></label>
<<<<<<< HEAD
          <ul className="headersm fixed inset-0 bg-slate-500/80  ml-80 text-lg text-white font-light px-[5%] grid auto-rows-max gap-8 content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-4 md:bg-transparent ">
=======
          <ul className="headersm fixed inset-0 bg-slate-500/80   text-lg text-white font-light px-[5%] grid auto-rows-max gap-8 content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-4 md:bg-transparent ">
>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e
            {user ? (
              <li className="py-1 px-1 rounded-lg hover:font-bold">
                <p
                  className="inicio font-semibold flex flex-col items-center"
                  to="/login"
                >
<<<<<<< HEAD
             <i class="bi bi-person-fill"></i>
=======
             <i className="bi bi-person-fill"></i>
>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e
                  Bienvenido {user?.email}
                </p>
              </li>
            ) : (
<<<<<<< HEAD
              <li className="py-1 px-1 rounded-lg hover:font-bold">
=======
              //aqui a las li le agregue un w-[120px] para que no se desacomode el menu y un mb-10 para que se separe del el borde del menu hacia arriba

              <li className="py-1 px-1 rounded-lg hover:font-bold w-[200px] mb-10 ">
>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e
                <Link
                  className="inicio font-semibold flex flex-col items-center"
                  to="/login"
                >
                 <i class="bi bi-person-fill"></i>
                  Inicio Sesion
                </Link>
              </li>
            )}
<<<<<<< HEAD

            {/* <li className=" py-1 px-1 rounded-lg  hover:font-bold">
                <a className="pedidos font-semibold" href="#">| Pedidos</a>
            </li> */}
            <li className=" py-1 px-1 rounded-lg ">
              <a
                className="carrito font-semibold flex
                flex-col items-center"
                href="#"
              >
              <i class="bi bi-shop"></i>
=======
            
            <li className=" py-1 px-1 rounded-lg  mb-10 w-[290px]   ">
              <a
                className="carrito font-semibold flex
                flex-col items-center "
                href="#"
              >
              <i className="bi bi-shop"></i>
>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e
                | Carrito de compras
              </a>
            </li>

            {user && (
              <li className=" py-1 px-1 rounded-lg ">
                <button
                  className="carrito font-semibold flex
<<<<<<< HEAD
                flex-col items-center"
=======
                flex-col items-center w-20 "
>>>>>>> 76dc50e47222a560371f11e7b4ff5cd8053fea8e
                  onClick={() => signOut(auth)}
                >
               <i class="bi bi-calendar-x-fill"></i>
                  | Salir
                </button>
              </li>
            )}
            <li>
              <a className="hover:font-bold" href="#"></a>
            </li>
          </ul>
          <ModoDarck />
        </nav>
      </header>
    </div>
  );
};
export default HeaderComputo;
