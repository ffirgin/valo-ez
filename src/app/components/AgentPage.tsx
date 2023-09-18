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
            <div key={agent.uuid} className="flex flex-col items-center ">
              <h1 className="text-center uppercase text-3xl font-bold my-5">
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
                {/* <h2 className="text-center mb-5">Abilities</h2> */}
                <div className="flex flex-wrap justify-center gap-5 cursor-default">
                  {agent.abilities.map((abilities: Agent) => (
                    <div
                      className="flex flex-col items-center text-center w-[550px] bg-slate-300 border-4 rounded-xl border-indigo-200
                      hover:border-indigo-500 hover:ease-in-out hover:duration-200"
                      key={agent.uuid}
                    >
                      <h3 className="text-xl font-bold uppercase underline my-2">
                        {abilities.displayName}
                      </h3>{" "}
                      {abilities.displayIcon !== null && (
                        <Image
                          alt={`${agent.displayName}'s Ability Icon`}
                          src={abilities.displayIcon}
                          width={50}
                          height={50}
                          className="bg-indigo-400 w-[75px] object-scale-down my-2"
                        />
                      )}
                      <p className="mx-3 my-2">{abilities.description}</p>
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
