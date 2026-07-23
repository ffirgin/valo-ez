import MapBox from "./MapBox";
import EntityGrid from "./EntityGrid";
import { Maps } from "@/types/Maps.type";

type Props = {
  data: Maps[];
  loading?: boolean;
};

const MapsList: React.FC<Props> = ({ data, loading = false }) => {
  const maps = data.filter((map) => map.xMultiplier !== 0);

  return (
    <EntityGrid
      items={maps}
      getKey={(map) => map.uuid}
      renderItem={(map) => <MapBox data={map} />}
      loading={loading}
    />
  );
};

export default MapsList;
