"use client";

import { FormEvent } from "react";
import { usePathname } from "next/navigation";

export default function LoginPage() {
  const router = usePathname();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/profile");
    } else {
      //error handling
    }
  }

  return (
    <main className="bg-white text-black h-screen justify-center items-center">
      <div className="text-center">Login to your Account</div>
      <div className="flex justify-center items-center">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            className="border border-black rounded-sm my-4"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="border border-black rounded-sm my-4"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className="border border-black rounded-sm my-4" type="submit">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
