import MapBox from "./MapBox";
import { Maps } from "@/types/Maps.type";

type Props = {
  data: Maps[];
  loading?: boolean;
};

const MapsList: React.FC<Props> = ({ data, loading = false }) => {
  if (loading)
    return (
      <div className="text-center min-h-screen text-2xl font-bold">
        Loading...
      </div>
    );

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center pb-5 min-h-screen">
      {data
        .filter((data) => data.xMultiplier !== 0)
        .map((data) => (
          <MapBox data={data} key={data.uuid} />
        ))}
    </div>
  );
};

export default MapsList;
