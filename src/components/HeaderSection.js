import headerImage from "../assets/headerImage.png"

export const HeaderSection = () => {
    return(
    <main className="text-center pt-20">
    
     <button className="text-purple-700 text-sm font-medium bg-purple-50 p-1.5 rounded-full border border-purple-200 my-4"> 
      <span className="bg-white mr-2 px-4 py-0.5 rounded-full border border-purple-200">New feature</span> Checkout the team dashboard {'->'} 
     </button>
    
     <p className="text-6xl font-bold">Beautiful analytics to grow smarter</p>
     <p className="text-xl text-slate-600 px-[24%] py-8"> Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups. </p>

     <div>
      <button className="border border-gray-300 py-4 px-10 rounded-lg font-medium my-6"> Demo </button>
      <button className="py-4 px-8 mx-2 rounded-lg text-white bg-purple-500 font-medium"> Sign up </button>
     </div>

     <img src={headerImage} alt="headerImage" className="my-7 border-8 rounded-t-3xl mx-[5%] border-black border-b border-b-slate-200" />

    </main>
    )
}