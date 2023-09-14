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
      <div className="min-h-screen">
        <div>
          {agentData.map((agent: Agent) => (
            <div key={agent.uuid} className="flex flex-col items-center">
              <h1 className="font-bold text-2xl pb-5">{agent.displayName}</h1>
              <Image
                src={agent.displayIcon}
                width={100}
                height={100}
                alt={`${agent.displayName}'s Icon`}
                className="mb-5"
              />
              <div>
                <h2 className="text-center text-xl">Abilities</h2>
                <div className="max-w-2xl md:flex-row  ">
                  {agent.abilities.map((abilities: Agent) => (
                    <div
                      className="flex flex-col items-center mb-4 text-center md:flex-row bg-indigo-200 rounded"
                      key={agent.uuid}
                    >
                      <h3 className="underline mt-3">
                        {abilities.displayName}
                      </h3>{" "}
                      {abilities.displayIcon !== null && (
                        <Image
                          alt={`${agent.displayName}'s Ability Icon`}
                          src={abilities.displayIcon}
                          width={50}
                          height={50}
                          className="bg-gray-400 w-[75px] object-scale-down mt-1"
                        />
                      )}
                      <p className="mt-1">{abilities.description}</p>
                    </div>
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
