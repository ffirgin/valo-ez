import Image from "next/image";
import WeaponsView from "../components/WeaponsView";

type Weapons = {
  uuid: string;
  displayName: string;
  displayIcon: string;
};

const getWeaponData = async () => {
  const res = await fetch("https://valorant-api.com/v1/weapons");
  return res.json();
};

export default async function Weapons() {
  const data = await getWeaponData();
  return (
    <div className="min-h-screen">
      <h1 className="text-center uppercase text-2xl font-bold pb-5">Weapons</h1>
      <WeaponsView data={data.data} />
    </div>
  );
}
