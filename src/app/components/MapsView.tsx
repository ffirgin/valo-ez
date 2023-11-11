"use client";

import React, { useState } from "react";
import MapsList from "./MapsList";
import { Maps } from "@/types/Maps.type";

type Props = {
  data: Maps[];
};

const MapsView: React.FC<Props> = ({ data }) => {
  return (
    <>
      <MapsList data={data} />
    </>
  );
};

export default MapsView;