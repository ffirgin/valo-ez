import React from "react";
import AgentPage from "../../../components/AgentPage"

type Props = {
  params: {
    uuid: string;
  }
}

const Agent: React.FC<Props> = ({ params }) => {
  return (
    <AgentPage agentId={params.uuid}/>
  )
}

export default Agent;