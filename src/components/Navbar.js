import random from "../assets/random.jpg"
import logo from "../assets/untitled.png" 

export const Navbar = () => {
    return(
      <nav className="flex justify-between px-[4%] border-b py-5">

       <div className="flex justify-around w-1/2 items-center text-lg font-semibold text-slate-600">
        <button className="text-2xl font-semibold text-black flex items-center">
          <img src={logo} alt="logo" />
           Untitled UI </button>
        <button> Home </button>
        <button> Products ⋎ </button>
        <button> Resources ⋎ </button>
        <button> Pricing </button>
       </div>
       
       <div>
        <img src={random} alt="img" className="h-10 rounded-full border border-slate-300 mx-4" />
       </div>

      </nav>
)}