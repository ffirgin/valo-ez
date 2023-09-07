import Image from "next/image";
import { AgentsView } from "../../components/AgentsView";

type Agent = {
  uuid: string;
  displayName: string;
  description: string;
  isPlayableCharacter: boolean;
  displayIconSmall: string;
  displayIcon: string;
  fullPortrait: string;
  role: any;
};

const getAgentData = async () => {
  const res = await fetch("https://valorant-api.com/v1/agents");
  return res.json();
};

export default async function Agents() {
  const agents = await getAgentData();

  return (
    <div>
      <h1 className="text-center uppercase text-2xl font-bold pb-5">Agents</h1>
      <AgentsView agents={agents} />
    </div>
  );
}
