import boltshift from "../assets/boltshift.png"
import lightbox from "../assets/lightbox.png"
import featherdev from "../assets/featherDev.png"
import spherule from "../assets/spherule.png"
import globalbank from "../assets/globalBank.png"
import nietzsche from "../assets/Nietzsche.png"

const socialArray = [
    {logo:boltshift , name: "Boltshift"},
    {logo:lightbox , name: "Lightbox"},
    {logo:featherdev , name: "FeatherDev"},
    {logo:spherule , name: "Spherule"},
    {logo:globalbank , name: "GlobalBank"},
    {logo:nietzsche , name: "Nietsche"} ]

export const SocialProof = () => {
    return(
        <section className="mx-[3%]">

            <p className="text-lg text-slate-500 font-medium text-center pt-14 pb-10"> Join 4,000+ companies already growing </p>
            
            <div className="flex justify-evenly flex-wrap pb-10">
              { socialArray.map(({logo, name}) => 
                <div className="flex items-center">
                 <img src={logo} alt={name} />
                 <p className="text-3xl font-bold" >{name}</p>
                </div>)}
            </div>

            <p className="border-b mx-12 my-14"></p>

        </section>
    )
}