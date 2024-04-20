"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-white flex  justify-center">
      <section className="flex w-full flex-col max-w-[1000px]" id="wrapper">
        <section className="p-5 px-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold cursor-pointer">Legado</h1>
          {/* <FiMenu className="text-2xl" /> */}
          <div className="  max-lg:hidden  flex  gap-x-8 items-center">
            <Link
              href="/facil"
              className={`text-sm  cursor-pointer transition-colors ${
                pathname == "/facil"
                  ? "text-[#48A152] font-medium"
                  : "text-gray-500"
              }`}
            >
              Fácil
            </Link>
            <Link
              href="/medio"
              className={`text-sm cursor-pointer transition-colors ${
                pathname == "/medio"
                  ? "text-[#E4B200] font-medium"
                  : "text-gray-500"
              }`}
            >
              Médio
            </Link>
            <Link
              href="/dificil"
              className={`text-sm  cursor-pointer transition-colors ${
                pathname == "/dificil"
                  ? "text-[#D62424] font-medium"
                  : "text-gray-500"
              }`}
            >
              Difícil
            </Link>
          </div>
        </section>
        <section className="pb-5 lg:hidden max-lg:pt-2 px-8 flex max-lg:justify-between gap-x-16 items-center">
          <Link
            href="/facil"
            className={`text-sm  cursor-pointer transition-colors ${
              pathname == "/facil"
                ? "text-[#48A152] font-medium"
                : "text-gray-500"
            }`}
          >
            Fácil
          </Link>
          <Link
            href="/medio"
            className={`text-sm cursor-pointer transition-colors ${
              pathname == "/medio"
                ? "text-[#E4B200] font-medium"
                : "text-gray-500"
            }`}
          >
            Médio
          </Link>
          <Link
            href="/dificil"
            className={`text-sm  cursor-pointer transition-colors ${
              pathname == "/dificil"
                ? "text-[#D62424] font-medium"
                : "text-gray-500"
            }`}
          >
            Difícil
          </Link>
        </section>
      </section>
    </nav>
  );
}
