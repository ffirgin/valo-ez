import Image from "next/image"

type Maps = {
  uuid: string;
  displayName: string;
  listViewIcon: string;
};

const getMapData = async () => {
  const res = await fetch("https://valorant-api.com/v1/maps")
  return res.json();
}

export default async function Maps() {
  const maps = await getMapData();

  return(
    <div>
      <h1>Maps</h1>
      <ul>
        {maps.data.map((map: Maps) => (
          <>
            <li>{map.displayName}</li>
            <Image 
              src={map.listViewIcon}
              width={400}
              height={400}
              alt="Map"
            />
          </>
        ))}
      </ul>
    </div>
  )
}