"use client";

import React, { useState } from "react";
import MapsList from "./MapsList";
// import MapsFilter from "./MapsFilter";

// Types import if needed

// type Props = {
//   data: Map[];
// };

const MapsView = ({ data }) => {
  // const [filteredMaps, setFilteredMaps] = useState("All");

  // const handleFilteredClick = (e: any) => {
  //   setFilteredMaps(e.target.value);
  // };

  return (
    <>
      {/* <MapsFilter setFilteredMaps={handleFilteredClick} /> */}
      <MapsList data={data} />
    </>
  );
};

export default MapsView;