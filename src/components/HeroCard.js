import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const HeroCard = ({ heroShow }) => {
  const { name, id, genres, summary, premiered, ended } = heroShow;
  const summaryBien = summary?.replace(/<\/?(p|b|i)>/g, "");

  // Estado para controlar si el mouse está sobre la imagen
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hero-container relative">
      <Link href={`/show/${id}`}>
        <div
          className="hero-image-container relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={heroShow.image?.original}
            width={2000}
            height={600}
            alt={heroShow.name}
            className="hero-image"
          />
          <div className="hero-overlay"></div>
          <div
            className={`absolute w-full flex flex-col justify-center h-[30%] p-6 top-0 text-white ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            <h2 className="text-xl mt-4 ml-2 tracking-widest title-font font-medium text-gray-400 mb-1">
              {heroShow.genres.slice(0, 3).join(" | ")}
            </h2>
            <h1 className="capitalize  text-left mt-4">
              <span className="text-6xl font-black ">{name}</span>
              <span className="font-bold text-l text-gray-400">
                {" ("}
                {heroShow.premiered?.substring(0, 4) || "-"} −{" "}
                {heroShow.status === "Ended"
                  ? heroShow.ended?.substring(0, 4) || "-"
                  : "Still on"}
                {")"}
              </span>
            </h1>
          </div>
          <div
            className={`absolute w-full flex flex-col justify-center h-[30%] p-6 top-0 text-white transition-opacity ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              <span className="ml-2">
                {heroShow.premiered?.substring(0, 4) || "-"} −{" "}
                {heroShow.status === "Ended"
                  ? heroShow.ended?.substring(0, 4) || "-"
                  : "Still on"}
              </span>
              <span className="font-black">{" · "}</span>
              <span className="font-bold mr-2">{heroShow.genres.slice(0, 3).join(" | ")}</span>
            </h2>
            <h1 className="text-l capitalize font-black">{name}</h1>

            <p className="leading-relaxed mb-3 w-2/4">
              {summaryBien?.substring(0, 250) + "..." || "-"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
