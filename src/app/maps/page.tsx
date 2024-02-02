import Image from "next/image";
import Link from "next/link";
import MapsView from "../components/MapsView";

const getMapData = async () => {
  const res = await fetch("https://valorant-api.com/v1/maps");
  return res.json();
};

export default async function Maps() {
  const data = await getMapData();

  return (
    <div className="bg-white text-black min-h-screen">
      <h1 className="text-center uppercase text-2xl font-bold pb-5">Maps</h1>
      <MapsView data={data.data} />
    </div>
  );
}
