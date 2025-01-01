import sisyphus from "../assets/sisyphus.png"
import random from "../assets/random.jpg"

export const Testomonial = () => {
    return(
        <div className="text-center bg-gray-50 p-14 my-20">

            <div className="flex justify-center items-center py-4">
                 <img src={sisyphus} alt="sisyphusLogo" />
                 <p className="text-2xl font-semibold" > Sisyphus </p>
            </div>

            <p className="text-5xl px-10 font-semibold leading-tight pb-6">Weve been using Untitled to kick start every new project and can't imagine working without it.</p>

            <div className="flex justify-center items-center">
            <img src={random} alt="img" className="h-16 rounded-full m-4" />
            </div>           
            <p className="text-xl font-semibold" >Candice Wu</p>
            <p className="text-lg text-slate-600 p-1 pb-4">Product Manager, Sisyphus</p>

        </div>
    )
}