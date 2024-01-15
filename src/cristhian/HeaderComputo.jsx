

const HeaderComputo = () => {
    return (
        <div className="w-[95%] mx-auto overflow-hidden ">
        <header>
       <nav className="flex h-32 items-center justify-between">
        <a href="" className="w-1/2  max-w-[400px] text-4xl text-[#bababa] font-bold ">
        <img className=" w-80 mt-6" src="./public/DeluxeComputer2.png"  alt="" />
        </a>
        <input type="checkbox" id="menu" className=" peer/menu hidden" />
        <label htmlFor="menu" className="w-10 h-10  bg-open-menu bg-cover bg-center rounded-lg bg-green-800 cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden "></label>
        <ul className="headersm fixed inset-0 bg-slate-500/80  text-lg text-[#4a5a71] font-light px-[5%] grid auto-rows-max gap-8 content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-4 md:bg-transparent ">
            <li className="py-1 px-1 rounded-lg hover:font-bold">
                <a className="inicio" href="#">🕵️Inicio Sesion</a>
            </li>
            <li className=" py-1 px-1 rounded-lg  hover:font-bold">
                <a className="pedidos" href="#">🚗Pedidos</a>
            </li>
            <li className=" py-1 px-1 rounded-lg ">
                <a className="carrito" href="#">🛒Carrito de compras</a>
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