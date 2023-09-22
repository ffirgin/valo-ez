import Image from "next/image";
import Link from "next/link";

type Maps = {
  uuid: string;
  displayName: string;
  listViewIcon: string;
  splash: string;
  map: string;
  xMultiplier: number;
};

const getMapData = async () => {
  const res = await fetch("https://valorant-api.com/v1/maps");
  return res.json();
};

export default async function Maps() {
  const maps = await getMapData();

  return (
    <div className="min-h-screen">
      <h1 className="text-center uppercase text-2xl font-bold pb-5">Maps</h1>
      {/* MapsView */}
      <div className="flex flex-wrap justify-center gap-4 mb-5">
        {maps.data
          .filter((map: Maps) => map.xMultiplier !== 0)
          .map((map: Maps) => (
            <div key={map.uuid}>
              <h2 className="text-center">{map.displayName}</h2>
              <Image
                src={map.splash}
                width={500}
                height={300}
                alt={`${map.displayName}'s smaller icon`}
                className="hover:drop-shadow-md"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
