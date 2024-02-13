"use client"
import Image from "next/image";
import { useWidth } from "@/hooks/useWidth";

export default function Header(){
    const width = useWidth();
    const isMobile = width < 769
    return(
        <div className="w-full h-4/5 md:mx-24 flex flex-col md:flex-row justify-center items-center">
            {isMobile && <div className="mt-18">
                <Image src="/assets/sketch_margeting01.png" alt="markteing"  width="400" height="400"/> 
                </div>}
            <div className="w-full md:w-1/2 h-4/5 flex flex-col ">
                {!isMobile && <div className="h-1/3 w-full flex justify-center items-center md:mb-8">
                    <Image src="/assets/Logo_AscendantAllies_white.png" alt="logoWhite" width="100" height="100"/>
                     <h1 className="text-2xl md:text-3xl font-primary text-violetDawn">ASCENDANT <span className="text-white">ALLIES</span></h1> 
                </div>}
                <div  className="h-2/3 w-full mt-4 md:mt-2 flex flex-col justify-center items-center ">
                    <h2 className="text-3xl md:text-6xl font-primary text-white ">BIENVENIDOS</h2>
                {/* <p className="font-secondary text-xl md:text-lg text-white p-5 text-center">
                Nos unimos con un propósito común: <span className="text-bold">Acercarnos hacia nuevas alturas juntos</span>. Somos una comunidad de colaboradores formados, creando alianzas poderosas para superar <span className="text-bold">desafíos</span> y alcanzar <span className="text-bold">metas ambiciosas.</span> Nuestro <span className="text-bold">compromiso</span> con el éxito no se limita solo a nosotros, sino que se extiende a cada miembro de nuestra red.
                </p> */}
                <p className="font-secondary text-xl md:text-2xl text-pattyPan px-5 md:p-0 md:pt-2 text-center ">
                En <span className="font-bold">Ascendant Allies</span>, nos enorgullece ser tu aliado estratégico en la travesía hacia el <span className="font-bold">éxito empresarial</span>. Especializados en una gama completa de <span className="font-bold">servicios</span>, desde diseño <span className="font-bold">UX/UI</span> y <span className="font-bold">marketing</span> hasta<span className="font-bold"> arquitectura web</span> y más, ofrecemos soluciones integrales para impulsar tu <span className="font-bold">crecimiento</span>.
                </p>
                </div>
            </div>
           {!isMobile && <div className="w-1/2 h-4/5 flex justify-center items-center">
                <Image src="/assets/sketch_margeting01.png" alt="markteing"  width="600" height="600"/> 
            </div>}
        </div>
    )
}