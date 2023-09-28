import { useAppContext } from "@/contexts/AppContext";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import { Carrousel } from "./Carrousel";
import ShowCard from "./ShowCard";
import { HeroCard } from "./HeroCard";


const Hero = () => {
  const { shows, loading } = useAppContext();
  const [showsFiltrados, setShowsFiltrados] = useState([]);

  useEffect(() => {
    const showsOrdenados = shows.sort(
      (a, b) => b.rating.average - a.rating.average
    );
    const ultimos3Shows = showsOrdenados.slice(0, 5);
    setShowsFiltrados(
      shows.sort((a, b) => b.rating.average - a.rating.average).slice(0, 5)
    );
  }, [shows]);

return (

    <section>
      {!loading && (
        
        
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
                  {showsFiltrados.map((actualShow, index) => {
            return (
              <SwiperSlide key={index}>
                <HeroCard heroShow={actualShow}  />
              </SwiperSlide>
            );
          })}
        </Swiper>
)}
</section>
);
};

export default Hero;