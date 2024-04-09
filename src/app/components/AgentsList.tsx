"use client";
import AgentBox from "./AgentBox";
import { Agent } from "../../types/Agents.type";
import { motion } from "framer-motion";

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
  if (loading)
    return (
      <div className="text-center min-h-screen text-2xl font-bold">
        Loading...
      </div>
    );

  return (
    <div>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-4 justify-center items-center pb-5 min-h-screen">
          {data
            .filter((playable: Agent) => {
              return playable.isPlayableCharacter;
            })
            .filter((agent: Agent) => {
              if (filteredAgents === "All") return agent;
              return agent.role.displayName === filteredAgents;
            })
            .sort((a: Agent, b: Agent) =>
              a.displayName.localeCompare(b.displayName)
            )
            .map((agent: Agent) => (
              <AgentBox agent={agent} key={agent.uuid} />
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AgentsList;
