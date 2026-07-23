import { Agent } from "../../types/Agents.type";
import Image from "next/image";
import Link from "next/link";

type Props = {
  loading?: boolean;
  agent: Agent;
};

const AgentPage: React.FC<Props> = ({ agent, loading = false }) => {
  if (loading)
    return <div className="text-center text-2xl font-bold">Loading...</div>;

  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-center uppercase text-2xl font-bold mb-3">
            {agent.displayName}
          </h1>
          <Image
            src={agent.displayIcon}
            width={100}
            height={100}
            alt={`${agent.displayName}'s Icon`}
            className="mb-3"
          />
          <Link
            className="group py-1 px-1 font-bold border border-valorant-line rounded hover:border-valorant-red hover:text-valorant-red transition"
            href="#guides"
          >
            Guides
          </Link>
          <p className="text-center mb-5 w-[700px] text-valorant-grey">{agent.description}</p>
          <div>
            <div className="flex flex-col flex-wrap gap-3 justify-center cursor-default md:flex-row mb-5">
              {agent.abilities.map((abilities: any) => (
                <div
                  className="group flex flex-col basis-1/3 gap-4 border border-valorant-line bg-valorant-panel rounded-2xl items-center text-center
                hover:border-valorant-red hover:shadow-[0_0_20px_rgba(255,70,85,0.35)] transition hover:ease-in-out hover:duration-100"
                  key={abilities.slot}
                >
                  <h3 className="underline decoration-valorant-red mt-5 uppercase font-bold">
                    {abilities.displayName}
                  </h3>
                  {abilities.displayIcon !== null && (
                    <Image
                      alt={`${agent.displayName}'s Ability Icon`}
                      src={abilities.displayIcon}
                      width={50}
                      height={50}
                      className="bg-valorant-ink group-hover:bg-valorant-red/20 transition hover:ease-in-out hover:duration-100 rounded-xl w-[75px] object-scale-down mt-1"
                    />
                  )}
                  <p className="mb-5 mx-4 text-valorant-grey">{abilities.description}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-2xl pb-4" id="guides">
              Agent specific guides coming soon...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentPage;
