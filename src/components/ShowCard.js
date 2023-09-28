import Link from "next/link";
import Image from "next/image";

const ShowCard = ({ actualShow }) => {
  const { name, id } = actualShow;
  return (
    <div className="mb-12 w-full h-[500px] text-white flex flex-col justify-between relative border-solid">
      <div className="h-[85%]">
      <Link href={`/show/${id}`}>
      <Image
        src={actualShow.image?.original}
        width={680}
        height={1000}
        alt={actualShow.name}
        className=" h-full object-cover w-full p-2"
      />
      </Link>
      </div>
      <div className="flex flex-col items-center justify-center h-[15%] p-6 w-full">
      <Link href={`/show/${id}`}>
        <h2 className="text-l capitalize text-white font-black">{name}</h2>
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          <span className="italic">{actualShow.premiered?.substring(0, 4)|| "-"} − {actualShow.status === "Ended" ? actualShow.ended?.substring(0, 4) || "-" : "Still on"}</span> <span className="font-black"> | {actualShow.genres[0]}</span>
        </h2>
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;