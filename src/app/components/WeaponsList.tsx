import WeaponBox from "./WeaponBox";
import { Weapon } from "@/types/Weapons.type";

type Props = {
  loading?: boolean;
  data: Weapon[];
};

const WeaponsList: React.FC<Props> = ({ data, loading = false }) => {
  if (loading)
    return (
      <div className="text-center min-h-screen text-2xl font-bold">
        Loading...
      </div>
    );

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center pb-5 min-h-screen">
      {data.map((data) => (
        <WeaponBox data={data} key={data.uuid} />
      ))}
    </div>
  );
};

export default WeaponsList;
