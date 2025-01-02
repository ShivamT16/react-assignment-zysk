import headerImage from "../assets/headerImage.png"
import { FiPlayCircle } from "react-icons/fi";

export const HeaderSection = () => {
    return(
    <main className="text-center pt-20">
    
     <button className="text-purple-700 text-sm font-medium bg-purple-50 p-1.5 rounded-full border border-purple-200 my-4"> 
      <span className="bg-white mr-2 px-4 py-0.5 rounded-full border border-purple-200">New feature</span> Checkout the team dashboard {'>'} 
     </button>
    
     <p className="text-6xl font-bold">Beautiful analytics to grow smarter</p>
     <p className="text-xl text-slate-600 px-4 md:px-[24%] py-8"> Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups. </p>

     <div className="flex flex-wrap-reverse justify-center items-center">
      <button className="border mx-2 w-full md:w-fit border-gray-300 py-4 px-8 rounded-lg font-medium my-6 flex justify-center items-center gap-3"> <FiPlayCircle size="1.2rem" /> Demo </button>
      <button className="py-4 px-8 mx-2 w-full md:w-fit rounded-lg text-white bg-purple-500 font-medium"> Sign up </button>
     </div>

     <img src={headerImage} alt="headerImage" className="my-7 w-[90%] border-8 rounded-t-3xl mx-[5%] border-black border-b border-b-slate-200" />

    </main>
    )
}