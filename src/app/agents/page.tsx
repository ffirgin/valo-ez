import Image from "next/image";

type Agent = {
  uuid: string;
  displayName: string;
  description: string;
  isPlayableCharacter: boolean;
  displayIconSmall: string;
  displayIcon: string;
  fullPortrait: string;
};

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
        {agents.data
          .filter((playable: Agent) => playable.isPlayableCharacter)
          .map((agent: Agent) => (
            <>
              <li>{agent.displayName}</li>
              <Image
                src={agent.displayIcon}
                width={50}
                height={50}
                alt="Agent icon"
              />
              <Image
                src={agent.fullPortrait}
                width={400}
                height={400}
                alt="Agent full portrait"
              />
              <p>{agent.description}</p>
            </>
          ))}
      </ul>
    </div>
  );
}
