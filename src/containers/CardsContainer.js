import ShowCard from "@/components/ShowCard";
import { useAppContext } from "@/contexts/AppContext";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Carrousel } from "@/components/Carrousel";

const CardsContainer = () => {
  const { shows, loading } = useAppContext();

  const [showsEndedHighRated, setShowsEndedHighRated] = useState([]);
  const [showsRomance, setShowsRomance] = useState([]);
  const [showsEuropean, setShowsEuropean] = useState([]);
  const [showsAsian, setShowsAsian] = useState([]);
  const [showsBefore2000s, setShowsBefore2000s] = useState([]);

  useEffect(() => {
    const endedHighRatedFilter = shows.filter((ehr) => {
      const rating = ehr.rating && ehr.rating.average;
      const endedYear = ehr.ended
        ? new Date(ehr.ended).getFullYear()
        : null;

      return rating >= 7 && endedYear === 2023;
    });

    const romanceFilter = shows.filter((rc) => rc.genres.includes("Romance"));

    const europeanShowsFilter = shows.filter((eur) => {
      const country = eur.network?.country?.name;
      return country === "France" || country === "United Kingdom";
    
    });
    const asianShowsFilter = shows.filter((asian) => asian.language.includes("Japanese"));

    const showsBefore2000sFilter = shows.filter((before) => {
      if (before.premiered) {
        const year = new Date(before.premiered).getFullYear();

        return year < 2000;
      } else {
        return false;
      }
    });

    setShowsEndedHighRated(endedHighRatedFilter);
    setShowsRomance(romanceFilter);
    setShowsEuropean(europeanShowsFilter);
    setShowsAsian(asianShowsFilter);
    setShowsBefore2000s(showsBefore2000sFilter);
  }, [shows]);

  return (
    <section>
      <h1>SHOWS</h1>
      {!loading && (
        <div className="px-2 py-4">
          <h3>Highest rated shows that ended this year</h3>
          <Carrousel showsArray={showsEndedHighRated} />
          
          <h3>Shows with Romance</h3>
          <Carrousel showsArray={showsRomance} />

          <h3>Shows prior to the 00s</h3>
          <Carrousel showsArray={showsBefore2000s} />

          <h3>European Shows</h3>
          <Carrousel showsArray={showsEuropean} />

          <h3>Asian Shows</h3>
          <Carrousel showsArray={showsAsian} />

        </div>
      )}
      {loading && <p>Loading...</p>}
    </section>
  );
};

export default CardsContainer;
