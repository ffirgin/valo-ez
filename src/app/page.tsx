"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex flex-col h-screen items-center justify-center p-24 pt-1 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-valorant-red/20 via-transparent to-transparent" />
      <div className="relative flex flex-col items-center cursor-default">
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
                delay: 0.4,
              },
            },
          }}
        >
          <h1
            id="title"
            className="text-5xl font-extrabold uppercase text-center tracking-wide"
          >
            {" "}
            Valorant, made <span className="text-valorant-red">EZ!</span> 🤓{" "}
          </h1>
        </motion.div>
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
                delay: 0.8,
              },
            },
          }}
        >
          <p className="pt-5 text-center text-valorant-grey">
            Use information straight from the Valorant game files to learn more
            about the agents, maps and weapons! Guides coming
            soon...
          </p>
          <div className="flex pt-3 items-center justify-center">
            <button className="bg-valorant-red hover:bg-valorant-red-dark text-white font-bold uppercase tracking-wide py-2 px-3 rounded mx-4 transition">
              <a href="/agents">Get Learning</a>
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
