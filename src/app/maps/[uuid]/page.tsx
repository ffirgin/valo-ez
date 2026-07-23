import { notFound } from "next/navigation";
import MapPage from "@/app/components/MapPage";
import { getMap } from "@/lib/valorant-api";

export default async function Map({ params }: { params: { uuid: string } }) {
  const map = await getMap(params.uuid).catch(() => null);
  if (!map) notFound();

  return (
    <div>
      <MapPage map={map} />
    </div>
  );
}
