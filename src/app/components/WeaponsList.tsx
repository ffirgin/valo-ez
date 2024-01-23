import WeaponBox from "./WeaponBox";
// Type import

type Props = {
  filteredWeapons: string;
  loading?: boolean;
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
