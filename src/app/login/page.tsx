import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function LoginPage() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
}
