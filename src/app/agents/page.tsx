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
                className="flex flex-col max-w-[400px] items-center border-2 hover:border-indigo-500 rounded-3xl bg-indigo-100 hover:bg-indigo-400 transition hover:ease-in-out hover:duration-200 z-20 overflow-hidden"
              >
                <Image
                  src={agent.fullPortrait}
                  width={400}
                  height={400}
                  alt="Agent full portrait"
                  className="hover:transition hover:duration-300 hover:scale-105 hover:ease-in-out hover:translate-y-1 z-0"
                />
                <div className="flex gap-5 py-2 font-extrabold text-xl text-white bg-indigo-500 rounded-t px-3 h-10 items-center z-10">
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
