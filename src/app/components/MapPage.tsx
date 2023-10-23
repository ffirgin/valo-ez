import Image from "next/image";

const MapPage = ({ data, loading = false }) => {
  if (loading)
    return <div className="text-center text-2xl font-bold">Loading...</div>;
  const map = data.data;

  return(
    <>
    <div className="min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-center uppercase text-2xl font-bold mb-3">
          {map.displayName}
        </h1>
        <Image
          src={map.splash}
          width={900}
          height={100}
          alt={`${map.displayName}'s map layout`}
        />
      </div>
    </div>
    </>
  )
}
export default MapPage;