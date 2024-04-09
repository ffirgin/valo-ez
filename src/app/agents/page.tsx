"use client"
import AgentsView from "../components/AgentsView";
import { motion } from "framer-motion";

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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.01,
            },
          },
        }}
      >
        <h1 className="text-center uppercase text-2xl font-bold pb-5">
          Agents
        </h1>
      </motion.div>
      <AgentsView data={data.data} />
    </div>
  );
}
