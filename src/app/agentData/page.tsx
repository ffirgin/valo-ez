const getAgentData = async () => {
  const res = await fetch("https://valorant-api.com/v1/agents");
  return res.json();
};

const AgentData = () => {
  const agents = getAgentData()
  return (
    <div>
      Hello world
    </div>
  )
}

export default AgentData;