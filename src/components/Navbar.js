import random from "../assets/random.jpg"
import logo from "../assets/untitled.png" 
import { IoReorderThreeOutline } from "react-icons/io5";

export const Navbar = () => {
    return(
      <nav className="flex justify-between px-[4%] border-b py-5">

       <div className="flex justify-around md:w-1/2 items-center text-lg font-semibold text-slate-600">
        <button className="text-2xl font-semibold text-black flex items-center">
          <img src={logo} alt="logo" />
           Untitled UI </button>
        <button className="hidden md:flex"> Home </button>
        <button className="hidden md:flex"> Products ⋎ </button>
        <button className="hidden md:flex"> Resources ⋎ </button>
        <button className="hidden md:flex"> Pricing </button>
       </div>
       
       <div>
        <img src={random} alt="img" className="hidden md:flex h-10 rounded-full border border-slate-300 mx-4" />
        <IoReorderThreeOutline className="text-3xl md:hidden" />
       </div>

      </nav>
)}