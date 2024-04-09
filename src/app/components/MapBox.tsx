import Image from "next/image";
import Link from "next/link";
import { Maps } from "@/types/Maps.type";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  data: Maps;
};

const MapBox = ({ data }: any) => {
  return (
    <Link
      href={{
        pathname: `/maps/${data.uuid}`,
      }}
      className="flex flex-col max-w-[400px] group items-center border-2 border-zinc-400 hover:border-black rounded-xl hover:bg-black hover:text-white transition hover:ease-in-out hover:duration-200 z-20 overflow-hidden"
    >
      <motion.div
        whileHover={{
          scale: 1.5,
        }}
      >
        <Image
          src={data.splash}
          width={500}
          height={300}
          alt={`${data.displayName}'s smaller icon`}
          className="hover:transition duration-300 z-0"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex gap-5 py-2 font-extrabold text-xl text-slate rounded-b px-3 h-10 items-center z-10 ">
          <p className="group-hover:translate-y-1 ease-in-out duration-300">
            {data.displayName}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default MapBox;
