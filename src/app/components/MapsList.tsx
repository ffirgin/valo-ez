import MapBox from "./MapBox";
import { Maps } from "@/types/Maps.type";
import { motion } from "framer-motion";

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
    <div>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-4 justify-center items-center pb-5 min-h-screen">
          {data
            .filter((data) => data.xMultiplier !== 0)
            .map((data) => (
              <MapBox data={data} key={data.uuid} />
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MapsList;
