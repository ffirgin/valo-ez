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
      className="group relative flex flex-col w-64 aspect-[3/4] overflow-hidden border border-valorant-line bg-valorant-ink transition hover:border-valorant-red hover:duration-200"
    >
      <div className="pointer-events-none absolute inset-0 flex select-none flex-col items-center justify-center overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <p
            key={i}
            className="whitespace-nowrap text-4xl font-black uppercase leading-[0.85] tracking-tight text-valorant-grey/20"
          >
            {agent.displayName}
          </p>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 top-4">
        <motion.div className="relative h-full w-full" whileHover={{ scale: 1.05 }}>
          <Image
            src={agent.fullPortrait}
            alt={`${agent.displayName} full portrait`}
            fill
            sizes="256px"
            className="object-contain object-bottom drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>

      <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full border border-valorant-line bg-valorant-ink/70 p-1.5 backdrop-blur">
        <Image
          src={agent.role.displayIcon}
          width={16}
          height={16}
          alt={`${agent.role.displayName} icon`}
        />
      </div>

      <div className="relative z-10 mt-auto px-4 pb-3">
        <p className="text-lg font-extrabold uppercase tracking-wide text-valorant-white">
          {agent.displayName}
        </p>
        <p className="text-xs uppercase tracking-wider text-valorant-grey">
          {agent.role.displayName}
        </p>
      </div>
    </Link>
  );
};

export default AgentBox;
