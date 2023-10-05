import React, { useEffect } from "react";
import Image from "next/image";
import StarIcon from "./Icons/StarIcon";
import { useAppContext } from "@/contexts/AppContext";
import Link from "next/link";
import { useRouter } from "next/router";

const ShowSingleCard = ({ show }) => {
  const { name, id, image, genres, summary } = show;
  const { getShow, getCast, cast, crew, getCrew } = useAppContext();
  const summaryBien = summary?.replace(/<\/?(p|b|i)>/g, "");
  const router = useRouter();

  useEffect(() => {
    // Llamar a getShow, getCast y getCrew al montar el componente
    getShow(id);
    getCast(id);
    getCrew(id);
  }, [getShow, getCast, getCrew, id]);

  const handleGoBack = () => {
    // Agrega la lógica para ir hacia atrás o al lugar deseado
    router.back();
  };

  return (
    <div className="flex p-6 mt-16 m-12 w-9/12 relative mx-auto my-auto">
      {/* Parte izquierda (Imagen) */}
      <div className="flex-shrink-0 pr-4">
        <Image src={image?.original} width={350} height={550} alt={name} />
      </div>

      {/* Parte derecha (Texto) */}
      <div className="flex-grow max-w-3/4 mx-4">
        {/* Botón para volver atrás */}
        <button
          onClick={handleGoBack}
          className="absolute top-2 right-2 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex items-center">
          <h1 className="text-left mr-2">{name}</h1>
          <div className="flex items-center ml-3">
            <StarIcon className="w-4 h-4 text-yellow-500 mr-1" />
            <span>{show.rating?.average}</span>
            <span className="text-gray-400">/10</span>
          </div>
        </div>

        <div className="text-l text-gray-400 mb-4">
          <span className="mr-2">
            {show.premiered?.substring(0, 4) || "-"} −{" "}
            {show.status === "Ended"
              ? show.ended?.substring(0, 4) || "-"
              : "Still on"}
          </span>
          <span className="font-black">{" · "}</span>
          <span className="ml-2">{genres.slice(0, 3).join(" | ")}</span>
        </div>

        <p className="leading-relaxed text-justify">{summaryBien}</p>
        <br />

        {/* Mostrar información del elenco */}
        <p className="text-gray-400 leading-relaxed">
          <span className="font-bold italic">Starring:</span>
          {cast.slice(0, 2).map((actor, index) => (
            <span key={actor.person.id}>
              {index > 0 && ", "} {actor.person.name}
            </span>
          ))}
        </p>

        <p className="text-gray-400 leading-relaxed">
          <span className="font-bold italic">Creators:</span>
          {crew.length > 0 && (
            <span>
              {" "}
              {crew
                .slice(0, 2)
                .map((creator) => creator.person.name)
                .join(", ")}
            </span>
          )}
        </p>

        {/* Otra sección: Red */}
        <p className="text-gray-400 leading-relaxed">
          <span className="font-bold italic">Network:</span>
          <span> {show.network?.name}</span>
        </p>

        {/* Otra sección: País */}
        <p className="text-gray-400 leading-relaxed">
          <span className="font-bold italic">Country:</span>
          <span> {show.network?.country.name}</span>
        </p>

        {/* Otra sección: Idioma */}
        <p className="text-gray-400 leading-relaxed">
          <span className="font-bold italic">Language:</span>
          <span> {show.language}</span>
        </p>
      </div>
    </div>
  );
};

export default ShowSingleCard;
