import Image from "next/image";

const getAgentData = async () => {
  const res = await fetch("https://valorant-api.com/v1/agents");
  return res.json();
};

export default async function Agents() {
  const agents = await getAgentData();
  return (
    <div>
      <h1>Agents</h1>
      <ul>
        {agents.data.map((agent) => (
          <>
            <li>{agent.displayName}</li>
            <li>{agent.description}</li>
            <Image
              src={agent.displayIconSmall}
              width={50}
              height={50}
              alt="Agent icon"
            />
          </>
        ))}
      </ul>
    </div>
  );
}
