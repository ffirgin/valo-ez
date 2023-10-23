import MapPage from "@/app/components/MapPage";

// Types

const getMapData = async ({ uuid }: any) => {
  const res = await fetch(`https://valorant-api.com/v1/maps/${uuid}`);
  const data = await res.json();
  return data;
};

export default async function Map({ params }: { params: { slug: string } }) {
  const { uuid }: any = params;
  const data = await getMapData({ uuid });

  return(
    <div>
      <MapPage data={data}/>
    </div>
  )
}