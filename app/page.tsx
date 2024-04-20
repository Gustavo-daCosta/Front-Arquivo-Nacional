"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/facil");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />
      <div
        id="wrapper"
        className="w-full flex py-5 px-4 justify-center max-w-[1000px]"
      >
        <section className=" w-full flex flex-col"></section>
      </div>
    </main>
  );
}
