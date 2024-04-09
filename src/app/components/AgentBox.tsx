import Image from "next/image";
import Link from "next/link";
import { Agent } from "../../types/Agents.type";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  agent: Agent;
};

const AgentBox: React.FC<Props> = ({ agent }) => {
  return (
    <Link
      href={{
        pathname: `/agents/${agent.uuid}`,
      }}
      className="flex flex-col max-w-[400px] items-center border-zinc-400  rounded-3xl hover:bg-black hover:border-none transition hover:ease-in-out hover:duration-200 z-20 overflow-hidden"
    >
      <div className="relative">
        <motion.div
          className="z-10 relative"
          whileHover={{
            scale: 1.2,
          }}
        >
          <Image
            src={agent.fullPortrait}
            width={400}
            height={400}
            alt={`${agent.displayName} full portrait`}
            className="hover:transition hover:duration-300 hover:ease-in-out"
          />
        </motion.div>
        <Image
          src={agent.background}
          width={400}
          height={400}
          alt={`${agent.displayName} background`}
          className="absolute bottom-0 translate-y-[140px] z-0"
        />
      </div>
      <motion.div
        className="z-20"
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
        <div className="flex gap-5 py-2 font-extrabold text-xl text-white bg-black rounded-t px-3 h-10 items-center z-20">
          <p>{agent.displayName}</p>
          <div className="flex gap-1 items-center">
            <Image
              src={agent.role.displayIcon}
              width={20}
              height={20}
              alt={`${agent.role.displayName} icon`}
            />
            <p>{agent.role.displayName}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default AgentBox;
