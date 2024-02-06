"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useWidth } from "@/hooks/useWidth";

export default function ContactStripe({socialMedia} : any){
    const width = useWidth();
    const isMobile = width < 769
    return(
        <>
        {socialMedia ? (
            <div className="w-full md:h-2/5 bg-black flex flex-col justify-center items-center md:flex-row p-10 text-white">
                <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}
                spaceBetween={20}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

            <SwiperSlide>
                <div className="mx-10 my-8 border w-20 h-24">H</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-10 my-8 border w-20 h-24">O</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-10 my-8 border w-20 h-24">L</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-10 my-8 border w-20 h-24">A</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-10 my-8 border w-20 h-24">S</div>
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