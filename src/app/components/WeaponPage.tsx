"use client";
import Image from "next/image";
import { Weapon } from "@/types/Weapons.type";
import { useState } from "react";
import Link from "next/link";
import credits from "../../../public/Credits_icon.webp";

type Props = {
  loading?: boolean;
  data:{
    data: Weapon;
  };
};

const WeaponPage: React.FC<Props> = ({ data, loading = false }) => {
  if (loading)
    return <div className="text-center text-2xl font-bold">Loading...</div>;

  const weapon = data.data;

  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-center uppercase text-2xl font-bold mb-5">
            {weapon.displayName}
          </h1>
          <Image
            src={weapon.displayIcon}
            width={300}
            height={200}
            alt={`${weapon.displayName} display icon`}
            className="mb-5"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-semibold uppercase underline">
            Weapon Information
          </div>
          <div className="flex flex-row text-lg">
            Cost:&nbsp;<Image src={credits} width={20} alt="Valorant Credits Icon" className="object-scale-down"/> &nbsp;{weapon.shopData.cost}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeaponPage;
