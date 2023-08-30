import Image from "next/image"

type Weapons = {
  uuid: string;
  displayName: string;
  displayIcon: string;
};

const getWeaponData = async () => {
  const res = await fetch("https://valorant-api.com/v1/weapons")
  return res.json();
}

export default async function Weapons() {
  const weapons = await getWeaponData();
  return (
    <div>
      <h1>Weapons</h1>
      <ul>
        {weapons.data.map((weapon: Weapons) => (
          <>
            <li>{weapon.displayName}</li>
            <Image 
              src={weapon.displayIcon}
              width={200}
              height={200}
              alt={weapon.displayName}
            />
          </>
        ))}
      </ul>
    </div>
  )
}