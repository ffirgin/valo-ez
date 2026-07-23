import MapsView from "../components/MapsView";
import { getMaps } from "@/lib/valorant-api";

export default async function Maps() {
  const maps = await getMaps();

  return (
    <div className="min-h-screen">
      <h1 className="text-center uppercase text-2xl font-bold pb-5">Maps</h1>
      <MapsView data={maps} />
    </div>
  );
}
