'use-client'
import { useContext, useEffect } from "react";

import AgentBox from "./AgentBox";

import { AgentsContext } from "../context/agents";

import { Agent } from "../../types/Agents.type";

type Props = {
  filteredAgents: string;
}

const AgentsList: React.FC<Props> = ({   filteredAgents }) => {
  const { value, loading, updateContext } = useContext(AgentsContext);

  useEffect(() => {
    updateContext();
  }, []);

  if (loading) return <div className="text-center min-h-screen text-2xl font-bold">Loading...</div>

  return ( 
    <div className="flex flex-wrap gap-4 justify-center items-center pb-5 min-h-screen ">
      {value.data
        .filter((playable: Agent) => playable.isPlayableCharacter)
        .filter((agent: Agent) => {
          if (filteredAgents === "All") return agent;
          return agent.role.displayName === filteredAgents;
        })
        .sort((a: Agent, b: Agent) =>
          a.displayName.localeCompare(b.displayName)
        )
        .map((agent: Agent) => (
          <AgentBox agent={agent} key={agent.uuid}/>
        ))}
    </div>
  );
};

export default AgentsList;