import AgentsView from "../components/AgentsView";
import { getAgents } from "@/lib/valorant-api";

export default async function Agents() {
  const agents = await getAgents();

  return (
    <div>
      <h1 className="text-center uppercase text-2xl font-bold py-5">Agents</h1>
      <AgentsView data={agents} />
    </div>
  );
}
