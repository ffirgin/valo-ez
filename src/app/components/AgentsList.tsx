import Image from "next/image";
import { AgentBox } from "./AgentBox";

type Agent = {
  uuid: string;
  displayName: string;
  description: string;
  isPlayableCharacter: boolean;
  displayIconSmall: string;
  displayIcon: string;
  fullPortrait: string;
  role: any;
};

export const AgentsList = ({ agents, filteredAgents }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center pb-5 ">
      {agents.data
        .filter((playable: Agent) => playable.isPlayableCharacter)
        .filter((agent) => {
          if (filteredAgents === "All") return agent;
          return agent.role.displayName === filteredAgents;
        })
        .sort((a: Agent, b: Agent) =>
          a.displayName.localeCompare(b.displayName)
        )
        .map((agent: Agent) => (
          <>
            <AgentBox agent={agent} />
          </>
        ))}
    </div>
  );
};
