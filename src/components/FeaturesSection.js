import { IoChatbubblesOutline } from "react-icons/io5"
import imageMD from "../assets/featuresMd.png"
import { HiOutlineBolt } from "react-icons/hi2"
import { BsBoxArrowUpRight } from "react-icons/bs"

export const FeaturesSection = () => {
  return (
    <section className='text-center'>

        <button className='text-purple-500 bg-purple-50 px-2 rounded-xl border border-purple-200 font-semibold'>Features</button>

        <p className="text-4xl font-bold py-5">Cutting-edge features for advanced analytics</p>
        <p className="text-xl text-slate-600 text-center px-[24%]"> Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups. </p>

        <img src={imageMD} alt="features" className="py-12 px-[14%]" />

        <div className="mx-[6%] text-center flex flex-wrap justify-around">
             <div className="w-2/6 px-2 py-6 my-4">
               <p className="border shadow rounded-lg mx-[43.5%] px-2 py-2"> <IoChatbubblesOutline size="2rem" /> </p>
               <p className="text-xl font-semibold p-2"> Share team inboxes</p>
               <p className="text-slate-600 text-lg">Wheather you have a team of 2 or 200, our shared team inboxes keep everyone on the same page as in the loop.</p>
               <p className="text-lg text-purple-700 font-medium py-4 cursor-default hover:text-purple-800" >Learn more {'->'}</p>
              </div>
              <div className="w-2/6 px-2 py-6 my-4">
               <p className="border shadow rounded-lg mx-[43.5%] px-2 py-2"> <HiOutlineBolt size="2rem" /> </p>
               <p className="text-xl font-semibold p-2"> Deliver instant answers </p>
               <p className="text-slate-600 text-lg"> An all-in-one customer service platform that helps you balance everything your customers need to be happy. </p>
               <p className="text-lg text-purple-700 font-medium py-4 cursor-default hover:text-purple-800" >Learn more {'->'}</p>
              </div>
              <div className="w-2/6 px-2 py-6 my-4">
               <p className="border shadow rounded-lg mx-[43.5%] px-2 py-2"> <BsBoxArrowUpRight size="2rem" /> </p>
               <p className="text-xl font-semibold p-2"> Manage your team with reports </p>
               <p className="text-slate-600 text-lg"> Measure what matters with Untitled;s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks. </p>
               <p className="text-lg text-purple-700 font-medium py-4 cursor-default hover:text-purple-800" >Learn more {'->'}</p>
              </div>
          </div>

            <p className="border-b m-8 mx-16"></p>

    </section>
  )
}
