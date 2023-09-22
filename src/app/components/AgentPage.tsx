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
  if (loading)
    return <div className="text-center text-2xl font-bold">Loading...</div>;

  const agentData = value.data.filter((agent: Agent) => {
    if (agent.uuid === agentId) {
      return agent;
    }
  });

  return (
    <>
      <div className="min-h-screen">
        <div>
          {agentData.map((agent: Agent) => (
            <div key={agent.uuid} className="flex flex-col items-center">
              <h1 className="text-center uppercase text-2xl font-bold mb-3">
                {agent.displayName}
              </h1>
              <Image
                src={agent.displayIcon}
                width={100}
                height={100}
                alt={`${agent.displayName}'s Icon`}
                className="mb-5"
              />
              <div>
                <div className="flex flex-col flex-wrap gap-3 justify-center cursor-default md:flex-row mb-5">
                  {agent.abilities.map((abilities: Agent) => (
                    <div
                      className="flex flex-col basis-1/3 gap-4 border-2 bg-indigo-100 rounded-2xl items-center text-center
                      hover:border-indigo-500 hover:bg-indigo-200 transition hover:ease-in-out hover:duration-100"
                      key={agent.uuid}
                    >
                      <h3 className="underline mt-5 uppercase font-bold">
                        {abilities.displayName}
                      </h3>{" "}
                      {abilities.displayIcon !== null && (
                        <Image
                          alt={`${agent.displayName}'s Ability Icon`}
                          src={abilities.displayIcon}
                          width={50}
                          height={50}
                          className="bg-indigo-400 rounded-xl w-[75px] object-scale-down mt-1"
                        />
                      )}
                      <p className="mb-5 mx-4">{abilities.description}</p>
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
