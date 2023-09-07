export const AgentsFilter = ({ setFilteredAgents }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <button onClick={setFilteredAgents} value="All">
        All
      </button>
      <button onClick={setFilteredAgents} value="Controller">
        Controller
      </button>
      <button onClick={setFilteredAgents} value="Duelist">
        Duelist
      </button>
      <button onClick={setFilteredAgents} value="Initiator">
        Initiator
      </button>
      <button onClick={setFilteredAgents} value="Sentinel">
        Sentinel
      </button>
    </div>
  );
};
