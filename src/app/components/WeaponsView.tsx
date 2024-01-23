"use client";

import React, { useState } from "react";
import WeaponsList from "./WeaponsList";
// Type import

type Props = {
  data: string;
  // REPLACE THE STRING WITH Weapons[];
};

const WeaponsView: React.FC<Props> = ({ data }) => {
  return (
    <>
      <WeaponsList data={data} />
    </>
  );
};

export default WeaponsView;
