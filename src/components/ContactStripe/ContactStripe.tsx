"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { useWidth } from "@/hooks/useWidth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function ContactStripe({socialMedia} : any){
    const width = useWidth();
    const isMobile = width < 769
    return(
        <>
        {socialMedia ? (
            <div className="w-full md:h-2/5 bg-black p-10  text-white flex justify-start items-center">
                <Swiper                 
                centeredSlides={true}
                slidesPerView={isMobile ? 1 : 3}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >

            <SwiperSlide>
                <div className="mx-10 my-8 w-auto h-48 flex flex-col md:flex-row justify-center items-center">
                <a href="https://www.instagram.com/ascendantallies/" target="blank" className='flex flex-col md:flex-row justify-center items-center'>
                    <FontAwesomeIcon icon={faInstagram} size={isMobile ? '8x' : '10x'} />
                    <h2 className="text-3xl md:text-4xl font-primary text-white p-5 text-center md:text-left">@ascendantallies</h2>
                </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-10 my-8 w-auto h-48 flex flex-col md:flex-row justify-center items-center">
                <a href="https://twitter.com/AscendantAllies" target="blank" className='flex flex-col md:flex-row justify-center items-center'>
                    <FontAwesomeIcon icon={faXTwitter} size={isMobile ? '8x' : '10x'}/>
                    <h2 className="text-3xl md:text-4xl font-primary text-white p-5 text-center md:text-left">@ascendantallies</h2>
                </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-10 my-8 w-auto h-48 flex flex-col md:flex-row justify-center items-center">
                <FontAwesomeIcon icon={faFacebook} size={isMobile ? '8x' : '10x'}/>
                <h2 className="text-3xl md:text-4xl font-primary text-white p-5 text-center md:text-left">Ascendant Allies</h2>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-10 my-8  w-auto h-48 flex flex-col md:flex-row justify-center items-center">
                <a href="https://www.linkedin.com/company/ascendant-allies/" target="blank" className='flex flex-col md:flex-row justify-center items-center'>
                    <FontAwesomeIcon icon={faLinkedin} size={isMobile ? '8x' : '10x'}/>
                    <h2 className="text-3xl md:text-4xl font-primary text-white p-5 text-center md:text-left">Ascendant Allies</h2>
                </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-10 my-8 w-auto h-48 flex flex-col md:flex-row justify-center items-center">
                    <FontAwesomeIcon icon={faWhatsapp} size={isMobile ? '8x' : '10x'}/>
                    <h2 className="text-3xl md:text-4xl font-primary text-white p-5 text-center md:text-left">Link Whatsapp</h2>
                </div>
            </SwiperSlide>
            </Swiper>
            </div>
        ):(
        <div className="w-full md:h-2/5 bg-black flex flex-col justify-center items-center md:flex-row p-10">
            <div className="w-full md:w-1/2 h-full">
                <h2 className="text-3xl md:text-4xl font-primary text-violetDawn ">
                    ¿QUERES CHARLAR CON NOSOTROS?
                </h2>
                <p className="font-secondary text-xl text-white">
                    Te invitamos a agendar un encuentro de 30 minutos con nosotros, sin cargo, para poder conversar más en profundidad sobre tu negocio y tu búsqueda actual y así encontrar la mejor manera de acompañarlos.
                </p>
            </div>
            <div className="w-full md:w-1/2 h-full flex justify-center items-center">
                <button className="bg-white text-3xl md:text-4xl font-primary text-violetDawn p-8 m-4 rounded-2xl hover:text-white hover:bg-violetDawn">AGENDEMOS</button>
            </div>
        </div>)}
        </>
    )
}