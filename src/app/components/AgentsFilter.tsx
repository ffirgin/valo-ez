import Image from "next/image";

type Props = {
  setFilteredAgents: (e: any) => void;
};

const AgentsFilter: React.FC<Props> = ({ setFilteredAgents }) => {
  return (
    <div className="flex justify-center items-center gap-4 mb-5">
      <button
        onClick={setFilteredAgents}
        value="All"
        className="hover:bg-indigo-300 rounded px-1"
      >
        All
      </button>
      <button
        onClick={setFilteredAgents}
        value="Controller"
        className="flex flex-row-reverse justify-center items-center gap-1 hover:bg-indigo-300 rounded px-1"
      >
        Controller
        <Image
          src="/controller-icon.png"
          alt="Controller Icon"
          width={20}
          height={20}
          onClick={(e) => e.stopPropagation()}
        />
      </button>
      <button
        onClick={setFilteredAgents}
        value="Duelist"
        className="flex flex-row-reverse justify-center items-center gap-1 hover:bg-indigo-300 rounded px-1"
      >
        Duelist
        <Image
          src="/duelist-icon.png"
          alt=""
          width={20}
          height={20}
          onClick={(e) => e.stopPropagation()}
        />
      </button>
      <button
        onClick={setFilteredAgents}
        value="Initiator"
        className="flex flex-row-reverse justify-center items-center gap-1 hover:bg-indigo-300 rounded px-1"
      >
        Initiator
        <Image
          src="/initiator-icon.png"
          alt=""
          width={20}
          height={20}
          onClick={(e) => e.stopPropagation()}
        />
      </button>
      <button
        onClick={setFilteredAgents}
        value="Sentinel"
        className="flex flex-row-reverse justify-center items-center gap-1 hover:bg-indigo-300 rounded px-1"
      >
        Sentinel
        <Image
          src="/sentinel-icon.png"
          alt=""
          width={20}
          height={20}
          onClick={(e) => e.stopPropagation()}
        />
      </button>
    </div>
  );
};

export default AgentsFilter;
