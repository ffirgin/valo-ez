import Image from "next/image";
import Link from "next/link";
// Type Import
import React from "react";

// types

const MapBox = ({ data }:any) => {
  return (
    <Link
      href={{
        pathname: `/maps/${data.uuid}`,
      }}
      className="flex flex-col max-w-[400px] items-center border-2 border-black hover:border-black rounded-xl hover:bg-black hover:text-white transition hover:ease-in-out hover:duration-200 z-20 overflow-hidden"
    >
      <Image
        src={data.splash}
        width={500}
        height={300}
        alt={`${data.displayName}'s smaller icon`}
        className="border-b-2 border-black hover:transition hover:duration-300 hover:scale-105 hover:ease-in-out hover:translate-y-0.5 z-0"
      />
      <div className="flex gap-5 py-2 font-extrabold text-xl text-slate rounded-b px-3 h-10 items-center z-10 ">
        <p>{data.displayName}</p>
      </div>
    </Link>
  );
};

export default MapBox;
