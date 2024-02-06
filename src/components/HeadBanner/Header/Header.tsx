import Image from "next/image";

export default function Header(){
    return(
        <div className="w-full h-4/5 mx-24 flex justify-center items-center">
            <div className="w-1/2 h-4/5 flex flex-col ">
                <div className="h-1/2 w-full flex justify-center items-center">
                    <Image src="/assets/Logo_AscendantAllies_white.png" alt="logoWhite" width="100" height="100"/>
                     <h1 className="text-2xl md:text-3xl font-primary text-violetDawn">ASCENDANT <span className="text-white">ALLIES</span></h1> 
                </div>
                <div  className="h-1/2 w-full flex justify-center items-center">
                <p className="font-secondary text-2xl text-white p-5 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem similique quaerat expedita. Assumenda temporibus fugiat officia aperiam nemo! Excepturi sed quam dolores porro fugiat atque ad tempore rem distinctio dolorum.
                </p>
                </div>
            </div>
            <div className="w-1/2 h-4/5 flex justify-center items-center">
                <Image src="/assets/sketch_margeting01.png" alt="markteing"  width="600" height="600"/> 
            </div>
        </div>
    )
}