"use client";

import React, { useContext, useEffect } from "react";
import { AgentsContext } from "../context/agents";
import { Agent } from "../../types/Agents.type";
import Image from "next/image";

type Props = {
  agentId: string;
};

const AgentPage: React.FC<Props> = ({ agentId }) => {
  const { value, loading, updateContext } = useContext(AgentsContext);
  useEffect(() => {
    updateContext();
  }, []);
  if (loading) return <div>Loading...</div>;

  const agentData = value.data.filter((agent: Agent) => {
    if (agent.uuid === agentId) {
      return agent;
    }
  });

  return (
    <>
      {/* <div>Hello World {JSON.stringify(agentData)}</div> */}
      <div>
        <div>
          {agentData.map((agent: Agent) => (
            <div key={agent.uuid} className="">
              <div>{agent.displayName}</div>
              <div>
                Abilities
                <div>
                  {agent.abilities.map((abilities: Agent) => (
                    <>
                      <div>{abilities.displayName}</div>{" "}
                      {abilities.displayIcon !== null && (
                        <Image
                          alt={`${agent.displayName}'s Ability Icon`}
                          src={abilities.displayIcon}
                          width={50}
                          height={50}
                          className="bg-gray-400 w-[75px] object-scale-down"
                        />
                      )}
                      <div>{abilities.description}</div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AgentPage;
