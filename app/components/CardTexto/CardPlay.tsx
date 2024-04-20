/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { IoIosMenu } from "react-icons/io";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
interface CardTextoProps {
  images?: string[];
  pontos?: number;
  acerto?: number;
}

export default function CardTexto({
  images = [],
  pontos = 120,
  acerto = 0.84,
}: CardTextoProps) {
  const [selectedPage, setSelectedPage] = useState(1);
  const [textsAreasValues, setTextAreasValue] = useState<string[]>([""]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setTextAreasValue(images.map(() => ""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-y-[20px]">
      {finished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full bg-gray-50 p-5 py-7 rounded-lg border flex flex-col gap-2 justify-center items-center"
        >
          <Confetti />
          <h3 className="text-xl font-bold text-center">
            Você finalizou o desafio diário, continue assim!{" "}
          </h3>
          <p className="text-lg flex text-center flex-wrap justify-center">
            Você acertou{" "}
            <span className="mx-2 rounded-md border-[0.5px] border-[#bee0c3] flex  text-center font-medium justify-center items-center bg-[#CDECD1] px-2 text-sm py-1 text-[#48A152]">
              {acerto * 100}%
            </span>{" "}
            do texto e ganhou{" "}
            <span className="font-medium flex mx-1">
              {(acerto * pontos).toFixed(0)}
            </span>{" "}
            pontos !
          </p>
        </motion.div>
      )}
      <section className="w-full rounded-lg outline outline-1 outline-gray-200">
        <div
          style={{
            // backgroundImage: `url(${images[selectedPage - 1]})`,
            backgroundSize: "cover",

            backgroundPosition: "center",
          }}
          className="w-full bg-[#ececec] rounded-t-lg  relative py-16 flex justify-center"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={selectedPage}
            src={images[selectedPage - 1]}
            alt="Imagem"
            className="rounded-t-lg"
          />
          <div className="absolute bottom-3 right-4 rounded-md bg-black/60 px-3 py-0.5">
            <span className="text-white font-medium text-sm">
              {selectedPage.toString().padStart(2, "0")}/
              {images.length.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
        <div className="bg-white w-full px-5 py-3 flex justify-between items-center text-[#1D476F] border-y border-gray-200">
          <RiArrowLeftSLine
            className={`text-3xl cursor-pointer hover:text-blue-500 transition-colors ${
              selectedPage === 1 ? "text-gray-200" : ""
            }`}
            onClick={() => {
              if (selectedPage > 1) setSelectedPage(selectedPage - 1);
            }}
          />
          <IoIosMenu className="text-3xl" />
          <RiArrowRightSLine
            className={`text-3xl cursor-pointer hover:text-blue-500 transition-colors ${
              selectedPage === images.length ? "text-gray-200" : ""
            }`}
            onClick={() => {
              if (selectedPage < images.length)
                setSelectedPage(selectedPage + 1);
            }}
          />
        </div>
        <div className="w-full gap-x-3 bg-white px-5 py-3 flex items-center border-gray-200 border-b">
          <img
            src="https://mighty.tools/mockmind-api/content/cartoon/11.jpg"
            className="bg-gray-200 rounded-full w-10 h-10"
            alt="Avatar"
          />
          <h3 className="text-[#1D476F] text-base font-medium">
            TeenArchivist
          </h3>
        </div>
        <div className="bg-white w-full flex flex-col rounded-b-lg">
          <textarea
            disabled={finished}
            key={selectedPage}
            value={textsAreasValues[selectedPage - 1]}
            onChange={(e) => {
              const values = [...textsAreasValues];
              values[selectedPage - 1] = e.target.value;
              setTextAreasValue(values);
            }}
            placeholder="Digite sua resposta..."
            className="px-5 py-4 rounded-b-lg disabled:text-black/50 outline-none min-h-[180px]"
          ></textarea>
        </div>
      </section>
      <button
        onClick={() => {
          if (selectedPage === images.length) setFinished(true);
        }}
        disabled={selectedPage < images.length || finished}
        className="w-full text-white font-medium py-3 px-5 bg-[#3298F5] disabled:bg-[#346da1] disabled:text-white/50 hover:bg-[#3d8fdb] transition-colors rounded-xl shadow-md"
      >
        Terminar Desafio
      </button>
    </div>
  );
}
