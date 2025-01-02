import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import random from "../assets/random.jpg"

export const FAQsPages = () => {
    const [status, setStatus] = useState(null)

    const handleClick = (id) => {
        status === id ? setStatus(null) : setStatus(id)
    }

    const FaqArray = [
    { id:1, faq: "Is there a free trial available?", answer:"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},
    { id:2, faq: "What is your cancellation policy?", answer:"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},    
    { id:3, faq: "Can other info be added to an invoice?", answer:"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},
    { id:4, faq: "How does billing work?", answer:"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},
    { id:5, faq: "How do I change my account email?", answer:"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."} ]

  return (
    <div className='text-center py-10'>

        <p className='text-4xl font-semibold'>Frequently asked questions</p>
        <p className='text-xl text-slate-600 py-6'>Everything you need to know about the product and billing.</p>

        <div className="mx-4 md:mx-[20%] text-left p-2" >
         {
            FaqArray.map(({id, faq, answer}) => 
            <div key={id} className="border-b mx-5 py-4" >
             <p className="text-xl font-medium py-4 flex justify-between items-center" > {faq} 
              {status === id ? <FiMinusCircle className="cursor-pointer" onClick={() => handleClick(id)} color="grey" /> : <FiPlusCircle className="cursor-pointer" onClick={() => handleClick(id)} color="grey" /> } </p>
             {status === id && <p className="text-lg text-slate-600 py-4" > {answer} </p>}
            </div> )
         }
        </div>

        <div className="bg-slate-50 rounded-xl my-10 mx-[5%]">

          <div className="flex justify-center items-center gap-6 relative p-8">
            <img src={random} alt="imge" className="h-12 rounded-full border border-slate-300" />
            <img src={random} alt="imge" className="h-12 rounded-full border border-slate-300" />
            <img src={random} alt="imge" className="h-16 rounded-full border border-slate-200 p-[1px] bg-white absolute" />
          </div>

            <p className='text-2xl font-semibold'>Still have questions?</p>
            <p className='text-lg text-slate-600 p-1'>Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <button className="py-2.5 px-4 m-6 rounded-lg text-white bg-purple-600 font-medium"> Get in touch </button>
        </div>

        <p className="border-b mx-[5%] py-10"></p>

    </div>
  )
}
