import React from "react";
import Link from "next/link";
import Image from "next/image";
export const HeroCard = ({ heroShow }) => {
  const { name, id, genres, summary, premiered, ended } = heroShow;
  const summaryListo = summary?.replace(/<\/?p>|<\/?b>/g, '');
  return (
    <div className="hero-container relative">
      <div className="  text-white flex flex-col justify-between relative border-solid">
        <div>
          <Link href={`/show/${id}`}>
            <Image
              src={heroShow.image?.original}
              width={2000}
              height={600}
              alt={heroShow.name}
              className="hero-image "
            />
          </Link>
          <div className="hero-overlay"></div>
          <div className="absolute flex flex-col items-center justify-center h-[15%] p-6 w-full">
            <Link href={`/show/${id}`}>
              <h2 className="text-l capitalize text-white font-black">
                {name}
              </h2>

              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                <span className="italic">
                  {heroShow.premiered?.substring(0, 4) || "-"} −{" "}
                  {heroShow.status === "Ended"
                    ? heroShow.ended?.substring(0, 4) || "-"
                    : "Still on"}
                </span>{" "}
                <span className="font-black"> | {heroShow.genres[0]}</span>
              </h2>
              <p class="leading-relaxed mb-3">{summaryListo?.substring(0, 130) + '...'|| "-"}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
