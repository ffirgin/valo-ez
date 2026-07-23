"use client";
import AgentBox from "./AgentBox";
import EntityGrid from "./EntityGrid";
import { Agent } from "../../types/Agents.type";

type Props = {
  filteredAgents: string;
  data: Agent[];
  loading?: boolean;
};

const AgentsList: React.FC<Props> = ({
  filteredAgents,
  data,
  loading = false,
}) => {
  const agents = data
    .filter((agent) => agent.isPlayableCharacter)
    .filter(
      (agent) => filteredAgents === "All" || agent.role.displayName === filteredAgents
    )
    .sort((a, b) => a.displayName.localeCompare(b.displayName));

  return (
    <EntityGrid
      items={agents}
      getKey={(agent) => agent.uuid}
      renderItem={(agent) => <AgentBox agent={agent} />}
      loading={loading}
      gap={false}
    />
  );
};

export default AgentsList;
