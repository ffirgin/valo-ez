"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center p-24 pt-1">
      <div className="flex flex-col items-center cursor-default">
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
            className="text-5xl font-extrabold uppercase text-center"
          >
            {" "}
            Valorant, made EZ! 🤓{" "}
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
          <p className="pt-5 text-center">
            Use information straight from the Valorant game files to learn more
            about the agents, maps and weapons! Guides coming
            soon...
          </p>
          <div className="flex pt-3 items-center justify-center">
            <button className="bg-slate-500 hover:bg-black text-white font-bold py-2 px-3 rounded mx-4">
              Get Learning
            </button>
            <a href="/about">
              Learn more{" "}
              <span className="hover:translate-x-1 ease-in-out duration-200">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
