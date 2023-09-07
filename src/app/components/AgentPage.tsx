'use client'

import React, { useContext, useEffect } from "react";
import { AgentsContext } from "../context/agents";
import { Agent } from "../../types/Agents.type";

type Props = {
  agentId: string;
}

const AgentPage: React.FC<Props> = ({ agentId }) => {
  const { value, loading, updateContext } = useContext(AgentsContext);
  useEffect(() => {
    updateContext();
  }, [])
  if (loading) return <div>Loading...</div>

  const agentData = value.data.filter((agent: Agent) => {
    if (agent.uuid === agentId){
      return agent;
    }
  })
  
  return <div>
    Hello World {JSON.stringify(agentData)}
  </div>;
};

export default AgentPage;
