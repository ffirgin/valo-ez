import AgentsView from "../components/AgentsView";

const getAgentsData = async () => {
  const res = await fetch("https://valorant-api.com/v1/agents", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default async function Agents() {
  const data = await getAgentsData();

  return (
    <div className="">
      <h1 className="text-center uppercase text-2xl font-bold pb-5">Agents</h1>
      <AgentsView data={data.data} />
    </div>
  );
}
