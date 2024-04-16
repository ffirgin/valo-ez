"use client";
import Image from "next/image";
import { Maps } from "@/types/Maps.type";
import { useState } from "react";
import Link from "next/link";

type Props = {
  loading?: boolean;
  data: {
    data: Maps;
  };
};

function getSitesCount(data: Maps) {
  try {
    const tacticalDescription = data.tacticalDescription;

    const sitesArray = tacticalDescription.split("/");
    const numberOfSites = sitesArray.length;

    return numberOfSites;
  } catch (error) {
    console.error("Error processing API response", error);
    return null;
  }
}

const MapPage: React.FC<Props> = ({ data, loading = false }) => {
  const [isMapVisible, setMapVisible] = useState(false);

  if (loading)
    return <div className="text-center text-2xl font-bold">Loading...</div>;

  const map = data.data;
  const numberOfSites = getSitesCount(map);

  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-center uppercase text-2xl font-bold mb-5">
            {map.displayName}
          </h1>
          <Link
            href="#guides"
            className="py-1 px-1 mb-2 font-bold border border-black rounded hover:bg-black hover:text-white"
          >
            {" "}
            Guides
          </Link>
          <Image
            src={map.splash}
            width={900}
            height={100}
            alt={`${map.displayName}'s map layout`}
            className="border rounded-2xl mb-5"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[800px]">
            <p className="text-center font-bold">
              {numberOfSites !== null && `Number of sites: ${numberOfSites}`}
            </p>
            <p className="text-center italic">
              &quot;{map.narrativeDescription}&quot;
            </p>
          </div>
          <div className="flex flex-col items-center py-3">
            <button
              className="bg-slate-500 hover:bg-black text-white font-bold py-1 px-3 rounded mx-4"
              onClick={() => setMapVisible(!isMapVisible)}
            >
              {isMapVisible ? "Hide Map" : "Show Map"}
            </button>
            {isMapVisible && (
              <Image
                src={map.displayIcon}
                width={500}
                height={200}
                alt={`${map.displayIcon}'s ingame map`}
                className=""
              />
            )}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="py-5" id="guides">
            Map specific guides coming soon...
          </p>
        </div>
      </div>
    </>
  );
};
export default MapPage;
