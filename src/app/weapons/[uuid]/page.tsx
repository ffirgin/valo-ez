import { notFound } from "next/navigation";
import WeaponPage from "@/app/components/WeaponPage";
import { getWeapon } from "@/lib/valorant-api";

export default async function Weapon({ params }: { params: { uuid: string } }) {
  const weapon = await getWeapon(params.uuid).catch(() => null);
  if (!weapon) notFound();

  return (
    <div>
      <WeaponPage weapon={weapon} />
    </div>
  );
}
