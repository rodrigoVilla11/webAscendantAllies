import Image from "next/image";

export default function AboutUs(){
    return(
        <div className="w-full h-auto md:h-4/5 md:mx-24 flex flex-col md:flex-row justify-center items-center">
            <div className="hidden w-1/3 h-4/5 md:flex justify-center items_center">
                <Image src="/assets/sketch_margeting02.png" alt="sketchAboutUs" width="400" height="200"/>
            </div>
            <div className="w-full md:w-2/3 h-4/5 flex justify-center items-center ">
                {/* <p className="font-secondary text-2xl px-2">Somos más que un proveedor de servicios; somos <span className="font-bold">Ascendant Allies</span>, un equipo apasionado que se compromete a ofrecerte las herramientas y la orientación que necesitas para <span className="font-bold">superar desafíos</span> y <span className="font-bold">alcanzar tus objetivos profesionales</span>.</p> */}
                <p className="font-secondary text-xl px-2">
                    En el corazón de Ascendant Allies reside la visión de dos mentes emprendedoras, unidas por la pasión de hacer crecer a otras empresas. Inspirados por la idea de ser más que simplemente proveedores de servicios, los fundadores de Ascendant Allies se propusieron crear un espacio donde el crecimiento y la colaboración fueran la esencia.<br/>
                    La génesis de Ascendant Allies se originó en la observación de un vacío en el mercado, donde las empresas necesitaban no solo servicios especializados, sino también un socio estratégico dedicado a su éxito. Con esta visión, nació Ascendant Allies, con la misión de ofrecer no solo soluciones, sino también orientación personalizada para superar desafíos y alcanzar metas profesionales.<br/>
                    Desde entonces, Ascendant Allies ha evolucionado continuamente, adaptándose a las cambiantes necesidades del panorama empresarial. El proyecto ha crecido para convertirse en un catalizador de transformación para aquellos que buscan más que servicios estándar; buscan un aliado de crecimiento comprometido.</p>
            </div>
        </div>

    )
}