import Image from "next/image";

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
      <div className="flex flex-wrap gap-4 justify-center items-center pb-5 ">
        {agents.data
          .filter((playable: Agent) => playable.isPlayableCharacter)
          .sort((a: Agent, b: Agent) =>
            a.displayName.localeCompare(b.displayName)
          )
          .map((agent: Agent) => (
            <>
              <a
                href={`/agent/${agent.displayName
                  .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
                  .toLowerCase()}`}
                className="flex flex-col max-w-[400px] items-center border-4 hover:border-indigo-500 transition hover:duration-300"
              >
                <Image
                  src={agent.fullPortrait}
                  width={400}
                  height={400}
                  alt="Agent full portrait"
                  style={{}}
                />
                <div className="flex gap-5">
                  <p>{agent.displayName}</p>
                  <div className="flex gap-1 items-center">
                    <Image
                      src={agent.role.displayIcon}
                      width={20}
                      height={20}
                      alt={`${agent.role.displayName} icon`}
                    />
                    <p>{agent.role.displayName}</p>
                  </div>
                </div>
              </a>
            </>
          ))}
      </div>
    </div>
  );
}
