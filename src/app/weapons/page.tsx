import WeaponsView from "../components/WeaponsView";
import { getWeapons } from "@/lib/valorant-api";

export default async function Weapons() {
  const weapons = await getWeapons();

  return (
    <div className="min-h-screen">
      <h1 className="text-center uppercase text-2xl font-bold pb-5">Weapons</h1>
      <WeaponsView data={weapons} />
    </div>
  );
}
