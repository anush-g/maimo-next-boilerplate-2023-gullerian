import { useAppContext } from "@/contexts/AppContext";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { HeroCard } from "./HeroCard";

const Hero = () => {
  const { shows, loading } = useAppContext();
  const [showsFiltrados, setShowsFiltrados] = useState([]);

  useEffect(() => {
    // Filtrar los shows con un ranking mayor o igual a 7 y que tengan imagen
    const showsFiltrados = shows.filter(
      (show) => show.rating.average >= 7 && show.image?.original
    );

    // Obtener una muestra aleatoria de 5 shows de la lista filtrada
    const muestraAleatoria = obtenerMuestraAleatoria(showsFiltrados, 5);

    setShowsFiltrados(muestraAleatoria);
  }, [shows]);

  const obtenerMuestraAleatoria = (array, tamanoMuestra) => {
    const copiaArray = [...array];
    const muestraAleatoria = [];
  
    for (let i = 0; i < tamanoMuestra && copiaArray.length > 0; i++) {
      let indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
      let showSeleccionado = copiaArray.splice(indiceAleatorio, 1)[0];
  
      while (!showSeleccionado.image?.original && copiaArray.length > 0) {
        indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
        showSeleccionado = copiaArray.splice(indiceAleatorio, 1)[0];
      }
  
      if (showSeleccionado.image?.original) {
        muestraAleatoria.push(showSeleccionado);
      }
    }
  
    return muestraAleatoria;
  };
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
                <HeroCard heroShow={actualShow} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default Hero;
