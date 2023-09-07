import Image from "next/image";
import Link from "next/link";
import { Agent } from "../../types/Agents.type";
import React from "react";

type Props = {
  agent: Agent;
}

const AgentBox: React.FC<Props> = ({ agent }) => {
  return (
    <Link
      href={`/agentData/agents/${agent.uuid}`}
      className="flex flex-col max-w-[400px] items-center border-2 hover:border-indigo-500 rounded-3xl bg-indigo-100 hover:bg-indigo-400 transition hover:ease-in-out hover:duration-200 z-20 overflow-hidden"
    >
      <Image
        src={agent.fullPortrait}
        width={400}
        height={400}
        alt="Agent full portrait"
        className="hover:transition hover:duration-300 hover:scale-105 hover:ease-in-out hover:translate-y-1 z-0"
      />
      <div className="flex gap-5 py-2 font-extrabold text-xl text-white bg-indigo-500 rounded-t px-3 h-10 items-center z-10">
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
    </Link>
  );
};

export default AgentBox;