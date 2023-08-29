import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center p-24 pt-1">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-center">
          {" "}
          Valorant information, made EZ! 🤓{" "}
        </h1>
        <p className="pt-5 text-center">
          Use information straight from the Valorant game files to learn more
          about the agents, weapons and maps of the game! Guides coming soon...
        </p>
        <div className="flex pt-3 items-center">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded mx-4">
            Get Started
          </button>
          <a className="">
            Learn more <span>→</span>
          </a>
        </div>
      </div>
      <div className="pt-5">Placeholder area for 3D Model</div>
    </main>
  );
}
