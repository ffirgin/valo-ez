import React from "react";
import AgentPage from "../../../components/AgentPage"

type Props = {
  params: {
    uuid: string;
  }
}

// Make individual Agent API call
// const getAgentsData = async () => {
//   const res = await fetch("https://valorant-api.com/v1/agents");
//   const data = await res.json();
//   return data;
// };

const Agent: React.FC<Props> = ({ params }) => {
  return (
    <AgentPage agentId={params.uuid}/>
  )
}

export default Agent;