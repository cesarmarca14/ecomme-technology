import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const HeaderComputo = () => {
    return (
        <div className="w-[100%] mx-auto overflow-hidden bg-[#009fe3]  ">
        <header>
       <nav className="flex h-32 items-center justify-between">
        <a href="" className="w-1/2  max-w-[400px] text-4xl text-white font-bold ">
        <img className=" w-80 mt-6" src="./public/DeluxeComputer2.png"  alt="" />
        </a>
        <input type="checkbox" id="menu" className=" peer/menu hidden" />
        <label htmlFor="menu" className="hamburguer   w-10 h-10  bg-open-menu bg-cover bg-center rounded-lg  bg-blue-800 cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden "></label>
        <ul className="headersm fixed inset-0 bg-slate-500/80  text-lg text-white font-light px-[5%] grid auto-rows-max gap-8 content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-4 md:bg-transparent ">
            <li className="py-1 px-1 rounded-lg hover:font-bold">
              <a className="inicio font-semibold flex flex-col items-center" href="#"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>
  Inicio Sesion</a>
            </li>
            {/* <li className=" py-1 px-1 rounded-lg  hover:font-bold">
                <a className="pedidos font-semibold" href="#">| Pedidos</a>
            </li> */}
            <li className=" py-1 px-1 rounded-lg ">
                
                <a className="carrito font-semibold flex
                flex-col items-center" href="#"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
  <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
</svg>
 | Carrito de compras</a>
            </li>
            <li>
                <a className="hover:font-bold" href="#"></a>
            </li>
           
           
        </ul>
       
       </nav>
        </header>
        </div>
        
    )
}
export default HeaderComputo