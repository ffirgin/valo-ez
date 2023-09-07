"use client"

import React, { createContext, useCallback, useState } from "react";

const getAgentsData = async () => {
  const res = await fetch("https://valorant-api.com/v1/agents");
  const data = await res.json();
  return data;
};

export const AgentsContext = createContext({
  value: {
    data: []
  },
  loading: false,
  updateContext: () => {},
})

type Props = {
  children?: React.ReactNode
}

const AgentsProvider: React.FC<Props> = ({ children }) => {
  const [ value, setValue] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  const handleUpdateContext = useCallback(async () => {
    setLoading(true);
    let newValue;
    try {
      newValue = await getAgentsData();
    } catch (err) {
      // handle error
    } finally {
      setLoading(false);
    }
    setValue({ ...value, ...newValue});
  }, [])

  const context = {
    value,
    loading,
    updateContext: handleUpdateContext
  }

  const agentsData = getAgentsData().then(data => data);

  return <AgentsContext.Provider value={context}>{children}</AgentsContext.Provider>
}

export default AgentsProvider;