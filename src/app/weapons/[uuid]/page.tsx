import WeaponPage from "@/app/components/WeaponPage";

// Types

const getWeaponData = async ({ uuid }: any) => {
  const res = await fetch(`https://valorant-api.com/v1/weapons/${uuid}`);
  const data = await res.json();
  return data;
};

export default async function Weapon({ params }: { params: { slug: string} }) {
  const { uuid }: any = params;
  const data = await getWeaponData({ uuid });

  return(
    <div>
      <WeaponPage data={data}/>
    </div>
  )
}