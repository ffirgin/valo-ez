import WeaponBox from "./WeaponBox";
import EntityGrid from "./EntityGrid";
import { Weapon } from "@/types/Weapons.type";

type Props = {
  loading?: boolean;
  data: Weapon[];
};

const WeaponsList: React.FC<Props> = ({ data, loading = false }) => {
  return (
    <EntityGrid
      items={data}
      getKey={(weapon) => weapon.uuid}
      renderItem={(weapon) => <WeaponBox data={weapon} />}
      loading={loading}
    />
  );
};

export default WeaponsList;
