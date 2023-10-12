import AgentPage from "../../components/AgentPage";

type Props = {
  params: {
    uuid: string;
  };
};

const getAgentData = async ({ uuid }: any) => {
  const res = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
  const data = await res.json();
  return data;
};

export default async function Agent({ params }: { params: { slug: string } }) {
  const { uuid }: any = params;
  const data = await getAgentData({ uuid });

  return (
    <div>
      <AgentPage data={data} />
    </div>
  );
}
