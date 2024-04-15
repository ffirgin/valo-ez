"use client";

import React, { useState } from "react";
import WeaponsList from "./WeaponsList";
import { Weapon } from "@/types/Weapons.type";

type Props = {
  data: Weapon[];
};

const WeaponsView: React.FC<Props> = ({ data }) => {
  return (
    <>
      <WeaponsList data={data} />
    </>
  );
};

export default WeaponsView;
