import uxReview from "../assets/uxReview.png"
import random from "../assets/random.jpg"
import product from "../assets/product.png"
import software from "../assets/software.png"

export const BlogSection = () => {
  return (
    <section className="mx-[6%]">
        <div className="flex justify-between items-center">
            <p>
                <p className="text-purple-600 font-medium">Our blog</p>
                <p className="text-3xl font-medium py-2">Lastest blog posts</p>
            </p>
            <button className="hidden md:flex py-3 px-4 m-6 rounded-lg text-white bg-purple-600 font-medium"> View all posts </button>
        </div>
        <p className="text-xl text-slate-600">Tool and strategies modern teams need to help their companies grow.</p>

        <div className="md:flex gap-7 py-10">
        <div className="w-full md:w-1/3">
            <img src={uxReview} alt="uxReview" className="w-full py-4" />
            <p className="text-purple-600 font-medium">Design</p>
            <p className="flex justify-between text-2xl py-2 font-semibold">UX review presentations <span> ↗ </span> </p>
            <p className="text-slate-600 text-lg leading-6">How do you create compelling presentation that wow your colleagues and impress your managers?</p>
            <div className="flex items-center gap-3 my-4">
                <img src={random} alt="userPicture" className="h-10 rounded-full" />
                <p>
                    <p className="font-medium">Olivia Rhye</p>
                    <p className="text-slate-600">20 Jan 2024</p>
                </p>
            </div>
        </div>

        <div className="w-full md:w-1/3">
            <img src={product} alt="product" className="w-full py-4" />
            <p className="text-purple-600 font-medium">Product</p>
            <p className="flex justify-between text-2xl py-2 font-semibold">Migrating to Linear 101 <span> ↗ </span> </p>
            <p className="text-slate-600 text-lg leading-6">Linear helps to streamline software projects, sprints, tasks, and bug tracking. Heres how to get started.</p>
            <div className="flex items-center gap-3 my-4">
                <img src={random} alt="userPicture" className="h-10 rounded-full" />
                <p>
                    <p className="font-medium">Olivia Rhye</p>
                    <p className="text-slate-600">20 Jan 2024</p>
                </p>
            </div>
        </div>

        <div className="w-full md:w-1/3">
            <img src={software} alt="software" className="w-full py-4" />
            <p className="text-purple-600 font-medium">Software Engineering</p>
            <p className="flex justify-between text-2xl py-2 font-semibold">Building your API stack <span> ↗ </span> </p>
            <p className="text-slate-600 text-lg leading-6">The rise of Restful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
            <div className="flex items-center gap-3 my-4">
                <img src={random} alt="userPicture" className="h-10 rounded-full" />
                <p>
                    <p className="font-medium">Olivia Rhye</p>
                    <p className="text-slate-600">20 Jan 2024</p>
                </p>
            </div>
        </div>
        </div>
        
        <button className="md:hidden w-full py-2 rounded-lg text-white bg-purple-600 font-medium"> View all posts </button>

    </section>
  )
}
