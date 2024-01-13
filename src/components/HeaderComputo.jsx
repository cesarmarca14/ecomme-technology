

const HeaderComputo = () => {
    return (
        <div className="w-[95%] mx-auto overflow-hidden ">
        <header>
       <nav className="flex h-32 items-center justify-between">
        <a href="" className="w-1/2  max-w-[400px] text-4xl text-[#bababa] font-bold ">
        TechNology
        </a>
        <input type="checkbox" id="menu" className=" peer/menu hidden" />
        <label htmlFor="menu" className="w-10 h-10  bg-open-menu bg-cover bg-center rounded-lg bg-green-800 cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden "></label>
        <ul className="fixed inset-0 bg-violet-900/50  text-sm text-[#4a5a71] font-light px-[5%] grid auto-rows-max gap-2 content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">
            <li className="border-4 border-black/10 py-1 px-1 rounded-lg hover:font-bold">
                <a href="#">🕵️Inicio Sesion</a>
            </li>
            <li className="border-4 border-black/10 py-1 px-1 rounded-lg hover:font-bold">
                <a className="hover:font-bold" href="#">🚗Pedidos</a>
            </li>
            <li className="border-4 border-black/10 py-1 px-1 rounded-lg ">
                <a className="hover:font-bold" href="#">🛒Carrito de compras</a>
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