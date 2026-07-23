import { notFound } from "next/navigation";
import AgentPage from "../../components/AgentPage";
import { getAgent } from "@/lib/valorant-api";

export default async function Agent({ params }: { params: { uuid: string } }) {
  const agent = await getAgent(params.uuid).catch(() => null);
  if (!agent) notFound();

  return (
    <div>
      <AgentPage agent={agent} />
    </div>
  );
}
