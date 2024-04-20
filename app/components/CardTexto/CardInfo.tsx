"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface CardInfoProps {
  titulo: string;
  children: React.ReactNode;
}

export default function CardInfo({ titulo, children }: CardInfoProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-full rounded-xl bg-white p-5 flex flex-col">
      <header
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="w-full cursor-pointer flex justify-between items-center"
      >
        <h2 className="text-xl font-semibold text-slate-700">{titulo}</h2>
        <MdKeyboardArrowDown
          className={`text-3xl text-slate-700 transition-transform ${
            isOpen && "rotate-180"
          }`}
        />
      </header>
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
        }}
        animate={{
          opacity: 1,
          height: isOpen ? "auto" : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="overflow-hidden "
      >
        <p className="mt-5"> {children}</p>
      </motion.div>
    </div>
  );
}
