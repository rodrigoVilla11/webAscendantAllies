"use client"
import Image from "next/image";
import CardService from "./CardService/CardService";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useWidth } from "@/hooks/useWidth";

export default function ServicesBanner(){
    const width = useWidth();
    const isMobile = width < 769
    return(
        <div className="flex flex-col justify-center items-center w-full h-screen bg-violetDawn p-5">
            <h2 className="text-3xl md:text-4xl font-primary text-black ">Nuestros Serivicios</h2>
        <div className="flex justify-center items-center w-full h-screen bg-violetDawn md:p-10">
             <Swiper
             style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
               spaceBetween={30}
               centeredSlides={true}
               slidesPerView={isMobile ? 1 : 3}
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
                <div className="mx-20 my-8"><Image src="/assets/Logo_AscendantAllies_no_background.png" alt="logo_AscendantAllies" width="200" height="100"/></div>
            </SwiperSlide>
            <SwiperSlide><CardService /></SwiperSlide>
            <SwiperSlide><CardService /></SwiperSlide>
            <SwiperSlide><CardService /></SwiperSlide>
            <SwiperSlide><CardService /></SwiperSlide>
            <SwiperSlide><CardService /></SwiperSlide>
            
            </Swiper>
        </div>
        </div>
    )
}