import Image from "next/image";

export default function AboutUs(){
    return(
        <div className="w-full h-auto md:h-screen md:mx-24 flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-1/3 md:h-4/5 flex justify-center items_center">
                <Image src="/assets/sketch_margeting02.png" alt="sketchAboutUs" width="400" height="200"/>
            </div>
            <div className="hidden md:flex w-full md:w-2/3 h-screen mt-36 justify-center items-start ">
                {/* <p className="font-secondary text-2xl px-2">Somos más que un proveedor de servicios; somos <span className="font-bold">Ascendant Allies</span>, un equipo apasionado que se compromete a ofrecerte las herramientas y la orientación que necesitas para <span className="font-bold">superar desafíos</span> y <span className="font-bold">alcanzar tus objetivos profesionales</span>.</p> */}
                <p className="font-secondary text-xl px-2">
                    En el corazón de <span className="font-bold">Ascendant Allies</span> reside la visión de mentes emprendedoras, unidas por la pasión de hacer crecer a otras empresas. Inspirados por la idea de ser más que simplemente proveedores de servicios, los fundadores de Ascendant Allies se propusieron crear un espacio donde el <span className="font-bold">crecimiento y la colaboración fueran la esencia</span>.<br/>
                    La génesis de <span className="font-bold">Ascendant Allies</span> se originó en la observación de un vacío en el mercado, donde las empresas necesitaban no solo servicios especializados, sino también un <span className="font-bold">socio estratégico</span> dedicado a su <span className="font-bold">éxito</span>. Con esta visión, nació <span className="font-bold">Ascendant Allies</span>, con la misión de ofrecer no solo soluciones, sino también orientación personalizada para superar <span className="font-bold">desafíos y alcanzar metas profesionales</span>.<br/>
                        Desde entonces, <span className="font-bold">Ascendant Allies</span> ha evolucionado continuamente, adaptándose a las cambiantes necesidades del panorama empresarial. El proyecto ha crecido para convertirse en un catalizador de transformación para aquellos que buscan más que servicios estándar; buscan un <span className="font-bold">aliado de crecimiento comprometido</span>.</p>
            </div>
        </div>

    )
}