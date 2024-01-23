import Image from "next/image";
import Link from "next/link";
// type import
import React from "react";

// type props

const WeaponBox = ({ data }: any) => {
  return (
    <Link
      href={{
        pathname: `/weapons/${data.uuid}`,
      }}
      className="flex flex-col max-w-400px border-2 border-zinc-400 hover:border-black rounded-xl hover:bg-black hover:text-white transition hover:ease-in-out hover:duration-200 z-20 overflow-hidden"
    >
      <Image
        src={data.displayIcon}
        width={200}
        height={100}
        alt={`${data.displayName}'s shown icon`}
        className=""
      />

    </Link>
  );
};

export default WeaponBox;
