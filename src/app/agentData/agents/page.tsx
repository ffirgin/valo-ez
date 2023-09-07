'use client'

import { useContext } from "react";

import AgentsView  from "../../components/AgentsView";

export default function Agents() {
  
  return (
    <div>
      <h1 className="text-center uppercase text-2xl font-bold pb-5">Agents</h1>
      <AgentsView />
    </div>
  );
}
