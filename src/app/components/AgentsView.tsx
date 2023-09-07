"use client";

import React, {  useState } from "react";
import AgentsList  from "./AgentsList";
import AgentsFilter  from "./AgentsFilter";

import { Agent } from "../../types/Agents.type";


const AgentsView: React.FC = () => {
  const [filteredAgents, setFilteredAgents] = useState("All");

  const handleFilteredClick = (e: any) => {
    setFilteredAgents(e.target.value);
  };

  return (
    <>
      <AgentsFilter setFilteredAgents={handleFilteredClick} />
      <AgentsList filteredAgents={filteredAgents} />
    </>
  );
};

export default AgentsView;