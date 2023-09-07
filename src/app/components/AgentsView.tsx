"use client";
import { SetStateAction, useState } from "react";
import { AgentsList } from "./AgentsList";
import { AgentsFilter } from "./AgentsFilter";

export const AgentsView = ({ agents }) => {
  const [filteredAgents, setFilteredAgents] = useState("All");
  const handleFilteredClick = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilteredAgents(e.target.value);
  };
  return (
    <>
      <AgentsFilter setFilteredAgents={handleFilteredClick} />
      <AgentsList agents={agents} filteredAgents={filteredAgents} />
    </>
  );
};
