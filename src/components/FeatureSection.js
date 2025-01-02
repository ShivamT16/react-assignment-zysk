import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineBolt } from "react-icons/hi2";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RiChatSmile2Line } from "react-icons/ri";
import { MdKeyboardCommandKey } from "react-icons/md";
import { BsChatHeart } from "react-icons/bs";

export const FeatureSection = () => {
  return (
    <section className="text-center">
     <p className="text-purple-600 font-semibold p-4"> Features </p>
     <p className="text-4xl font-semibold p-1"> Analytics that feels like its from the future </p>
     <p className="text-xl text-slate-600 px-4 md:px-[24%] py-6"> Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups. </p>

     <div className="mx-[6%] md:flex flex-wrap justify-around">
     <div className="w-full md:w-2/6 px-2 py-6 my-4">
       <p className="border shadow rounded-lg w-fit mx-[45%] md:mx-[43.5%] px-2 py-2"> <IoChatbubblesOutline size="2rem" /> </p>
       <p className="text-xl font-semibold p-2"> Share team inboxes</p>
       <p className="text-slate-600 text-lg">Wheather you have a team of 2 or 200, our shared team inboxes keep everyone on the same page as in the loop.</p>
      </div>
      <div className="w-full md:w-2/6 px-2 py-6 my-4">
       <p className="border shadow rounded-lg w-fit mx-[45%] md:mx-[43.5%] px-2 py-2"> <HiOutlineBolt size="2rem" /> </p>
       <p className="text-xl font-semibold p-2"> Deliver instant answers </p>
       <p className="text-slate-600 text-lg"> An all-in-one customer service platform that helps you balance everything your customers need to be happy. </p>
      </div>
      <div className="w-full md:w-2/6 px-2 py-6 my-4">
       <p className="border shadow rounded-lg w-fit mx-[45%] md:mx-[43.5%] px-2 py-2"> <BsBoxArrowUpRight size="2rem" /> </p>
       <p className="text-xl font-semibold p-2"> Manage your team with reports </p>
       <p className="text-slate-600 text-lg"> Measure what matters with Untitled;s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks. </p>
      </div>
      <div className="w-full md:w-2/6 px-2 py-6 my-4">
       <p className="border shadow rounded-lg w-fit mx-[45%] md:mx-[43.5%] px-2 py-2"> <RiChatSmile2Line size="2rem" /> </p>
       <p className="text-xl font-semibold p-2"> Connect with customers </p>
       <p className="text-slate-600 text-lg"> Solve a problem or close a sale in real-time with chat.If no one is available, customers are seamlessly routed to email without confusion. </p>
      </div>
      <div className="w-full md:w-2/6 px-2 py-6 my-4">
       <p className="border shadow rounded-lg w-fit mx-[45%] md:mx-[43.5%] px-2 py-2"> <MdKeyboardCommandKey size="2rem" /> </p>
       <p className="text-xl font-semibold p-2"> Connect the tools you already use </p>
       <p className="text-slate-600 text-lg"> Explore 100+ integration that make your day-to-day workflow more effcient and familiar. Plus, our extensive developer tools. </p>
      </div>
      <div className="w-full md:w-2/6 px-2 py-6 my-4">
       <p className="border shadow rounded-lg w-fit mx-[45%] md:mx-[43.5%] px-2 py-2"> <BsChatHeart size="2rem" /> </p>
       <p className="text-xl font-semibold p-2"> Our people make the difference </p>
       <p className="text-slate-600 text-lg"> We are an extension of your customers service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help. </p>
      </div>
     </div>  
    
    </section>
  )
}
